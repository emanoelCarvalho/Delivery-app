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
      itemDescription: '',
      imageLink: '',
      loading: false,
      category: null,
      categories: [],
      focused: false,
      loadingCategories: true,
    }
  },
  mounted() {
    this.$refs.autocomplete.addEventListener('keyup', (e) => {
      if (e.keyCode !== 8) {
        this.category = this.$refs.autocomplete.value;
      } else {
        if (this.category === null) {
          this.$refs.autocomplete.value = '';
        }
      }
    });
    this.getCategories().then((categories) => {
      this.categories = categories.sort((a, b) => a.name.localeCompare(b.name)).map((category) => category.name);
    }).finally(() => {
      this.loadingCategories = false;
    });
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
    },
    async getCategories() {
      try {
        const response = await axios.get('/category/getCategories');
        if (response.status !== 200) {
          throw new Error('Erro ao buscar categorias');
        }
        return response.data.categories;
      } catch (error) {
        console.error('Erro ao buscar categorias: ', error);
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
          <v-autocomplete ref="autocomplete" v-model="category" label="Categoria" :loading="loadingCategories"
            :disabled="loadingCategories" :items="categories" clearable persistent-clear hide-details
            hide-no-data></v-autocomplete>
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