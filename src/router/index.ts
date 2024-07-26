import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PsychologistsView from '@/views/PsychologistsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/psychologists',
      name: 'psychologists',
      component: PsychologistsView
    }
  ]
});

export default router;
