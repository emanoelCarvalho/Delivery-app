# Delivery-App - Projeto de Disciplina

Este projeto foi desenvolvido como parte da disciplina de Projeto de desenvolvimento 1, com o objetivo de melhorar o estabelecimento e facilitar a entrega de pedidos. No futuro, planejamos oferecer essa solução para outros estabelecimentos interessados. Utilizou-se da metodologia Scrum para esse projeto.

## Tecnologias Utilizadas

- <img src="https://vuejs.org/images/logo.png" alt="Vue.js" width="30" height="30"> Vue.js
- <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="Node.js" width="30" height="30"> Node.js
- <img src="https://github.com/axios/axios/raw/master/assets/axios_logo_transparent.png" alt="Axios" width="30" height="30"> Axios
- <img src="https://raw.githubusercontent.com/sequelize/sequelize/master/docs/logo.png" alt="Sequelize" width="30" height="30"> Sequelize
- <img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-300.png" alt="Vuetify" width="30" height="30"> Vuetify

## Criadores

Este projeto foi idealizado e implementado por:


### [Emanoel Carvalho](https://www.linkedin.com/in/emanoelCarvalho/) | [GitHub](https://github.com/emanoelCarvalho/)
- Development Team & Back-end

### [Wilder Carvalho](https://www.linkedin.com/in/wilder-carvalho/) | [GitHub](http://github.com/wcarvalho98/)
- Full Stack Developer

### [Gilvan Paes](https://www.linkedin.com/in/gilvan-p-920631141/) | [GitHub](https://github.com/Gvjunior)
- PO & participação Breve do Back-end

### [Gabriel Vinicius]([https://www.linkedin.com/in/gabriel-vinicius-4b7b96254]) | [GitHub](https://github.com/Gabxxxx)
- Development Team & DBA

### [Gean de Lima](link_para_o_linkedin) | [GitHub](https://github.com/Foccuns169)
- Development Team & Front-end

### [Cleiton Lucas](link_para_o_linkedin) | [GitHub](https://github.com/CleitonLucas)
- Development Team & Front-end

## Instalação e Uso

### Pré-requisitos

Certifique-se de ter o MySQL instalado em sua máquina antes de prosseguir.

### Passos

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/emanoelCarvalho/Delivery-app.git
    ```

2. **Instale as dependências do servidor:**
    ```bash
    cd Delivery-app/server
    npm install
    ```

3. **Configuração do Banco de Dados:**
    - Crie um banco de dados MySQL.
    - Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e configure as variáveis relacionadas ao banco de dados, como `DB_HOST`, `DB_USER`, `DB_PASSWORD`, e `DB_NAME`.

5. **Instale as dependências do cliente:**
    ```bash
    cd Delivery-app/client
    npm install
    ```

6. **Inicie o Servidor (Back-end):**
    ```bash
    cd Delivery-app/server
    npm start
    ```

7. **Inicie o Cliente (Front-end):**
    ```bash
    cd Delivery-app/client
    npm run serve
    ```

8. **Acesse a aplicação no navegador:**
    Abra o navegador e vá para `http://localhost:8080` para visualizar a aplicação.

Certifique-se de que ambos os servidores (back-end na porta 3000 e front-end na porta 8080) estejam em execução simultaneamente para garantir o correto funcionamento da aplicação.