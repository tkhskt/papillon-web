<template>
  <div>
    <transition name="header">
      <Header
        v-if="currentSection != 'top'"
        class="header"
        :color="currentSection"
      />
    </transition>
    <div id="main-content" class="main-content" :class="currentSection">
      <top class="top" :scroll-y="scrollY" />
      <div class="sections">
        <span class="vertical-line"></span>
        <tracks ref="tracks" class="tracks" />
        <concepts ref="concepts" class="concepts" />
        <credits ref="credits" class="credits" />
      </div>
      <gradient-circle class="circle" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      currentSection: 'top',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
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
  },
}
</script>

<style scoped lang="scss">
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
