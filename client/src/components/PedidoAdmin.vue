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
        <div class="pedidos">
            <h3>Pendentes</h3>
            <div id="line"></div>
            <div class="ticket"></div>
            
        </div>
        <div class="pedidos">
            <h3>Aceitos</h3>
            <div id="line"></div>
            
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.ticket{
    margin-top: 20px;
    background: rgba(255, 189, 68, 0.80);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 99%;
    height: 75px;
    flex-shrink: 0;
}
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
    #line{
        margin-top: 10px;
        width: 99%;
        border-bottom: 1px solid black;
    }
    .pedidos{
        margin-top: 50px;
        margin-left: 35px;
    }

    button{
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        width: 150px;
        height: 38px;
        border-radius: 8px;
        color: #000;
        font-family: Inter;
        font-style: normal;
        line-height: normal;
    }

</style>