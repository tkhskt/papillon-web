<template>
  <div class="tracks-container">
    <div class="left">
      <ul
        class="track-list"
        @mouseover="$store.dispatch('main/onChangeHoverTrack', true)"
        @mouseleave="$store.dispatch('main/onChangeHoverTrack', false)"
      >
        <li v-for="track in tracks" :key="track.name">
          <a :href="track.url" target="_blank" class="track">{{
            track.name
          }}</a>
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
          name: '01. effe - panta rhei',
          url: '',
        },
        {
          name: '02. Hiroto Kudo (WIP)',
          url: '',
        },
        {
          name: '03. callasoiled feat. smany - roar',
          url: '',
        },
        {
          name: '04. BUNGALANGIT - 神様が見てる',
          url: '',
        },
        {
          name: '05. Virtual Cat - Reminiscence',
          url: '',
        },
        {
          name: '06. zohryu - butterfly effect',
          url: '',
        },
        {
          name: '07. thorn - microcosm (WIP)',
          url: '',
        },
        {
          name: '08. callasoiled feat. zohryu - state of mind',
          url: '',
        },
        {
          name: '09. ido ito - butterfly effect remix (WIP)',
          url: '',
        },
        {
          name: '10. seiji takahashi - butterfly effect remix for zohyru',
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
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
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
    &:hover {
      transition: color 0.2s ease;
      color: $color-blue;
    }
  }
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-black;
}
</style>
