<template>
  <div>
    <splash class="splash" />
    <transition name="header">
      <Header
        v-if="currentSection != 'top'"
        class="header"
        :color="currentSection"
      />
    </transition>
    <div
      id="main-content"
      ref="mainContent"
      class="main-content"
      :class="currentSection"
    >
      <crossfade
        v-if="!isMobile"
        class="crossfade"
        :cursor-x="cursor.x"
        :cursor-y="cursor.y"
        :scroll-y="scrollY"
      />
      <top
        class="top"
        :scroll-y="scrollY"
        :cursor-x="cursor.x"
        :cursor-y="cursor.y"
      />
      <div class="sections">
        <span v-if="!isMobile" class="vertical-line"></span>
        <tracks ref="tracks" class="tracks" />
        <concepts ref="concepts" class="concepts" />
        <credits ref="credits" class="credits" />
      </div>
      <span
        v-if="isMobile"
        class="vertical-line"
        :class="{ visible: showMobileLine }"
      ></span>
      <gradient-circle class="circle" />
    </div>
    <div ref="cursor" class="cursor" :class="{ bandcamp: hoverTrack }">
      <span
        ref="xfd"
        class="xfd-guide"
        :class="{
          invisible: !hoverTop || hoverArtwork || hoverTopLink,
        }"
        >{{ xfdGuideText }}</span
      >
      <img
        ref="bandcamp"
        class="bandcamp"
        src="~assets/img/bandcamp_logo.png"
        :class="{
          invisible: !hoverTrack,
        }"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TweenLite } from 'gsap/dist/gsap'
import Crossfade from '~/components/atoms/Crossfade.vue'

export default {
  components: { Crossfade },
  data() {
    return {
      scrollY: 0,
      currentSection: 'top',
      cursor: {
        x: 0,
        y: 0,
      },
      xfdGuideText: 'Play XFD',
      cursorAnimation: null,
      showMobileLine: false,
    }
  },
  computed: {
    ...mapState('main', [
      'hoverArtwork',
      'hoverTop',
      'hoverTopLink',
      'hoverTrack',
      'xfdStarted',
      'hoverLink',
      'isMobile',
    ]),
  },
  watch: {
    hoverArtwork() {
      this.handleCursor()
    },
    hoverTop() {
      this.handleCursor()
    },
    hoverTopLink() {
      this.handleCursor()
    },
    hoverTrack() {
      this.handleCursor()
    },
    xfdStarted(newValue) {
      if (newValue) {
        this.xfdGuideText = 'Pause'
      } else {
        this.xfdGuideText = 'Play XFD'
      }
    },
    hoverLink() {
      this.handleCursor()
    },
    loadCompleted() {},
  },
  mounted() {
    const store = this.$store
    const component = this
    this.$adobeFonts(document, this.$store)
    this.$initLuxy()
    window.addEventListener('mousemove', this.mouseMove)
    window.addEventListener('resize', () => {
      store.dispatch('main/onResize', {
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })
    window.addEventListener('scroll', () => {
      if (component.isTouchable()) {
        component.scrollY = window.scrollY
        component.handleMobileScroll()
      }
    })
    store.dispatch('main/onResize', {
      width: window.innerWidth,
      height: window.innerHeight,
    })
    const observer = new MutationObserver((records) => {
      for (const mutation of records) {
        if (mutation.type === 'attributes') {
          const a = window
            .getComputedStyle(mutation.target)
            .getPropertyValue('transform')
          const matrixArr = a.split(', ')
          const translateY = parseInt(matrixArr[5])
          this.scrollY = -translateY
          if (!this.isTouchable()) {
            this.handleScroll()
          }
        }
      }
    })

    // 監視の開始
    observer.observe(this.$refs.mainContent, {
      attributesList: ['style'],
      attributeOldValue: true,
    })
  },
  methods: {
    isTouchable() {
      const Touch = 'ontouchstart' in window || navigator.msMaxTouchPoints
      return typeof Touch !== 'undefined'
    },
    handleScroll() {
      const imageOffset = window.innerHeight * 0
      const minHeight = 700
      if (
        this.scrollY >
        window.innerHeight +
          Math.max(window.innerHeight, minHeight) * 2 +
          imageOffset
      ) {
        this.currentSection = 'credits'
      } else if (
        this.scrollY >
        window.innerHeight +
          Math.max(window.innerHeight, minHeight) +
          imageOffset
      ) {
        this.currentSection = 'concepts'
      } else if (this.scrollY > window.innerHeight * 0.8) {
        this.currentSection = 'tracks'
      } else {
        this.currentSection = 'top'
      }
    },
    handleMobileScroll() {
      const minHeight = 700
      if (
        this.scrollY >
        Math.max(window.innerHeight, minHeight) * 2 +
          Math.max(window.innerHeight, minHeight) * 0.5
      ) {
        this.currentSection = 'credits'
      } else if (
        this.scrollY >
        Math.max(window.innerHeight, minHeight) +
          Math.max(window.innerHeight, minHeight) * 0.5
      ) {
        this.currentSection = 'concepts'
      } else if (this.scrollY > window.innerHeight * 0.5) {
        this.currentSection = 'tracks'
        this.showMobileLine = true
      } else {
        this.currentSection = 'top'
        this.showMobileLine = false
      }
    },
    mouseMove(event) {
      const cursor = this.$refs.cursor
      const component = this
      TweenLite.to(cursor, 0.5, {
        css: {
          visibility: 'visible',
          left: event.clientX,
          top: event.clientY,
        },
        onUpdate() {
          component.cursor.x = cursor.offsetLeft
          component.cursor.y = cursor.offsetTop
        },
      })
    },
    handleCursor() {
      const cursor = this.$refs.cursor
      const xfd = this.$refs.xfd
      const bandcamp = this.$refs.bandcamp
      cursor.style.border = 'none'

      if (this.hoverTopLink) {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: 'transparent',
            width: '50px',
            height: '50px',
          },
          onStart() {
            cursor.style.border = '1px solid'
          },
        })
        return
      }
      if (this.hoverTrack) {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: 'transparent',
            width: '50px',
            height: '50px',
          },
        })
        this.cursorAnimation = TweenLite.to(bandcamp, 0.5, {
          onStart() {
            bandcamp.style.display = 'inline'
          },
        })
        return
      }
      if (this.hoverLink) {
        if (this.cursorAnimation != null) this.cursorAnimation.kill()
        TweenLite.to(cursor, 0.2, {
          css: {
            background: 'transparent',
            width: '50px',
            height: '50px',
          },
          onStart() {
            cursor.style.border = '1px solid'
          },
        })
        return
      }

      if (this.hoverTop && this.hoverArtwork) {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: '#ffffff',
            width: '200px',
            height: '200px',
          },
          onStart() {
            xfd.style.display = 'none'
          },
        })
      } else if (this.hoverTop && !this.hoverArtwork) {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: 'transparent',
            width: '200px',
            height: '200px',
          },
          onStart() {
            xfd.style.display = 'inline'
          },
        })
      } else if (!this.hoverTop && this.hoverArtwork) {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: '#ffffff',
            width: '200px',
            height: '200px',
          },
          onStart() {
            xfd.style.display = 'none'
          },
        })
      } else {
        this.cursorAnimation = TweenLite.to(cursor, 0.5, {
          css: {
            background: '#ffffff',
            width: '10px',
            height: '10px',
          },
          onStart() {
            xfd.style.display = 'none'
          },
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.splash {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999999;
}

.cursor {
  pointer-events: none;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  width: 0px;
  height: 0px;
  transform: translate3d(-50%, -50%, 0);
  color: $color-white;
  background: $color-white;
  border-radius: 50% 50%;
  will-change: left top;
  font-size: 20px;
  z-index: 100000;
  mix-blend-mode: difference;
  transition: mix-blend-mode 0.2s;
  @include mq() {
    display: none;
  }
  &.bandcamp {
    mix-blend-mode: normal;
  }
  .xfd-guide {
    transition: opacity 0.2s ease;
    opacity: 1;
    white-space: nowrap;
    letter-spacing: 0.05em;
    display: none;
    &.invisible {
      transition: opacity 0.2s ease;
      opacity: 0;
    }
  }
  .bandcamp {
    transition: all 0.5s;
    opacity: 1;
    display: none;
    width: 50px;
    height: 50px;
    &.invisible {
      transition: all 0.5s;
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
}

.main-content {
  position: relative;
  overflow: hidden;
  transition: background-color 0.5s ease;
  background-color: $color-blue;
  will-change: transform;
  &.top {
    background-color: $color-blue;
  }
  &.tracks {
    background-color: $color-white;
  }
  &.concepts {
    background-color: $color-purple;
  }
  &.credits {
    background-color: $color-black;
  }
}

.header {
  position: fixed;
  top: 49px;
  padding: 0 58px;
  z-index: 2000;
  width: 100%;
  @include mq() {
    padding: 25px;
    top: 0;
  }
}

.top {
  margin-bottom: 36.7vh;
  @include mq() {
    margin-bottom: 0;
  }
  // background: $color-white;
}

.sections {
  position: relative;
}

.vertical-line {
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 1px;
  background: $color-white;
  mix-blend-mode: difference;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 50;
  @include mq() {
    top: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    left: 12.5px;
    right: auto;
    &.visible {
      opacity: 1;
    }
  }
}

.circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -14.3vw;
  z-index: 60;
  @include mq() {
    bottom: -50vmin;
    left: -50vmin;
    right: auto;
  }
}

.header-enter-active,
.header-leave-active {
  transition: opacity 0.5s;
}
.header-enter, .header-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
