import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './route/index'
import axios from 'axios' //追記
import VueAxios from 'vue-axios'
// import store from '@/store'

const app = createApp(App)
const store = createStore({App})

app.use(router, VueAxios, axios, store).mount('#app')
