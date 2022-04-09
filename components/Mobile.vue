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
      <top class="top" :scroll-y="scrollY" />
      <div class="sections">
        <span v-if="!isMobile" class="vertical-line"></span>
        <div ref="tracks">
          <tracks class="tracks" />
        </div>
        <div ref="concepts">
          <concepts ref="concepts" class="concepts" />
        </div>
        <div ref="credits">
          <credits ref="credits" class="credits" />
        </div>
      </div>
      <span
        v-if="isMobile"
        class="vertical-line"
        :class="[currentSection, { visible: showMobileLine }]"
      ></span>
      <gradient-circle class="circle" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      scrollY: 0,
      currentSection: 'top',
      showMobileLine: false,
    }
  },
  computed: {
    ...mapState('main', ['isMobile', 'modalOpened']),
  },
  mounted() {
    this.$initLuxy()
    window.addEventListener('scroll', this.scroll)
    this.observer = new MutationObserver((records) => {
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
    this.observer.observe(this.$refs.mainContent, {
      attributesList: ['style'],
      attributeOldValue: true,
    })
  },
  beforeDestroy() {
    this.observer.disconnect()
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      const component = this
      if (component.isTouchable()) {
        component.scrollY = window.scrollY
        component.handleMobileScroll()
      }
    },
    isTouchable() {
      const Touch = 'ontouchstart' in window || navigator.msMaxTouchPoints
      return typeof Touch !== 'undefined'
    },
    handleScroll() {
      // const imageOffset = window.innerHeight * 0
      const minHeight = 700
      const tracksHeight = this.$refs.tracks.clientHeight * 0.9
      const conceptsHeight = this.$refs.concepts.clientHeight * 0.9
      if (
        this.scrollY >
        tracksHeight +
          conceptsHeight +
          Math.max(window.innerHeight, minHeight) * 0.5
      ) {
        this.currentSection = 'credits'
      } else if (
        this.scrollY >
        tracksHeight + Math.max(window.innerHeight, minHeight) * 0.5
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
    handleMobileScroll() {
      const minHeight = 700
      const tracksHeight = this.$refs.tracks.clientHeight * 0.9
      const conceptsHeight = this.$refs.concepts.clientHeight * 0.9
      if (
        this.scrollY >
        tracksHeight +
          conceptsHeight +
          Math.max(window.innerHeight, minHeight) * 0.5
      ) {
        this.currentSection = 'credits'
      } else if (
        this.scrollY >
        tracksHeight + Math.max(window.innerHeight, minHeight) * 0.5
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
