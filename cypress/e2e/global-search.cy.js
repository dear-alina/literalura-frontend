describe('Búsqueda Global', () => {
  beforeEach(() => {
    // El navegador consulta Gutendex directamente (Cloudflare bloquea al backend en Render).
    cy.intercept('GET', '**/gutendex.com/books**', {
      statusCode: 200,
      body: {
        count: 1,
        results: [{
          id: 320,
          title: 'Cien Años de Soledad',
          authors: [{ name: 'García Márquez, Gabriel', birth_year: 1927, death_year: 2014 }],
          languages: ['es'],
          download_count: 1500
        }]
      }
    }).as('gutendex');

    // El backend solo deduplica y persiste el libro ya resuelto.
    cy.intercept('POST', '**/api/libros/buscar-y-registrar', {
      statusCode: 201,
      body: { titulo: 'Cien Años de Soledad', autor: 'García Márquez, Gabriel' }
    }).as('registrarLibro');

    cy.visit('/global-search.html');
  });

  it('debería mostrar un error si el input está vacío', () => {
    cy.get('#search-btn').click();
    cy.get('#message-container').should('contain.text', 'Por favor ingresa el título');
  });

  it('debería buscar en Gutendex y registrar el libro en el backend', () => {
    cy.get('#search-input').type('Cien Años');
    cy.get('#search-btn').click();

    // El navegador consultó Gutendex...
    cy.wait('@gutendex');
    // ...y envió al backend el libro traducido al contrato RegistrarLibroDTO.
    cy.wait('@registrarLibro').its('request.body').should('deep.equal', {
      gutendexId: 320,
      titulo: 'Cien Años de Soledad',
      autores: [{ nombre: 'García Márquez, Gabriel', anoNacimiento: 1927, anoFallecimiento: 2014 }],
      idiomas: ['es'],
      descargas: 1500
    });

    cy.get('#message-container').should('contain.text', 'Cien Años de Soledad');
    cy.get('#message-container').should('contain.text', 'registrado en tu biblioteca');
  });

  it('debería mostrar "no encontrado" si Gutendex no devuelve resultados', () => {
    cy.intercept('GET', '**/gutendex.com/books**', {
      statusCode: 200,
      body: { count: 0, results: [] }
    }).as('gutendexVacio');

    cy.get('#search-input').type('Libro Inexistente XYZ');
    cy.get('#search-btn').click();

    cy.wait('@gutendexVacio');
    cy.get('#message-container').should('contain.text', 'No se encontraron coincidencias');
  });
});
