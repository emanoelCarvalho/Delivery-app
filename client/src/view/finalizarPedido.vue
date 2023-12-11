<template>    
    <header class="header-up">
      <nav class="nav-up">
        <div class="logo-container">
          <img class="logo" src="../lib/logo.png">
        </div>
        <ul class="Carrinho">
          <a class="btn-car" href=""><img src="../lib/button-cart.png" alt=""></a>
            </ul>
        </nav>
    </header>

    <main class="main-content">
    <div class="pedido-container">
      <h2>Itens do Pedido</h2>
      <ul class="lista-pedido">
        <!-- Gena: Exibir dos itens recebidos -->
        <li v-for="(item, index) in itensPedido" :key="index">
          {{ item.name }} - {{ item.amount }}x - R$ {{ item.unitPrice }}
        </li>
      </ul>

      <div class="informacoes-consumo">
        <h2>Informações de Consumo</h2>

        <div class="opcoes-entrega">
          <label>
            <input
              type="radio"
              v-model="tipoEntrega"
              value="retirada"
            />
            Retirada no Estabelecimento
          </label>
          <label>
            <input
              type="radio"
              v-model="tipoEntrega"
              value="entrega"
            />
            Entrega
          </label>
        </div>
        <div v-if="tipoEntrega === 'entrega'" class="detalhes-entrega">
          <input type="text" placeholder="Rua" v-model="endereco.rua" />
          <input type="text" placeholder="CEP" v-model="endereco.cep" />
          <input type="text" placeholder="Número" v-model="endereco.numero" />
          <input type="text" placeholder="N. Telefone" v-model="endereco.telefone"/>     
          <input type="text" placeholder="Nome" v-model="endereco.nome" />
          <input
            type="text"
            placeholder="Complemento"
            v-model="endereco.complemento"
          />

          <!--Gena: Opção de pagamento -->
          <label>
            <input
              type="radio"
              v-model="endereco.tipoPagamento"
              value="dinheiro"
            />
            Pagamento em Dinheiro
          </label>
          <label>
            <input
              type="radio"
              v-model="endereco.tipoPagamento"
              value="cartao"
            />
            Pagamento em Cartão
          </label>
        </div>
      </div>
      <div class="total">
        <p>Total: R$ {{ calcularTotal().toFixed(2) }}</p>
      </div>
    </div>
  </main>
  
  <div class="final-pedido">
    <button class="finalizar-pedido">Finalizar Pedido</button>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  props: {
    itensPedido: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tipoEntrega: 'retirada', // Gena: valor default ao carregar essa pagina ele inicia nessa opção
      endereco: {
        rua: '',
        cep: '',
        numero: '',
        telefone: '',
        nome: '',
        complemento: '',
        tipoPagamento: 'dinheiro', // Gena: valor default ao carregar essa pagina ele inicia nessa opção
      },
    };
  },
  methods: {
    calcularTotal() {
      return this.itensPedido.reduce((total, item) => total + (item.unitPrice * item.amount), 0);
    },
    finalizarPedido() {
      const dadosPedido = {
        itens: this.itensPedido,
        valorTotal: this.calcularTotal(),
        endereco: this.endereco,
      };
      axios.post('/itens/getItens', dadosPedido)
        .then(response => {
          console.log('Pedido Recebido', response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar pedido:', error);
        });
    },
  },
};
</script>


<style scoped>
body{
  background-color: white;
}

.header-up{
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    background-color: rgb(255, 152, 68); 
    z-index: 999;
}

.nav-up{
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding: 10px 20px;
}

.Carrinho{
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: flex;
}

.logo{
    width: 150px;
    height: auto;
}

.main-content{
    margin-top: 55px;
}

.final-pedido {
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-bottom: 15px;
}

.finalizar-pedido{
 background-color: rgb(239, 40, 30);
 width: 274px;
 height: 57px;
 border-radius: 10px;
 color: white;
 border: none;
}

.finalizar-pedido:hover{
  background-color: rgb(173, 7, 7);
}

.pedido-container {
  padding: 20px;
}

.lista-pedido {
  list-style: none;
  padding: 0;
}

.opcoes-entrega {
  margin-bottom: 20px;
}

.detalhes-entrega input,
.detalhes-entrega label {
  display: block;
  margin-bottom: 10px;
}
</style>