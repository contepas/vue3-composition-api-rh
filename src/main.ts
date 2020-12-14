import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { activateSendErrors } from './composables/stores/errorLog'

activateSendErrors()

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
