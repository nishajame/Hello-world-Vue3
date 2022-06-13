import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router.js'

const app = createApp(App)

app.use(router)

const custDetail = document.querySelector('#helloworld')

console.log("custDetail", custDetail);
console.log("custnames", custDetail.dataset.custnames);


app.provide('custName', custDetail.dataset.custnames)

app.mount('#helloworld')

