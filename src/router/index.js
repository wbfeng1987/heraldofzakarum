import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Smash from '@/pages/Smash'
import Comment from '@/pages/Comment'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/smash',
      name: 'Smash',
      component: Smash,
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment,
    }
  ]
})
