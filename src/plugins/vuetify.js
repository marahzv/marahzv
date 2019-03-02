import Vue from 'vue'
import '@/stylus/main.styl'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

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
