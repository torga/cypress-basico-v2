Cypress.Commands.add('preencheCamposFormulario', function(){
    cy.get('#firstName').click().type('Igor')
    cy.get('#lastName').click().type('Torga')
    cy.get('#email').click().type('Torgaigorgmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').click().type('nada com nada')
    cy.get('.button').click()
})
