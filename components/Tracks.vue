<template>
  <div class="tracks-container">
    <div class="left">
      <table class="table" cell-spacing="15">
        <tbody>
          <tr
            v-for="(track, index) in tracks"
            :key="track.name"
            class="list-item"
          >
            <td class="track-list">
              <span class="index">{{ ('00' + (index + 1)).slice(-2) }}.</span>
              <a target="_blank" class="track"> {{ track.title }}</a>
            </td>
            <td
              class="artist-list"
              @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
              @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
            >
              <a
                :href="track.artist.url"
                target="_blank"
                class="artist"
                :class="{ 'link-enabled': track.artist.url != null }"
              >
                {{ track.artist.name }}</a
              >
              <template v-if="track.artist2 != null">
                <span> feat. </span>
                <a
                  :href="track.artist2.url"
                  target="_blank"
                  class="artist"
                  :class="{ 'link-enabled': track.artist2.url != null }"
                >
                  {{ track.artist2.name }}</a
                >
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right">
      <h2 class="section-title">Tracks</h2>
    </div>
  </div>
</template>

<script>
//  @mouseover="$store.dispatch('main/onChangeHoverTrack', true)"
//           @mouseleave="$store.dispatch('main/onChangeHoverTrack', false)"
export default {
  data() {
    return {
      tracks: [
        {
          artist: {
            name: 'effe',
            url: 'https://twitter.com/effel_tou',
          },
          artist2: null,
          title: 'panta rhei',
          url: '',
        },
        {
          artist: {
            name: 'Hiroto Kudo',
            url: 'https://twitter.com/qudo_',
          },
          artist2: null,
          title: 'Lazurite',
          url: '',
        },
        {
          artist: {
            name: 'callasoiled',
            url: 'https://twitter.com/callasoiled',
          },
          artist2: {
            name: 'Smany',
            url: 'https://twitter.com/smany000',
          },
          title: 'roar',
          url: '',
        },
        {
          artist: {
            name: 'BUNGALANGIT',
            url: null,
          },
          artist2: null,
          title: '神様が見てる (2021 remaster)',
          url: '',
        },
        {
          artist: {
            name: 'Virtual Cat',
            url: 'https://twitter.com/neko_vtuber',
          },
          artist2: null,
          title: 'Reminiscence',
          url: '',
        },
        {
          artist: {
            name: 'zohryu',
            url: 'https://twitter.com/zohryu',
          },
          artist2: null,
          title: 'butterfly effect',
          url: '',
        },
        {
          artist: {
            name: '9788n',
            url: null,
          },
          artist2: null,
          title: 'microcosm',
          url: '',
        },
        {
          artist: {
            name: 'callasoiled',
            url: 'https://twitter.com/callasoiled',
          },
          artist2: {
            name: 'zohryu',
            url: 'https://twitter.com/zohryu',
          },
          title: 'state of mind',
          url: '',
        },
        {
          artist: {
            name: 'Seiji Takahashi',
            url: 'https://twitter.com/N41_E141',
          },
          artist2: null,
          title: 'butterfly effect remix for zohyru',
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
    max-width: 450px;
    margin: 0 auto;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 10px;
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

.table {
  width: 100%;
  max-width: 550px;
}

.track-list {
  list-style: none;
  .index {
    display: inline-block;
    font-size: 18px;
    @include font-acumin();
    letter-spacing: 0.05em;
    line-height: 48px;
    color: $color-black;
    text-decoration: none;
    width: 40px;
    @include mq(md) {
      font-size: 16px;
      line-height: 38px;
      width: 36px;
    }
    @include mq() {
      font-size: 12px;
      line-height: 24px;
      padding: 4px 0;
      width: 20px;
    }
    padding-right: 0.8em;
  }
  .track {
    font-size: 18px;
    @include font-acumin();
    letter-spacing: 0.05em;
    line-height: 48px;
    color: $color-black;
    text-decoration: none;
    transition: color 0.2s ease;
    @include mq(md) {
      font-size: 16px;
      line-height: 38px;
    }
    @include mq() {
      font-size: 12px;
      line-height: 24px;
      padding: 4px 0;
    }
    &:hover {
      transition: color 0.2s ease;
      // color: $color-blue;
      color: $color-black;
      @include mq() {
        color: $color-black;
      }
    }

    .artist {
      position: relative;
      margin-left: 30px;
    }
  }
}

.artist-list {
  position: relative;
  list-style: none;
  font-size: 18px;
  @include font-acumin();
  letter-spacing: 0.05em;
  line-height: 48px;
  color: $color-black;
  padding-left: 30px;
  @include mq(md) {
    font-size: 16px;
    line-height: 38px;
  }
  @include mq() {
    font-size: 12px;
    line-height: 24px;
    padding: 4px 0;
  }

  .artist {
    position: relative;
    text-decoration: none;
    color: $color-black;
    transition: color 0.2s ease;

    .index {
      padding-right: 0.8em;
    }
  }
  .link-enabled {
    cursor: pointer;
    &:after {
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 1px;
      left: 0;
      content: '';
      background: $color-black;
    }
    &:hover {
      transition: color 0.2s ease;
      color: $color-blue;

      @include mq() {
        color: $color-black;
      }
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
