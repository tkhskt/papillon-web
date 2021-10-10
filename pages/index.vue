<template>
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
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      currentSection: '',
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
      } else if (this.scrollY > window.innerHeight + imageOffset) {
        this.currentSection = 'tracks'
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

.top {
  margin-bottom: 36.7vh;
  background: $color-white;
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
  .track {
  }
}

.circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  bottom: -14.3vw;
}
</style>
