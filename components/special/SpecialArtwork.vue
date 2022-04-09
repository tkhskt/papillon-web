<template>
  <div class="special-artwork-container">
    <picture>
      <source
        type="image/webp"
        class="artwork-img"
        srcset="~assets/img/papillon.webp"
      />
      <img
        class="artwork-img"
        src="~assets/img/papillon.jpg"
        @load="$store.dispatch('main/onLoadArtworkCompleted', true)"
      />
    </picture>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.artwork-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}
</style>
