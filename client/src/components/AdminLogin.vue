<script>
import axios from 'axios';

export default {
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const response = await axios.post('/admin/login', {
          email: this.email,
          password: this.password,
        });
        if (response.status !== 200 || !response.data.token) {
          throw new Error('Usuário inválido');
        }
        this.$store.dispatch('setAdmin', true);
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao fazer login: ', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>
<template>
  <div class="loginContainer">
    <v-card class="cardContainer">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="Email" type="email"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :loading="loading" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style scoped>
.loginContainer {
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