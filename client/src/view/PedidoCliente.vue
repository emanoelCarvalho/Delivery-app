
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
    <div class="product-container">
      <div v-for="(category, categoryName) in menuItems" :key="categoryName">
        <h2>{{ categoryName }}</h2>
        <div class="product-list">
          <div v-for="(item, index) in category" :key="index" class="product-item" @click="toggleDescription(item)">
            <div class="product-details">
              <div class="item-content">
                <img class="product-image" :src="item.image" :alt="item.name">
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p class="item-price">Preço: {{ item.unitPrice }}</p>
                  <p v-if="item.showDescription" class="item-description">{{ item.itemDescription }}</p>
                </div>
              </div>
              <div class="item-controls">
                <button @click="decreaseQuantity(categoryName, index)">-</button>
                <span>{{ item.amount }}</span>
                <button @click="increaseQuantity(categoryName, index)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <div class="final-pedido">
    <button class="finalizar-pedido" @click="alterRouter()">Finalizar Pedido</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                menuItems: {}
            };
        },
        mounted() {
          axios.get('/item/getItems')
          .then(response => {
                    this.menuItems = response.data;
                })
                .catch(error => {
                    console.error('Erro ao buscar os itens:', error);
                });
        },
        methods: {
            increaseQuantity(categoryName, index) {
                this.menuItems[categoryName][index].amount++;
            },
            decreaseQuantity(categoryName, index) {
                if (this.menuItems[categoryName][index].amount > 0) {
                    this.menuItems[categoryName][index].amount--;
                }
            }, 
            alterRouter() {
              this.$router.push({name: "finalizarPedido"})
            }
        }
    }
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

.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding: 0;
}

.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 200px;
}

.product-image {
    width: 100%;
    max-width: 150px;
    height: auto;
}

.product-details {
    text-align: center;
}

.item-controls {
    display: flex;
    align-items: center;
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
.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre os itens */
}

.product-item {
  width: 100%; /* Largura total */
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 10px;
}

.item-content {
  display: flex;
  align-items: center;
}

.item-info {
  flex: 1; /* Ocupa todo o espaço disponível */
}

.item-controls {
  display: flex;
  align-items: center;
}

.item-controls button {
  background-color: #f0f0f0;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.item-description {
  display: none;
}

.product-item.active .item-description {
  display: block; /* Mostra a descrição quando o item é clicado */
}
</style>