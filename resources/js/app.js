import './bootstrap';
import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './template/App.vue'
import router from '../js/plugins/router'
import { createPinia } from 'pinia'


const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})
const app = createApp(App)
// createApp(App).use(vuetify, router).mount("#app")
app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount("#app")

