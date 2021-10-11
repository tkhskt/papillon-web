<template>
  <div
    class="crossfade-container"
    :style="{
      'clip-path': `circle(50px at left ${cursorX + 50 / 2}px top ${
        cursorY + 50 / 2 + scrollY
      }px)`,
    }"
  >
    <video controls class="video-content">
      <source src="~assets/video/papillon.webm" type="video/webm" />
      <source src="~assets/video/papillon.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    cursorX: {
      type: Number,
      default: 0,
    },
    cursorY: {
      type: Number,
      default: 0,
    },
    scrollY: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      styleObj: {
        'clip-path': 'none',
      },
    }
  },
  watch: {
    cursorX(oldValue, newValue) {
      this.styleObj = {
        'clip-path': `padding-box circle(40px at ${newValue.x}px ${this.cursorY}px)`,
      }
    },
    cursorY(oldValue, newValue) {
      this.styleObj = {
        'clip-path': `padding-box circle(40px at ${this.cursorX}px ${newValue.y}px)`,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.crossfade-container {
  position: absolute;
  overflow: hidden;
  transform: scaleZ(5000);
  width: 100vw;
  height: 100vh;
  .video-content {
    min-width: 100%;
    min-height: 100%;

    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;

    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    // clip-path: circle(40% at 50% 50%);
    z-index: -1;
  }
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  &-blue {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $color-blue;
  }
}
</style>
