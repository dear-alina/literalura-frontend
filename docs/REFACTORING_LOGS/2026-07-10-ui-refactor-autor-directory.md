# Log de Refactorización UI/UX: Directorio de Autores (Autor Directory)
**Fecha:** 2026-07-10

## Archivos Modificados
- `src/views/autor-directory.html`
- `src/scripts/pages/autor-directory.js`

## Resumen Técnico del Cambio
Se aplicaron ajustes visuales alineados a la jerarquía de las otras vistas y se rediseñó la experiencia de filtrado por año de vida:
1. **Header Principal:** Se redujo el tamaño de fuente ("Literalura" a `text-2xl`, enlaces a `text-lg`) para mayor armonía.
2. **Tipografía Interna:** El título principal de "Autores" se aumentó a `text-5xl font-bold`, los subtítulos y los nombres en las tarjetas también aumentaron a `text-2xl font-bold` y `text-lg font-medium` respectivamente.
3. **Rediseño del Filtro de Año de Vida (UI):** Se reemplazó el input de texto clásico por un control deslizante (`<input type="range">`), con su valor mínimo derivado dinámicamente del autor más antiguo y un máximo fijo (2026).
4. **Lógica de Filtrado Local (JS):** Se actualizó `autor-directory.js` para cargar todos los autores al inicio y almacenarlos en caché (`allAuthorsCache`). El filtrado ahora ocurre en tiempo real (evento `input`) localmente, mostrando a todos los autores que nacieron hasta la fecha seleccionada.
5. **Diferenciación Visual de Fallecidos:** Se añadió la lógica CSS (cambio de fondo a `bg-stone-100`, imagen a `grayscale opacity-80 mix-blend-multiply`) a los autores que murieron en o antes de la fecha seleccionada por el slider, para diferenciarlos de los que aún vivían en esa época.

## Control de Rompimiento del DOM (Checklist)
Se validó la integridad de los selectores que enlazan la vista con JavaScript:
- [x] `#authors-grid`: Contenedor principal de la cuadrícula de autores.
- [x] `#year-filter`: Nuevo ID del slider range (reemplaza a los inputs anteriores).
- [x] `#year-current-label`, `#year-min-label`, `#year-max-label`: Textos dinámicos del slider.
- [x] `#btn-clear`: Botón para restablecer filtros oculto por defecto.
- [x] `#author-card-template`: Plantilla base de las tarjetas de autor.
- [x] Clases de la tarjeta: `.cover-img`, `.author-name`, `.author-dates`, `.author-books-count`.
