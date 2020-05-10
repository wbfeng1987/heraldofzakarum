import Vue from 'vue'
import Router from 'vue-router'
import Hoz from '@/components/Hoz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hoz',
      component: Hoz
    }
  ]
})
