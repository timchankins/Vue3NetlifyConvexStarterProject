import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { ConvexClientProvider, ConvexReactClient } from '@convex-vue/core'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

createApp(App)
  .use(vuetify)
  .use(ConvexClientProvider, { client: convex })
  .mount('#app')