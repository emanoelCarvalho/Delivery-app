<script>
import axios from 'axios';

export default {
  name: 'SideDishRegister',
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
      amount: '',
      loading: false,
    }
  },
  methods: {
    async registerSideDish() {
      this.loading = true;
      try {
        const response = await axios.post('/acompanhamento/createAcompanhamento', {
          name: this.name,
          amount: +this.amount,
        });
        if (response.status !== 201) {
          throw new Error('Erro ao cadastrar acompanhamento');
        }
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao cadastrar acompanhamento: ', error);
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>
<template>
  <div class="sideDishRegisterContainer" v-if="$store.getters.isAdmin">
    <v-card class="cardContainer">
      <v-card-title class="cardTitle">
        <h1>Cadastro de acompanhamento</h1>
      </v-card-title>
      <v-card-text>
        <v-form class="formContainer">
          <v-text-field v-model="name" label="Nome do acompanhamento" hide-details></v-text-field>
          <v-text-field v-model="amount" label="Quantidade" hide-details type="number"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :loading="loading" @click="registerSideDish">Cadastrar</v-btn>
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

.sideDishRegisterContainer {
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