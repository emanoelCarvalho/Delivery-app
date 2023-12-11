<template>
    <div class="container">
        <div class="barranav">
            <img src="../../public/logo.png" alt="logo" class="logomarca">
            <button id="botaonav">Pedidos</button>
            <button id="botaonav">Gestor</button>
            <button id="botaonav">Análise</button>
            <button id="botaonav">IA</button>
            <button id="botaonav">Configurações</button>

            <p>
                <input type="checkbox" id="togglestatus">
                <label for="togglestatus"></label>
            </p>

        </div>
        <div class="informacaoperfil">
            <div>    
                <input type="image" id="fotoperfil">
            </div>
            <p id="edicaofoto">
                Editar foto de perfil 
                <button id="botaoeditfoto">Editar</button>
            </p>
            <form>
                <p id="teste">
                    <label for="nomefantasia"><strong>NOME DO ESTABELECIMENTO:</strong></label>
                    <input type="text" id="nomefantasia" class="informacao">
                </p>
                <p id="teste">
                    <label for="cnpj/cpf"><strong>CNPJ/CPF:</strong></label>
                    <input type="text" id="cnpj/cpf" class="informacao">
                </p>
                <p id="teste">
                    <label for="telefone"><strong>TELEFONE:</strong></label>
                    <input type="text" id="telefone" class="informacao">
                </p>
                <p id="teste">
                    <label for="email"><strong>EMAIL:</strong></label>
                    <input type="text" id="email" class="informacao">
                </p>
                <div id="line"></div>
                <p id="teste">
                    <label for="banco"><strong>BANCO:</strong></label>
                    <input type="text" id="banco" class="informacao">
                </p>
                <p id="teste">
                    <label for="agencia"><strong>AGÊNCIA:</strong></label>
                    <input type="text" id="agencia" class="informacao">
                </p>
                <p id="teste">
                    <label for="conta"><strong>CONTA:</strong></label>
                    <input type="text" id="conta" class="informacao">
                </p>
            </form>
            <button id="botaoeditinform">Editar</button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    #togglestatus{
        display: none;
    }
    #togglestatus + label{
        bottom: 62px;
        left: 1100px;
        width: 55px;
        height: 20px;
        background: lightgrey;
        display: block;
        position: relative;
        border-radius: 100px;
        padding: 2.5px;
        transition: 200ms;
        cursor: pointer;
    }
    #togglestatus + label:before{
        content: '';
        position: absolute;
        width: 20px;
        height: 18px;
        background: white;
        display: block;
        border-radius: 50%;
        right: unset;
        left: 2px;
        top: 3px;
        transition: 200ms;
    }
    #togglestatus:checked +label{
        background: #4DFF44;
    }
    #togglestatus:checked + label::before{
        content: '';
        left: calc(100% - 22px);
    }
    .logomarca{
        max-width: 200px;
        max-height: 200px;
        position: relative;
        left: 20px;
        top: 5px;
    }
    .barranav{
        background-color: #FF9944;
        height: 70px;
    }
    #botaonav{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        margin-left: 20px;
        bottom: 15px;
        left: 100px;
        position: relative;
        width: 130px;
        height: 35px;
        border-radius: 7px;
        border: none;
        background-color: #FFD0AA;
    }
    .informacaoperfil{
        margin: 25px;
        background: #dddddd;
        width: 1300px;
        height: 510px;
    }
    #fotoperfil{
        margin-top: 60px;
        margin-left: 90px;
        width: 300px;
        height: 250px;
        flex-shrink: 0;
        border: 1px solid #000;
    }
    #edicaofoto{
        margin-left: 120px;
        margin-top: 40px;
    }
    #botaoeditfoto{
        margin-left: 40px;
    }
    form{
        margin-top: -330px;
        margin-left: 550px;
    }
    #line{
        width: 100%;
        border-bottom: 1px solid black;
    }
    #teste{
        margin-bottom: 25px;
    }
    .informacao{
        margin-left: 10px;
    }

    #botaoeditinform{
        bottom: 62px;
        right: 15%;
        position: absolute;
        width: 100px;
        height: 40px;
        flex-shrink: 0;
        border: none;
        border-radius: 10px;
        background: rgba(255, 208, 170, 0.90);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
</style>