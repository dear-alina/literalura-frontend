describe('Directorio de Autores', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/autores', { fixture: 'autores.json' }).as('getAutores');
    cy.visit('/autor-directory.html');
  });

  it('debería mostrar la lista de autores exitosamente', () => {
    cy.wait('@getAutores');
    cy.get('#authors-grid').children().should('have.length', 2);
    cy.get('#authors-grid').should('contain.text', 'Jane Austen');
    cy.get('#authors-grid').should('contain.text', 'J.R.R. Tolkien');
  });

  it('debería filtrar autores locales mediante el control deslizante de año', () => {
    cy.wait('@getAutores');
    
    // Mover el slider a 1800. Tolkien (1892) no debería aparecer. Austen (1775) sí.
    cy.get('#year-filter').invoke('val', 1800).trigger('input');

    cy.get('#authors-grid').children().should('have.length', 1);
    cy.get('#authors-grid').should('contain.text', 'Jane Austen');
    cy.get('#authors-grid').should('not.contain.text', 'J.R.R. Tolkien');
  });

  it('debería mostrar un mensaje de error si falla la red', () => {
    cy.intercept('GET', '**/api/autores', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getAutoresError');

    cy.visit('/autor-directory.html');
    cy.wait('@getAutoresError');

    cy.get('#authors-grid').should('contain.text', 'No se pudo establecer conexión');
  });
});
