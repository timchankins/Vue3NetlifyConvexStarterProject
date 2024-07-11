import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { ConvexClient } from 'convex/browser';

const convex = new ConvexClient(import.meta.env.VITE_CONVEX_URL);

const app = createApp(App);
app.use(vuetify);
app.provide('convex', convex);
app.mount('#app');