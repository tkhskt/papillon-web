<template>
  <div class="top-container">
    <top-header />
    <img class="stroke--top" src="~assets/img/stroke_top.svg" />
    <img class="stroke--bottom" src="~assets/img/stroke_bottom.svg" />
  </div>
</template>

<script></script>

<style scoped lang="scss">
.top-container {
  position: relative;
  height: 100vh;
  width: 100%;
  background: $color-blue;
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
