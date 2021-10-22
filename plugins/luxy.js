import Vue from 'vue'
import luxy from 'luxy.js'

export default function ({ app }, inject) {
  const initLuxy = (d) => {
    const Touch = 'ontouchstart' in window || navigator.msMaxTouchPoints

    if (typeof Touch === 'undefined') {
      Vue.component(
        'Luxy',
        luxy.init({
          wrapper: '#main-content',
        })
      )
    }
  }

  inject('initLuxy', initLuxy)
}
