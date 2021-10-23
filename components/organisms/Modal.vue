<template>
  <div class="modal-container">
    <ul class="link-list">
      <li class="link"><a>Spotify</a></li>
      <li class="link"><a>Bandcamp</a></li>
      <li class="link"><a>YouTube</a></li>
    </ul>
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
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-blue;
  height: 100vh;
  width: 100%;
  .link-list {
    list-style: none;
    .link {
      a {
        font-size: 24px;
        color: $color-white;
        @include font-acumin();
      }
    }
  }
}
</style>
