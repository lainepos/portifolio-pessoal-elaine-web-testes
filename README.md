# Escala Ministerial — Testes Automatizados (E2E)

Este repositório contém os testes automatizados end-to-end (E2E) da aplicação **Escala Ministerial**, utilizando o framework **Cypress** para validar as principais funcionalidades do sistema.

## Objetivo

O objetivo deste projeto é garantir a qualidade e funcionamento correto da aplicação Escala Ministerial através de testes automatizados que simulam o comportamento real do usuário, validando:

- Fluxos de autenticação (login)
- Cadastro e gerenciamento de ministérios
- Cadastro e gerenciamento de pessoas
- Cadastro e gerenciamento de eventos
- Navegação entre páginas e funcionalidades

## Pré-requisitos

Para executar os testes, você precisa ter:

- **Node.js** (versão LTS recomendada)
- **npm**
- **Aplicação frontend** rodando em `http://localhost:4000`
- **API backend** rodando em `http://localhost:3000`

## Estrutura do projeto

```
cypress/
├── e2e/                    # Testes end-to-end
│   ├── login.cy.js        # Testes de autenticação
│   ├── ministerios.cy.js  # Testes de ministérios
│   ├── pessoas.cy.js      # Testes de pessoas
│   └── eventos.cy.js      # Testes de eventos
├── fixtures/              # Dados de teste
│   ├── credenciais.json   # Credenciais para login
│   └── example.json       # Exemplo de fixture
├── support/               # Arquivos de suporte
│   ├── commands.js        # Comandos customizados
│   └── e2e.js            # Configurações globais
└── downloads/             # Arquivos baixados durante testes
cypress.config.js          # Configurações do Cypress
package.json               # Dependências e scripts
```

## Instalação e configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/lainepos/portifolio-pessoal-elaine-web-testes.git
cd portifolio-pessoal-elaine-web-testes
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Certifique-se de que a aplicação está rodando:**
   - Frontend: `http://localhost:4000`
   - Backend: `http://localhost:3000`

## Como executar os testes

### Modo interativo (Cypress Test Runner)

```bash
npx cypress open
```

Este comando abre a interface gráfica do Cypress, onde você pode:
- Escolher qual teste executar
- Visualizar os testes em tempo real
- Fazer debug dos testes
- Ver screenshots e vídeos dos testes

### Modo headless (linha de comando)

```bash
npx cypress run
```

Este comando executa todos os testes em modo headless (sem interface gráfica), ideal para CI/CD.

### Executar teste específico

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Mapeamento dos testes

### 🔐 Login (`login.cy.js`)
- **Teste 1**: Validar login com credenciais válidas
  - Verifica se o usuário consegue fazer login com `leader1/password`
  - Confirma acesso à aplicação com texto "Escala Ministerial"
- **Teste 2**: Validar login com credenciais inválidas
  - Testa login com credenciais incorretas
  - Valida exibição de mensagem de erro

### ⛪ Ministérios (`ministerios.cy.js`)
- **Teste 1**: Cadastro de novo ministério
  - Realiza login
  - Navega para a seção de ministérios
  - Cadastra um novo ministério com nome e descrição
  - Confirma salvamento

### 👥 Pessoas (`pessoas.cy.js`)
- **Teste 1**: Cadastro de nova pessoa
  - Realiza login
  - Navega para a seção de pessoas
  - Cadastra uma nova pessoa no sistema
  - Valida dados inseridos

### 📅 Eventos (`eventos.cy.js`)
- **Teste 1**: Cadastro de novo evento
  - Realiza login
  - Navega para a seção de eventos
  - Cadastra um novo evento
  - Seleciona ministério responsável (ex: "Louvor")
  - Define data do evento
  - Confirma salvamento

## Dados de teste (Fixtures)

Os dados de teste estão centralizados no arquivo `cypress/fixtures/credenciais.json`:

```json
{
    "valida": {
        "usuario": "leader1",
        "senha": "password"
    },
    "invalida": {
        "usuario": "leader1",
        "senha": "1234"
    }
}
```

## Configurações do Cypress

O arquivo `cypress.config.js` contém configurações otimizadas:

- **baseUrl**: `http://localhost:4000` (frontend)
- **pageLoadTimeout**: 120.000ms (2 minutos)
- **defaultCommandTimeout**: 10.000ms
- **viewportWidth**: 1280px
- **viewportHeight**: 720px

## Estratégia de testes

### Padrão utilizado
1. **Arrange**: Configurar estado inicial (login, navegação)
2. **Act**: Executar ação (preencher formulários, clicar botões)
3. **Assert**: Validar resultado esperado

### Elementos testados
- **Autenticação**: Login com credenciais válidas e inválidas
- **Navegação**: Links e menus principais
- **Formulários**: Cadastros de ministérios, pessoas e eventos
- **Seletores**: Dropdowns e campos de seleção
- **Validações**: Mensagens de erro e sucesso

## Solução de problemas comuns

### Timeout de carregamento
Se os testes falharem por timeout, verifique:
1. Se o frontend está rodando em `http://localhost:4000`
2. Se o backend está respondendo
3. Se não há recursos CSS/JS que não estão carregando

### Elementos não encontrados
- Verifique se os seletores estão corretos
- Use seletores mais específicos (classes, IDs)
- Aguarde o carregamento com `cy.wait()` se necessário

### Múltiplos elementos
Para elementos duplicados (ex: menu mobile + desktop):
```javascript
cy.get('a.navbar-item[href="/ministerios"]').click() // Mais específico
cy.get('[href="/ministerios"]').first().click()      // Primeiro elemento
```

## Relatórios e evidências

- **Screenshots**: Salvos automaticamente em caso de falha
- **Vídeos**: Gravados durante execução (modo headless)
- **Logs**: Disponíveis no Test Runner para debug

## Integração com repositórios relacionados

Este projeto de testes trabalha em conjunto com:
- **Frontend**: [portifolio-pessoal-elaine-web](https://github.com/lainepos/portifolio-pessoal-elaine-web)
- **Backend**: [portifolio-pessoal-elaine-api](https://github.com/lainepos/portifolio-pessoal-elaine-api)

## Casos de teste detalhados

Para casos de teste mais detalhados, consulte:
- **Planilha**: [Google Sheets - Casos de Teste](https://docs.google.com/spreadsheets/d/10ZKafG-q_R8GDS9wyyPhxHKUMcKZc6JknlgHDwsWu0k/edit?gid=911841702#gid=911841702)
- **Documentação**: `docs/TestPlan.md` (se disponível)

## Bugs e Issues

Bugs identificados e melhorias podem ser registrados na [aba Issues](https://github.com/lainepos/portifolio-pessoal-elaine-web-testes/issues) do GitHub.

## Contribuição

Para contribuir com novos testes:
1. Faça fork do repositório
2. Crie uma branch para sua feature
3. Adicione testes seguindo o padrão existente
4. Envie um Pull Request

---

**Autor**: Elaine  
**Licença**: ISC 