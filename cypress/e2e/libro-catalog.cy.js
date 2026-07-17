describe('Catálogo de Libros', () => {
  beforeEach(() => {
    // Interceptamos llamadas iniciales
    cy.intercept('GET', '**/api/libros', { fixture: 'libros.json' }).as('getLibros');
    cy.visit('/libro-catalog.html');
  });

  it('debería mostrar los libros cargados inicialmente', () => {
    cy.wait('@getLibros');
    cy.get('#books-grid').children().should('have.length', 2);
    cy.get('#books-grid').should('contain.text', '1984');
    cy.get('#books-grid').should('contain.text', 'El Quijote');
  });

  it('debería filtrar los libros por idioma al hacer clic', () => {
    cy.wait('@getLibros');

    // Preparamos un interceptor para el filtrado por idioma "es"
    cy.intercept('GET', '**/api/libros/idioma?idioma=es', {
      statusCode: 200,
      body: {
        content: [
          {
            id: 2,
            titulo: 'El Quijote',
            idioma: "es",
            autor: { nombre: 'Miguel de Cervantes' },
            gutendexId: 456
          }
        ]
      }
    }).as('getLibrosEs');

    cy.get('.lang-btn[data-lang="es"]').click();
    cy.wait('@getLibrosEs');

    cy.get('#books-grid').children().should('have.length', 1);
    cy.get('#books-grid').should('contain.text', 'El Quijote');
    cy.get('#books-grid').should('not.contain.text', '1984');
  });

  it('debería buscar hechizos de forma flexible', () => {
    cy.wait('@getLibros');

    cy.intercept('GET', '**/api/libros/busqueda-flexible?q=1984', {
      statusCode: 200,
      body: {
        content: [
          {
            id: 1,
            titulo: '1984',
            idioma: "en",
            autor: { nombre: 'George Orwell' }
          }
        ]
      }
    }).as('buscarLibrosFlexible');

    cy.get('input[placeholder="Título o autor..."]').type('1984');
    cy.wait('@buscarLibrosFlexible');
    
    cy.get('#books-grid').children().should('have.length', 1);
    cy.get('#books-grid').should('contain.text', '1984');
  });

  it('debería eliminar un libro exitosamente', () => {
    cy.wait('@getLibros');

    // Forzamos el click en window.confirm para que siempre devuelva true
    cy.on('window:confirm', () => true);

    // Mock del endpoint DELETE
    cy.intercept('DELETE', '**/api/libros/1', {
      statusCode: 204
    }).as('deleteLibro');

    // Mock del refetch de libros luego del delete
    cy.intercept('GET', '**/api/libros', {
      statusCode: 200,
      body: {
        content: [
          {
            id: 2,
            titulo: 'El Quijote',
            idioma: "es",
            autor: { nombre: 'Miguel de Cervantes' }
          }
        ]
      }
    }).as('getLibrosRestantes');

    cy.get('.btn-delete[data-id="1"]').click();
    cy.wait('@deleteLibro');
    cy.wait('@getLibrosRestantes');

    cy.get('#books-grid').children().should('have.length', 1);
    cy.get('#books-grid').should('not.contain.text', '1984');
  });

  it('debería recargar todos los libros al hacer clic en Mostrar Todos', () => {
    cy.wait('@getLibros');
    cy.get('#btn-mostrar-todos').click();
    cy.wait('@getLibros'); // Se debe realizar otro getLibros
    cy.get('#books-grid').children().should('have.length', 2);
  });
});
