<template>
  <div v-scroll-lock="modalOpened" class="modal-container">
    <ul class="link-list">
      <li class="link"><a>Spotify</a></li>
      <li class="link"><a>Bandcamp</a></li>
      <li class="link"><a>YouTube</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('main', ['modalOpened']),
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
      text-align: center;
      &:nth-child(2) {
        margin-top: 30px;
      }
      &:last-child {
        margin-top: 30px;
      }
      a {
        font-size: 24px;
        color: $color-white;
        @include font-acumin();
      }
    }
  }
}
</style>
