import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/home/Home.vue');
const About = () => import('../pages/about/About.vue');
// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      icon: 'mdi-home'
    },
    {
      path: '/about',
      component: About,
      name: 'About',
      icon: 'mdi-information'
    },
  ]
});

export default router;