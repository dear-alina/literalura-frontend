const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Cliente API centralizado para interactuar con el backend
 */
export const ApiClient = {
    // Autores
    getAutores: async () => {
        const response = await fetch(`${API_BASE_URL}/autores`);
        if (!response.ok) throw new Error('Error fetching autores');
        return response.json();
    },
    getAutoresVivosPorAno: async (ano) => {
        const response = await fetch(`${API_BASE_URL}/autores/vivos?ano=${ano}`);
        if (!response.ok) throw new Error('Error fetching autores vivos');
        return response.json();
    },

    // Libros
    getLibros: async () => {
        const response = await fetch(`${API_BASE_URL}/libros`);
        if (!response.ok) throw new Error('Error fetching libros');
        return response.json();
    },
    getLibrosPorIdioma: async (idioma) => {
        const response = await fetch(`${API_BASE_URL}/libros/idioma?idioma=${idioma}`);
        if (!response.ok) throw new Error('Error fetching libros por idioma');
        return response.json();
    },
    buscarLibrosFlexible: async (query) => {
        const url = query ? `${API_BASE_URL}/libros/busqueda-flexible?q=${encodeURIComponent(query)}` : `${API_BASE_URL}/libros/busqueda-flexible`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en búsqueda flexible');
        return response.json();
    },
    
    // Métodos que no son de listas (se mantienen intactos)
    getLibro: async (id) => {
        const response = await fetch(`${API_BASE_URL}/libros/${id}`);
        if (!response.ok) throw new Error('Error fetching libro');
        return response.json();
    },
    deleteLibro: async (id) => {
        const response = await fetch(`${API_BASE_URL}/libros/${id}`, { method: 'DELETE' });
        return response; // Can be 204 No Content
    },
    updateLibro: async (id, data) => {
        const response = await fetch(`${API_BASE_URL}/libros/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Error updating libro');
        return response.json();
    },
    patchNotaLibro: async (id, data) => {
        const response = await fetch(`${API_BASE_URL}/libros/${id}/nota`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Error patching nota');
        return response.json();
    },
    buscarYRegistrarLibro: async (titulo) => {
        const response = await fetch(`${API_BASE_URL}/libros/buscar-y-registrar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo })
        });
        return response; // Return raw response to handle specific status codes (400, 409, 201)
    }
};
