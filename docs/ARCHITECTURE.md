# Arquitectura del Proyecto Literalura

## Descripción
El proyecto ha sido refactorizado desde una estructura monolítica a una arquitectura por capas moderna (Tipo B). Esta arquitectura mejora la separación de preocupaciones y la mantenibilidad del código al dividir los recursos estáticos, estilos, scripts y vistas.

## Estructura de Capas
1. **Punto de Entrada (`public/`)**: Contiene redirecciones o el index principal.
2. **Capa de Vistas (`src/views/`)**: Archivos HTML limpios, sin lógica ni estilos en línea. Sirven como la interfaz puramente de marcado, referenciando recursos modularizados.
3. **Capa de Estilos (`src/styles/`)**: CSS y configuraciones de frameworks (como Tailwind). Se utiliza CSS modular para mantener un scope específico por vista.
4. **Capa Lógica (`src/scripts/`)**: La lógica de la aplicación, separada en scripts por página (`pages/`) y scripts compartidos/utilitarios (`utils/`).
5. **Capa de Integración (`src/scripts/utils/api.js`)**: Un único cliente API responsable de centralizar las llamadas a la red.

## Beneficios
- **Escalabilidad**: Fácil de agregar nuevas páginas siguiendo el mismo patrón.
- **Mantenibilidad**: Si la API cambia, solo se modifica `api.js`.
- **Rendimiento**: Permite aprovechar la caché del navegador para scripts y estilos compartidos.
