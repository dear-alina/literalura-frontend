describe('Formulario Modal (Editar Libro)', () => {
  beforeEach(() => {
    // Simulamos que el usuario venía del catálogo para editar el libro 1
    cy.window().then((win) => {
      win.sessionStorage.setItem('bookIdToEdit', '1');
    });

    cy.intercept('GET', '**/api/libros/1', {
      statusCode: 200,
      body: {
        id: 1,
        titulo: '1984',
        idioma: 'en',
        autor: { nombre: 'George Orwell' },
        gutendexId: 123,
        nota: 'Una novela distópica'
      }
    }).as('getLibro');
    
    cy.visit('/form-modal.html');
  });

  it('debería cargar y mostrar los detalles del libro', () => {
    cy.wait('@getLibro');

    cy.get('#title-input').should('have.text', '1984');
    cy.get('#author-input').should('have.text', 'George Orwell');
    cy.get('#language-select').should('contain.text', 'Inglés');
    cy.get('#note-input').should('have.value', 'Una novela distópica');
  });

  it('debería permitir editar y guardar la nota exitosamente presionando ENTER', () => {
    cy.wait('@getLibro');

    cy.intercept('PATCH', '**/api/libros/1/nota', {
      statusCode: 200,
      body: { nota: 'Nota actualizada por Cypress' }
    }).as('patchNota');

    // Simulamos escribir y presionar Enter al final
    cy.get('#note-input').clear().type('Nota actualizada por Cypress{enter}');

    cy.wait('@patchNota').its('request.body').should('deep.equal', {
      nota: 'Nota actualizada por Cypress'
    });

    // Verificamos el nuevo mensaje en el DOM con estilo integrado
    cy.get('#success-message-container').should('be.visible').and('contain.text', 'exitosamente');
  });

  it('debería mostrar un toast de error si la petición al backend falla', () => {
    // Simulamos fallo en la petición PATCH
    cy.intercept('PATCH', '**/api/libros/1/nota', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('patchNotaError');

    cy.wait('@getLibro');
    cy.get('#save-btn').click();
    cy.wait('@patchNotaError');

    // Verifica que aparezca el toast de error en el DOM con su clase correcta
    cy.get('.error-toast-msg').should('be.visible').and('contain.text', 'No se pudo guardar la nota');
  });

  it('debería cerrar el modal sin hacer llamadas y regresar al catálogo al dar clic en la X', () => {
    cy.wait('@getLibro');
    
    cy.get('#close-modal-btn').click();
    
    // El script tiene un setTimeout de 300ms antes de limpiar el sessionStorage y redirigir.
    // Usar `.should('be.null')` en un invoke permite a Cypress reintentar la aserción hasta que el setTimeout pase.
    cy.window().its('sessionStorage').invoke('getItem', 'bookIdToEdit').should('be.null');
  });
});
