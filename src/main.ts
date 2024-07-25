
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createPinia } from 'pinia';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa
    },
  },
  components,
  directives,
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(Toast, {});
app.use(pinia);


app.mount('#app');
