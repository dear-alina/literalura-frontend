import { ApiClient } from '../utils/api.js';
import { setItem } from '../utils/storage.js';

const booksGrid = document.getElementById('books-grid');
let currentLanguage = '';

document.addEventListener('DOMContentLoaded', () => {
    fetchLibros();
    setupLanguageFilter();
    setupFlexibleSearch();

    const btnNuevoHechizo = document.getElementById('btn-nuevo-hechizo');
    if (btnNuevoHechizo) {
        btnNuevoHechizo.addEventListener('click', () => {
            window.location.href = 'global-search.html';
        });
    }

    const btnMostrarTodos = document.getElementById('btn-mostrar-todos');
    if (btnMostrarTodos) {
        btnMostrarTodos.addEventListener('click', async () => {
            // Feedback visual: activar animación de carga en el ícono
            btnMostrarTodos.classList.add('loading');
            btnMostrarTodos.disabled = true;

            // Limpiar el texto del input de búsqueda
            const searchInput = document.querySelector('input[placeholder="Título o autor..."]');
            if (searchInput) searchInput.value = '';

            // Desactivar el estado visual de los botones de idioma
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-md');
                b.classList.add('bg-surface-container-lowest', 'text-on-surface');
            });
            currentLanguage = '';

            try {
                booksGrid.innerHTML = '';
                const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
                emptyState.querySelector('#empty-state-message').textContent = 'Actualizando colección...';
                booksGrid.appendChild(emptyState);
                
                const data = await ApiClient.getLibros();
                const listaLibros = data.content ? data.content : (data.libros ? data.libros : data);
                renderLibros(listaLibros);
            } catch (error) {
                console.error(error);
                booksGrid.innerHTML = '';
                const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
                const msg = emptyState.querySelector('#empty-state-message');
                msg.textContent = 'No se pudo actualizar la colección.';
                msg.className = 'font-body-lg text-error text-xl font-medium';
                booksGrid.appendChild(emptyState);
            } finally {
                // Quitar estado de carga siempre, haya o no error
                btnMostrarTodos.classList.remove('loading');
                btnMostrarTodos.disabled = false;
            }
        });
    }
});

function setupFlexibleSearch() {
    const searchInput = document.querySelector('input[placeholder="Título o autor..."]');
    if (searchInput) {
        let timeoutId;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const query = e.target.value.trim();
                realizarBusquedaFlexible(query);
            }, 300); // 300ms debounce
        });
    }
}

async function realizarBusquedaFlexible(query) {
    try {
        booksGrid.innerHTML = '';
        const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
        emptyState.querySelector('#empty-state-message').textContent = 'Buscando hechizos...';
        booksGrid.appendChild(emptyState);
        
        const data = await ApiClient.buscarLibrosFlexible(query);
        const listaLibros = data.content ? data.content : (data.libros ? data.libros : data);
        
        // Remove active state from language filters since we are performing a text search
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.remove('bg-primary', 'text-white', 'shadow-md');
            b.classList.add('bg-surface-container-lowest', 'text-on-surface');
        });
        currentLanguage = ''; // Reset language state

        renderLibros(listaLibros);
    } catch (error) {
        console.error(error);
        booksGrid.innerHTML = '';
        const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
        const msg = emptyState.querySelector('#empty-state-message');
        msg.textContent = 'No se pudo realizar la búsqueda.';
        msg.className = 'font-body-lg text-error text-xl font-medium';
        booksGrid.appendChild(emptyState);
    }
}

function setupLanguageFilter() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-md');
                b.classList.add('bg-surface-container-lowest', 'text-on-surface');
            });
            btn.classList.add('bg-primary', 'text-white', 'shadow-md');
            btn.classList.remove('bg-surface-container-lowest', 'text-on-surface');

            const idioma = btn.dataset.lang;
            currentLanguage = idioma;
            fetchLibros(idioma);
        });
    });
}

async function fetchLibros(idioma = currentLanguage) {
    try {
        booksGrid.innerHTML = '';
        const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
        emptyState.querySelector('#empty-state-message').textContent = 'Cargando biblioteca mágica...';
        booksGrid.appendChild(emptyState);
        
        const data = idioma ? await ApiClient.getLibrosPorIdioma(idioma) : await ApiClient.getLibros();
        const listaLibros = data.content ? data.content : (data.libros ? data.libros : data);
        renderLibros(listaLibros);
    } catch (error) {
        console.error(error);
        booksGrid.innerHTML = '';
        const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
        const msg = emptyState.querySelector('#empty-state-message');
        msg.textContent = 'No se pudo conectar con el servidor de la biblioteca.';
        msg.className = 'font-body-lg text-error text-xl font-medium';
        booksGrid.appendChild(emptyState);
    }
}

function renderLibros(libros) {
    booksGrid.innerHTML = '';
    if (!libros || libros.length === 0) {
        const emptyState = document.getElementById('empty-state-template').content.cloneNode(true);
        booksGrid.appendChild(emptyState);
        return;
    }

    const template = document.getElementById('book-card-template');

    libros.forEach((libro, index) => {
        const imgUrl = libro.gutendexId ? `https://www.gutenberg.org/cache/epub/${libro.gutendexId}/pg${libro.gutendexId}.cover.medium.jpg` : '../assets/images/portada.png';
        const idiomaNombre = getIdiomaLabel(libro.idioma || currentLanguage);
        const nombreAutor = libro.autor && typeof libro.autor === 'object' ? libro.autor.nombre : (libro.autor || 'Autor desconocido');

        const cardFragment = template.content.cloneNode(true);
        const cardElement = cardFragment.firstElementChild;
        
        cardElement.querySelector('.cover-img').src = imgUrl;
        cardElement.querySelector('.cover-img').alt = libro.titulo || 'Libro';
        cardElement.querySelector('.title-text').textContent = libro.titulo || 'Sin título';
        cardElement.querySelector('.author-text').textContent = nombreAutor;
        cardElement.querySelector('.language-badge').textContent = idiomaNombre;
        
        cardElement.querySelector('.btn-edit').dataset.id = libro.id;
        cardElement.querySelector('.btn-delete').dataset.id = libro.id;

        cardElement.querySelector('.btn-delete').addEventListener('click', () => {
            eliminarLibro(libro.id);
        });

        cardElement.querySelector('.btn-edit').addEventListener('click', () => {
            editarLibro(libro.id);
        });

        booksGrid.appendChild(cardElement);
    });
}

async function eliminarLibro(id) {
    console.log('[eliminarLibro] ID recibido:', id);
    if (!confirm('¿Estás seguro de que deseas eliminar este libro del catálogo?')) return;
    try {
        const response = await ApiClient.deleteLibro(id);
        if (response.ok || response.status === 204) {
            fetchLibros(currentLanguage);
        } else {
            throw new Error('Error al eliminar libro');
        }
    } catch (error) {
        console.error(error);
        alert('No se pudo eliminar el libro. Por favor intenta nuevamente.');
    }
}

function editarLibro(id) {
    // BUG #1 FIX: Validar que el id exista y no sea un valor falsy
    // antes de escribir en sessionStorage para evitar GET /api/libros/undefined
    if (!id || id === 'undefined' || id === 'null') {
        console.error('[editarLibro] ID de libro inválido recibido:', id);
        alert('No se pudo obtener el ID del libro. Por favor recarga la página.');
        return;
    }
    setItem('bookIdToEdit', String(id));
    window.location.href = 'form-modal.html';
}

function getIdiomaLabel(idioma) {
    const idiomas = {
        'es': 'Español',
        'en': 'Inglés',
        'pt': 'Portugués',
        'ru': 'Ruso'
    };
    return idiomas[idioma] || idioma;
}
