<script>
export default {
  name: 'Header',
  data() {
    return {
      buttons: [
        {
          text: 'Item',
          icon: 'mdi-plus-thick',
          route: '/registerItem',
        },
        {
          text: 'Acompanhamento',
          icon: 'mdi-plus-thick',
          route: '/registerSideDish',
        },
        /* {
          text: 'Análise',
          icon: 'mdi-chart-bar',
          route: '/analise',
        },
        {
          text: 'IA',
          icon: 'mdi-robot',
          route: '/ia',
        },
        {
          text: 'Configurações',
          icon: 'mdi-cog',
          route: '/configuracoes',
        }, */
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('setAdmin', false);
    },
    login() {
      this.$store.dispatch('setAdmin', true);
    },
    navigateToHome() {
      this.$router.push('/');
    },
  },
}
</script>

<template>
  <div class="barranav">
    <img src="../../public/logo.png" alt="logo" class="logomarca" @click="navigateToHome">
    <div class="btn-container" v-if="$store.getters.isAdmin">
      <v-btn v-for="button in buttons" :key="button.route" :prepend-icon="button.icon" :to="button.route" text
        variant="tonal" color="white">
        {{ button.text }}
      </v-btn>
    </div>
    <div class="loginContainer">
      <v-switch v-if="$store.getters.isAdmin" hide-details color="success"></v-switch>
      <v-btn v-if="$store.getters.isAdmin" color="white" prepend-icon="mdi-logout-variant" text variant="tonal"
        @click="logout">Logout</v-btn>
      <v-btn v-else color="white" prepend-icon="mdi-login-variant" text variant="tonal" to="/login">Login</v-btn>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logomarca {
  max-width: 200px;
  max-height: 200px;
  cursor: pointer;
}

.barranav {
  background-color: #FF9944;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 16px;
}

.btn-container {
  display: flex;
  gap: 8px;
}
</style>