import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadViews (component) {
  return () => import(/* webpackChunkName: "component-[request]" */ `@/views/${component}.vue`)
}

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: loadViews('Welcome')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: loadViews('Experience')
    }
  ]
})
