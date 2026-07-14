# Log de Refactorización UI/UX: Búsqueda Global (Global Search)
**Fecha:** 2026-07-10

## Archivos Modificados
- `src/views/global-search.html`

## Resumen Técnico del Cambio
Se aplicaron ajustes tipográficos masivos para destacar la funcionalidad de búsqueda como el núcleo de la aplicación:
1. **Header Principal:** Se rebajó el tamaño de fuente ("Literalura" a `text-2xl`, enlaces a `text-lg`) para darle el foco visual a la zona central.
2. **Título Central:** El logotipo textual "Literalura" central se incrementó drásticamente (hasta `@[480px]:text-7xl`) reforzando la identidad de la marca.
3. **Barra de Búsqueda:** Tanto el input (`#search-input`) como su botón asociado (`#search-btn`) aumentaron a un tamaño `text-xl` con fuentes en negrita (`font-bold` y `font-medium`), haciendo la interacción de escritura y click mucho más atractiva y evidente.
4. **Mensajería Dinámica:** Los templates que emiten respuestas de "Éxito", "Error" o "Cargando" incrementaron su tamaño a `text-xl` para una retroalimentación mucho más visible tras la inserción o búsqueda de un libro.

## Control de Rompimiento del DOM (Checklist)
Se validó la integridad de los selectores que enlazan la vista con JavaScript:
- [x] `#search-input`: Input principal.
- [x] `#search-btn`: Botón disparador de la acción.
- [x] `#message-container`: Contenedor de renderizado de retroalimentación.
- [x] `#loading-msg-template`, `#success-msg-template`, `#error-msg-template`: Plantillas de respuesta.
- [x] `#msg-text`: Span interno usado por JS para insertar descripciones de errores.
