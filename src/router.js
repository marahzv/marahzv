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
      path: '/about',
      name: 'About',
      component: loadViews('About')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: loadViews('Projects')
    },
    {
      path: '/projects/:slug',
      name: 'ProjectsSingle',
      component: loadViews('ProjectsSingle')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: loadViews('Gallery')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: loadViews('Contact')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
