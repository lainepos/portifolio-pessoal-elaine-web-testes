describe('Login', () => {
  it('Validar login com dados válidos para permitir acesso a aplicação escala ministerial', () => {
    cy.visit('http://localhost:4000')
    cy.get(':nth-child(2) > input').click().type('leader1')
    cy.get(':nth-child(3) > input').click().type('password')
    cy.get('#login-button').click()

    //Assert valida que o login foi efetuado com sucesso
    cy.contains('Escala Ministerial').should('be.visible')
  })
})