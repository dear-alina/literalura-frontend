export const API_BASE_URL = 'https://literalura-mvmt.onrender.com/api';
export const GUTENDEX_BASE_URL = 'https://gutendex.com/books';

/**
 * Consulta Gutendex directamente desde el navegador.
 *
 * El backend no puede consultar Gutendex desde Render: Cloudflare responde 403
 * ("Just a moment...") a las IP de datacenter. El navegador, con IP residencial,
 * sí supera ese control y CORS lo permite (access-control-allow-origin: *).
 * Devuelve el primer resultado o null si no hay coincidencias.
 */
export async function buscarEnGutendex(titulo) {
    const url = `${GUTENDEX_BASE_URL}?search=${encodeURIComponent(titulo)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error consultando Gutendex');
    const data = await response.json();
    return (data.results && data.results.length > 0) ? data.results[0] : null;
}

/**
 * Traduce un libro del formato Gutendex al contrato que espera el backend
 * (POST /api/libros/buscar-y-registrar → RegistrarLibroDTO).
 */
export function mapearLibroGutendex(libro) {
    return {
        gutendexId: libro.id,
        titulo: libro.title,
        autores: (libro.authors || []).map(a => ({
            nombre: a.name,
            anoNacimiento: a.birth_year,
            anoFallecimiento: a.death_year
        })),
        idiomas: libro.languages || [],
        descargas: libro.download_count
    };
}

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
    // El navegador busca en Gutendex y envía el libro ya resuelto al backend, que
    // solo deduplica y persiste. Devuelve siempre un objeto con {ok, status, json()}
    // para que la vista maneje los códigos de estado de forma uniforme (201, 404, 502).
    buscarYRegistrarLibro: async (titulo) => {
        let libroGutendex;
        try {
            libroGutendex = await buscarEnGutendex(titulo);
        } catch (e) {
            return { ok: false, status: 502, json: async () => ({ mensaje: 'No se pudo consultar Gutendex' }) };
        }

        if (!libroGutendex) {
            return { ok: false, status: 404, json: async () => ({ mensaje: 'Libro no encontrado en Gutendex' }) };
        }

        const payload = mapearLibroGutendex(libroGutendex);
        const response = await fetch(`${API_BASE_URL}/libros/buscar-y-registrar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return response; // Response real del backend (201, 409, etc.)
    }
};
