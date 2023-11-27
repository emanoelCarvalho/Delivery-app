<template>
  <div class="container">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="user.email" required>
    </div>

    <div class="form-group">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="user.password" required>
    </div>

    <div class="form-group">
      <label for="nomeFantasia">Nome fantasia:</label>
      <input type="text" id="nomeFantasia" v-model="user.nomeFantasia" required>
    </div>

    <div class="form-group">
      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" v-model="user.telefone" required>
    </div>

    <div class="form-group">
      <label for="cnpjCpf">CNPJ/CPF:</label>
      <input type="text" id="cnpjCpf" v-model="user.cnpjCpf" required>
    </div>

    <div class="form-group">
      <label for="conta">Conta:</label>
      <input type="text" id="conta" v-model="user.conta" required>
    </div>

    <div class="form-group">
      <label for="agencia">Agência:</label>
      <input type="text" id="agencia" v-model="user.agencia" required>
    </div>

    <div class="form-group">
      <label for="banco">Banco:</label>
      <input type="text" id="banco" v-model="user.banco" required>
    </div>

    <div class="form-group">
      <label for="confirmeASenha">Confirme a senha:</label>
      <input type="password" id="confirmeASenha" v-model="user.confirmeASenha" required>
    </div>

    <div class="form-group">
      <button @click="register">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        nomeFantasia: '',
        telefone: '',
        cnpjCpf: '',
        conta: '',
        agencia: '',
        banco: '',
        confirmeASenha: ''
      }
    }
  },

  methods: {
    register() {
      // Validate the form data
      if (this.user.email === '' || this.user.password === '' || this.user.nomeFantasia === '' || this.user.telefone === '' || this.user.cnpjCpf === '' || this.user.conta === '' || this.user.agencia === '' || this.user.banco === '' || this.user.confirmeASenha === '') {
        alert('Preencha todos os campos obrigatórios');
        return;
      }

      if (this.user.password !== this.user.confirmeASenha) {
        alert('As senhas não coincidem');
        return;
      }

      // Submit the form data to the server
      axios.post('/register', this.user)
        .then(response => {
          alert('Cadastro realizado com sucesso');
          // Redirect to the login page
          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
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
  background-color: #007bff
}

</style>