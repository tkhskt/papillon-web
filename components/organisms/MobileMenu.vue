<template>
  <div class="menu-container" @click="onClickMenu">
    <span :class="[currentSection, { opened: modalOpened }]"></span>
    <span :class="[currentSection, { opened: modalOpened }]"></span>
    <span :class="[currentSection, { opened: modalOpened }]"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    currentSection: {
      type: String,
      default: 'top',
    },
  },
  computed: {
    ...mapState('main', ['modalOpened']),
  },
  methods: {
    onClickMenu() {
      this.$store.dispatch('main/onChangeModal', !this.modalOpened)
    },
  },
}
</script>

<style scoped lang="scss">
.menu-container {
  width: 24px;
  height: 13px;
  span {
    display: block;
    width: 24px;
    height: 1px;
    background-color: $color-white;
    transition: background-color 0.5s ease;
    transform-origin: center;
    &.top {
      background-color: $color-white;
    }
    &.tracks {
      background-color: $color-black;
    }
    &.concepts {
      background-color: $color-white;
    }
    &.credits {
      background-color: $color-white;
    }
    &.opened {
      background-color: $color-white;
    }
    &:first-child {
      position: absolute;
      transition: all 0.5s ease;
      top: 0;
      &.opened {
        margin: 0;
        top: 6px;
        transform: rotate(45deg);
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: 6px;
      transition: all 0.5s ease;
      &.opened {
        opacity: 0;
      }
    }
    &:last-child {
      position: absolute;
      transition: all 0.5s ease;
      top: 12px;
      &.opened {
        margin: 0;
        top: 6px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
