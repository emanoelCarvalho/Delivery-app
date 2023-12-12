<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
}
</script>

<template>
  <div class="barranav">
    <div class="logo-container">
      <img src="../../public/logo.png" alt="logo" class="logomarca">
    </div>
    <div class="btn-container">
      <v-btn>Pedidos</v-btn>
      <v-btn>Gestor</v-btn>
      <v-btn>Análise</v-btn>
      <v-btn>IA</v-btn>
      <v-btn>Configurações</v-btn>
    </div>
    <div>
      <v-switch hide-details color="success"></v-switch>
    </div>
  </div>
</template>

<style scoped>
.logomarca {
  max-width: 200px;
  max-height: 200px;
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

.logo-container {
  display: flex;
  align-items: center;
}
</style>