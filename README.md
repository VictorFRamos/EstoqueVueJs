# EstoqueVueJs# Controle de Estoque

Um aplicativo simples de controle de estoque desenvolvido com Vue.js no frontend e Node.js com MongoDB no backend. Este aplicativo permite que os usuários gerenciem itens de estoque, adicionando, visualizando e removendo itens.

## Tecnologias Utilizadas

- **Frontend**: 
  - Vue.js
  - Vue Router
  - Vuex
  - Axios

- **Backend**: 
  - Node.js
  - Express
  - MongoDB (com Mongoose)
  - CORS
  - Body-parser

## Funcionalidades

- Adicionar novos itens ao estoque.
- Visualizar a lista de itens em estoque.
- Remover itens do estoque.

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Estrutura do Projeto

<code>
/estoque-app
│
├── /backend # Backend da aplicação
│ ├── server.js # Arquivo principal do servidor
│ ├── /models # Modelos do MongoDB
│ │ └── Item.js # Modelo para os itens do estoque
│ └── /routes # Rotas da API
│ └── itemRoutes.js # Rotas para gerenciar itens
│
├── /public # Arquivo HTML principal do Vue.js
│ └── index.html # Arquivo HTML principal
│
├── /src # Código fonte do Vue.js
│ ├── /assets # Imagens, fontes e outros arquivos estáticos
│ ├── /components # Componentes reutilizáveis
│ │ ├── Item.vue # Componente para exibir um item do estoque
│ │ └── ItemForm.vue # Componente para adicionar/editar itens
│ │
│ ├── /views # Telas principais da aplicação
│ │ ├── Home.vue # Tela inicial
│ │ └── Inventory.vue # Tela de controle de estoque
│ │
│ ├── /store # Gerenciamento de estado com Vuex (opcional)
│ │ └── index.js # Configuração do Vuex
│ │
│ ├── /router # Configuração das rotas da aplicação
│ │ └── index.js # Definição das rotas
│ │
│ ├── App.vue # Componente raiz da aplicação Vue.js
│ └── main.js # Entrada principal do Vue.js
│
└── package.json # Dependências e scripts do projeto
</code>

## Instalação

### Backend

1. Navegue até a pasta `backend`:

    ```bash
    cd backend
    ```

2. Instale as dependências necessárias:

    ```bash
    npm install express mongoose cors body-parser
    ```

3. Inicie o servidor:

    ```bash
    node server.js
    ```

### Frontend

1. Navegue até a pasta raiz do projeto:

    ```bash
    cd ..
    ```

2. Navegue até a pasta `src`:

    ```bash
    cd src
    ```

3. Instale as dependências necessárias:

    ```bash
    npm install axios vue-router vuex --save
    ```

4. Inicie a aplicação Vue:

    ```bash
    npm run serve
    ```

## Uso

Após iniciar o backend e o frontend, você pode acessar a aplicação no navegador através do endereço `http://localhost:8080`. Você poderá adicionar novos itens ao estoque, visualizar a lista de itens e remover itens existentes.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções! Abra um pull request ou crie uma issue se encontrar algum problema.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.