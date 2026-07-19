# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Changed
- **2026-07-19 — Consulta a Gutendex movida al navegador.** `api.js` incorpora `buscarEnGutendex()`, `mapearLibroGutendex()` y `GUTENDEX_BASE_URL`. `ApiClient.buscarYRegistrarLibro(titulo)` ahora consulta Gutendex desde el cliente y envía el libro ya resuelto a `POST /api/libros/buscar-y-registrar`. Motivo: Cloudflare bloquea (403) al backend desde la IP de datacenter de Render; el navegador (IP residencial + CORS `*` de Gutendex) sí lo resuelve. Actualizados `api.test.js` (Jest) y `global-search.cy.js` (Cypress, que ahora intercepta también Gutendex). Sin cambios en `global-search.js`.

### Added
- Nueva estructura de directorios: `public/`, `src/assets/`, `src/styles/`, `src/scripts/`, `src/views/`.
- Cliente API centralizado (`src/scripts/utils/api.js`) para manejar todas las llamadas fetch.
- Utilidades compartidas (`dom.js`, `storage.js`, `validation.js`).
- Estilos globales y modulares extraídos de los archivos HTML.
- Configuración de Tailwind extraída a `tailwind.config.js`.

### Changed
- Las vistas HTML (anteriormente code.html) fueron movidas a `src/views/` y limpiadas de lógica en línea.
- Reestructuración de scripts hacia ES6 modules.

### Removed
- Directorios monolíticos antiguos (`autor_directory/`, `libro_catalog/`, `global_search/`, `enchanted_form_modal/`).
