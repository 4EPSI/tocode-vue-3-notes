import { createRouter, createWebHashHistory } from "vue-router";  // createWebHistory

const routerHistory = createWebHashHistory();

import HomePage from './pages/homeContent.vue';
import AboutPage from './pages/aboutContent.vue'
import noteFoundPage from "./pages/noteFound.vue";
import VuexComponent from './pages/VuexComponent.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: VuexComponent
    },
    {
      // path: '/:PathMatch(.*)*',
      path: '/:catchAll(.*)',
      name: '404',
      component: noteFoundPage,
    }
  ]
})

export default routers
