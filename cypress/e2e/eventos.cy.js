describe('Eventos', () => {
  beforeEach(() => {
     cy.visit('/')
     // Aguarda a página carregar completamente
     cy.get('body').should('be.visible')
  })

  it('Validar o cadastro de um novo evento com sucesso', () => {

     cy.fixture('credenciais').then(credenciais => {
     cy.get(':nth-child(2) > input').click().type(credenciais.valida.usuario)
     cy.get(':nth-child(3) > input').click().type(credenciais.valida.senha)
     cy.get('#login-button').click()
     
     cy.wait(2000)
     //clica em Eventos
      cy.get('a.navbar-item[href="/eventos"]').click()

      // clica em novo evento
      cy.get('.button > :nth-child(2)').click()
      cy.get(':nth-child(1) > .control > .input').click().type('Evento de Teste')
      cy.get(':nth-child(2) > .control > .input').click().type('2024-12-31')
      
      // Seleciona o ministério "Louvor" no dropdown
      cy.get('#event-ministry-select').select('Louvor')

      //salva o evento cadastrado
      cy.get('.modal-card-foot > .is-primary').click()  

    })
})

})