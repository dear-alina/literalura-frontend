import fs from 'fs';
import path from 'path';


// Cargar el HTML real para la prueba
const htmlPath = path.resolve(__dirname, '../../../views/global-search.html');
const html = fs.readFileSync(htmlPath, 'utf8');

jest.mock('../../utils/api.js', () => ({
    ApiClient: {
        buscarYRegistrarLibro: jest.fn()
    }
}));

describe('Global Search Integration', () => {
    beforeEach(() => {
        // Preparar el JSDOM
        document.documentElement.innerHTML = html;
        jest.clearAllMocks();
        
        // Simular window.location para probar la redirección
        Object.defineProperty(window, 'location', {
            writable: true,
            configurable: true,
            value: { href: '' }
        });
    });

    test('debería mostrar error si el input está vacío', async () => {
        // Importar el script dinámicamente para que lea el DOM actual
        require('../global-search.js');
        
        // Disparar DOMContentLoaded
        document.dispatchEvent(new Event('DOMContentLoaded'));

        const btn = document.getElementById('search-btn');
        btn.click();

        const messageContainer = document.getElementById('message-container');
        expect(messageContainer.textContent).toContain('Por favor ingresa el título');
        const { ApiClient } = require('../../utils/api.js');
        expect(ApiClient.buscarYRegistrarLibro).not.toHaveBeenCalled();
    });

    test('debería mostrar éxito y redirigir si el libro se encuentra', async () => {
        // Configurar el mock
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.buscarYRegistrarLibro.mockResolvedValue({
            status: 201,
            json: async () => ({ titulo: 'Cien Años de Soledad' })
        });

        require('../global-search.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        const input = document.getElementById('search-input');
        const btn = document.getElementById('search-btn');

        input.value = 'Cien Años';
        btn.click();

        // Esperar a que las promesas se resuelvan (flush de promesas)
        await new Promise(r => setTimeout(r, 10));

        const messageContainer = document.getElementById('message-container');
        expect(messageContainer.textContent).toContain('Cien Años de Soledad');
        expect(messageContainer.textContent).toContain('registrado');
        expect(ApiClient.buscarYRegistrarLibro).toHaveBeenCalledWith('Cien Años');
    });

    test('debería manejar errores de libro no encontrado (404)', async () => {
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.buscarYRegistrarLibro.mockResolvedValue({
            ok: false,
            status: 404,
            json: async () => ({ error: 'Not found' })
        });

        require('../global-search.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        document.getElementById('search-input').value = 'Libro Inexistente XYZ';
        document.getElementById('search-btn').click();

        await new Promise(r => setTimeout(r, 10));

        const messageContainer = document.getElementById('message-container');
        expect(messageContainer.textContent).toContain('No se encontraron coincidencias');
    });
});
