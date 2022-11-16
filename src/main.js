import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/bootstrap.min.css"
import "@/assets/bootstrap.bundle.min.js"
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios,axios).mount('#app');
