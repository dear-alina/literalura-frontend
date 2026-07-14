import fs from 'fs';
import path from 'path';


const htmlPath = path.resolve(__dirname, '../../../views/autor-directory.html');
const html = fs.readFileSync(htmlPath, 'utf8');

jest.mock('../../utils/api.js', () => ({
    ApiClient: {
        getAutores: jest.fn()
    }
}));

describe('Autor Directory Integration', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
        jest.clearAllMocks();
        jest.resetModules();
    });

    test('debería renderizar la lista de autores exitosamente', async () => {
        const mockAutores = [
            { id: 1, nombre: 'J.R.R. Tolkien', anoNacimiento: 1892, anoFallecimiento: 1973 },
            { id: 2, nombre: 'Jane Austen', anoNacimiento: 1775, anoFallecimiento: 1817 }
        ];
        
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.getAutores.mockResolvedValue(mockAutores);

        require('../autor-directory.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        // Esperamos a que la promesa del fetch se resuelva
        await new Promise(r => setTimeout(r, 10));

        const grid = document.getElementById('authors-grid');
        expect(grid.children.length).toBe(2);
        
        // Verificar que los nombres se renderizaron en las tarjetas
        const cardNames = Array.from(grid.querySelectorAll('.author-name')).map(el => el.textContent);
        expect(cardNames).toContain('J.R.R. Tolkien');
        expect(cardNames).toContain('Jane Austen');
    });

    test('debería mostrar el empty state si no hay autores', async () => {
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.getAutores.mockResolvedValue([]);

        require('../autor-directory.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        await new Promise(r => setTimeout(r, 10));

        const grid = document.getElementById('authors-grid');
        expect(grid.textContent).toContain('No se encontraron autores');
    });

    test('debería mostrar mensaje de error si la API falla', async () => {
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.getAutores.mockRejectedValue(new Error('Network Error'));

        require('../autor-directory.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        await new Promise(r => setTimeout(r, 10));

        const grid = document.getElementById('authors-grid');
        expect(grid.textContent).toContain('No se pudo establecer conexión');
    });
});
