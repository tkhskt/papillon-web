<template>
  <div class="top-header-container">
    <h1 class="title">Papillon</h1>
    <div class="outer-links">
      <a class="link">Spotify</a>
      <a class="link">Bandcamp</a>
      <a class="link">Youtube</a>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.top-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    color: white;
    font-size: 180px;
    @include font-hightower();
  }
  .outer-links {
    display: flex;
    color: white;
    .link {
      font-size: 18px;
      cursor: pointer;
      &:nth-child(2) {
        margin: 0 60px;
      }
    }
  }
}
</style>
