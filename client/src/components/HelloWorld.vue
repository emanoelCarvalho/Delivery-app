<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="day" />
    <button @click="enviarDia">Enviar</button>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      day: ""
    };
  },
  methods: {
    enviarDia() {
      axios
        .post("http://localhost:3000/cardapio/criarCardapio", {
          day: this.day
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>