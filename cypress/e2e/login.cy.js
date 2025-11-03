describe('Login', () => {
  beforeEach(() => {
     cy.visit('/')
     // Aguarda a página carregar completamente
     cy.get('body').should('be.visible')
  })

  it.only('Validar login com dados válidos para permitir acesso a aplicação escala ministerial', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get(':nth-child(2) > input').click().type(credenciais.valida.usuario)
      cy.get(':nth-child(3) > input').click().type(credenciais.valida.senha)
    })
    
    cy.get('#login-button').click()
    
    // Aguarda o carregamento após o login
    cy.wait(2000)
   // cy.screenshot('apos-login-com-dados-validos')

    //Assert valida que o login foi efetuado com sucesso
    cy.contains('Escala Ministerial', { timeout: 15000 }).should('be.visible')
  })

    it('Validar login com dados inválidos deve permitir mensagem de erro', () => {
     cy.fixture('credenciais').then(credenciais => {
        cy.get(':nth-child(2) > input').click().type(credenciais.invalida.usuario)
        cy.get(':nth-child(3) > input').click().type(credenciais.invalida.senha)
      })
    cy.get('#login-button').click()

    //Assert valida que o login falhou
    cy.get('#login-error', { timeout: 10000 }).should('have.text', '{"message":"Um erro ocorreu"}')
   // cy.screenshot('apos-login-com-dados-invalidos')
  })
})