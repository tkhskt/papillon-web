<template>
  <div>
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
        <span class="vertical-line"></span>
        <tracks ref="tracks" class="tracks" />
        <concepts ref="concepts" class="concepts" />
        <credits ref="credits" class="credits" />
      </div>
      <gradient-circle class="circle" />
    </div>
    <div ref="cursor" class="cursor" :class="{ bandcamp: hoverTrack }">
      <span
        ref="xfd"
        class="xfd-guide"
        :class="{
          invisible: !hoverTop || hoverArtwork || hoverTopLink,
        }"
        >Play XFD</span
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
    }
  },
  computed: {
    ...mapState('main', [
      'hoverArtwork',
      'hoverTop',
      'hoverTopLink',
      'hoverTrack',
    ]),
  },
  watch: {
    hoverArtwork(newValue) {
      this.handleCursor()
    },
    hoverTop(newValue) {
      this.handleCursor()
    },
    hoverTopLink(newValue) {
      this.handleCursor()
    },
    hoverTrack(newValue) {
      this.handleCursor()
    },
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('mousemove', this.mouseMove)
    const observer = new MutationObserver((records) => {
      for (const mutation of records) {
        if (mutation.type === 'attributes') {
          const a = window
            .getComputedStyle(mutation.target)
            .getPropertyValue('transform')
          const matrexArr = a.split(', ')
          const translateY = parseInt(matrexArr[5])
          this.scrollY = -translateY
          this.handleScroll(this.scrollY)
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
    handleScroll() {
      const imageOffset = window.innerHeight * 0
      if (this.scrollY > window.innerHeight * 3 + imageOffset) {
        this.currentSection = 'credits'
      } else if (this.scrollY > window.innerHeight * 2 + imageOffset) {
        this.currentSection = 'concepts'
      } else if (this.scrollY > window.innerHeight * 0.8) {
        this.currentSection = 'tracks'
      } else {
        this.currentSection = 'top'
      }
    },
    mouseMove(event) {
      const cursor = this.$refs.cursor
      // this.cursor.x = event.clientX
      // this.cursor.y = event.clientY
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
      if (this.hoverTopLink) {
        TweenLite.to(cursor, 0.5, {
          css: {
            background: '#ffffff',
            width: '10px',
            height: '10px',
          },
        })
        return
      }
      if (this.hoverTrack) {
        TweenLite.to(cursor, 0.5, {
          css: {
            background: 'transparent',
            width: '50px',
            height: '50px',
          },
        })
        TweenLite.to(bandcamp, 0.5, {
          onStart() {
            bandcamp.style.display = 'inline'
          },
        })
        return
      }

      if (this.hoverTop && this.hoverArtwork) {
        TweenLite.to(cursor, 0.5, {
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
        TweenLite.to(cursor, 0.5, {
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
        TweenLite.to(cursor, 0.5, {
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
        TweenLite.to(cursor, 0.5, {
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
  z-index: 100000;
  mix-blend-mode: difference;
  transition: mix-blend-mode 0.2s;
  &__social {
    background-color: #fff;
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
}

.top {
  margin-bottom: 36.7vh;
  // background: $color-white;
}

.sections {
  position: relative;
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
  }
}

.circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -14.3vw;
}

.header-enter-active,
.header-leave-active {
  transition: opacity 0.5s;
}
.header-enter, .header-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
