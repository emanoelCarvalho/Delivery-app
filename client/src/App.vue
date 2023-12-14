<template>
  <div>
    <Header />
    <RouterView />
  </div>

  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    Header,
  },
}
</script>