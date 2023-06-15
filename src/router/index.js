import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupports from '../views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import AuthLogin from '@/views/auth/Auth.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'modulos',
        name: 'campus.modulos',
        component: ModulesAndLessons
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      }
    ]
  }, {
    path: '/forget-password',
    name: 'forget.password',
    component: ForgetPassword
  }, {
    path: '/reset/:token',
    name: 'reset.password',
    component: ResetPassword,
    props: true
  }, {
    path: '/',
    name: 'auth',
    component: AuthLogin
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
