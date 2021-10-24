<template>
  <div class="top-header-container">
    <transition name="header">
      <h1 v-if="!xfdStarted" class="title">Papillon</h1>
    </transition>
    <transition name="header">
      <div
        v-if="!xfdStarted"
        class="outer-links"
        @mouseover="$store.dispatch('main/onChangeHoverTopLink', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTopLink', false)"
      >
        <!-- <a
        class="link"
        :class="{
          'hover-blue': hoverSpotify && xfdStarted,
          'hover-black': hoverSpotify && !xfdStarted,
        }"
        @mouseover="hoverSpotify = true"
        @mouseleave="hoverSpotify = false"
        >Spotify</a
      > -->
        <a
          class="link"
          href="https://zohryu.bandcamp.com/album/papillon"
          target="_blank"
          :class="{
            'hover-blue': hoverBandcamp && xfdStarted,
            'hover-black': hoverBandcamp && !xfdStarted,
          }"
          @mouseover="hoverBandcamp = true"
          @mouseleave="hoverBandcamp = false"
          >Bandcamp</a
        >
        <a
          class="link"
          href="https://www.youtube.com/watch?v=p2kL5TD8rY4"
          target="_blank"
          :class="{
            'hover-blue': hoverYouTube && xfdStarted,
            'hover-black': hoverYouTube && !xfdStarted,
          }"
          @mouseover="hoverYouTube = true"
          @mouseleave="hoverYouTube = false"
          >YouTube</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hoverSpotify: false,
      hoverBandcamp: false,
      hoverYouTube: false,
    }
  },
  computed: {
    ...mapState('main', ['hoverTopLink', 'xfdStarted']),
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

.top-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    color: white;
    font-size: 180px;
    @include font-hightower();
    cursor: default;
    user-select: none;
    transition: opacity 0.2s ease;
    @include mq(md) {
      font-size: 144px;
    }
    @include mq() {
      font-size: 48px;
    }
  }
  .outer-links {
    display: flex;
    color: $color-white;
    @include mq() {
      display: none;
    }
    .link {
      font-size: 18px;
      cursor: pointer;
      transition: color 0.2s ease;
      text-decoration: none;
      color: $color-white;
      &:nth-child(2) {
        // margin: 0 60px;
        margin-left: 60px;
      }
      &.hover-black {
        transition: color 0.2s ease;
        color: $color-black;
      }
      &.hover-blue {
        transition: color 0.2s ease;
        color: $color-blue;
      }
    }
  }
}

.header-enter-active,
.header-leave-active {
  transition: opacity 0.2s;
}
.header-enter, .header-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
