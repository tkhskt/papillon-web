<template>
  <div ref="container" v-scroll-lock="screenLocked" class="splash-container">
    <p class="forever" :class="{ displayed: fontLoaded }">
      Electronica will live forever.<span class="line"></span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TweenLite } from 'gsap/dist/gsap'

export default {
  data() {
    return {
      loadCompleted: false,
      screenLocked: true,
    }
  },
  computed: {
    ...mapState('main', [
      'fontLoaded',
      'videoLoaded',
      'artworkLoaded',
      'isMobile',
    ]),
  },
  watch: {
    fontLoaded(loaded) {
      if (this.isMobile) {
        this.loadCompleted = loaded && this.artworkLoaded
        return
      }
      this.loadCompleted = loaded && this.videoLoaded && this.artworkLoaded
    },
    videoLoaded(loaded) {
      this.loadCompleted = loaded && this.fontLoaded && this.artworkLoaded
    },
    artworkLoaded(loaded) {
      if (this.isMobile) {
        this.loadCompleted = loaded && this.fontLoaded
        return
      }
      this.loadCompleted = loaded && this.fontLoaded && this.videoLoaded
    },
    loadCompleted() {
      const container = this.$refs.container
      const component = this
      window.scroll({ top: 0 })
      TweenLite.to(container, {
        delay: 2,
        duration: 0.5,
        css: {
          opacity: 0,
        },
        onStart() {
          component.screenLocked = false
        },
        onComplete() {
          container.style.display = 'none'
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.splash-container {
  height: 100%;
  width: 100%;
  background: $color-white;
  display: flex;
  justify-content: center;
  align-items: center;
  .forever {
    position: relative;
    letter-spacing: 0.05em;
    font-size: 24px;
    @include font-hightower();
    color: $color-black;
    opacity: 0;
    transition: opacity 0.5s ease;
    user-select: none;
    @include mq() {
      font-size: 18px;
    }
    &.displayed {
      opacity: 1;
    }
    .line {
      position: absolute;
      display: inline-block;
      bottom: -5px;
      left: 0;
      height: 1px;
      width: 0;
      background: $color-black;
    }
  }
}
</style>
