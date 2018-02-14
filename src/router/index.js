import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import Gantt from '@/components/Gantt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/gantt',
      name: 'Gantt',
      component: Gantt
    }
  ]
})
