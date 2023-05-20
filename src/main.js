import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

// 使用插件
app.use(router)
app.use(createPinia())

app.mount('#app')