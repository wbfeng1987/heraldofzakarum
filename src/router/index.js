import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Smash from '@/pages/Smash'
import Comment from '@/pages/Comment'


import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)


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
