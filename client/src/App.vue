<template>
  <div>
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods: {
    alterRoute() {
      this.$router.push({name: 'register'})
    }
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