# 📝 Bitácora de Pruebas E2E: Cypress
**Fecha:** 13 de Julio de 2026
**Módulo:** Interfaz Frontend (Vanilla JS)
**Estrategia de Mocking:** Interceptores de red (100% aislados)

---

## 🎯 1. Resumen Ejecutivo
Se implementó una suite de pruebas End-to-End con **Cypress** para superar las restricciones de asincronía y el límite de re-asignación de variables globales (`window.location`) presentados por Jest y JSDOM. 
Esta suite corre las pruebas interactivas inyectadas nativamente en el navegador (Chrome/Electron) y valida los componentes visuales emitiendo peticiones interceptadas hacia Mocks JSON, evitando cualquier contacto con el servidor de base de datos en Java.

## ⚙️ 2. Entorno y Dependencias
* **Cypress**: `^15.18.1`
* **Servidor Local**: `http-server` corriendo en el puerto `:3000`.
* Se incluyeron los comandos `cy:open` y `cy:run` en `package.json`.

## 📁 3. Mocks (Fixtures)
Para simular el API (`http://localhost:8080`), se mapearon respuestas estructuradas en:
1. `cypress/fixtures/libros.json`: Estructura paginada que incluye un arreglo con las tarjetas de "1984" y "El Quijote".
2. `cypress/fixtures/autores.json`: Datos simulados con información de vida/muerte de "Jane Austen" y "J.R.R. Tolkien".

## ✅ 4. Flujos Automatizados (Specs)

### A. `global-search.cy.js` (Búsqueda General)
- [x] **Validación Input Vacío:** El botón ignora la consulta si el campo de texto está vacío.
- [x] **Flujo Feliz (`201 Created`):** Si se ingresa "Cien Años", la aplicación envía una solicitud (interceptada) a `/buscar-y-registrar`. Se aserta la renderización exitosa de los mensajes de feedback.
- [x] **Flujo Fallido (`404 Not Found`):** Simulación controlada de libro inexistente y visualización del mensaje correspondiente ("No se encontraron coincidencias").

### B. `libro-catalog.cy.js` (Catálogo de Libros)
- [x] **Renderizado Principal:** Valida que el `Grid` pinte exactamente las dos tarjetas configuradas en el Fixture.
- [x] **Filtrado Reactivo:** Al hacer clic en la pastilla "Español" (`data-lang="es"`), se intercepta dinámicamente un nuevo llamado GET y se actualiza la UI.
- [x] **Búsqueda Flexible:** Escribe en el buscador simulando un *debounce* y valida que traiga resultados interceptados en la ruta de búsqueda.
- [x] **Borrado de Libro:** Simula el botón de papelera, intercepta el `DELETE`, acepta el `confirm` nativo del navegador y verifica la eliminación visual.
- [x] **Recargar Todos:** Verifica la recarga tras hacer clic en el botón "Mostrar Todos los Hechizos".

### C. `autor-directory.cy.js` (Directorio de Autores)
- [x] **Carga Inicial (`200 OK`):** Despliegue correcto de los autores mockeados.
- [x] **Filtro Deslizante (Slider):** Ajusta el rango de año mediante simulación interactiva y aserta la desaparición de los autores posteriores (ej. Tolkien en 1800).
- [x] **Simulación de Caída de Red (`500 Error`):** Inyecta un error 500 para validar el `error-state-template`.

### D. `form-modal.cy.js` (Edición de Notas)
- [x] **Carga de Datos Existentes:** Aserción de valores iniciales (autor, título, nota pre-cargada) traídos del backend a partir del ID en el `sessionStorage`.
- [x] **Guardado Exitoso:** Escribe una nota nueva, la envía usando la tecla **Enter** directamente desde el área de texto, valida la carga útil interceptada en el `PATCH` y comprueba visualmente el renderizado de la plantilla verde de éxito en el DOM.
- [x] **Manejo de Errores:** Simula un error al guardar y valida la aparición del Toast flotante rojo `.error-toast-msg`.
- [x] **Validación de Cierre y Storage:** Aserta que al cerrar el modal (clic en la X), se limpie correctamente el ID del libro en memoria una vez completada la asincronía del `setTimeout` (300ms).

---

## 🧪 5. Conclusiones y Tiempos de Ejecución
* Todas las suites se validaron mediante el comando headless: `npm run cy:run`.
* El tiempo de ejecución se promedia en **35 - 40 segundos** para la totalidad de la suite E2E en local.
* Al usar Cypress, logramos un contexto de red hiper-controlado donde podemos reproducir a demanda fallos de conexión sin alterar verdaderamente la API.
