<!-- Please remove this file from your project -->
<template>
  <div ref="container" class="container">
    <div class="section">
      <special-top />
    </div>
    <div class="section">
      <special-track />
    </div>
    <div class="section">
      <special-info />
    </div>
    <div class="section">
      <special-credits />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NuxtTutorial',
  computed: {
    ...mapState('main', ['scrollOffsetX']),
  },
  watch: {
    scrollOffsetX(newValue) {
      this.easeScroll(newValue)
    },
  },
  created() {
    this.sx = 0 // For scroll positions
    this.sy = 0
    this.dx = this.sx // For container positions
    this.dy = this.sy
  },
  mounted() {
    this.frame = window.requestAnimationFrame(this.render)
    window.addEventListener('resize', this.resize)
    const width = this.$refs.container.scrollWidth
    this.$store.dispatch('main/onResizeContainer', width)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    window.cancelAnimationFrame(this.frame)
  },
  methods: {
    resize() {
      const width = this.$refs.container.scrollWidth
      this.$store.dispatch('main/onResizeContainer', width)
    },
    easeScroll(offsetX) {
      this.sx = offsetX
      this.sy = window.pageYOffset
    },
    render() {
      this.dx = this.li(this.dx, this.sx, 0.05)
      this.dy = this.li(this.dy, this.sy, 0.05)
      this.dx = Math.floor(this.dx * 100) / 100
      this.dy = Math.floor(this.dy * 100) / 100
      this.$refs.container.style.transform = `translate3d(-${
        Math.floor(this.dx * 10) / 10
      }px, -${this.dy}px, 0px)`
      this.$store.dispatch('main/onTranslate', this.dx)
      this.frame = window.requestAnimationFrame(this.render)
    },
    li(a, b, n) {
      return (1 - n) * a + n * b
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  will-change: transform;
  white-space: nowrap;
  font-size: 0;
}
.section {
  display: inline-block;
  vertical-align: top;
  height: 100vh;
}
</style>
