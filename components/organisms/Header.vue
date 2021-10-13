<template>
  <div class="header-container">
    <h1 class="title" :class="color">Papillon</h1>
    <div class="outer-links">
      <a class="link" :class="color">Spotify</a>
      <a class="link" :class="color">Bandcamp</a>
      <a class="link" :class="color">Youtube</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'top',
    },
  },
}
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    transition: color 0.5s ease;
    @include font-hightower();
  }
  .outer-links {
    display: flex;
    color: white;
    .link {
      transition: color 0.5s ease;
      font-size: 14px;
      cursor: pointer;
      &:nth-child(2) {
        margin: 0 60px;
      }
      text-decoration: none;
      transition: color 0.2s ease;
      &:hover {
        transition: color 0.2s ease;
        color: $color-blue;
      }
    }
  }
  .top {
    color: $color-white;
  }
  .tracks {
    color: $color-black;
  }
  .concepts {
    color: $color-white;
  }
  .credits {
    color: $color-white;
  }
}
</style>
