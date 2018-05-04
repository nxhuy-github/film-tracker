import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Films from '@/components/Films/Index'
import CreateFilm from '@/components/CreateFilm'
import ViewFilm from '@/components/ViewFilm/Index'
import EditFilm from '@/components/EditFilm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/films/create',
      name: 'films-create',
      component: CreateFilm
    },
    {
      path: '/films/:filmId',
      name: 'film',
      component: ViewFilm
    },
    {
      path: '/films/:filmId/edit',
      name: 'film-edit',
      component: EditFilm
    }
  ]
})
