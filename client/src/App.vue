<template>
  <div>

    <Login />
    <Cadastro />
  </div>
</template>

<script>
import Cadastro from './components/Cadastro.vue';
import Login from './components/Login.vue';


export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    Login,
    Cadastro,
}
}
</script>

<style>
  
  body{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
  }
</style>