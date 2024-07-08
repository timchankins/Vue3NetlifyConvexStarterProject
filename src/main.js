import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { ConvexProvider, ConvexReactClient } from '@convex-vue/core'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createApp(App)
  .use(vuetify)
  .use(ConvexProvider, { client: convex })
  .mount('#app')

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')