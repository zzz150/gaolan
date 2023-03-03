import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Market from '@/components/Market'
Vue.use(Router)

export default new Router({
  // mode:'history',
  // base: './',
  routes: [
    {
      path: '/',
      name: 'Market',
      component: Market
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
  ]
})
