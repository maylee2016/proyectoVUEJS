import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import propietarioView from '../views/PropietarioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/propietarios',
    name: 'propietarios',
    // component: propietarioView
    component: () => import(/* webpackChunkName: "about" */ '../views/PropietarioView.vue')

  },

  {
    path: '/reuniones',
    name: 'reuniones',
    // component: reunionesView
    component: () => import(/* webpackChunkName: "about" */ '../views/ReunionesView.vue')

  },

  {
    path: '/asistencias',
    name: 'asistencias',
    // component: asistenciaView
    component: () => import(/* webpackChunkName: "about" */ '../views/AsistenciaView.vue')

  },

  {
    path: '/propietarios/:id',
    name: 'verPropietarios',
    // component: propietarioView
    component: () => import( '../views/VerPropietarioView.vue')

  },
  {
    path: '/propietarios/:id/editar',
    name: 'editarPropietarioView',
    // component: propietarioView
    component: () => import('../views/EditarPropietarioView.vue')

  },
  {
    path: '/reuniones/:id/editar',
    name: 'editarReunionView',
    // component: propietarioView
    component: () => import('../views/EditarReunionView.vue')

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareaView.vue')
  },
  {
    path: '/tareas/:id',
    name: 'verTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/VerTareaView.vue')
  },
  {
    path: '/tareas/:id/editar',
    name: 'editarTarea',
    component: () => import(/* webpackChunkName: "verTarea" */ '../views/EditarTareaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
