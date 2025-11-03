describe('Ministérios', () => {
  beforeEach(() => {
     cy.visit('/')
     // Aguarda a página carregar completamente
     cy.get('body').should('be.visible')
  })

  it('Validar o cadastro de um novo ministério com sucesso', () => {
     cy.fixture('credenciais').then(credenciais => {
     cy.get(':nth-child(2) > input').click().type(credenciais.valida.usuario)
     cy.get(':nth-child(3) > input').click().type(credenciais.valida.senha)
     cy.get('#login-button').click()
     
     cy.wait(2000)
     //clica em ministérios
     cy.get('a.navbar-item[href="/ministerios"]').click()
     //clica em novo ministério
     cy.get('.button > :nth-child(2)').click()
     cy.get('.input').click().type('Ministério de Teste')    
     cy.get('.textarea').click().type('Descrição do Ministério de Teste')

     //Assert clica no salvar para incluir novo ministério
     cy.get('.modal-card-foot > .is-primary').click()
    })

 })

 })
