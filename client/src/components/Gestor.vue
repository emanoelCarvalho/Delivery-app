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
      <div class="criacao">
          <button id="botaocriacao">Criar categoria</button>
          <button id="botaocriacao">Adicionar item</button>
      </div>
      <div class="categorias">
          <h3>Nome da categoria</h3>
          <div id="linha"></div>
          <div class="itens">
              <img src="../assets/download.png" alt="foto" id="fotoitem">
              <figcaption>
                  <p id="nomeprod">Nome do produto</p>
              </figcaption>
              <p> 
                  <input type="checkbox" id="toggleitem">
                  <label for="toggleitem"></label>
                  <p>
                      <input type="number" class="preco">
                  </p>
                  <button id="botaoedit">Editar</button>
              </p>
          </div>
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
  #nomeprod{
      margin-left: 50px;
      margin-top: 30px;
  }
  
  #toggleitem{
      display: none;
  }
  #toggleitem + label{
      margin-left: 20px;
      margin-top: 50px;
      width: 40px;
      height: 18px;
      background-color: darkslategray;
      display: block;
      position: relative;
      border: 1px solid black;
      border-radius: 100px;
      padding: 2px;
      transition: 200ms;
      cursor: pointer;
  }
  #toggleitem + label::before{
      content: '';
      position: absolute;
      width: 18px;
      height: 16px;
      background: white;
      display: block;
      border-radius: 50%;
      right: unset;
      left: 2px;
      top: 3px;
      transition: 200ms;
  }
  #toggleitem:checked +label{
      background: blue;
  }
  #toggleitem:checked + label::before{
      content: '';
      left: calc(100% - 22px);
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
  .criacao{
      margin-top: 35px;
  }
  .categorias{
      margin-top: 60px;
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
      width: 130px;
      height: 35px;
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

  #fotoitem{
      top: 25px;
      left: 40px;
      position: relative;
      max-width: 130px;
      max-height: 122px;
      background-color: #FFF;
      border: 1px solid black;
  }
  .preco{
      display: block;
      margin-top: -39.5px;
      margin-left: 80px;
      width: 40px;
      height: 16px;
      border-radius: 8px;
      border: 2px solid #343434;
      background: #FFF;
      position: relative;
  }

  #botaoedit{
      margin-top: -38px;
      margin-left: 140px;
      display: block;
      position: relative;
  }

  #linha{
      margin-top: 10px;
      width: 99%;
      border-bottom: 2px solid black;
  }
</style>