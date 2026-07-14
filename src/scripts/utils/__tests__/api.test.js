import { ApiClient } from '../api.js';

// Mock de la función global fetch
global.fetch = jest.fn();

describe('API Utils: ApiClient', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test('getAutores debe llamar a /autores con el método GET', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ content: [] }) });
        await ApiClient.getAutores();
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/autores');
    });

    test('updateLibro debe realizar un PUT con headers y body correctos', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, titulo: 'Actualizado' }) });
        const data = { titulo: 'Actualizado' };
        
        await ApiClient.updateLibro(1, data);
        
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/libros/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    });

    test('patchNotaLibro debe realizar un PATCH con la nota', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 2 }) });
        const data = { nota: 'Excelente libro' };
        
        await ApiClient.patchNotaLibro(2, data);
        
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/libros/2/nota', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    });

    test('buscarYRegistrarLibro debe enviar el título en un POST', async () => {
        const mockResponse = { ok: true, status: 201 };
        fetch.mockResolvedValueOnce(mockResponse);
        
        const response = await ApiClient.buscarYRegistrarLibro('1984');
        
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/libros/buscar-y-registrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: '1984' })
        });
        expect(response).toBe(mockResponse);
    });

    test('debe lanzar un error si la respuesta de fetch no es ok', async () => {
        fetch.mockResolvedValueOnce({ ok: false });
        
        await expect(ApiClient.getLibros()).rejects.toThrow('Error fetching libros');
    });
});
