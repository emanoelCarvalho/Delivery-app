<template>
  <div class="container">
    <div class="categorias" v-for="(category, index) in finalProducts" :key="index">
      <h3 v-if="category.products.length > 0">{{ category.category.name }}</h3>
      <v-divider :thickness="3" class="border-opacity-50" color="warning"></v-divider>
      <div class="products">
        <Product v-for="product in category.products" :key="product.name" v-bind="product" @product-add="onProductAdd"
          @product-deleted="populateItems" />
      </div>
    </div>
    <Chart :products="cartProducts" @product-remove="onProductRemovedFromChart" />
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
      categories: [],
      finalProducts: [],
    };
  },
  created() {
    this.populateItems();
  },
  methods: {
    async getAllCategories() {
      try {
        const response = await axios.get('/category/getCategories');
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Erro ao buscar categorias: ', error);
      }
    },
    async populateItems() {
      try {
        await this.getAllItems();
        await this.getAllSideDishes();
        await this.getAllCategories();

        for (let i = 0; i < this.categories.length; i++) {
          const category = this.categories[i];
          const products = this.products.filter(product => product.CategoryId === category.id);
          this.finalProducts.push({
            category,
            products,
          });
        }
      } catch (error) {
        console.error('Erro ao buscar itens: ', error);
      }
    },
    async getAllItems() {
      const response = await axios.get('/item/getItems');
      this.products = response
        .data
        .items
        .map(({ createdAt, updatedAt, unitPrice, itemDescription, ...rest }) => ({ ...rest, price: unitPrice, description: itemDescription }))
        .sort((a, b) => a.CategoryId - b.CategoryId);
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
    onProductRemovedFromChart(index) {
      this.cartProducts.splice(index, 1);
    },
    onProductAdd(product) {
      this.cartProducts.push(product);
    },
  },
};
</script>
<style scoped>
.categorias {
  padding: 32px 32px 0 32px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 32px 16px 16px;
}
</style>
  