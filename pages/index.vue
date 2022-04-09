<template>
  <div>
    <splash class="splash" />
    <div v-if="isMobile">
      <mobile />
    </div>
    <div v-if="!isMobile">
      <special-root />
      <div
        v-show="!isMobile"
        ref="cursor"
        class="cursor"
        :class="{ bandcamp: hoverTrack }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TweenLite } from 'gsap/dist/gsap'

export default {
  data() {
    return {
      scrollY: 0,
      currentSection: 'top',
      cursor: {
        x: 0,
        y: 0,
      },
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
      'hoverLink',
      'isMobile',
      'modalOpened',
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
    hoverLink() {
      this.handleCursor()
    },
  },
  mounted() {
    this.$adobeFonts(document, this.$store)
    window.addEventListener('mousemove', this.mouseMove)
    window.addEventListener('resize', () => {
      this.$store.dispatch('main/onResize', {
        width: window.outerWidth,
        height: window.innerHeight,
      })
    })
    this.$store.dispatch('main/onResize', {
      width: window.outerWidth,
      height: window.innerHeight,
    })
  },
  methods: {
    mouseMove(event) {
      const cursor = this.$refs.cursor
      if (!cursor) return
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
      if (!cursor) return
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

      this.cursorAnimation = TweenLite.to(cursor, 0.5, {
        css: {
          background: '#ffffff',
          width: '10px',
          height: '10px',
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.splash {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: $z-splash;
}

.mobile-menu {
  position: fixed;
  z-index: $z-mobile-menu;
  right: 20px;
  top: 30px;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999999;
}

.cursor {
  pointer-events: none;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translate3d(-50%, -50%, 0);
  color: $color-white;
  background: $color-white;
  border-radius: 50% 50%;
  will-change: left top;
  font-size: 20px;
  z-index: $z-cursor;
  mix-blend-mode: difference;
  transition: mix-blend-mode 0.2s;
  @include mq() {
    display: none;
  }
  &.bandcamp {
    mix-blend-mode: normal;
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
  z-index: $z-header;
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
  position: fixed;
  display: inline-block;
  height: 100%;
  width: 1px;
  background-color: $color-white;
  left: 0;
  right: 0;
  margin: auto;
  z-index: $z-vertical-line;
  transition: background-color 0.5s ease;
  mix-blend-mode: difference;
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
  z-index: $z-circle;
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
