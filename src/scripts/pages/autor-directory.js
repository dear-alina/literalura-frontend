import { ApiClient } from '../utils/api.js';

const authorsGrid = document.getElementById('authors-grid');
let allAuthorsCache = [];
let isSliderInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
    fetchAutores();

    const slider = document.getElementById('year-filter');

    if (slider) {
        slider.addEventListener('input', (e) => {
            filterAuthorsLocally(e.target.value);
        });
    }
});

function initSliderBounds(autores) {
    if (!autores || autores.length === 0) return;
    const minYear = autores.reduce((min, autor) => {
        if (!autor.anoNacimiento) return min;
        return Math.min(min, autor.anoNacimiento);
    }, 2026);
    
    const roundedMin = Math.floor(minYear / 10) * 10;
    const maxYear = 2026;
    
    const slider = document.getElementById('year-filter');
    const currentLabel = document.getElementById('year-current-label');
    const maxLabel = document.getElementById('year-max-label');
    
    if (slider) {
        slider.min = roundedMin;
        slider.max = maxYear;
        slider.value = maxYear; 
        if (currentLabel) currentLabel.textContent = maxYear;
        if (maxLabel) maxLabel.textContent = maxYear;
    }
}

async function fetchAutores() {
    try {
        authorsGrid.innerHTML = '';
        authorsGrid.appendChild(document.getElementById('loading-state-template').content.cloneNode(true));
        
        const data = await ApiClient.getAutores();
        allAuthorsCache = data.content ? data.content : data;
        
        if (!isSliderInitialized && allAuthorsCache && allAuthorsCache.length > 0) {
            initSliderBounds(allAuthorsCache);
            isSliderInitialized = true;
        }
        
        renderAutores(allAuthorsCache, 2026);
    } catch (error) {
        console.error(error);
        authorsGrid.innerHTML = '';
        authorsGrid.appendChild(document.getElementById('error-state-template').content.cloneNode(true));
    }
}

function filterAuthorsLocally(selectedYear) {
    selectedYear = parseInt(selectedYear);
    const currentLabel = document.getElementById('year-current-label');
    if (currentLabel) {
        currentLabel.textContent = selectedYear;
    }

    const filtered = allAuthorsCache.filter(autor => {
        const birth = autor.anoNacimiento || 0;
        return birth <= selectedYear;
    });

    renderAutores(filtered, selectedYear);
}

function renderAutores(autores, selectedYear) {
    authorsGrid.innerHTML = '';
    if (!autores || autores.length === 0) {
        authorsGrid.appendChild(document.getElementById('empty-state-template').content.cloneNode(true));
        return;
    }

    const template = document.getElementById('author-card-template');

    autores.forEach((autor, index) => {
        // Usamos (index % 10) + 1 para asegurar que se usen las 10 imágenes iterativamente, pareciendo aleatorio entre distintos autores pero garantizando que se usan todas.
        const imgUrl = `../assets/images/autores/cat${(index % 10) + 1}.png`;
        const nacimiento = autor.anoNacimiento ? autor.anoNacimiento : 'Desconocido';
        const fallecimiento = autor.anoFallecimiento ? autor.anoFallecimiento : 'Presente';
        
        const cardFragment = template.content.cloneNode(true);
        const cardElement = cardFragment.firstElementChild;
        
        let isDead = false;
        if (autor.anoFallecimiento) {
            isDead = autor.anoFallecimiento <= selectedYear;
        }

        if (isDead) {
            cardElement.classList.remove('bg-white');
            cardElement.classList.add('bg-stone-100'); 
            const img = cardElement.querySelector('.cover-img');
            if (img) {
                img.classList.add('grayscale', 'opacity-80', 'mix-blend-multiply');
            }
        }

        cardElement.querySelector('.cover-img').style.backgroundImage = `url('${imgUrl}')`;
        cardElement.querySelector('.author-name').textContent = autor.nombre || 'Autor desconocido';
        cardElement.querySelector('.author-dates').textContent = `${nacimiento} - ${fallecimiento}`;
        
        authorsGrid.appendChild(cardElement);
    });
}
