═════════════════════════════════════════════════════════════════════════════════
📊 ESPECIFICACIÓN TÉCNICA CON REFERENCIAS VISUALES STITCH
Separación HTML/CSS de archivos en scripts/pages/- Literalura v2.0 Frontend
═════════════════════════════════════════════════════════════════════════════════

MATRIZ DE CORRESPONDENCIA: VISTAS ↔ STITCH DESIGNS ↔ ARCHIVOS
═════════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────────┐
│ VIEW: GLOBAL SEARCH (Búsqueda Global de Libros)                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ STITCH DESIGN (Full Screen):                                              │
│ 🔗 https://stitch.withgoogle.com/projects/7035796018357593275             │
│    ?node-id=4fa3cbea1c074cb8a44dc95f653f466d                              │
│                                                                             │
│ STITCH DESIGN (Search Icon):                                              │
│ 🔗 https://stitch.withgoogle.com/projects/7035796018357593275             │
│    ?node-id=c074a234a69940f895cbe19a81ed9e0d                              │
│                                                                             │
│ ARCHIVOS ASOCIADOS:                                                        │
│ ├─ src/views/global-search.html        ← HTML limpio                      │
│ ├─ src/scripts/pages/global-search.js  ← Lógica búsqueda + API            │
│ ├─ src/styles/modules/_global-search.css ← Estilos específicos            │
│ └─ src/scripts/utils/api.js            ← Endpoint POST /buscar-y-registrar│
│                                                                             │
│ ELEMENTOS CLAVE A VERIFICAR:                                              │
│ ✓ Input: id="search-input"                                               │
│ ✓ Botón: id="search-btn"                                                 │
│ ✓ Mensajes: id="message-container"                                       │
│ ✓ Ícono de búsqueda (del design)                                         │
│ ✓ Link a CSS: ../../styles/modules/_global-search.css                    │
│ ✓ Link a JS: ../../scripts/pages/global-search.js                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ VIEW: LIBRO CATALOG (Catálogo de Libros)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ STITCH DESIGN (Full Screen):                                              │
│ 🔗 https://stitch.withgoogle.com/projects/7035796018357593275             │
│    ?node-id=a4de60b87c3e45f5b9d5a65fb4edf8ad                              │
│                                                                             │
│ STITCH DESIGN (Search Component):                                         │
│ 🔗 https://stitch.withgoogle.com/projects/7035796018357593275             │
│    ?node-id=8ee39c631a6c474b9cd925dd0a590eb5                              │
│                                                                             │
│ ARCHIVOS ASOCIADOS:                                                        │
│ ├─ src/views/libro-catalog.html        ← HTML limpio                      │
│ ├─ src/scripts/pages/libro-catalog.js  ← Lógica catálogo + filtros       │
│ ├─ src/styles/modules/_libro-catalog.css ← Estilos grid de libros        │
│ └─ src/scripts/utils/api.js            ← Endpoints GET /libros, filtrado │
│                                                                             │
│ ELEMENTOS CLAVE A VERIFICAR:                                              │
│ ✓ Grid: id="books-grid"                                                  │
│ ✓ Botones idioma: class="lang-btn" data-lang="es|en|pt|ru"              │
│ ✓ Input búsqueda: class="search-input"                                   │
│ ✓ Botón nuevo: id="btn-nuevo-hechizo"                                    │
│ ✓ Botón mostrar todos: id="btn-mostrar-todos"                            │
│ ✓ Links a botones editar/eliminar (sobrevuela)                           │
│ ✓ Link a CSS: ../../styles/modules/_libro-catalog.css                    │
│ ✓ Link a JS: ../../scripts/pages/libro-catalog.js                        │
│                                                                             │
│ BÚSQUEDA FLEXIBLE (INTEGRACIÓN):                                          │
│ El componente SEARCH (node-id 8ee39c631a6c474b9cd925dd0a590eb5) se       │
│ reutiliza en LIBRO-CATALOG como input de búsqueda en tiempo real          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ VIEW: FORM MODAL (Modal de Edición de Libro)                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ STITCH DESIGN (Modal Full):                                               │
│ 🔗 https://stitch.withgoogle.com/projects/7035796018357593275             │
│    ?node-id=42cf37da5613447197a3f8ba9a047dec                              │
│                                                                             │
│ ARCHIVOS ASOCIADOS:                                                        │
│ ├─ src/views/form-modal.html           ← HTML modal (backdrop + contenedor)
│ ├─ src/scripts/pages/form-modal.js     ← Lógica carga + guardado nota    │
│ ├─ src/styles/modules/_form-modal.css  ← Estilos modal + animaciones     │
│ └─ src/scripts/utils/storage.js        ← sessionStorage para bookIdToEdit│
│                                                                             │
│ ELEMENTOS CLAVE A VERIFICAR:                                              │
│ ✓ Modal backdrop: id="modal-backdrop"                                    │
│ ✓ Modal container: id="modal-container"                                  │
│ ✓ Imagen portada: id="cover-img"                                         │
│ ✓ Input título: id="title-input"                                         │
│ ✓ Input autor: id="author-input"                                         │
│ ✓ Select idioma: id="language-select"                                    │
│ ✓ Input nota: id="note-input"                                            │
│ ✓ Botón guardar: id="save-btn"                                           │
│ ✓ Botón cerrar: id="close-modal-btn"                                     │
│ ✓ Animaciones modal (spring, fade)                                       │
│ ✓ Link a CSS: ../../styles/modules/_form-modal.css                       │
│ ✓ Link a JS: ../../scripts/pages/form-modal.js                           │
│                                                                             │
│ FLUJO DE DATOS:                                                            │
│ 1. Clic en botón "edit" en libro-catalog.js                              │
│ 2. Guarda ID en sessionStorage: setItem('bookIdToEdit', id)              │
│ 3. Navega a form-modal.html                                              │
│ 4. form-modal.js lee ID, carga datos GET /api/libros/{id}                │
│ 5. Usuario edita nota y hace clic guardar                                │
│ 6. PATCH /api/libros/{id} con { nota: "..." }                            │
│ 7. Cierra modal y vuelve a libro-catalog.html                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ VISTAS NO PRESENTES EN STITCH (pero sí en arquitectura):                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ AUTOR DIRECTORY (Directorio de Autores)                                   │
│ ├─ src/views/autor-directory.html      ← HTML (no en Stitch)             │
│ ├─ src/scripts/pages/autor-directory.js← Lógica filtrado por año         │
│ ├─ src/styles/modules/_autor-directory.css ← Estilos cards de autores   │
│ └─ src/scripts/utils/api.js            ← GET /autores, /autores/vivos    │
│                                                                             │
│ ELEMENTOS CLAVE:                                                           │
│ ✓ Grid: id="authors-grid"                                                │
│ ✓ Input año: id="year-input"                                             │
│ ✓ Botón filtrar: id="btn-filter"                                         │
│ ✓ Botón limpiar: id="btn-clear"                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

═════════════════════════════════════════════════════════════════════════════════
DETALLES POR VISTA: QUÉ VERIFICAR EN CADA HTML
═════════════════════════════════════════════════════════════════════════════════

1️⃣ GLOBAL-SEARCH.HTML
────────────────────────────────────────────────────────────────────────────────

REFERENCIA VISUAL: Stitch node-id=4fa3cbea1c074cb8a44dc95f653f466d

✓ EN <HEAD>:
  <link rel="stylesheet" href="../../styles/modules/_global-search.css" />

✓ EN <BODY>:
  • <input id="search-input" .../>
  • <button id="search-btn">Buscar</button>
  • <div id="message-container"></div>

✓ ANTES </BODY>:
  <script type="module" src="../../scripts/pages/global-search.js"></script>

DISEÑO STITCH INCLUYE:
  • Input de búsqueda centered
  • Botón buscar primary
  • Área de mensajes (éxito/error)
  • Ícono de búsqueda (del component separado)
  • Animaciones de carga
  • Redirección automática al catálogo (2s)

────────────────────────────────────────────────────────────────────────────────

2️⃣ LIBRO-CATALOG.HTML
────────────────────────────────────────────────────────────────────────────────

REFERENCIA VISUAL: Stitch node-id=a4de60b87c3e45f5b9d5a65fb4edf8ad

✓ EN <HEAD>:
  <link rel="stylesheet" href="../../styles/modules/_libro-catalog.css" />

✓ EN <BODY>:
  • Sección header con navegación
  • Filtros por idioma (buttons class="lang-btn" data-lang="...")
    - Español (es)
    - Inglés (en)
    - Portugués (pt)
    - Ruso (ru)
  • Input búsqueda flexible (reutiliza component SEARCH)
    - Busca por título O autor
    - Debounce 300ms
  • Grid de libros: id="books-grid"
    - Cards con imagen
    - Hover: muestra botones edit/delete
  • Botón "Nuevo": id="btn-nuevo-hechizo" → va a global-search.html
  • Botón "Mostrar todos": id="btn-mostrar-todos"

✓ ANTES </BODY>:
  <script type="module" src="../../scripts/pages/libro-catalog.js"></script>

DISEÑO STITCH INCLUYE:
  • Header con logo + navegación
  • Filtros en pill-buttons (active state)
  • Search bar con ícono
  • Grid responsive (auto-fit minmax)
  • Cards con shadow + hover effects
  • Empty state con ilustración
  • Botones flotantes en tarjeta (edit/delete)

────────────────────────────────────────────────────────────────────────────────

3️⃣ FORM-MODAL.HTML
────────────────────────────────────────────────────────────────────────────────

REFERENCIA VISUAL: Stitch node-id=42cf37da5613447197a3f8ba9a047dec

✓ EN <HEAD>:
  <link rel="stylesheet" href="../../styles/modules/_form-modal.css" />

✓ EN <BODY>:
  • Backdrop (dark overlay): id="modal-backdrop"
  • Modal container: id="modal-container"
    - Imagen portada: id="cover-img"
    - Título (read-only): id="title-input" (probablemente <div> o <p>)
    - Autor (read-only): id="author-input" (probablemente <div> o <p>)
    - Idioma (read-only): id="language-select" (probablemente <div> o <p>)
    - Nota (editable): id="note-input" <textarea>
    - Botón guardar: id="save-btn"
    - Botón cerrar: id="close-modal-btn"

✓ ANTES </BODY>:
  <script type="module" src="../../scripts/pages/form-modal.js"></script>

DISEÑO STITCH INCLUYE:
  • Backdrop semi-transparente (click-to-close, opcional)
  • Modal card centered con animación de entrada (scale + fade)
  • Portada del libro (imagen placeholder)
  • Información de libro (solo lectura visualmente)
  • Campo nota (textarea editable)
  • Botón guardar (con loading state)
  • Botón cerrar (X en esquina, u otro)
  • Animaciones suave (spring, ease-out)

────────────────────────────────────────────────────────────────────────────────

4️⃣ AUTOR-DIRECTORY.HTML
────────────────────────────────────────────────────────────────────────────────

✓ EN <HEAD>:
  <link rel="stylesheet" href="../../styles/modules/_autor-directory.css" />

✓ EN <BODY>:
  • Grid de autores: id="authors-grid"
  • Input año: id="year-input"
  • Botón filtrar: id="btn-filter"
  • Botón limpiar: id="btn-clear"

✓ ANTES </BODY>:
  <script type="module" src="../../scripts/pages/autor-directory.js"></script>

════════════════════════════════════════════════════════════════════════════════
COMPONENTE REUTILIZABLE: SEARCH (Búsqueda Flexible)
════════════════════════════════════════════════════════════════════════════════

STITCH node-id: 8ee39c631a6c474b9cd925dd0a590eb5

Este component aparece en:
  1. GLOBAL-SEARCH: Como vista principal de búsqueda
  2. LIBRO-CATALOG: Como filtro de búsqueda en tiempo real

CARACTERÍSTICAS DEL COMPONENT:
  • Input con placeholder "Título o autor..."
  • Ícono de búsqueda (node-id=c074a234a69940f895cbe19a81ed9e0d)
  • Debounce 300ms (en libro-catalog.js)
  • Resultados en tiempo real
  • Limpieza de resultados

INTEGRACIÓN EN HTML:
  Ambas vistas incluyen un <input> idéntico pero:
  • En global-search.html: Submit button, después redirige
  • En libro-catalog.html: Solo input, busca mientras escribes

════════════════════════════════════════════════════════════════════════════════
RUTAS CORRECTAS: DESDE src/views/ A OTROS ARCHIVOS
════════════════════════════════════════════════════════════════════════════════

Estructura:
  src/
  ├── views/
  │   ├── global-search.html       ← En este archivo
  │   ├── libro-catalog.html
  │   ├── form-modal.html
  │   └── autor-directory.html
  ├── styles/
  │   └── modules/
  │       ├── _global-search.css
  │       ├── _libro-catalog.css
  │       ├── _form-modal.css
  │       └── _autor-directory.css
  └── scripts/
      └── pages/
          ├── global-search.js
          ├── libro-catalog.js
          ├── form-modal.js
          └── autor-directory.js

DESDE global-search.html (src/views/):
  CSS: ../../styles/modules/_global-search.css
  JS:  ../../scripts/pages/global-search.js

DESDE src/views/global-search.html:
  ├── Sube a: src/
  ├── Sube a: . (raíz)
  └── Baja a: styles/modules/ ✓

════════════════════════════════════════════════════════════════════════════════
INSTRUCCIONES FINALES PARA EL AGENTE
════════════════════════════════════════════════════════════════════════════════

EL AGENTE DEBE:

1. Verificar cada HTML contra su Stitch design correspondiente
2. Confirmar que TODOS los IDs de elementos coinciden con lo que JS espera
3. Agregar los links faltantes (CSS y JS)
4. Verificar que CSS modules estén limpios (sin HTML embebido)
5. Verificar que JS imports apunten a ../utils/ (no ../../)
6. Crear 4 reportes Markdown (uno por vista)
7. Incluir en cada reporte: referencia Stitch, checklist, cambios realizados

════════════════════════════════════════════════════════════════════════════════
