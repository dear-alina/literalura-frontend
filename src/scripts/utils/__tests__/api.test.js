import { ApiClient, API_BASE_URL } from '../api.js';

// Mock de la función global fetch
global.fetch = jest.fn();

describe('API Utils: ApiClient', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test('getAutores debe llamar a /autores con el método GET', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ content: [] }) });
        await ApiClient.getAutores();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/autores`);
    });

    test('updateLibro debe realizar un PUT con headers y body correctos', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, titulo: 'Actualizado' }) });
        const data = { titulo: 'Actualizado' };
        
        await ApiClient.updateLibro(1, data);
        
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/libros/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    });

    test('patchNotaLibro debe realizar un PATCH con la nota', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 2 }) });
        const data = { nota: 'Excelente libro' };
        
        await ApiClient.patchNotaLibro(2, data);
        
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/libros/2/nota`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    });

    test('buscarYRegistrarLibro debe consultar Gutendex y enviar el libro mapeado al backend', async () => {
        // 1ª llamada: Gutendex (la resuelve el navegador). 2ª llamada: POST al backend.
        const libroGutendex = {
            id: 1342,
            title: '1984',
            authors: [{ name: 'George Orwell', birth_year: 1903, death_year: 1950 }],
            languages: ['en'],
            download_count: 5000
        };
        const backendResponse = { ok: true, status: 201 };
        fetch
            .mockResolvedValueOnce({ ok: true, json: async () => ({ results: [libroGutendex] }) })
            .mockResolvedValueOnce(backendResponse);

        const response = await ApiClient.buscarYRegistrarLibro('1984');

        // Primera llamada: Gutendex con el título codificado
        expect(fetch).toHaveBeenNthCalledWith(1, 'https://gutendex.com/books?search=1984');
        // Segunda llamada: backend con el payload traducido a RegistrarLibroDTO
        expect(fetch).toHaveBeenNthCalledWith(2, `${API_BASE_URL}/libros/buscar-y-registrar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gutendexId: 1342,
                titulo: '1984',
                autores: [{ nombre: 'George Orwell', anoNacimiento: 1903, anoFallecimiento: 1950 }],
                idiomas: ['en'],
                descargas: 5000
            })
        });
        expect(response).toBe(backendResponse);
    });

    test('buscarYRegistrarLibro debe devolver 404 si Gutendex no tiene resultados', async () => {
        fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ results: [] }) });

        const response = await ApiClient.buscarYRegistrarLibro('titulo inexistente');

        expect(response.status).toBe(404);
        expect(fetch).toHaveBeenCalledTimes(1); // no llega a llamar al backend
    });

    test('debe lanzar un error si la respuesta de fetch no es ok', async () => {
        fetch.mockResolvedValueOnce({ ok: false });
        
        await expect(ApiClient.getLibros()).rejects.toThrow('Error fetching libros');
    });
});
