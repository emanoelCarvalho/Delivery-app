<template>
    <div class="container">
        <div class="barranav">
            <img src="../../public/logo.png" alt="logo" class="logomarca">
                <button id="botaonav">Pedidos</button>
                <button id="botaonav">Gestor</button>
                <button id="botaonav">Análise</button>
                <button id="botaonav">IA</button>
                <button id="botaonav">Configurações</button>
        </div>
        <div class="criacao">
            <button id="botaocriacao">Criar categoria</button>
            <button id="botaocriacao">Adicionar item</button>
        </div>
        <div class="categorias">
            <label>Nome da categoria</label>
            <div id="linha"></div>
            <div class="itens">
                <img src="../assets/download.png" alt="foto" id="fotoitem">
                <input type="number" id="preco">
                <div>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
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
    .criacao{
        margin-top: 35px;
    }
    .categorias{
        margin-top: 35px;
        margin-left: 40px;
    }
    .itens{
        margin-top: 20px;
        border: none;
        border-radius: 10px;
        background: rgba(204, 199, 199, 0.80);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 220px;
        height: 273px;
    }
    #botaonav{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        margin-left: 20px;
        bottom: 15px;
        left: 100px;
        position: relative;
        width: 150px;
        height: 40px;
        border-radius: 7px;
        border: none;
        background-color: #FFD0AA;
    }
    #botaocriacao{
        margin-left: 20px;
        width: 250px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background: rgba(170, 101, 45, 0.70);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    #preco{
        margin-left: 70px;
        margin-top: 80px;
        width: 70px;
        height: 25px;
        border-radius: 8px;
        border: 1px solid #000;
        background: #FFF;
    }
    #fotoitem{
        top: 25px;
        left: 40px;
        position: relative;
        max-width: 130px;
        max-height: 122px;
        background-color: #FFF;
        border: 1px solid black;
    }
    #linha{
        margin-top: 10px;
        width: 99%;
        border-bottom: 2px solid black;
    }
</style>