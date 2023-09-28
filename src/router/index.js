import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('../views/Home/Home.vue')
        },
        {
          path: '/teachers',
          name: 'Ustozlar',
          component: () => import('../views/Teachers/Teachers.vue')
        },
        {
          path: '/clients',
          name: 'Mijozlar',
          component: () => import('../views/Clients/Clients.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name != 'Login' && !localStorage.getItem('token')) {
//     next('/login')
//   } else if (to.name == 'Login' && localStorage.getItem('token')) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router
