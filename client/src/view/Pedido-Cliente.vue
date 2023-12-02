
<template>
    <header class="header-up">
        <nav class="nav-up">
            <div class="logo-container">
                <img class="logo" src="../lib/logo.png">
            </div>
            <ul class="Carrinho">
                <button>Carrinho</button>
            </ul>
        </nav>
    </header>

    <main class="main-content">
            <div class="product-container">
                <div v-for="(category, categoryName) in menuItems" :key="categoryName">
                    <h2>{{ categoryName }}</h2>
                    <div class="product-list">
                        <div v-for="(item, index) in category" :key="index" class="product-item">
                            <img class="product-image" :src="item.image" :alt="item.name">
                            <div class="product-details">
                                <h3>{{ item.name }}</h3>
                                <p>Preço: {{ item.price }}</p>
                                <div class="item-controls">
                                    <button @click="decreaseQuantity(categoryName, index)">-</button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="increaseQuantity(categoryName, index)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    <div class="final-pedido">
        <button>Finalizar Pedido</button>
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
            axios.get('/items')
                .then(response => {
                    this.menuItems = response.data;
                })
                .catch(error => {
                    console.error('Erro ao buscar os itens:', error);
                });
        },
        methods: {
            increaseQuantity(categoryName, index) {
                this.menuItems[categoryName][index].quantity++;
            },
            decreaseQuantity(categoryName, index) {
                if (this.menuItems[categoryName][index].quantity > 0) {
                    this.menuItems[categoryName][index].quantity--;
                }
            }
        }
    }
</script>

<style scoped>

.header-up{
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    background-color: blue; 
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
    width: 15%;
}

.main-content{
    margin-top: 8%;
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
  background-color: blue;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid #ccc;
}
</style>