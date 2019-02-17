import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadComponent (component) {
  return () => import(/* webpackChunkName: "component-[request]" */ `@/components/${component}.vue`)
}

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: loadComponent('Welcome')
    }
  ]
})
