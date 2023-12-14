<script>
import axios from 'axios';

export default {
  name: 'ItemRegister',
  beforeCreate() {
    if (!this.$store.getters.isAdmin) {
      this.$router.push('/');
    }
  },
  beforeUpdate() {
    if (!this.$store.getters.isAdmin) {
      this.$router.push('/');
    }
  },
  data() {
    return {
      name: '',
      unitPrice: '',
      amount: '',
      category: '',
      itemDescription: '',
      imageLink: '',
      loading: false,
    }
  },
  methods: {
    async registerItem() {
      this.loading = true;
      try {
        const response = await axios.post('/item/createItem', {
          name: this.name,
          unitPrice: +this.unitPrice,
          amount: +this.amount,
          category: this.category,
          itemDescription: this.itemDescription,
          imageLink: this.imageLink,
        });
        if (response.status !== 201) {
          throw new Error('Erro ao cadastrar item');
        }
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao cadastrar item: ', error);
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>
<template>
  <div class="itemRegisterContainer" v-if="$store.getters.isAdmin">
    <v-card class="cardContainer">
      <v-card-title class="cardTitle">
        <h1>Cadastro de item</h1>
      </v-card-title>
      <v-card-text>
        <v-form class="formContainer">
          <v-text-field v-model="name" label="Nome do item" hide-details></v-text-field>
          <v-text-field v-model="itemDescription" label="Descrição do item" hide-details></v-text-field>
          <v-text-field v-model="category" label="Categoria" hide-details></v-text-field>
          <v-text-field v-model="imageLink" label="Link da imagem" hide-details></v-text-field>
          <v-text-field v-model="unitPrice" label="Preço unitário" hide-details type="number"></v-text-field>
          <v-text-field v-model="amount" label="Quantidade" hide-details type="number"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :loading="loading" @click="registerItem">Cadastrar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style scoped>
.cardTitle {
  padding-right: 64px;
}

.formContainer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.itemRegisterContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 64px;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px 16px;
  min-width: 360px;
}
</style>