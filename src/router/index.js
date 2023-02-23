import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonajesView from '../views/personajes.vue'
import AcercaView from '../views/acerca.vue'
import InicioView from '../views/inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/casa',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personajes',
      name: 'personajes',
      component: PersonajesView
    },
    {
      path: '/acercade',
      name: 'acercade',
      component: AcercaView
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
