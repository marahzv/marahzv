
/* Vuetify */

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#B8CD7B',
    secondary: '#A2CED6',
    accent: '#73AB84',
    info: '#454851'
  },
  iconfont: 'mdi',
  options: {
    customProperties: true
  }
})
