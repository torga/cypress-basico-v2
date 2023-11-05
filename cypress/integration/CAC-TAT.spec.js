// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Acesso ao site de teste', () => {
    //aula 2    
    beforeEach(() => {
        cy.visit('src/index.html')
    })


    // aula 1
    it('Verificar o título da aplicação se é igual ao Central de Atendimento', () => {
        cy.title()
            .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    // aula 2
    it('Enviar formuário preenchido com sucesso', () => {
        cy.get('#firstName')
            .type('Igor')
            .should('have.value', 'Igor')
        cy.get('#email')
            .type('Torgaigor@gmail.com')
            .should('have.value', 'Torgaigor@gmail.com')
        cy.get('#lastName')
            .type('Torga')
            .should('have.value', 'Torga')
        cy.get('#phone')
            .type('79998888893')
            .should('have.value', '79998888893')
        cy.get('#phone-checkbox')
            .click()
        cy.get('#open-text-area')
            .type('79998888893')
            .should('have.value', '79998888893')
        cy.get('#phone-checkbox')
            .click()
        cy.get('.button')
            .click()
        cy.get('.success > strong')
            .should('be.visible')
    })
    // aula 2 e 3
    it('Enviar formuário preenchido com sucesso com menos delay', () => {
        const BIG_TEXTO = 'pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai pai'
        cy.get('#firstName')
            .type('Igor')
            .should('have.value', 'Igor')
        cy.get('#email')
            .type('Torgaigor@gmail.com')
            .should('have.value', 'Torgaigor@gmail.com')
        cy.get('#lastName')
            .type('Torga')
            .should('have.value', 'Torga')
        cy.get('#open-text-area')
            .type(BIG_TEXTO, { delay: 0 })
            .should('have.value', BIG_TEXTO)
        cy.get('.button')
            .click()
        cy.get('.success > strong')
            .should('be.visible')
    })
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName')
            .type('Igor')
            .should('have.value', 'Igor')
        cy.get('#email')
            .type('Torgaigorgmail.com')
            .should('have.value', 'Torgaigorgmail.com')
        cy.get('#lastName')
            .type('Torga')
            .should('have.value', 'Torga')
        cy.get('#phone')
            .type('79998888893')
            .should('have.value', '79998888893')
        cy.get('#open-text-area')
            .type('nada com nada')
        cy.get('.button')
            .click()
        cy.get('.error')
            .should('be.visible')
    })
    it('Preenche e envia o formulario sem telefone e exibe mensagem de erro', () => {
        cy.clock()
        cy.get('#firstName').type('Igor').should('have.value', 'Igor')
        cy.get('#email').type('Torgaigor@gmail.com').should('have.value', 'Torgaigor@gmail.com')
        cy.get('#lastName').type('Torga').should('have.value', 'Torga')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('nada com nada')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('Preenche campo name e valida limpeza de campo', () => {
        cy.get('#firstName')
            .type('Igor')
            .should('have.value', 'Igor')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('Torgaigor@gmail.com')
            .should('have.value', 'Torgaigor@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('79998888893')
            .should('have.value', '79998888893')
            .clear()
            .should('have.value', '')

    })
    it('Preenche campo com valor ', () => {
        cy.clock()
        cy.preencheCamposForms()
        cy.get('.success > strong')
            .should('be.visible')
    })
    // aula 4
    it('Seleciona um produto (YouTube) por seu texto', () => {
        cy.get('#product')
            .should('be.visible')
            .select('YouTube')
            .should('have.value', 'youtube')
    })
    it('Seleciona um produto (Mentoria) por seu texto', () => {
        cy.get('#product')
            .should('be.visible')
            .select('Mentoria')
            .should('have.value', 'mentoria')
    })
    it('Seleciona um produto (Blog) por seu texto', () => {
        cy.get('#product')
            .should('be.visible')
            .select('Blog')
            .should('have.value', 'blog')
    })
    // aula 5
    it('marca o tipo de atendimento Feedback', () => {
        cy.get('input[type="radio"][name="atendimento-tat"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })

    // aula 5
    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each($radio => {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
    //aula 06
    it('seleciona um arquivo na pasta fixtures', () => {
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should($input => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo simulado um drag-and-drop', () => {
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should($input => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
    it('seleciona um arquivo a qual foi dado um alias', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('#file-upload')
            .selectFile('@sampleFile')
            .should($input => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    //aula 07
    it('verifica que a politica de privacidade abre em outra aba',() =>{
        cy.get('#privacy a')
          .should('have.attr','target','_blank')
    })
    it('verifica que a politica de privacidade abre em outra aba',() =>{
        cy.get('#privacy a')
          .invoke('removeAttr','target')
          .click()
        cy.contains('Talking')
          .should('be.visible')
    })
})


