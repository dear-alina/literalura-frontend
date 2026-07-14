import { isEmpty } from '../validation.js';

describe('Validation Utils: isEmpty', () => {
    test('debería retornar true para undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('debería retornar true para null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('debería retornar true para strings vacíos', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('debería retornar true para strings con solo espacios', () => {
        expect(isEmpty('   ')).toBe(true);
    });

    test('debería retornar false para strings válidos', () => {
        expect(isEmpty('hola')).toBe(false);
        expect(isEmpty('   hola   ')).toBe(false);
    });

    test('debería retornar false para números (incluso 0)', () => {
        expect(isEmpty(0)).toBe(false);
        expect(isEmpty(123)).toBe(false);
    });

    test('debería retornar false para booleanos', () => {
        expect(isEmpty(false)).toBe(false);
        expect(isEmpty(true)).toBe(false);
    });
});
