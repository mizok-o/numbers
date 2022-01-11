import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
// import firebase from 'firebase'
createApp(App).use(router, VueAxios, axios).mount('#app')