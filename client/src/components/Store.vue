<script>
import axios from 'axios';

export default {
  name: 'Store',
  data() {
    return {
      storeStatus: this.$store.getters.storeStatus,
      loading: true,
    };
  },
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
  created() {
    this.getStoreStatus();
  },
  methods: {
    getStoreStatusText() {
      return 'Status da loja: ' + (this.storeStatus ? 'aberta' : 'fechada');
    },
    async updateStatus() {
      this.loading = true;
      try {
        const response = await axios.patch('/admin/updateStatus', {
          alterStatus: this.storeStatus,
          id: 1,
        });
        this.$store.dispatch('setStoreStatus', response.data.alterStatus);
        if (response.status !== 200) {
          throw new Error('Erro ao atualizar status da loja');
        }
      } catch (error) {
        console.error('Erro ao atualizar status da loja: ', error);
      } finally {
        this.loading = false;
      }
    },
    async getStoreStatus() {
      try {
        const response = await axios.get('/admin/getStatus/1');
        this.$store.dispatch('setStoreStatus', response.data.alterStatus);
      } catch (error) {
        console.error('Erro ao buscar status da loja: ', error);
      } finally {
        this.loading = false;
      }
    },
  }
}
</script>
<template>
  <div class="container">
    <v-card width="300px">
      <v-card-title>
        <h2>Loja</h2>
      </v-card-title>
      <v-card-subtitle>
        <h3>Ajustes da loja</h3>
      </v-card-subtitle>
      <v-card-text>
        <v-switch v-if="$store.getters.isAdmin" hide-details color="success" v-model="storeStatus"
          :label="getStoreStatusText()" :disabled="loading" :loading="loading"
          @update:model-value="updateStatus"></v-switch>
      </v-card-text>
    </v-card>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 64px;
}
</style>