// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Acesso ao site de teste', function () {
    beforeEach(() => {
        cy.visit('src/index.html')
    })

    it('Verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').click().type('Igor').should('have.value', 'Igor')
        cy.get('#lastName').click().type('Torga').should('have.value', 'Torga')
        cy.get('#email').click().type('Torgaigor@gmail.com').should('have.value', 'Torgaigor@gmail.com')
        cy.get('#phone').click().type('79998888893').should('have.value', '79998888893')
        cy.get('#open-text-area').click().type('nada com nada').should('have.value', 'nada com nada')
        cy.get('.button').click()
        cy.get('.success > strong').should('be.visible')
    })

    it('Validar delay', function(){
        const longText = 'texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto '
        cy.get('#firstName').click().type('Igor').should('have.value', 'Igor')
        cy.get('#lastName').click().type('Torga').should('have.value', 'Torga')
        cy.get('#email').click().type('Torgaigor@gmail.com').should('have.value', 'Torgaigor@gmail.com')
        cy.get('#phone').click().type('79998888893').should('have.value', '79998888893')
        cy.get('#open-text-area').click().type(longText,{delay:0})
        cy.get('.button').click()
    })
    it('Preenche os campos obrigatórios e envia o formulário com e-mail incorreto', function () {
        cy.get('#firstName').click().type('Igor')
        cy.get('#lastName').click().type('Torga')
        cy.get('#email').click().type('Torgaigorgmail.com')
        cy.get('#phone').click().type('79998888893')
        cy.get('#open-text-area').click().type('nada com nada')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('Preenche campo com valor não numerico no telefone', function () {
        cy.get('#phone')
          .click()
          .type('tetetesteteet')
          .should('have.value','')
    })
    it.only('Preenche campo com valor não numerico no telefone', function () {
        cy.get('#firstName').click().type('Igor')
        cy.get('#lastName').click().type('Torga')
        cy.get('#email').click().type('Torgaigorgmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').click().type('nada com nada')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')

    })
    it ('Preenche campo com valor ', function(){
        cy.preencheCamposFormulario()
        cy.get('.sucess').should('be.visible')
    })
})