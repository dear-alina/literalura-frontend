# Log de Refactorización - Funcionalidad "Mostrar Todos"
**Fecha:** 2026-07-08

## Cambios Realizados
1. **Vista HTML (`src/views/libro-catalog.html`)**
   - Se añadió un botón "Mostrar Todos" con el ID `btn-mostrar-todos` en el `aside` lateral, justo debajo de la sección de filtros por idioma, separado por una línea divisoria sutil para mantener el orden.
   - El diseño del botón respeta por completo el sistema de clases de Tailwind CSS existente: fondo blanco con bordes definidos, colores pastel de la paleta original, fuente coherente y su respectivo efecto hover (`hover:bg-gray-50`).
   - Se añadió un ícono de `refresh` extraído de Material Symbols.
   - Se preservaron íntegramente todos los IDs originales y clases de Tailwind existentes.

2. **Lógica de Script (`src/scripts/pages/libro-catalog.js`)**
   - Se integró un event listener para `#btn-mostrar-todos`.
   - La acción del botón borra proactivamente el valor de búsqueda actual del input "Título o autor...".
   - Limpia el estado visual de "botón seleccionado" en las opciones del filtro por idioma.
   - Restablece el catálogo efectuando una llamada a `fetchLibros('')`, el cual usa internamente `ApiClient.getLibros()` (endpoint base `GET /libros`) porque la variable `idioma` pasa en blanco.

## Endpoints Utilizados
- **`GET /libros`**: Empleado indirectamente a través del llamado base de catálogo general.

## Validación
- Al realizar una búsqueda o aplicar un filtro por idioma, pulsar el botón restaura la UI (inputs y botones) y recarga satisfactoriamente la grilla completa con todos los libros.
