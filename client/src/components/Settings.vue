<script>
export default {
  name: 'Settings',
  data() {
    return {
      items: [
        { title: 'Adicionar produto', icon: 'mdi-food', to: '/registerItem' },
        { title: 'Adicionar acompanhamento', icon: 'mdi-rice', to: '/registerSideDish' },
        { title: 'Loja', icon: 'mdi-cog', to: '/store' },
      ],
    };
  },
  props: {
  },
  methods: {
  },
}
</script>
<template>
  <v-menu v-if="$store.getters.isAdmin">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-plus" v-bind="props" color="green" class="addButton"> </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :value="i" :to="item.to" :prepend-icon="item.icon">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<style scoped>
.addButton {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>