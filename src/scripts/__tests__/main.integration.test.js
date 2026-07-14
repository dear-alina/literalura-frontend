describe('Main Initialization Integration', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.resetModules();
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test('debería inicializarse correctamente y registrar el inicio en consola', () => {
        // Cargar script principal
        require('../main.js');
        
        // Simular que el DOM cargó
        document.dispatchEvent(new Event('DOMContentLoaded'));

        // Verificar que el log se llamó indicando que la app inició (o que se montaron los listeners globales si hubieran)
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Literalura App Initialized'));
    });
});
