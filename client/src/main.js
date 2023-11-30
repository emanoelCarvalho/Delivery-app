import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes';

axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App)
app.use(router)
app.mount('#app')
