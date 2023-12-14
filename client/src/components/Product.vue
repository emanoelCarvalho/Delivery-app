<script>
import { EventBus } from '@/lib/eventBus';

export default {
  name: 'Product',
  data() {
    return {
      count: 0,
      open: false,
      sideDishes: [],
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    sideDishesOptions: {
      type: Array,
    },
  },
  created() {
    EventBus.on('product-removed', this.onProductRemoved);
  },
  beforeUnmount() {
    EventBus.off('product-removed', this.onProductRemoved);
  },
  methods: {
    onProductRemoved(productId) {
      if (this.id === productId && this.count > 0) {
        this.count--;
      }
    },
    emitProduct() {
      const product = {
        id: this.id,
        name: this.name,
        price: this.price,
        sideDishes: this.sideDishes,
        sideDishesOptions: this.sideDishesOptions,
      };
      this.$emit('productAdd', product);
    },
    add() {
      if (this.count < this.amount) {
        this.count++;
        this.open = false;
        this.emitProduct();
        this.sideDishes = [];
      }
    }
  },
  emits: ['productAdd'],
}
</script>

<template>
  <v-card max-width="300px" height="fit-content" hover variant="flat" class="card" @click="open = true"
    :disabled="count === amount">
    <div class="product">
      <div class="product-image">
        <img src="https://picsum.photos/168/156" alt="product">
      </div>
      <div class="product-info">
        <h4>R$ {{ price.toFixed(2) }}</h4>
        <p>{{ name }}</p>
      </div>
    </div>
  </v-card>
  <v-dialog v-model="open" max-width="500px">
    <v-card :title="name" :subtitle="description">
      <v-card-text>
        <v-container fluid>
          <div v-for="sideDish in sideDishesOptions" :key="sideDish.id" class="sideDishNameContainer">
            <p>{{ sideDish.name }}</p>
            <div>
              <v-checkbox v-model="sideDishes" :value="sideDish.id" density="compact" hide-details
                :disabled="$store.getters.isAdmin" class="text-right"></v-checkbox>
            </div>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="red darken-1" text @click="open = false">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="$store.getters.isAdmin" color="green darken-1" @click="add" text>Adicionar - R$ {{
          price.toFixed(2)
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.sideDishNameContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.product-image {
  width: 168px;
  height: 156px;
  border-radius: 8px;
  overflow: hidden;
}

.product {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>