<template>
  <div class="container">
    <div class="categorias">
      <h3>Comida</h3>
      <v-divider :thickness="3" class="border-opacity-50" color="warning"></v-divider>
      <div class="products">
        <Product v-for="product in products" :key="product.name" v-bind="product" @product-add="onProductAdd" />
      </div>
    </div>
    <Chart :products="cartProducts" @product-remove="onProductRemove" />
    <Settings />
  </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Product from './Product.vue';
import Chart from './Chart.vue';
import Settings from './Settings.vue';

export default {
  components: {
    Header,
    Product,
    Chart,
    Settings,
  },
  data() {
    return {
      mostrarInputCategoria: false,
      mostrarInputItem: false,
      sideDishesOptions: [],
      categoria: {
        nome: '',
      },
      item: {
        name: '',
        unitPrice: '',
        amount: '',
      },
      products: [],
      cartProducts: [],
    };
  },
  created() {
    this.populateItems();
  },
  methods: {
    async populateItems() {
      try {
        await this.getAllItems();
        await this.getAllSideDishes();
      } catch (error) {
        console.error('Erro ao buscar itens: ', error);
      }
    },
    async getAllItems() {
      const response = await axios.get('/item/getItems');
      this.products = response.data.items.map(({ createdAt, updatedAt, unitPrice, itemDescription, ...rest }) => ({ ...rest, price: unitPrice, description: itemDescription }));
    },
    async getAllSideDishes() {
      try {
        const response = await axios.get('/acompanhamento/getAcompanhamentos');
        this.sideDishesOptions = response.data.acompanhamentos.map(({ createdAt, updatedAt, ...rest }) => rest);
        this.products = this.products.map(product => ({
          ...product,
          sideDishesOptions: this.sideDishesOptions,
        }));
      } catch (error) {
        console.error('Erro ao buscar acompanhamentos: ', error);
      }
    },
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
  