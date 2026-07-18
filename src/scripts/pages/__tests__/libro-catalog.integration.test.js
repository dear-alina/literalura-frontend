import fs from 'fs';
import path from 'path';


const htmlPath = path.resolve(__dirname, '../../../views/libro-catalog.html');
const html = fs.readFileSync(htmlPath, 'utf8');

jest.mock('../../utils/api.js', () => ({
    ApiClient: {
        getLibros: jest.fn(),
        getLibrosPorIdioma: jest.fn()
    }
}));

describe('Libro Catalog Integration', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
        jest.clearAllMocks();
        jest.resetModules();
    });

    test('debería renderizar la lista inicial de libros', async () => {
        const mockLibros = [
            { id: 1, titulo: '1984', autor: { nombre: 'George Orwell' }, idiomas: ['en'] },
            { id: 2, titulo: 'El Quijote', autor: { nombre: 'Miguel de Cervantes' }, idiomas: ['es'] }
        ];
        // En api.js el método ya devuelve el array de contenido
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.getLibros.mockResolvedValue({ content: mockLibros });

        require('../libro-catalog.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));

        await new Promise(r => setTimeout(r, 10));

        const grid = document.getElementById('books-grid');
        // Debería haber 2 tarjetas de libros
        expect(grid.children.length).toBe(2);
        
        const titles = Array.from(grid.querySelectorAll('.title-text')).map(el => el.textContent);
        expect(titles).toContain('1984');
        expect(titles).toContain('El Quijote');
    });

    test('debería filtrar por idioma al hacer click en los botones de lenguaje', async () => {
        const { ApiClient } = require('../../utils/api.js');
        ApiClient.getLibros.mockResolvedValue({ content: [] }); // Carga inicial vacía
        const mockLibrosEs = [
            { id: 2, titulo: 'El Quijote', autor: { nombre: 'Miguel de Cervantes' }, idiomas: ['es'] }
        ];
        ApiClient.getLibrosPorIdioma.mockResolvedValue({ content: mockLibrosEs });

        require('../libro-catalog.js');
        document.dispatchEvent(new Event('DOMContentLoaded'));
        await new Promise(r => setTimeout(r, 10));

        // Encontrar botón de español
        const btnEs = document.querySelector('.lang-btn[data-lang="es"]');
        btnEs.click();

        await new Promise(r => setTimeout(r, 10));

        expect(ApiClient.getLibrosPorIdioma).toHaveBeenCalledWith('es');
        
        const grid = document.getElementById('books-grid');
        const titles = Array.from(grid.querySelectorAll('.title-text')).map(el => el.textContent);
        expect(titles).toContain('El Quijote');
        expect(titles).not.toContain('1984');
    });
});
