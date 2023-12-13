<script>
export default {
  name: 'Chart',
  data() {
    return {
      open: false,
    };
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
  }
}
</script>
<template>
  <v-btn :disabled="this.products.length === 0" class="cartButton" @click="openChart" icon="mdi-cart"
    color="green"></v-btn>
  <v-dialog v-model="open" max-width="500px">
    <v-card title="Carrinho" prepend-icon="mdi-cart-outline">
      <v-card-text>
        <v-list lines="two">
          <v-list-item v-for="product in products" :key="product.id">
            <v-list-item-title>{{ product.count }}x {{ product.name }}</v-list-item-title>
            <v-list-item-subtitle>R$ {{ (product.price * product.count).toFixed(2) }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-title>Subtotal</v-list-item-title>
            <v-list-item-subtitle>R$ {{ products.reduce((acc, product) => acc + product.price * product.count,
              0).toFixed(2) }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="open = false">Fechar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text>Finalizar compra</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style scoped>
.cartButton {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>