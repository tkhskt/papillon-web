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
    <span ref="cursor" class="cursor"></span>
  </div>
</template>

<script>
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
    }
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
      this.cursor.x = event.clientX
      this.cursor.y = event.clientY
      TweenLite.to(cursor, 0.5, {
        css: {
          visibility: 'visible',
          left: event.clientX,
          top: event.clientY,
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.cursor {
  pointer-events: none;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  border: 0.5px solid #000;
  transform: translate3d(-50%, -50%, 0);
  background: #000;
  border-radius: 50% 50%;
  will-change: left top;
  z-index: 100000;
  &__social {
    background-color: #fff;
  }
}

.main-content {
  position: relative;
  overflow: hidden;
  transition: background-color 0.5s ease;
  background-color: $color-blue;
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
