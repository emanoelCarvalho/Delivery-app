<template>

    <div class="container">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
  
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
  
      <div class="form-group">
        <button @click="login">Entrar</button>
      </div>
    </div>

</template>
  

<script>

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
     
      if (this.user.email === "" || this.user.password === "") {
        alert("Preencha todos os campos");
        return;
      }

      axios
        .post("http://localhost:3000/login", this.user)
        .then((response) => {
          
          if (response.data.success) {
            this.$router.push("/dashboard");
          } else {
              alert("Credenciais inválidas. Tente novamente.");
          }
        })
        .catch((error) => {
          console.error("Erro ao fazer login: ", error);
          alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
        });
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