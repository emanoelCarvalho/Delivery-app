# Delivery-App - Projeto de Disciplina

Este projeto foi desenvolvido como parte da disciplina de Projeto 1, com o objetivo de melhorar o estabelecimento e facilitar a entrega de pedidos. No futuro, planejamos oferecer essa solução para outros estabelecimentos interessados. Foi -se implementado a metodologia Scrum para esse projeto.

## Tecnologias Utilizadas

- ![Vue.js](https://vuejs.org/images/logo.png) Vue.js
- ![Node.js](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg) Node.js
- ![Axios](https://github.com/axios/axios/raw/master/assets/axios_logo_transparent.png) Axios
- ![Sequelize](https://raw.githubusercontent.com/sequelize/sequelize/master/docs/logo.png) Sequelize
- ![Vuetify](https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-300.png) Vuetify

## Criadores

Este projeto foi idealizado e implementado por:

### [Gilvan Paes](https://www.linkedin.com/in/gilvan-p-920631141/) | [GitHub](https://github.com/Gvjunior)
- PO & participação Breve do Back-end

### [Emanoel Carvalho](https://www.linkedin.com/in/emanoelCarvalho/) | [GitHub](https://github.com/emanoelCarvalho/)
- Development Team & Back-end

### [Wilder Carvalho](https://www.linkedin.com/in/wilder-carvalho/) | [GitHub](http://github.com/wcarvalho98/)
- Full Stack Developer

### [Gabriel Vinicius](link_para_o_linkedin) | [GitHub](link_para_o_github)
- Development Team & DBA

### [Gean de Lima](link_para_o_linkedin) | [GitHub](link_para_o_github)
- Development Team & Front-end

### [Cleiton Lucas](link_para_o_linkedin) | [GitHub](link_para_o_github)
- Development Team & Front-end

## Instalação e Uso

### Pré-requisitos

Certifique-se de ter o MySQL instalado em sua máquina antes de prosseguir.

### Passos

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. **Instale as dependências do servidor:**
    ```bash
    cd seu-repositorio/nome-do-servidor
    npm install
    ```

3. **Configuração do Banco de Dados:**
    - Crie um banco de dados MySQL.
    - Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e configure as variáveis relacionadas ao banco de dados, como `DB_HOST`, `DB_USER`, `DB_PASSWORD`, e `DB_NAME`.

4. **Execute as Migrações do Banco de Dados:**
    ```bash
    npx knex migrate:latest
    ```

5. **Instale as dependências do cliente:**
    ```bash
    cd seu-repositorio/nome-do-cliente
    npm install
    ```

6. **Inicie o Servidor (Back-end):**
    ```bash
    cd seu-repositorio/nome-do-servidor
    npm start
    ```

7. **Inicie o Cliente (Front-end):**
    ```bash
    cd seu-repositorio/nome-do-cliente
    npm start
    ```

8. **Acesse a aplicação no navegador:**
    Abra o navegador e vá para `http://localhost:8080` para visualizar a aplicação.

Certifique-se de que ambos os servidores (back-end na porta 3000 e front-end na porta 8080) estejam em execução simultaneamente para garantir o correto funcionamento da aplicação.