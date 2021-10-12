<template>
  <div class="top-header-container">
    <h1 class="title">Papillon</h1>
    <div
      class="outer-links"
      @mouseover="$store.dispatch('main/onChangeHoverTopLink', true)"
      @mouseleave="$store.dispatch('main/onChangeHoverTopLink', false)"
    >
      <a
        class="link"
        @mouseover="$store.dispatch('main/onChangeHoverTopLink', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTopLink', false)"
        >Spotify</a
      >
      <a
        class="link"
        @mouseover="$store.dispatch('main/onChangeHoverTopLink', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTopLink', false)"
        >Bandcamp</a
      >
      <a
        class="link"
        @mouseover="$store.dispatch('main/onChangeHoverTopLink', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTopLink', false)"
        >Youtube</a
      >
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
    color: $color-white;
    transition: color 0.2s ease;
    .link {
      font-size: 18px;
      cursor: pointer;
      &:nth-child(2) {
        margin: 0 60px;
      }
      &:hover {
        transition: color 0.2s ease;
        color: $color-black;
      }
    }
  }
}
</style>
