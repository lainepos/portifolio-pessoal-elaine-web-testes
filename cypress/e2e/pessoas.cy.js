describe('Login', () => {
  beforeEach(() => {
     cy.visit('/')
     // Aguarda a página carregar completamente
     cy.get('body').should('be.visible')
  })

  it('Validar cadastro de novos membros com sucesso', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get(':nth-child(2) > input').click().type(credenciais.valida.usuario)
      cy.get(':nth-child(3) > input').click().type(credenciais.valida.senha)
      cy.get('#login-button').click()
    })

    cy.get('.navbar-start > [href="/pessoas"]').click()

    //adicionar nova pessoa
    cy.get('.button > :nth-child(2)').click()
    cy.get('.modal-card-body > :nth-child(1) > .control > .input').click().type('Pessoa teste')
    cy.get(':nth-child(2) > .control > .input').click().type('11999991111')
    cy.get(':nth-child(3) > .control > .input').click().type('Ministerio de Teste')
    cy.get('select').select('Membro')

    //salvar uma nova pessoa cadastrada
    cy.get('.modal-card-foot > .is-primary').click()
  })

   it.only('Validar cadastro de novos lideres com sucesso', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get(':nth-child(2) > input').click().type(credenciais.valida.usuario)
      cy.get(':nth-child(3) > input').click().type(credenciais.valida.senha)
      cy.get('#login-button').click()
    })

    cy.get('.navbar-start > [href="/pessoas"]').click()

    //adicionar nova pessoa
    cy.get('.button > :nth-child(2)').click()
    cy.get('.modal-card-body > :nth-child(1) > .control > .input').click().type('Pessoa teste')
    cy.get(':nth-child(2) > .control > .input').click().type('11999991111')
    cy.get(':nth-child(3) > .control > .input').click().type('Ministerio de Teste')
    cy.get('select').select('Líder')

    //salvar uma nova pessoa cadastrada
    cy.get('.modal-card-foot > .is-primary').click()
})    
}) 