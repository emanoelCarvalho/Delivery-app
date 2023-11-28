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
      <label for="nomeFantasia">Nome fantasia:</label>
      <input
        type="text"
        id="nomeFantasia"
        v-model="admin.name"
        required
      />
    </div>

    <div class="form-group">
      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" v-model="admin.phoneNumber" required />
    </div>

    <div class="form-group">
      <label for="cnpjCpf">CNPJ/CPF:</label>
      <input type="text" id="cnpjCpf" v-model="admin.cnpj" required />
    </div>

    <div class="form-group">
      <label for="conta">Conta:</label>
      <input type="text" id="conta" v-model="admin.account" required />
    </div>

    <div class="form-group">
      <label for="agencia">Agência:</label>
      <input type="text" id="agencia" v-model="admin.agency" required />
    </div>

    <div class="form-group">
      <label for="banco">Banco:</label>
      <input type="text" id="banco" v-model="admin.bank" required />
    </div>

    <div class="form-group">
      <label for="confirmeASenha">Confirme a senha:</label>
      <input
        type="password"
        id="confirmeASenha"
        v-model="admin.confirmPassword  "
        required
      />
    </div>

    <div class="form-group">
      <label for="address">Endereço:</label>
      <input type="text" id="address" v-model="admin.address" required />
    </div>

    <div class="form-group">
      <button @click="register">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      admin: {
        email: "",
        password: "",
        name: "",
        phoneNumber: "",
        cnpj: "",
        account: "",
        agency: "",
        bank: "",
        confirmPassword: "",
        address: "",
      },
    };
  },

  methods: {
    async register() {
      try {
        if (
          this.admin.email === "" ||
          this.admin.password === "" ||
          this.admin.name === "" ||
          this.admin.phoneNumber === "" ||
          this.admin.cnpj === "" ||
          this.admin.account === "" ||
          this.admin.agency === "" ||
          this.admin.bank === "" ||
          this.admin.confirmPassword === "" ||
          this.admin.address === ""
        ) {
          alert("Preencha todos os campos obrigatórios");
          return;
        }

        if (this.admin.password !== this.admin.confirmPassword) {
          alert("As senhas não coincidem");
          return;
        }

        const response = await axios.post("http://localhost:3000/admin/novoAdmin", this.admin);
        
        alert("Cadastro realizado com sucesso");
        
      } catch (error) {
        console.log(error);
        alert("Erro ao realizar o cadastro. Tente novamente mais tarde.");
      }
    },
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
</style>
