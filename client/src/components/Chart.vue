<script>
import { EventBus } from '@/lib/eventBus';
import axios from 'axios';

export default {
  name: 'Chart',
  data() {
    return {
      open: false,
      status: this.$store.getters.storeStatus,
      loading: false,
    };
  },
  mounted() {
    this.getStoreStatus();
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openChart() {
      this.open = true;
    },
    removeProduct(index) {
      EventBus.emit('product-removed', this.products[index].id);
      this.$emit('productRemove', index);
      if (this.products.length === 0) {
        this.open = false;
      }
    },
    async finishPurchase() {
      this.loading = true;
      try {
        await this.getStoreStatus();
        if (!this.status) {
          throw new Error('Loja fechada');
        }

        window.open('https://wa.me/+5581993255461?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20com%20os%20seguintes%20itens:%0A' + this.products.map((product) => {
          const sideDishes = product.sideDishes.map((sideDish) => {
            return product.sideDishesOptions.find((option) => option.id === sideDish).name;
          });
          return `${product.name} - ${sideDishes.join(', ')}`;
        }).join('%0A') + '%0A%0A*Total:*%20R$%20' + this.products.reduce((acc, product) => acc + product.price, 0).toFixed(2), '_blank');
      } catch (error) {
        console.error('Erro ao finalizar compra: ', error);
      } finally {
        this.loading = false;
      }
    },
    async getStoreStatus() {
      try {
        const response = await axios.get('/admin/getStatus/1');
        this.status = response.data.alterStatus;
        this.$store.dispatch('setStoreStatus', this.status);
      } catch (error) {
        console.error('Erro ao buscar status da loja: ', error);
      } finally {
        this.loading = false;
      }
    },
  },
  emits: ['productRemove'],
}

</script>
<template>
  <v-btn v-if="!$store.getters.isAdmin" :disabled="this.products.length === 0" class="cartButton" @click="openChart"
    icon="mdi-cart" color="green"></v-btn>
  <v-dialog v-model="open" max-width="500px">
    <v-card title="Carrinho" prepend-icon="mdi-cart-outline">
      <v-card-subtitle v-if="!status">
        <p>No momento a loja está fechada. Tente mais tarde!</p>
      </v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(product, index) in products" :key="index">
            <div class="productContainer">
              <div class="itemContainer">
                <v-list-item-title>{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle>R$ {{ (product.price).toFixed(2) }}</v-list-item-subtitle>
                <v-list-item-subtitle class="ml-2" v-for="sideDish in product.sideDishes" :key="sideDish.id">
                  {{ product.sideDishesOptions.find(option => option.id === sideDish).name }}
                </v-list-item-subtitle>
              </div>
              <v-btn icon="mdi-delete" @click="removeProduct(index)" variant="plain" color="red darken-1"
                density="compact"></v-btn>
            </div>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-item-title>Subtotal</v-list-item-title>
            <v-list-item-subtitle class="ml-2">R$ {{ products.reduce((acc, product) => acc + product.price, 0).toFixed(2)
            }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="open = false">Adicionar mais itens</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="finishPurchase" :loading="loading"
          :disabled="loading || !status">Finalizar compra</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style scoped>
.cartButton {
  position: fixed;
  bottom: 16px;
  right: 16px;
}

.productContainer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
}

.itemContainer {
  display: flex;
  flex-direction: column;
}
</style>