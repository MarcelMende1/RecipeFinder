import { createApp } from 'vue';
import '@/assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
