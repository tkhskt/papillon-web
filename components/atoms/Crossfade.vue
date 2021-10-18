<template>
  <div ref="container" class="crossfade-container">
    <video
      ref="xfd"
      class="video-content"
      :class="{ invisible: hoverTopLink && !xfdStarted }"
      @ended="videoEnded"
      @canplay="$store.dispatch('main/onLoadVideoCompleted', true)"
    >
      <source src="~assets/video/papillon.webm" type="video/webm" />
      <source src="~assets/video/papillon.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TweenLite } from 'gsap/dist/gsap'
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
      anim: null,
      currentSize: 100,
    }
  },
  computed: {
    ...mapState('main', ['hoverTopLink', 'xfdStarted', 'xfdAnimationRunning']),
  },

  watch: {
    cursorX(oldValue, newValue) {
      if (this.xfdStarted || this.xfdAnimationRunning) return
      this.$refs.container.style.clipPath = `circle(${this.currentSize}px at ${
        this.cursorX
      }px ${this.cursorY + this.scrollY}px)`
    },
    cursorY(oldValue, newValue) {
      if (this.xfdStarted || this.xfdAnimationRunning) return
      this.$refs.container.style.clipPath = `circle(${this.currentSize}px at ${
        this.cursorX
      }px ${this.cursorY + this.scrollY}px)`
    },
    scrollY(oldValue, newValue) {
      if (this.xfdStarted || this.xfdAnimationRunning) return
      this.$refs.container.style.clipPath = `circle(${this.currentSize}px at ${
        this.cursorX
      }px ${this.cursorY + this.scrollY}px)`
    },
    xfdStarted(oldValue, newValue) {
      if (newValue) {
        this.pause()
      } else {
        this.play()
      }
    },
  },
  mounted() {
    if (this.$refs.xfd.readyState === 4) {
      this.$store.dispatch('main/onLoadVideoCompleted', true)
    }
  },
  methods: {
    videoEnded() {
      const video = this.$refs.xfd
      video.currentTime = 0

      this.$store.dispatch('main/onChangeXfdStarted', false)
    },
    play() {
      const width = window.innerWidth
      const height = window.innerHeight
      this.$store.dispatch('main/onChangeXfdAnimationRunning', true)

      const sizeObj = {
        size: this.currentSize,
      }
      if (this.anim != null) this.anim.kill()
      const component = this
      this.anim = TweenLite.to(sizeObj, 1, {
        size: Math.sqrt(width * width + height * height),
        onUpdate() {
          component.$refs.container.style.clipPath = `circle(${sizeObj.size}px at ${component.cursorX}px ${component.cursorY}px)`
          component.currentSize = sizeObj.size
        },
        onComplete() {
          component.$store.dispatch('main/onChangeXfdAnimationRunning', false)
        },
      })
      this.$refs.xfd.play()
    },
    pause() {
      this.$store.dispatch('main/onChangeXfdAnimationRunning', true)
      const sizeObj = {
        size: this.currentSize,
      }
      if (this.anim != null) this.anim.kill()
      const component = this
      this.anim = TweenLite.to(sizeObj, 1, {
        size: 100,
        onUpdate() {
          component.$refs.container.style.clipPath = `circle(${sizeObj.size}px at ${component.cursorX}px ${component.cursorY}px)`
          component.currentSize = sizeObj.size
        },
        onComplete() {
          component.$store.dispatch('main/onChangeXfdAnimationRunning', false)
        },
      })
      this.$refs.xfd.pause()
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
  clip-path: circle(0px at 50% 50%);
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
