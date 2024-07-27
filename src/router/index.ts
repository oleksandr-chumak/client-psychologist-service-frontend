import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/views/HomeView.vue');
const PsychologistsView = () => import('@/views/PsychologistsView.vue');
const PsychologistView = () => import('@/views/PsychologistView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/psychologists',
      component: PsychologistsView
    },
    {
      path: '/psychologist/:id',
      component: PsychologistView
    }
  ]
});

export default router;
