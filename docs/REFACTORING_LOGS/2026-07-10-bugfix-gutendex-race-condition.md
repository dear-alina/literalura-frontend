# Log de Refactorización: Corrección de Race Condition y URL Gutenberg
- **Fecha:** 2026-07-10
- **Tipo de Ajuste:** Bugfix & UI Refactor
- **Origen del Cambio:** Modificación directa en el espacio de trabajo.

## 🔍 1. Contexto y Objetivo
Se detectaron errores 404 (con caracteres `%7B` y `%7D`) en la consola del navegador. Esto sucedía porque, en etapas de desarrollo o en plantillas HTML hardcodeadas, se inyectó la sintaxis `${variable}` de JavaScript directamente en el atributo `src` de las imágenes. El navegador intentaba cargar esa cadena literal inmediatamente (Condición de Carrera) antes de que JS la reemplazara. Además, se actualizó la ruta real de los covers de Gutenberg al path oficial con `/cache/epub/`.

## 💻 2. Archivos Modificados y Alcance
- `src/views/libro-catalog.html` -> Se definió una imagen estática local segura como `src` inicial para la plantilla de las tarjetas.
- `src/scripts/pages/libro-catalog.js` -> Se corrigió el patrón de URL de Gutenberg incorporando `/cache/epub/`.
- `src/scripts/pages/form-modal.js` -> Se aplicó la misma corrección del path de Gutenberg.

## ⚡ 3. Detalle de la Implementación Técnica
- **Resolución de Race Condition (HTML):** En `libro-catalog.html`, la etiqueta `<img class="cover-img">` ahora nace con `src="../assets/images/portada.png"`. Al inicializar el DOM, el navegador carga esta imagen base exitosamente (código 200) sin importar cuánto tarde JS en resolver el JSON.
- **Corrección de Path CDN (JS):** En los generadores de `imgUrl` y `coverImg.src` de `libro-catalog.js` y `form-modal.js`, la URL interpolada pasó de `https://gutenberg.org/${id}/...` a `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`, mapeando exactamente a la arquitectura de caché pública de Project Gutenberg.

## 🛡️ 4. Control de Regresión y Rompimiento (Checklist de Integridad)
- [x] **Identificadores del DOM / Métodos de API:** La clase inyectora `.cover-img` (catálogo) y el ID `#cover-img` (modal) se mantuvieron intactos, permitiendo que la asignación diferida de JS sobreescriba correctamente el `src` base.
- [x] **Rutas Relativas:** El `src` por defecto apunta a la misma ruta relativa segura `../assets/images/portada.png` que el manejador `onerror`.
- [x] **Interoperabilidad:** Completamente desacoplado del backend; resuelve enteramente un timing de renderizado del cliente.

## 🚀 5. Resultado Técnico Final y Ventajas
La consola del navegador queda limpia de falsos errores HTTP 404 originados por interpolaciones crudas en HTML. Las imágenes locales actúan como un _skeleton loader_ fluido mientras la red resuelve. Simultáneamente, las portadas de Gutenberg se muestran de forma exitosa ya que apuntan a la estructura correcta de su CDN (`/cache/epub/`).
