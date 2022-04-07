<template>
  <div class="special-sidebar">
    <div class="content">
      <p class="title">Papillon</p>
      <div class="m3-navigator">
        <p>M3-49</p>
        <p>L21-a</p>
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
.special-sidebar {
  position: relative;
  width: $width-special-sidebar;
  height: 100vh;
  background: $color-white;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: $color-black;
    content: '';
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 60px 0;
  .title {
    display: inline-block;
    font-size: 32px;
    @include font-hightower();
    color: $color-black;
    transform-origin: center;
    transform: rotate(-90deg);
    transform: translate(0, 100%) rotate(-90deg);
  }
  .m3-navigator {
    display: inline-block;
    @include font-acumin();
    font-size: 18px;
    color: $color-black;
    margin-top: 100%;
    transform-origin: center;
    transform: rotate(-90deg);
  }
}
</style>
