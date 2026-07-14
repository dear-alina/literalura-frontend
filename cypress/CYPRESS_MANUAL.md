# 📘 Manual de Ejecución: Pruebas E2E con Cypress (Modo Gráfico)

Este manual te guiará paso a paso para que puedas levantar el entorno de pruebas en tu propia máquina y observar visualmente cómo Cypress interactúa con la aplicación como si fuera un usuario real.

---

## 🛠️ Requisitos Previos
1. Asegúrate de estar en la carpeta raíz del proyecto frontend (`stitch_literalura`).
2. Necesitarás tener instalados los paquetes de Node (`npm install` si no lo has hecho).

---

## 🚀 Paso 1: Levantar el Servidor Local

Cypress necesita que tu aplicación esté corriendo en un servidor local para poder visitarla. Hemos configurado `http-server` para esto.

1. Abre una **Terminal** en VS Code (puedes usar PowerShell o Command Prompt).
2. Ejecuta el siguiente comando:
   ```bash
   npm start
   ```
3. Verás un mensaje indicando que el servidor está corriendo (usualmente en `http://127.0.0.1:3000`).
4. **IMPORTANTE:** ¡No cierres esta terminal! Déjala corriendo en segundo plano.

---

## 👁️ Paso 2: Abrir la Interfaz de Cypress

Ahora abriremos Cypress en "Modo Interactivo" (con interfaz gráfica) para que puedas ver el navegador de pruebas.

1. Abre una **NUEVA Terminal** (deja la anterior corriendo con el servidor).
2. Asegúrate de estar en la misma carpeta raíz del proyecto.
3. Ejecuta el siguiente comando:
   ```bash
   npm run cy:open
   ```
4. Después de unos segundos, **se abrirá una nueva ventana externa** (la aplicación de Cypress).

---

## 🎮 Paso 3: Ejecutar las Pruebas

Una vez dentro de la ventana de Cypress:

1. Haz clic en el botón **"E2E Testing"**.
2. Cypress te pedirá elegir un navegador. Selecciona **Chrome** o **Electron** y haz clic en el botón verde **"Start E2E Testing in Chrome"**.
3. Se abrirá una ventana de navegador dedicada a las pruebas.
4. En el panel lateral izquierdo verás la lista de tus archivos de prueba (`Specs`):
   - `autor-directory.cy.js`
   - `global-search.cy.js`
   - `libro-catalog.cy.js`
5. **Haz clic en cualquiera de ellos**.
6. ¡Magia! ✨ Verás cómo la página se carga sola en la derecha, y Cypress empieza a simular clics y teclado a toda velocidad. A la izquierda verás un registro de cada acción (Assertion, Intercept, Click).

---

## 🛑 Paso 4: Finalizar

1. Cuando termines de ver las pruebas, simplemente **cierra la ventana del navegador** de Cypress.
2. Vuelve a la primera terminal donde dejaste corriendo `npm start` y presiona `Ctrl + C` para apagar el servidor.

> [!TIP]
> **Modo Silencioso (Headless)**
> Si en el futuro solo quieres saber si las pruebas pasan sin ver la interfaz gráfica (ideal para integraciones continuas como GitHub Actions), solo necesitas levantar el servidor y ejecutar en la segunda terminal `npm run cy:run`.
