import { setItem, getItem, removeItem } from '../storage.js';

describe('Storage Utils', () => {
    beforeEach(() => {
        // Limpiar el mock de sessionStorage antes de cada prueba
        sessionStorage.clear();
        jest.clearAllMocks();
    });

    test('setItem debe guardar el valor en sessionStorage', () => {
        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
        setItem('current_book_id', '42');
        
        expect(setItemSpy).toHaveBeenCalledWith('current_book_id', '42');
        expect(sessionStorage.getItem('current_book_id')).toBe('42');
    });

    test('getItem debe recuperar el valor de sessionStorage', () => {
        sessionStorage.setItem('test_key', 'test_value');
        const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
        
        const result = getItem('test_key');
        
        expect(getItemSpy).toHaveBeenCalledWith('test_key');
        expect(result).toBe('test_value');
    });

    test('removeItem debe eliminar el valor de sessionStorage', () => {
        sessionStorage.setItem('temp_id', '123');
        const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
        
        removeItem('temp_id');
        
        expect(removeItemSpy).toHaveBeenCalledWith('temp_id');
        expect(sessionStorage.getItem('temp_id')).toBeNull();
    });
});
