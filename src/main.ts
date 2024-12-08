import '@/shared/assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
// register Swiper custom elements

import App from './App.vue'
import router from './router'

register();

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
