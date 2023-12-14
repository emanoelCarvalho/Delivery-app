import { createApp } from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "./routes"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import store from "./store/store"

const vuetify = createVuetify({
  components,
  directives,
})

axios.defaults.baseURL = "http://localhost:3000"

const app = createApp(App)
app.use(store).use(vuetify).use(router).mount("#app")
