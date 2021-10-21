<template>
  <div class="circle-container"></div>
</template>

<script></script>

<style scoped lang="scss">
.circle-container {
  width: 28.6vw;
  height: 28.6vw;
  border-radius: 50%;
  background: linear-gradient(#00bde0, #d80000);
  @include mq() {
    width: 100vmin;
    height: 100vmin;
  }
}
</style>
