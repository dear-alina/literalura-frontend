# Registro de Automatización QA: Cobertura Unitario en Scripts de Utilidades
- **Fecha de Creación:** 2026-07-13
- **Entorno Utilizado:** Jest / Vitest con JSDOM.
- **Módulos Evaluados:** `src/scripts/utils/` (`validation`, `api`, `storage`, `dom`).

## 1. Cobertura de Código e Inyecciones (Mocks)
Para garantizar un aislamiento total y que las pruebas sean unitarias y deterministas, aplicamos las siguientes técnicas de Mocking:
- **`fetch`:** Se inyectó un `jest.fn()` global para interceptar todas las peticiones HTTP del `ApiClient`. Esto permitió verificar las URLs de los endpoints, verbos HTTP (GET, POST, PUT, PATCH), Headers y la correcta inyección del Body, sin realizar llamadas reales de red.
- **`sessionStorage`:** Se sobreescribieron y espiaron (`jest.spyOn`) los métodos del prototipo `Storage` para interceptar las llamadas a memoria, garantizando limpieza con `sessionStorage.clear()` antes de cada prueba.
- **`jsdom`:** Se utilizó el entorno JSDOM nativo de Jest que simula un DOM interactivo, permitiendo validar la correcta mutación de clases y propiedades HTML en las utilidades de renderizado y manipulación del árbol.

## 2. Inventario de Archivos de Prueba Creados
- `src/scripts/utils/__tests__/validation.test.js` -> Se verificó el flujo feliz (strings válidos) y casos tristes (manejo seguro de `null`, `undefined`, números, strings vacíos y strings conformados únicamente por espacios).
- `src/scripts/utils/__tests__/api.test.js` -> Se verificó exhaustivamente la construcción de los payloads en peticiones complejas (PUT `updateLibro`, PATCH `patchNotaLibro`, POST `buscarYRegistrarLibro`), chequeando cabeceras y JSON strings.
- `src/scripts/utils/__tests__/storage.test.js` -> Persistencia simulada en memoria evaluando que las funciones `setItem`, `getItem` y `removeItem` interactúen correctamente con los almacenes sin fugas entre pruebas.
- `src/scripts/utils/__tests__/dom.test.js` -> Validación de mutación de clases mediante la función `createElement`, confirmando que los selectores y plantillas HTML dinámicas inyectan los atributos adecuados en el fragmento simulado.

## 3. Matriz de Casos de Borde Controlados (Checklist de Integridad)
- [x] **Validación:** Comprobado comportamiento ante strings vacíos y formatos inválidos.
- [x] **API:** Headers y URLs validadas sin llamadas reales de red.
- [x] **Storage:** Correcto manejo de llaves y limpieza de sesión.
- [x] **DOM:** Clases CSS y elementos HTML inyectados con precisión en el fragmento simulado.

## 4. Bloques de Código de las Pruebas Implementadas

**Fragmento de `validation.test.js`**
```javascript
test('debería retornar false para strings válidos', () => {
    expect(isEmpty('hola')).toBe(false);
    expect(isEmpty('   hola   ')).toBe(false);
});
test('debería retornar true para strings con solo espacios', () => {
    expect(isEmpty('   ')).toBe(true);
});
```

**Fragmento de `api.test.js`**
```javascript
test('updateLibro debe realizar un PUT con headers y body correctos', async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, titulo: 'Actualizado' }) });
    const data = { titulo: 'Actualizado' };
    
    await ApiClient.updateLibro(1, data);
    
    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/libros/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
});
```

**Fragmento de `storage.test.js`**
```javascript
test('setItem debe guardar el valor en sessionStorage', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    setItem('current_book_id', '42');
    
    expect(setItemSpy).toHaveBeenCalledWith('current_book_id', '42');
    expect(sessionStorage.getItem('current_book_id')).toBe('42');
});
```
