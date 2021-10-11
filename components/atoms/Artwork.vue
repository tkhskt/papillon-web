<template>
  <div class="artwork-container">
    <img
      class="artwork-img"
      src="~assets/img/papillon.webp"
      :style="styleObj"
    />
  </div>
</template>

<script>
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
    }
  },
  watch: {
    scrollY(oldValue, newValue) {
      const maxScroll = window.innerHeight * 1.36
      const percentile = newValue / maxScroll
      this.styleObj = {
        'object-position': `0% ${Math.min(percentile * 130, 100)}%`,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.artwork-img {
  width: 58.4vw;
  height: 86.7vh;
  object-fit: cover;
  object-position: top;
  // transition: object-position 0.2s ease-out;
}
</style>
