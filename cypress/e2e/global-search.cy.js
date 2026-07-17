describe('Búsqueda Global', () => {
  beforeEach(() => {
    // Interceptamos la llamada de búsqueda simulando un 201 Created
    cy.intercept('POST', '**/api/libros/buscar-y-registrar', {
      statusCode: 201,
      body: { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez' }
    }).as('buscarLibro');

    cy.visit('/global-search.html');
  });

  it('debería mostrar un error si el input está vacío', () => {
    cy.get('#search-btn').click();
    cy.get('#message-container').should('contain.text', 'Por favor ingresa el título');
  });

  it('debería buscar un libro exitosamente y mostrar el mensaje correspondiente', () => {
    cy.get('#search-input').type('Cien Años');
    cy.get('#search-btn').click();

    cy.wait('@buscarLibro').its('request.body').should('deep.equal', {
      titulo: 'Cien Años'
    });

    cy.get('#message-container').should('contain.text', 'Cien Años de Soledad');
    cy.get('#message-container').should('contain.text', 'registrado en tu biblioteca');
  });

  it('debería mostrar mensaje de error si el servidor devuelve un 404', () => {
    cy.intercept('POST', '**/api/libros/buscar-y-registrar', {
      statusCode: 404,
      body: { error: 'Not found' }
    }).as('buscarLibroError');

    cy.get('#search-input').type('Libro Inexistente XYZ');
    cy.get('#search-btn').click();

    cy.wait('@buscarLibroError');

    cy.get('#message-container').should('contain.text', 'No se encontraron coincidencias');
  });
});
