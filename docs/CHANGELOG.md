# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
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
