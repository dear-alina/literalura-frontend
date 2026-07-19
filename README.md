# Stitch Literalura

Frontend de la plataforma **Literalura** (Vanilla JavaScript + Tailwind CSS), desarrollado para el Laboratorio de Desarrollo de AppWeb de la clase de Pruebas y Aseguramiento de Calidad de Software. Consume el backend REST [`literalura`](https://github.com/dear-alina/literalura) y la API pública Gutendex.

## Integración con Gutendex (desde el navegador)

La búsqueda de libros en **Gutendex se realiza desde el navegador**, no desde el backend. Cloudflare bloquea con HTTP 403 ("managed challenge") las peticiones del backend desde la IP de datacenter de Render; el navegador, con IP residencial y CORS permitido por Gutendex (`access-control-allow-origin: *`), sí las resuelve. Por eso `src/scripts/utils/api.js` expone `buscarEnGutendex()` y `mapearLibroGutendex()`: el cliente obtiene el libro y envía sus datos ya resueltos a `POST /api/libros/buscar-y-registrar`, que solo deduplica por `gutendexId` y persiste.

## Pruebas

- **Jest** (`npm test`): 28+ casos unitarios y de integración con JSDOM (utilidades y páginas).
- **Cypress** (`npm run cy:run`): 15 casos end-to-end sobre las 4 vistas, con la red aislada mediante interceptores (incluida la llamada a Gutendex).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Inicia el servidor local en [http://localhost:3000](http://localhost:3000)

### `npm test`
Ejecuta las pruebas unitarias usando Jest.

### `npm run cy:open`
Abre la interfaz de Cypress para ejecutar pruebas E2E (End-to-End).

### `npm run cy:run`
Ejecuta las pruebas de Cypress en modo silencioso (headless).

## Estructura del Proyecto
- `src/` - Código fuente de la aplicación web.
- `cypress/` - Pruebas E2E configuradas con Cypress.
- `docs/` - Documentación del proyecto (logs de refactorización, integración de APIs).
- `public/` - Archivos públicos.

## Empezar
1. Clona el repositorio.
2. Instala las dependencias usando `npm install`.
3. Inicia la aplicación con `npm start`.
