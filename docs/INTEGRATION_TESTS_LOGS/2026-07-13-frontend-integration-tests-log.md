# Registro de Automatización QA: Pruebas de Integración de Vistas y Flujos
- **Fecha de Creación:** 2026-07-13
- **Entorno Utilizado:** JSDOM / @testing-library/dom.
- **Componentes Auditados:** `src/scripts/pages/` y `src/scripts/main.js`.

## 1. Estrategia de Carga de Layouts y Aislamiento de Red
Para asegurar que los scripts de las páginas pudieran manipular un DOM realista sin requerir un navegador físico, utilizamos el módulo nativo `fs` de Node.js para leer los archivos HTML estáticos (`src/views/*.html`) y asignamos su contenido directamente a `document.documentElement.innerHTML` antes de cada prueba (en el bloque `beforeEach`). 

Simultáneamente, para aislar el entorno de llamadas reales de red, inyectamos un Mock usando `jest.mock('../../utils/api.js', ...)` interceptando métodos clave como `ApiClient.getAutores`, `getLibros`, y `buscarYRegistrarLibro`. Así, logramos devolver promesas resueltas con payloads JSON estáticos.

## 2. Inventario de Suites de Integración Desarrolladas
- `src/scripts/pages/__tests__/global-search.integration.test.js` -> Simulación de búsqueda y renderizado de resultados. Se evaluó que al presionar el botón de búsqueda con el input lleno, se envíe el texto al mock de la API y el contenedor de mensajes renderice dinámicamente un banner de éxito o error (según la respuesta de código 201 o 404).
- `src/scripts/pages/__tests__/autor-directory.integration.test.js` -> Validación de renderizado de tarjetas de autores y control de estados vacíos/errores. Carga el layout base y verifica que la inyección de las plantillas (`author-card-template`) incruste correctamente el nombre del autor retornado por la red mockeada.
- `src/scripts/pages/__tests__/libro-catalog.integration.test.js` -> Evaluación del catálogo inicial y eventos de filtrado/interacción. Comprueba la construcción del grid de libros y simula eventos de _click_ sobre los botones de filtro por idioma, validando la re-ejecución condicional del `ApiClient`.
- `src/scripts/__tests__/main.integration.test.js` -> Verificación de inicialización de event listeners globales garantizando el montaje y arranque seguro mediante el evento `DOMContentLoaded`.

## 3. Matriz de Flujos de Interacción Validados (Checklist)
- [x] **Global Search:** El input recibe texto, el botón dispara la acción y el DOM renderiza resultados dinámicos.
- [x] **Autor Directory:** Flujo de éxito inyecta tarjetas; flujo de error muestra alerta o empty state en pantalla.
- [x] **Libro Catalog:** Datos iniciales visibles y mutación del DOM comprobada al gatillar filtros o eventos de tarjetas.
- [x] **Main App Lifecycle:** Inicialización correcta de escuchadores de eventos al cargar `DOMContentLoaded`.

## 4. Bloques de Código de los Tests de Integración Implementados
**Setup de JSDOM e Inyección HTML (Ejemplo `autor-directory`)**
```javascript
import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve(__dirname, '../../../views/autor-directory.html');
const html = fs.readFileSync(htmlPath, 'utf8');

describe('Autor Directory Integration', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });
    // ...
```

**Simulación de Clicks e Inputs (`global-search`)**
## 5. Mitigaciones y Limitaciones de Entorno (Fixes/Known Issues)
- **`window.location` (Limitación)**: JSDOM bloquea la redefinición estricta del objeto location a través de múltiples ciclos de prueba. Intentar forzar su reescritura arroja `TypeError: Cannot redefine property` o _Not Implemented_. Se recomienda usar Cypress/Playwright para probar redirecciones.
- **Asincronía DOM (Mitigado)**: En flujos asíncronos complejos, se reemplazó `process.nextTick` por un `setTimeout(r, 10)` a nivel de Promesa. Esto permite el vaciado completo (_flush_) del _Event Loop_, asegurando que el motor de JSDOM repinte el `innerHTML` inyectado por las plantillas.
- **Aislamiento de Módulos (Limitación)**: Debido al uso de ES Modules globales acoplados a `document.addEventListener`, la invocación de `jest.resetModules()` provoca que los eventos del DOM disparen instancias "zombie" de los scripts con referencias desconectadas a los Mocks de red, resultando en falsos positivos (`Cannot read properties of undefined`). La solución a largo plazo requiere refactorizar los scripts con una función de inicialización `init()` explícita.
