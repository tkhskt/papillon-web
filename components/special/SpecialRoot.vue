<template>
  <div ref="rootWrapper" class="special-wrapper">
    <div class="sidebar" :class="{ visible: sidebarVisible }">
      <special-sidebar />
    </div>
    <div class="artwork">
      <special-artwork />
    </div>
    <div ref="special" class="special" :style="{ width: width + 'px' }">
      <scroll-container />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SpecialRoot',
  data() {
    return {
      width: 0,
      sidebarVisible: false,
    }
  },
  computed: {
    ...mapState('main', ['containerWidth', 'translateX']),
  },
  watch: {
    containerWidth(newValue) {
      this.width = newValue
    },
    translateX(newValue) {
      this.sidebarVisible = window.outerWidth * 0.3 < newValue
    },
  },
  mounted() {
    const content = this.$refs.rootWrapper
    window.addEventListener('resize', this.resize)
    // Firefox
    if (content.addEventListener) {
      content.addEventListener('DOMMouseScroll', this.scroll, false)
    }

    // Chrome
    content.onmousewheel = this.scroll
  },
  beforeDestroy() {
    const content = this.$refs.rootWrapper
    window.removeEventListener('resize', this.resize)
    content.removeEventListener('DOMMouseScroll', this.scroll)
    content.onmousewheel = null
  },
  methods: {
    resize() {
      this.$store.dispatch(
        'main/onHorizontalScroll',
        this.$refs.rootWrapper.scrollLeft
      )
    },
    scroll(e) {
      const content = this.$refs.rootWrapper
      content.scrollBy(-e.wheelDelta, 0)
      this.$store.dispatch('main/onHorizontalScroll', content.scrollLeft)
    },
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
}

.special-wrapper {
  overflow-x: scroll;
  .artwork {
    position: fixed;
  }
}
.special {
  padding: 0;
  height: 100vh;
}

.sidebar {
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  &.visible {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}
</style>
