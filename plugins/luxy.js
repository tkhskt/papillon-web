import Vue from 'vue'
import luxy from 'luxy.js'

export default function ({ app }, inject) {
  const initLuxy = (d) => {
    const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints
    const speed = isTouchDevice ? 1 : 0.08

    Vue.component(
      'Luxy',
      luxy.init({
        wrapper: '#main-content',
        wrapperSpeed: speed,
      })
    )
  }

  inject('initLuxy', initLuxy)
}
