# Bugfix Log — Error al Cargar Datos del Libro en Modal de Edición
**Fecha:** 2026-07-08

---

## Causa Raíz del Problema

Se identificaron **3 bugs** encadenados en el flujo de edición de libros, todos en la capa de transferencia de parámetros entre páginas:

### BUG #1 — ID inválido escrito en sessionStorage (`libro-catalog.js`)
**Síntoma:** Petición `GET /api/libros/undefined` → `404 Not Found` → catch → alert de error.  
**Causa:** La función `editarLibro(id)` llamaba directamente a `setItem('bookIdToEdit', id)` sin validar previamente que `id` fuera un valor truthy. Si el backend omite serializar el campo `id` en el DTO, `libro.id` llega como `undefined`, y `sessionStorage.setItem()` lo convierte a la cadena `"undefined"`.  
**Corrección:** Guard clause defensiva antes de setItem. Si `id` es falsy/`"undefined"`/`"null"`, se lanza `console.error` y un alert antes de abortar la redirección. El id se serializa explícitamente con `String(id)`.

---

### BUG #2 — Mapeo incorrecto del campo `autor` en `form-modal.js`
**Síntoma:** El campo "Autor" en el formulario muestra `[object Object]` si el backend devuelve `autor` como objeto anidado.  
**Causa:** El código usaba `libro.autor || ''` sin verificar el tipo. El backend devuelve `autor` como `{ id: 1, nombre: "Dickens", ... }` (relación `@ManyToOne`), pero `form-modal.js` lo asignaba directamente al `.value` del input.  
**Corrección:** Extracción con optional chaining: `(libro.autor?.nombre || libro.autor || '')`.

---

### BUG #3 — Enum de idioma sin normalizar (`form-modal.js`)
**Síntoma:** El `<select id="language-select">` queda vacío/sin valor tras cargar los datos del libro.  
**Causa:** Spring Boot puede serializar el enum `Idioma` en mayúsculas (`"INGLES"`, `"ESPANOL"`) dependiendo de la anotación `@JsonProperty`, pero los `<option value="">` del HTML tienen valores en minúsculas (`"en"`, `"es"`, `"pt"`, `"ru"`). Al asignar `"INGLES"` a `select.value`, ninguna opción coincide y el campo queda inválido.  
**Corrección:** Se creó el mapa `IDIOMA_ENUM_TO_CODE` para normalizar cualquier variante de enum (con/sin tilde, mayúsculas/minúsculas) al código ISO de 2 letras correcto.

---

## Archivos Modificados

| Archivo | Cambios |
|---|---|
| `src/scripts/pages/libro-catalog.js` | Guard clause en `editarLibro(id)` para validar id antes de sessionStorage |
| `src/scripts/pages/form-modal.js` | Validación defensiva del ID en `DOMContentLoaded`, mapeo seguro de `autor` anidado, normalización de idioma por enum, mejora de `console.error` con status detallado |

## Archivos No Modificados (verificados sin anomalías)
- `src/scripts/utils/api.js` — `getLibro(id)` forma correctamente `GET /api/libros/{id}`
- `src/views/form-modal.html` — IDs de inputs (`title-input`, `author-input`, `language-select`) correctos
