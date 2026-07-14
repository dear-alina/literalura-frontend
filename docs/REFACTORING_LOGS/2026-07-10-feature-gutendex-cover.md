# Log de Refactorización: Catálogo de Libros (Portadas Dinámicas Gutendex)
- **Fecha:** 2026-07-10
- **Tipo de Ajuste:** Feature Update & UI Refactor
- **Origen del Cambio:** Modificación directa en el espacio de trabajo.

## 🔍 1. Contexto y Objetivo
El backend actualizado ahora devuelve la propiedad `gutendexId` (ID nativo de Project Gutenberg) en el JSON de respuesta de cada libro. Se necesitaba aprovechar este dato para descargar y renderizar las portadas originales de los libros dinámicamente, mejorando radicalmente la inmersión de la biblioteca sin sobrecargar el servidor backend.

## 💻 2. Archivos Modificados y Alcance
- `src/scripts/pages/libro-catalog.js` -> Se actualizó la función `renderLibros` para leer el nuevo atributo `gutendexId` del JSON inyectado y construir dinámicamente la URL HTTP de Gutenberg en reemplazo del mock que existía.
- `src/views/libro-catalog.html` -> Se añadió la protección en la etiqueta de imagen de la plantilla (`#book-card-template`) para garantizar un fallback local ante recursos nulos o caídos (Error 404).

## ⚡ 3. Detalle de la Implementación Técnica
- **Generación Dinámica de URL (JS):** En `src/scripts/pages/libro-catalog.js` (aprox. Línea 156), se reemplazó el mock estático por el template literal: ``const imgUrl = libro.gutendexId ? `https://gutenberg.org/${libro.gutendexId}/pg${libro.gutendexId}.cover.medium.jpg` : '../assets/images/portada.png';``.
- **Manejo de Errores en DOM (HTML):** En `src/views/libro-catalog.html` (Línea 108), a la etiqueta `<img class="cover-img">` se le incluyó nativamente `onerror="this.onerror=null; this.src='../assets/images/portada.png';"`. Esto es fundamental ya que intercepta a nivel del navegador el evento de rotura si la imagen no existe en Gutenberg, sustituyendo la ruta inmediatamente y evitando peticiones en cascada.
- **Clases Estilizadas:** La etiqueta ya poseía `object-cover`, `w-full`, `h-full` de TailwindCSS, garantizando que tanto las imágenes reales de Project Gutenberg como el logo de fallback se recorten o adapten adecuadamente al aspect-ratio de la tarjeta sin deformarse.

## 🛡️ 4. Control de Regresión y Rompimiento (Checklist de Integridad)
- [x] **Identificadores del DOM / Métodos de API:** La clase inyectora `.cover-img` se mantuvo igual para recibir la variable de JS intacta.
- [x] **Rutas Relativas:** El fallback `../assets/images/portada.png` se calculó según la profundidad desde las vistas hacia `assets`.
- [x] **Interoperabilidad:** No hay impactos negativos si el backend devuelve el campo omitido; la validación local ternaria lo atrapa a tiempo, previniendo errores de interpolación con nulos (`undefined`).

## 🚀 5. Resultado Técnico Final y Ventajas
La aplicación ya no depende de imágenes locales estáticas o mocks genéricos, permitiendo que visualmente los usuarios reconozcan sus libros inmediatamente por sus portadas clásicas. Gracias a la inclusión del atributo `onerror`, se erradican los enlaces rotos de la vista, cubriendo la posible ausencia del archivo `.cover.medium.jpg` en los CDN externos sin requerir que nuestro backend realice una prevalidación pesada.
