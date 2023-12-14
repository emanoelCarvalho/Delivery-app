<template>
  <div class="container">
    <Header />
    <div class="criacao">
      <button @click="toggleInput('categoria')">Criar categoria</button>
      <input v-if="mostrarInputCategoria" v-model="categoria.nome" placeholder="Nome da categoria">
      <button v-if="mostrarInputCategoria" @click="salvarCategoria">Salvar Categoria</button>

      <button @click="toggleInput('item')">Adicionar item</button>
      <div v-if="mostrarInputItem">
        <input v-model="item.name" placeholder="Nome do item">
        <input v-model="item.itemDescription" placeholder="Descrição do item">
        <input v-model="item.unitPrice" placeholder="Preço do item">
        <input v-model="item.amount" placeholder="Quantidade do item">
        <button @click="salvarItem">Salvar Item</button>
      </div>
    </div>
    <div class="categorias">
      <h3>Comida</h3>
      <v-divider :thickness="3" class="border-opacity-50" color="warning"></v-divider>
      <div class="products">
        <Product v-for="product in products" :key="product.name" v-bind="product" @product-add="onProductAdd" />
      </div>
    </div>
    <Chart :products="cartProducts" @product-remove="onProductRemove" />
  </div>
</template>
  
<script>
import axios from 'axios';
import Header from './Header.vue';
import Product from './Product.vue';
import Chart from './Chart.vue';

export default {
  components: {
    Header,
    Product,
    Chart,
  },
  data() {
    return {
      mostrarInputCategoria: false,
      mostrarInputItem: false,
      categoria: {
        nome: '',
      },
      item: {
        name: '',
        unitPrice: '',
        amount: '',
      },
      products: [
        {
          id: 1,
          name: 'Feijoada',
          price: 19.90,
          amount: 5,
          sideDishesOptions: [
            {
              id: 1,
              name: 'Arroz',
            },
            {
              id: 2,
              name: 'Batata frita',
            },
            {
              id: 3,
              name: 'Farofa',
            },
          ],
        },
        {
          id: 2,
          name: 'Camarão na moranga',
          price: 39.99,
          amount: 5,
          sideDishesOptions: [
            {
              id: 1,
              name: 'Arroz',
            },
            {
              id: 2,
              name: 'Batata frita',
            },
            {
              id: 3,
              name: 'Farofa',
            },
          ],
        },
      ],
      cartProducts: [],
    };
  },
  methods: {
    onProductRemove(index) {
      this.cartProducts.splice(index, 1);
    },
    onProductAdd(product) {
      this.cartProducts.push(product);
    },
    toggleInput(tipo) {
      // Resetar valores e alternar a visibilidade do input
      if (tipo === 'categoria') {
        this.mostrarInputCategoria = !this.mostrarInputCategoria;
        this.categoria.nome = '';
      } else if (tipo === 'item') {
        this.mostrarInputItem = !this.mostrarInputItem;
        this.item = {
          name: '',
          itemDescription: '',
          unitPrice: '',
          amount: '',
        };
      }
    },
    async salvarCategoria() {
      try {
        if (this.categoria.nome === '') {
          alert('Preencha o nome da categoria antes de salvar');
          return;
        }

        const response = await axios.post('http://localhost:3000/categoria/criarCategoria', this.categoria);

        console.log('Categoria criada com sucesso: ', response.data);
        // Reinicializar estado após salvar
        this.mostrarInputCategoria = false;
        this.categoria.nome = '';
      } catch (error) {
        console.error('Erro ao realizar a criação de categoria: ', error);
      }
    },
    async salvarItem() {
      try {
        // Validar se todos os campos do item estão preenchidos
        if (Object.values(this.item).some(value => value === '')) {
          alert('Preencha todos os campos do item para adicioná-lo.');
          return;
        }

        const response = await axios.post('http://localhost:3000/item/createItem', this.item);

        console.log('Item adicionado com sucesso: ', response.data);
        // Reinicializar estado após salvar
        this.mostrarInputItem = false;
        this.item = {
          name: '',
          itemDescription: '',
          unitPrice: '',
          amount: '',
        };
      } catch (error) {
        console.error('Erro ao realizar a criação do item: ', error);
      }
    },
  },
};
</script>
<style scoped>
.criacao {
  margin-top: 35px;
}

.categorias {
  padding: 32px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 32px 16px 16px;
}
</style>
  