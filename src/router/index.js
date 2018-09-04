import Vue from 'vue'
import Router from 'vue-router'
import Prueba from '@/components/prueba'
import Segunda from '@/components/Segunda'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '',
      component: Segunda
    },
    {
      path: '/prueba',
      component: Prueba
    }

  ]
})
