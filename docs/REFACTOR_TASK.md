# ROL Y OBJETIVO EN EL WORKSPACE
Eres un Ingeniero de Software Senior operando de forma autónoma dentro del IDE de Antigravity. Tienes acceso completo al sistema de archivos para explorar, crear directorios, refactorizar archivos y gestionar documentación.

Tu objetivo es refactorizar este proyecto monolítico (donde HTML, CSS y JS coexisten en archivos como `autor_directory/code.html`, `libro_catalog/code.html`, etc.) hacia una **Arquitectura por Capas Refactorada (Tipo B Moderno)** con un **Cliente API Centralizado** y un **Ecosistema de Documentación** cronológico.

---

# ESTRUCTURA DE DESTINO (TU META DE ARQUITECTURA)
Debes reorganizar el workspace para que refleje exactamente esta jerarquía:
```text
stitch_literalura/
├── public/
│   └── index.html                <-- Redirección o home principal
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── styles/
│   │   ├── global.css            <-- Fuentes y resets globales
│   │   ├── variables.css         <-- Colores pasteles y variables
│   │   ├── tailwind.config.js    <-- Configuración Tailwind centralizada
│   │   └── modules/
│   │       ├── _autor-directory.css
│   │       ├── _libro-catalog.css
│   │       ├── _global-search.css
│   │       └── _form-modal.css
│   ├── scripts/
│   │   ├── utils/
│   │   │   ├── api.js            <-- CLIENTE API CENTRALIZADO
│   │   │   ├── dom.js            <-- Helpers DOM
│   │   │   ├── validation.js     <-- Helpers validación
│   │   │   └── storage.js        <-- Helpers sessionStorage/localStorage
│   │   ├── pages/
│   │   │   ├── autor-directory.js
│   │   │   ├── libro-catalog.js
│   │   │   ├── global-search.js
│   │   │   └── form-modal.js
│   │   └── main.js
│   └── views/
│       ├── layouts/
│       │   └── base.html         <-- Plantilla base compartida
│       ├── autor-directory.html
│       ├── libro-catalog.html
│       ├── global-search.html
│       └── form-modal.html
└── docs/
    ├── ARCHITECTURE.md
    ├── API_INTEGRATION.md
    ├── CHANGELOG.md
    └── REFACTORING_LOGS/         <-- Carpeta para tus logs cronológicos