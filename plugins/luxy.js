import Vue from 'vue'
import luxy from 'luxy.js'

Vue.component(
  'Luxy',
  luxy.init({
    wrapper: '#main-content',
  })
)
