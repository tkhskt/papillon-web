<template>
  <div
    class="artwork-container"
    :class="{ invisible: !artworkVisible }"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <picture>
      <source
        type="image/webp"
        class="artwork-img"
        srcset="~assets/img/papillon.webp"
        :style="styleObj"
      />
      <img
        class="artwork-img"
        src="~assets/img/papillon.png"
        :style="styleObj"
        @load="$store.dispatch('main/onLoadArtworkCompleted', true)"
      />
    </picture>
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
  data() {
    return {
      styleObj: {
        'object-position': '0% 0%',
      },
      artworkVisible: true,
    }
  },
  computed: {
    ...mapState('main', ['xfdStarted']),
  },
  watch: {
    scrollY(oldValue, newValue) {
      const maxScroll = window.innerHeight * 1.36
      const percentile = newValue / maxScroll
      this.styleObj = {
        'object-position': `0% ${Math.min(percentile * 130, 100)}%`,
      }
      this.artworkVisible = !this.xfdStarted || newValue > window.innerHeight
    },
    xfdStarted(newValue) {
      this.artworkVisible = !newValue || this.scrollY > window.innerHeight
    },
  },
  mounted() {
    if (this.supportWebP()) {
      this.$store.dispatch('main/onLoadArtworkCompleted', true)
    }
  },
  methods: {
    mouseOver() {
      this.$store.dispatch('main/onChangeHoverArtwork', true)
    },
    mouseLeave() {
      this.$store.dispatch('main/onChangeHoverArtwork', false)
    },
    supportWebP() {
      const elem = document.createElement('canvas')

      if (elem.getContext && elem.getContext('2d')) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      } else {
        // very old browser like IE 8, canvas not supported
        return false
      }
    },
  },
}
</script>

<style scoped lang="scss">
.artwork-container {
  opacity: 1;
  transition: opacity 0.5s ease;
  &.invisible {
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
}

.artwork-img {
  width: 58.4vw;
  height: 86.7vh;
  object-fit: cover;
  object-position: top;
  // transition: object-position 0.2s ease-out;
}
</style>
