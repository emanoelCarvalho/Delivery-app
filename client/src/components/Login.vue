<template>
  <div class="container">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="admin.email" required />
    </div>

    <div class="form-group">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="admin.password" required />
    </div>

    <div class="form-group">
      <button @click="login">Entrar</button>
    </div>
    <div>
      <a @click="alterRoute()">Não tem conta? Crie agora.</a>
    </div>
  </div>
  <RouterView />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      admin: {
        email: '',
        password: '',
      },
      token: '',
    };
  },

  methods: {
    async login() {
      try {
        if (this.admin.email === '' || this.admin.password === '') {
          alert('Preencha todos os campos');
          return;
        }

        const response = await axios.post('http://localhost:3000/admin/login', this.admin);
        const { admin, token } = response.data;

        if (admin && token) {
          this.token = token;
          console.log('Login bem-sucedido');

          alert('Login bem-sucedido!');
        } else {
          console.log('Credenciais inválidas. Tente novamente.');
          alert('Credenciais inválidas. Tente novamente.');
        }
      } catch (error) {
        console.log('Erro ao fazer login');
        alert('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
    },
      alterRoute() {
        this.$router.push({name: 'register'})
      }
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
}

a{
  color: blue;
}
</style>
