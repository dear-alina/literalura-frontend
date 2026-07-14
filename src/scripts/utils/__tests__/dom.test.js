import { createElement } from '../dom.js';

describe('DOM Utils: createElement', () => {
    test('debería crear un elemento con la etiqueta correcta', () => {
        const el = createElement('div');
        expect(el.tagName).toBe('DIV');
    });

    test('debería añadir clases si se proporcionan', () => {
        const el = createElement('span', 'text-primary font-bold');
        expect(el.className).toBe('text-primary font-bold');
        expect(el.classList.contains('text-primary')).toBe(true);
    });

    test('debería inyectar innerHTML si se proporciona', () => {
        const htmlContent = '<strong>Hola Mundo</strong>';
        const el = createElement('div', 'container', htmlContent);
        
        expect(el.innerHTML).toBe(htmlContent);
        expect(el.querySelector('strong')).not.toBeNull();
        expect(el.textContent).toBe('Hola Mundo');
    });

    test('debería funcionar solo proporcionando la etiqueta', () => {
        const el = createElement('p');
        expect(el.tagName).toBe('P');
        expect(el.className).toBe('');
        expect(el.innerHTML).toBe('');
    });
});
