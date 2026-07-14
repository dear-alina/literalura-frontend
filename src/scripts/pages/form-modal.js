import { ApiClient } from '../utils/api.js';
import { getItem, removeItem } from '../utils/storage.js';

const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const languageSelect = document.getElementById('language-select');
const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn');
const closeBtn = document.getElementById('close-modal-btn');

// BUG #3 FIX: Mapa para normalizar el campo idioma que Spring Boot puede
// devolver como enum en mayúsculas (e.g. "INGLES") a los values del <select> ("en").
const IDIOMA_ENUM_TO_CODE = {
    'INGLES': 'en',
    'ESPANOL': 'es',
    'ESPAÑOL': 'es',
    'PORTUGUES': 'pt',
    'PORTUGUÉS': 'pt',
    'RUSO': 'ru',
    // Valores ya normalizados (si el backend ya los devuelve en minúsculas)
    'en': 'en', 'es': 'es', 'pt': 'pt', 'ru': 'ru'
};

let currentBookId = null;
let currentBookData = null;

document.addEventListener('DOMContentLoaded', () => {
    currentBookId = getItem('bookIdToEdit');

    // Validación defensiva: si no hay ID en sessionStorage, volver al catálogo
    if (!currentBookId || currentBookId === 'undefined' || currentBookId === 'null') {
        console.error('[form-modal] bookIdToEdit ausente o inválido en sessionStorage:', currentBookId);
        cerrarModal();
        return;
    }

    cargarDatosLibro(currentBookId);
    saveBtn.addEventListener('click', guardarLibro);
    closeBtn.addEventListener('click', cerrarModal);

    noteInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            guardarLibro();
        }
    });
});

async function cargarDatosLibro(id) {
    try {
        currentBookData = await ApiClient.getLibro(id);

        // BUG #2 FIX: El campo autor puede ser un objeto { nombre: "..." } o un string.
        // Se extrae de forma segura con optional chaining.
        const autorNombre = (currentBookData.autor && typeof currentBookData.autor === 'object')
            ? (currentBookData.autor.nombre || '')
            : (currentBookData.autor || '');

        // BUG #3 FIX: Normalizar el idioma al code del <select> usando el mapa.
        const idiomaCode = IDIOMA_ENUM_TO_CODE[currentBookData.idioma] || currentBookData.idioma?.toLowerCase() || '';
        const idiomaLabel = {'en': 'Inglés', 'es': 'Español', 'pt': 'Portugués', 'ru': 'Ruso'}[idiomaCode] || currentBookData.idioma || 'Desconocido';

        titleInput.textContent = currentBookData.titulo || '';
        authorInput.textContent = autorNombre;
        languageSelect.textContent = idiomaLabel;
        noteInput.value = currentBookData.nota || currentBookData.comentario || '';
        
        const coverImg = document.getElementById('cover-img');
        if (coverImg) {
            coverImg.src = currentBookData.gutendexId ? `https://www.gutenberg.org/cache/epub/${currentBookData.gutendexId}/pg${currentBookData.gutendexId}.cover.medium.jpg` : '../assets/images/portada.png';
        }

    } catch (error) {
        // BUG #2 FIX EXTRA: Loguear detalle completo del error, incluyendo mensaje HTTP
        console.error('[cargarDatosLibro] Error al cargar libro con ID:', id, '| Detalle:', error.message, error);
        mostrarError('No se pudo cargar los datos del libro. Revisa la consola para más detalles.');
        setTimeout(() => cerrarModal(), 3000);
    }
}

async function guardarLibro() {
    const nota = noteInput.value.trim();

    try {
        saveBtn.disabled = true;
        saveBtn.querySelector('.btn-text-default').classList.add('hidden');
        saveBtn.querySelector('.btn-text-default').classList.remove('flex');
        saveBtn.querySelector('.btn-text-loading').classList.remove('hidden');
        saveBtn.querySelector('.btn-text-loading').classList.add('flex');

        await ApiClient.patchNotaLibro(currentBookId, { nota: nota });

        const successFragment = document.getElementById('success-msg-template').content.cloneNode(true);
        const container = document.getElementById('success-message-container');
        container.innerHTML = '';
        container.appendChild(successFragment);

        setTimeout(() => {
            cerrarModal();
        }, 1500);

    } catch (error) {
        console.error(error);
        mostrarError('No se pudo guardar la nota. Intenta nuevamente.');
        saveBtn.disabled = false;
        saveBtn.querySelector('.btn-text-default').classList.remove('hidden');
        saveBtn.querySelector('.btn-text-default').classList.add('flex');
        saveBtn.querySelector('.btn-text-loading').classList.add('hidden');
        saveBtn.querySelector('.btn-text-loading').classList.remove('flex');
    }
}

function mostrarError(mensaje) {
    const errorFragment = document.getElementById('error-toast-template').content.cloneNode(true);
    const errorDiv = errorFragment.firstElementChild;
    errorDiv.textContent = mensaje;
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

function cerrarModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('modal-container');
    
    if (backdrop && modal) {
        modal.classList.remove('animate-spring');
        modal.style.transform = 'scale(0.8)';
        backdrop.style.opacity = '0';
        modal.style.opacity = '0';
    }

    setTimeout(() => {
        removeItem('bookIdToEdit');
        window.location.href = 'libro-catalog.html';
    }, 300);
}
