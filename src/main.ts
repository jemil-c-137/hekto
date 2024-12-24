import '@/shared/assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'

import App from './App.vue'
import router from './router'

register();

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app
    .use(pinia)
    .use(router)
    .mount('#app')
