# Log de Refactorización: Consulta a Gutendex desde el navegador

**Fecha:** 2026-07-19
**Tipo:** Corrección de arquitectura de integración + actualización de pruebas
**Resultado:** Jest 29/29, Cypress 15/15

---

## 1. Motivo

En producción (Render), el registro de libros fallaba con HTTP 500 porque el **backend** recibía **HTTP 403** de Cloudflare al consultar Gutendex (`Just a moment...`, managed challenge). Cloudflare bloquea por **reputación de IP** (datacenter de Render), no por cabeceras: el backend ya enviaba un `User-Agent` de navegador y aun así era bloqueado. Verificado además que Gutendex responde **200 desde IP residencial** con y sin `User-Agent`, y que envía `access-control-allow-origin: *` (CORS abierto).

## 2. Solución

Mover la consulta a Gutendex al **navegador**, que tiene IP residencial y resuelve el challenge de Cloudflare de forma transparente.

### `src/scripts/utils/api.js`
- **Nuevo** `GUTENDEX_BASE_URL` y `buscarEnGutendex(titulo)`: consulta `https://gutendex.com/books?search=...` y devuelve el primer resultado o `null`.
- **Nuevo** `mapearLibroGutendex(libro)`: traduce el JSON de Gutendex (`id`, `title`, `authors[]`, `languages[]`, `download_count`) al contrato del backend `RegistrarLibroDTO` (`gutendexId`, `titulo`, `autores[{nombre,anoNacimiento,anoFallecimiento}]`, `idiomas[]`, `descargas`).
- **Modificado** `ApiClient.buscarYRegistrarLibro(titulo)`: ahora (1) busca en Gutendex, (2) si no hay resultado devuelve un objeto sintético `{ok:false, status:404, json}`, (3) si lo hay, hace `POST /api/libros/buscar-y-registrar` con el payload mapeado y devuelve la `Response` del backend.

### `src/scripts/pages/global-search.js`
- **Sin cambios**: `buscarYRegistrarLibro` sigue devolviendo un objeto con `{ok, status, json()}`, por lo que la vista maneja los códigos igual que antes.

## 3. Pruebas actualizadas

- `src/scripts/utils/__tests__/api.test.js` (Jest): el test de `buscarYRegistrarLibro` verifica las **dos** llamadas `fetch` (Gutendex y backend) y el payload mapeado; nuevo test para el caso "Gutendex sin resultados" (404 sin llamar al backend).
- `cypress/e2e/global-search.cy.js` (Cypress): ahora intercepta **también** la petición GET a Gutendex; el caso de éxito verifica el `request.body` mapeado enviado al backend, y hay un caso de "no encontrado" que intercepta Gutendex con `results: []`.

## 4. Verificación

```
Jest:    Test Suites: 8 passed — Tests: 29 passed
Cypress: 15/15 (global-search 3, libro-catalog 5, autor-directory 3, form-modal 4)
```
