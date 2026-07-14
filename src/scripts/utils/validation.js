// Utilidades de validación
export const isEmpty = (value) => {
    return value === undefined || value === null || String(value).trim() === '';
};
