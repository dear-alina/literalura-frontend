# Log de Refactorización UI/UX - Directorio de Autores ("Card-Scalloped" Theme)
**Fecha:** 2026-07-09

## Cambios Estructurales y de Diseño

Se aplicó exitosamente el nuevo sistema estético basado en "tarjetas onduladas" (Scalloped Cards) para el directorio de autores, combinando la precisión del diseño propuesto con la naturaleza dinámica de los datos del backend.

1. **Tokens y Configuración (`tailwind.config.js`)**
   - Se integraron los nuevos colores específicos para esta vista como `cream`, `charcoal-text`, `terracotta`, `navy`, `sage`, y `tan-neutral`, fusionándolos limpiamente con los tokens globales de la aplicación.
   - Las definiciones tipográficas de la maqueta (`headline-md`, `body-md`, `label-sm`, etc.) fueron añadidas y conectadas a las familias `Vollkorn` y `Quicksand`.

2. **Estilos Específicos Modulares (`_autor-directory.css`)**
   - Se definió la clase maestra `.card-scalloped` junto con su pseudoelemento `::before`, el cual genera el característico efecto de perforaciones tipo boleto usando un degradado radial transparente hacia el color `cream` del fondo.

3. **Arquitectura HTML (`src/views/autor-directory.html`)**
   - Se rediseñó el contenedor de cabecera (`<header>`) y el pie de página para adaptarse a los estilos text-on-surface y terracota.
   - **Adaptación del Filtro por Año:** La barra visual decorativa del diseño mock se transformó en un **control funcional**. Se preservaron los campos `<input id="year-input">` y los botones `btn-filter` / `btn-clear` incrustándolos en una barra de interacción que respeta los colores `terracotta` y `tan-neutral`, manteniendo activa la funcionalidad `GET /api/autores/vivos?ano=X`.

4. **Renderizado Dinámico (`src/scripts/pages/autor-directory.js`)**
   - La función `renderAutores` ahora inyecta la nueva estructura HTML dentro del DOM.
   - Cada tarjeta se autoconstruye con el `background-image` dinámico (semilla basada en index), el nombre y las fechas (formateadas de manera limpia a "Desconocido" o "Presente" según los campos nulos del backend).
   - Se reemplazó el listado truncado de obras por un **badge estético (etiqueta verde sage)** que indica el número total de libros publicados: `${autor.libros.length} libros`.

## Verificación de Integración
El flujo de peticiones (`fetchAutores`) y los listeners del panel de filtrado continúan operativos al 100%. Las nuevas clases CSS cargan de forma nativa en el explorador, dotando a la sección de Autores de un look-and-feel de "cuento de hadas vintage".
