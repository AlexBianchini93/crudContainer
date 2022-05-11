import { createApp } from 'vue'
import App from './App.vue'
import router from './config/routes' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import 'font-awesome/css/font-awesome.css' 

const app = createApp(App)

app.use(router)
app.mount('#app')
