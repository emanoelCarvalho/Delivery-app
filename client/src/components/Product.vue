<script>
export default {
  name: 'Product',
  data() {
    return {
      count: 0,
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
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    emitProduct() {
      this.$emit('productChange', this.id, this.count);
    },
    add() {
      if (this.count < this.amount) {
        this.count++;
        this.emitProduct();
      }
    },
    remove() {
      if (this.count > 0) {
        this.count--;
        this.emitProduct();
      }
    },
  }
}
</script>

<template>
  <v-card max-width="200px" height="fit-content" hover variant="flat" class="card">
    <div class="product">
      <div class="product-image">
        <img src="https://picsum.photos/168/156" alt="product">
      </div>
      <div class="product-info">
        <h4>R$ {{ price }}</h4>
        <p>{{ name }}</p>
        <div class="addProduct">
          <div v-if="count === 0">
            <v-btn @click="add" variant="text" block>Comprar</v-btn>
          </div>
          <div v-else class="product-buttons">
            <v-btn v-if="count > 1" @click="remove" density="comfortable" icon="mdi-minus" color="red"></v-btn>
            <v-btn v-else @click="remove" density="comfortable" icon="mdi-delete" color="red"></v-btn>
            <p>{{ count }}</p>
            <v-btn @click="add" density="comfortable" icon="mdi-plus" :disabled="count === amount" color="green"></v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  cursor: default;
}

.addProduct {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
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

.product-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>