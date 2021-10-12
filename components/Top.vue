<template>
  <div
    class="top-container"
    @mouseover="onHoverContent"
    @mouseleave="onLeaveContent"
    @click="onClickContainer"
  >
    <div class="content">
      <top-header class="top-header" />
    </div>
    <div class="background">
      <img class="stroke--top" src="~assets/img/stroke_top.svg" />
      <img class="stroke--bottom" src="~assets/img/stroke_bottom.svg" />
      <p class="scroll-nav">scroll to navigate</p>
    </div>
    <artwork class="artwork" :scroll-y="scrollY" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    scrollY: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState('main', ['hoverArtwork', 'hoverTopLink', 'xfdStarted']),
  },
  methods: {
    onHoverContent() {
      this.hoverContent = true
      this.$store.dispatch('main/onChangeHoverTop', true)
    },
    onLeaveContent() {
      this.hoverContent = false

      this.$store.dispatch('main/onChangeHoverTop', false)
    },
    onClickContainer() {
      if (this.hoverArtwork || this.hoverTopLink) return
      this.$store.dispatch('main/onChangeXfdStarted', !this.xfdStarted)
    },
  },
}
</script>

<style scoped lang="scss">
.top-container {
  position: relative;
  height: 100vh;
  width: 100%;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    .top-header {
      padding-left: 6.7vw;
      padding-right: 5.2vw;
      padding-top: 13vh;
      z-index: 10;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    // background: $color-blue;
    width: 100%;
    height: 100%;
    .scroll-nav {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 3vh;
      left: 3.8vw;
      left: 74px;
      width: 77px;
      height: 77px;
      font-size: 12px;
      color: white;
      text-align: center;
      border: solid 1px white;
      border-radius: 38.5px;
    }
  }
  .artwork {
    position: absolute;
    top: 50vh;
    right: 5.2vw;
    // z-index: 5;
  }
}

.stroke {
  &--top {
    position: absolute;
    top: 0;
    width: 100%;
  }
  &--bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
