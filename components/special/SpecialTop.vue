<template>
  <div class="special-top-container">
    <div class="content">
      <img class="line1" src="~/assets/img/special-top-line1.svg" />
      <img class="line2" src="~/assets/img/special-top-line2.svg" />
      <!-- <div class="m3-info">
        <p>M3-49</p>
        <p>L21-a</p>
      </div> -->
      <h1 class="title">Papillon</h1>
      <div class="scroll-navigator">
        <p class="scroll-navigator__text">Scroll</p>
        <img
          class="scroll-navigator__arrow"
          src="~/assets/img/special-scroll-arrow.svg"
        />
      </div>
    </div>
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

  methods: {},
}
</script>

<style scoped lang="scss">
.special-top-container {
  width: 100vw;
  height: 100vh;
}

@keyframes arrow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(30px);
  }
}

.content {
  display: flex;
  position: relative;
  background: $color-blue;
  width: 88%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.9vw 0 16.4vw;
  .m3-info {
    position: absolute;
    p {
      @include font-acumin();
      color: $color-white;
      font-size: 18px;
    }
    top: 35px;
    left: 35px;
  }
  .title {
    font-size: 9vw;
    color: $color-white;
    @include font-hightower();
  }
  .line1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .line2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .scroll-navigator {
    display: flex;
    justify-content: center;
    &__text {
      @include font-acumin();
      font-size: 0.93vw;
      color: $color-white;
    }
    &__arrow {
      width: 1.97vw;
      margin-left: 0.45vw;
      animation: arrow 1.2s infinite;
    }
  }
}
</style>
