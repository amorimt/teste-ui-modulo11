/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste_alunoebac20@teste.com')
        cy.get('#password').type('testeqa@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_alunoebac20 (não é teste_alunoebac20? Sair)')
    })
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tealunoebac20@teste.com')
        cy.get('#password').type('testeqa@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('teste_alunoebac20@teste.com')
        cy.get('#password').type('testeteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail teste_alunoebac20@teste.com está incorreta. Perdeu a senha?')
    });

})