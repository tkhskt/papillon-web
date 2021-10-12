<template>
  <div
    class="crossfade-container"
    :style="{
      'clip-path': `circle(100px at ${cursorX}px ${cursorY + scrollY}px)`,
    }"
  >
    <video controls class="video-content" :class="{ invisible: hoverTopLink }">
      <source src="~assets/video/papillon.webm" type="video/webm" />
      <source src="~assets/video/papillon.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    cursorX: {
      type: Number,
      default: 0,
    },
    cursorY: {
      type: Number,
      default: 0,
    },
    scrollY: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      styleObj: {
        'clip-path': 'none',
      },
    }
  },
  computed: {
    ...mapState('main', ['hoverTopLink']),
  },
  watch: {
    cursorX(oldValue, newValue) {
      this.styleObj = {
        'clip-path': `padding-box circle(40px at ${newValue.x}px ${this.cursorY}px)`,
      }
    },
    cursorY(oldValue, newValue) {
      this.styleObj = {
        'clip-path': `padding-box circle(40px at ${this.cursorX}px ${newValue.y}px)`,
      }
    },
    scrollY(oldValue, newValue) {
      // todo
    },
  },
}
</script>

<style scoped lang="scss">
.crossfade-container {
  position: absolute;
  overflow: hidden;
  transform: scaleZ(1);
  width: 100%;
  height: 100vh;
  will-change: clip-path;

  .video-content {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;

    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.2s linear 0.1s;
    &.invisible {
      opacity: 0;
      transition: opacity 0.2s linear 0.1s;
    }
  }
}
</style>
