<template>
  <div class="header-container">
    <h1
      class="title"
      :class="color"
      @click="clickTitle"
      @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
      @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
    >
      Papillon
    </h1>
    <div
      class="outer-links"
      @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
      @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
    >
      <!-- <a class="link" target="_blank" :class="color">Spotify</a> -->
      <a
        class="link"
        href="https://zohryu.bandcamp.com/album/papillon"
        target="_blank"
        :class="color"
        >Bandcamp</a
      >
      <!-- <a class="link" target="_blank" :class="color">YouTube</a> -->
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
  methods: {
    clickTitle() {
      window.scroll({ top: 0 })
      this.$store.dispatch('main/onChangeHoverLink', false)
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
    cursor: pointer;
  }
  .outer-links {
    display: flex;
    color: $color-white;
    @include mq() {
      display: none;
    }
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
