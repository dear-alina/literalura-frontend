# Log de Refactorización UI/UX - Búsqueda Global ("Academic Cat")
**Fecha:** 2026-07-09

## Cambios Realizados (Diseño)

Se implementó el rediseño "Academic Cat" Theme propuesto para la funcionalidad de Búsqueda Global, aplicando la nueva paleta y sistema tipográfico sin afectar la integración backend existente.

1. **Tokens y Configuración (`tailwind.config.js` y `variables.css`)**
   - Se reemplazaron y configuraron los nuevos tokens de marca: `primary` (#B5493C), `background` (#F7F1E8), `secondary` (#2B2320) y `accent` (#7A8B6F).
   - Se mantuvieron alias para las clases antiguas (`background-light`, `background-dark`) para prevenir regresiones en otras vistas que aún no se hayan migrado a este tema.
   - Se registraron las nuevas fuentes: `Vollkorn` (display) y `Quicksand` (heading).
   - Se configuraron los nuevos perfiles de sombra (`shadow-paper`, `shadow-paper-hover`).

2. **Componentes y CSS Personalizado (`_global-search.css`)**
   - Se incorporó la clase `.organic-border` para aplicar el efecto de bordes irregulares (estilo pergamino).

3. **Estructura HTML (`src/views/global-search.html`)**
   - Se actualizó el layout completo incorporando el `<header>` con navegación, la imagen de la mascota y el nuevo input con diseño orgánico.
   - **Preservación Funcional:** Se conservaron cuidadosamente los atributos `id="search-input"` y `id="search-btn"` (`type="button"`) en los elementos de formulario correspondientes.
   - Se re-insertó dinámicamente el `div id="message-container"` justo debajo del buscador para renderizar las alertas de la API.

4. **Alertas Dinámicas en JS (`src/scripts/pages/global-search.js`)**
   - El script no sufrió alteraciones en su lógica de peticiones `POST /libros/buscar-y-registrar`.
   - Se rediseñó la UI dinámica en `mostrarMensaje(texto, tipo)`:
     - **Success:** Usa el fondo `#e8efe3` (tono pastel de accent) con borde y texto color `accent` (#7A8B6F) + `.organic-border` y `.shadow-paper`.
     - **Error:** Usa el fondo `#f8e5e3` (tono pastel de primary) con borde y texto color `primary` (#B5493C) + `.organic-border` y `.shadow-paper`.

## Verificación de Funcionalidad
El script sigue capturando el evento Click y el "Enter" Keypress del buscador e interactuando correctamente con el API Client, renderizando visualmente los nuevos componentes de éxito/error al finalizar las operaciones.
