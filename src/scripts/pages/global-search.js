import { ApiClient } from '../utils/api.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const messageContainer = document.getElementById('message-container');

document.addEventListener('DOMContentLoaded', () => {
    searchBtn.addEventListener('click', realizarBusqueda);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    });
});

async function realizarBusqueda() {
    const textoInput = searchInput.value.trim();

    if (!textoInput) {
        mostrarMensaje('¡Ups! Por favor ingresa el título de un libro para buscarlo.', 'error');
        return;
    }

    try {
        messageContainer.innerHTML = '';
        messageContainer.appendChild(document.getElementById('loading-msg-template').content.cloneNode(true));

        const response = await ApiClient.buscarYRegistrarLibro(textoInput);

        if (response.status === 201) {
            try {
                const result = await response.json();
                mostrarMensaje(`✨ ¡Éxito! El libro "${result.titulo || textoInput}" ha sido registrado en tu biblioteca mágica.`, 'success');
            } catch (e) {
                mostrarMensaje(`✨ ¡Éxito! El libro ha sido registrado en tu biblioteca mágica.`, 'success');
            }
            searchInput.value = '';
            
            setTimeout(() => {
                window.location.href = 'libro-catalog.html';
            }, 2000);

        } else if (response.status === 400) {
            mostrarMensaje('❌ Petición inválida. Título no proporcionado o incorrecto.', 'error');
        } else if (!response.ok) {
            let errorMsg = '';
            try {
                const errorData = await response.json();
                errorMsg = (errorData.mensaje || errorData.message || errorData.error || JSON.stringify(errorData)).toLowerCase();
            } catch (e) {
                errorMsg = 'error desconocido';
            }

            if (errorMsg.includes('ya existe') || errorMsg.includes('duplicado') || errorMsg.includes('conflict') || response.status === 409) {
                mostrarMensaje('⚠️ El libro ya existe en tu catálogo local.', 'error');
            } else {
                mostrarMensaje('🔍 No se encontraron coincidencias para este título en la biblioteca externa.', 'error');
            }
        }
    } catch (error) {
        console.error(error);
        mostrarMensaje('❌ No se pudo establecer conexión con el servidor backend', 'error');
    }
}

function mostrarMensaje(texto, tipo) {
    messageContainer.innerHTML = '';
    
    let templateId = '';
    let containerClass = '';
    
    if (tipo === 'success') {
        templateId = 'success-msg-template';
        containerClass = 'mt-4 p-4 bg-[#e8efe3] border-2 border-accent text-[#3b4733] font-bold text-sm animate-pulse organic-border shadow-paper';
    } else if (tipo === 'error') {
        templateId = 'error-msg-template';
        containerClass = 'mt-4 p-4 bg-[#f8e5e3] border-2 border-primary text-primary font-bold text-sm organic-border shadow-paper';
    }

    if (templateId) {
        const msgFragment = document.getElementById(templateId).content.cloneNode(true);
        const pElement = msgFragment.querySelector('#msg-text');
        if (pElement) {
            pElement.textContent = texto;
            
            const wrapper = document.createElement('div');
            wrapper.className = containerClass;
            wrapper.appendChild(msgFragment);
            
            messageContainer.appendChild(wrapper);
        }
    }
}
