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
      <img
        v-if="!isMobile"
        class="stroke--top"
        :class="{ invisible: xfdStarted }"
        src="~assets/img/stroke_top.svg"
      />
      <img
        v-if="isMobile"
        class="stroke--top"
        src="~assets/img/stroke_top_mobile.svg"
      />
      <img
        v-if="!isMobile"
        class="stroke--bottom"
        :class="{ invisible: xfdStarted }"
        src="~assets/img/stroke_bottom.svg"
      />
      <img
        v-if="isMobile"
        class="stroke--bottom"
        src="~assets/img/stroke_bottom_mobile.svg"
      />
      <p class="scroll-nav" :class="{ invisible: xfdStarted }">
        scroll to navigate
      </p>
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
    ...mapState('main', [
      'hoverArtwork',
      'hoverTopLink',
      'xfdStarted',
      'isMobile',
    ]),
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
.invisible {
  opacity: 0;
}

.top-container {
  position: relative;
  height: 100vh;
  width: 100%;
  @include mq() {
    height: auto;
    min-height: 100vh;
    padding-bottom: calc(10vh + 67px);
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    @include mq() {
      position: relative;
      top: auto;
      left: auto;
    }
    .top-header {
      padding-left: 6.7vw;
      padding-right: 5.2vw;
      padding-top: 13vh;
      z-index: 10;
      @include mq() {
        padding-top: 11.3vh;
        padding-left: 25px;
      }
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    // background: $color-blue;
    @include mq() {
    }
    width: 100%;
    height: 100%;
    .scroll-nav {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 3vh;
      left: 3.8vw;
      width: 77px;
      height: 77px;
      font-size: 12px;
      color: $color-white;
      text-align: center;
      border: solid 1px $color-white;
      border-radius: 38.5px;
      transition: opacity 0.2s ease;
      @include mq() {
        position: absolute;
        left: auto;
        right: 25px;
        width: 67px;
        height: 67px;
      }
    }
  }
  .artwork {
    position: absolute;
    top: 50vh;
    right: 5.2vw;
    @include mq() {
      position: relative;
      top: auto;
      right: auto;
      margin-top: 7.8vh;
      padding: 0 25px;
    }
  }
}

.stroke {
  &--top {
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 0.2s ease;
  }
  &--bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    transition: opacity 0.2s ease;
  }
}
</style>
