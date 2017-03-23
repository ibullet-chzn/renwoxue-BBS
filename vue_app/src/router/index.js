import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Name from '@/components/Name'
import ch1 from '@/components/ch1'
import ch2 from '@/components/ch2'
import notFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Hello',
      component: Hello,
      redirect: '/index/ch1',
      children: [
        {
          path: 'ch1',
          name: 'ch1',
          component: ch1
        },
        {
          path: 'ch2',
          name: 'ch2',
          component: ch2
        }
      ]
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    },
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
