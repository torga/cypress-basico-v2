Cypress.Commands.add('preencheCamposForms',  () => {
        cy.get('#firstName').type('Igor').should('have.value','Igor')
        cy.get('#email').type('Torgaigor@gmail.com').should('have.value','Torgaigor@gmail.com')
        cy.get('#lastName').type('Torga').should('have.value','Torga')
        cy.get('#open-text-area').type('79998888893').should('have.value','79998888893')
        cy.get('.button').click()
})