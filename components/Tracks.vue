<template>
  <div class="tracks-container">
    <div class="left">
      <ul
        class="track-list"
        @mouseover="$store.dispatch('main/onChangeHoverTrack', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTrack', false)"
      >
        <li v-for="(track, index) in tracks" :key="track.name">
          <a :href="track.url" target="_blank" class="track">
            <span class="index">{{ ('00' + (index + 1)).slice(-2) }}.</span
            >{{ track.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="right">
      <h2 class="section-title">Tracks</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tracks: [
        {
          name: 'effe - panta rhei',
          url: '',
        },
        {
          name: 'Hiroto Kudo (WIP)',
          url: '',
        },
        {
          name: 'callasoiled feat. smany - roar',
          url: '',
        },
        {
          name: 'BUNGALANGIT - 神様が見てる',
          url: '',
        },
        {
          name: 'Virtual Cat - Reminiscence',
          url: '',
        },
        {
          name: 'zohryu - butterfly effect',
          url: '',
        },
        {
          name: 'N - microcosm (WIP)',
          url: '',
        },
        {
          name: 'callasoiled feat. zohryu - state of mind',
          url: '',
        },
        {
          name: 'ido ito - butterfly effect remix (WIP)',
          url: '',
        },
        {
          name: 'seiji takahashi - butterfly effect remix for zohyru',
          url: '',
        },
      ],
    }
  },
  methods: {
    onHoverContent() {
      this.hoverContent = true
      this.$store.dispatch('main/onChangeHoverTop', true)
    },
    onLeaveContent() {
      this.hoverContent = false

      this.$store.dispatch('main/onChangeHoverTop', false)
    },
    onHoverBackground() {
      this.hoverBackground = true
      this.$store.dispatch('main/onChangeHoverTop', true)
    },
    onLeaveBackground() {
      this.hoverBackground = false
      const hover = !this.hoverBackground && !this.hoverContent
      this.$store.dispatch('main/onChangeHoverTop', !hover)
    },
  },
}
</script>

<style scoped lang="scss">
.tracks-container {
  display: flex;
  height: 100vh;
  width: 100%;
  min-height: $min-height-section;
  @include mq() {
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
    max-width: 400px;
    margin: 0 auto;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    @include mq() {
      width: 100%;
      height: auto;
      order: 2;
      justify-content: flex-start;
      margin-top: 77px;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    @include mq() {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      order: 1;
    }
  }
}

.track-list {
  list-style: none;

  .track {
    font-size: 18px;
    @include font-acumin();
    letter-spacing: 0.05em;
    line-height: 48px;
    color: $color-black;
    text-decoration: none;
    transition: color 0.2s ease;
    @include mq() {
      font-size: 12px;
      line-height: 32px;
    }
    &:hover {
      transition: color 0.2s ease;
      color: $color-blue;
    }
    .index {
      padding-right: 0.8em;
    }
  }
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-black;
  @include mq(md) {
    font-size: 96px;
  }
  @include mq() {
    font-size: 36px;
  }
}
</style>
