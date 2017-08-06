import Vue from 'vue'
import Router from 'vue-router'
const Hello = () => import('@/components/Hello')
const Other = () => import('@/components/Other')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
