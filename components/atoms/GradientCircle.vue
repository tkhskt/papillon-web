<template>
  <div
    class="circle-container"
    @mouseenter="hoverCircle = true"
    @mouseleave="hoverCircle = false"
  >
    <p class="announce" :class="{ visible: hoverCircle }">
      The limited edition releases later…
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverCircle: false,
    }
  },
}
</script>

<style scoped lang="scss">
.circle-container {
  position: relative;
  width: 28.6vw;
  height: 28.6vw;
  border-radius: 50%;
  background: linear-gradient(#00bde0, #d80000);
  @include mq() {
    width: 100vmin;
    height: 100vmin;
  }
  .announce {
    position: absolute;
    font-size: 18px;
    top: calc(50% - 30px);
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: $color-white;
    @include font-hightower();
    opacity: 0;
    transition: opacity 0.5s ease;
    &.visible {
      opacity: 0.3;
    }
    @include mq() {
      display: none;
    }
  }
}
</style>
