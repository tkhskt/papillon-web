<template>
  <div class="special-track-container">
    <p class="title">Tracks</p>
    <div class="content">
      <img class="line1" src="~/assets/img/special-track-line1.svg" />
      <img class="line2" src="~/assets/img/special-track-line2.svg" />

      <div class="tracks">
        <table class="table" cell-spacing="15">
          <tbody>
            <tr
              v-for="(track, index) in tracks"
              :key="track.name"
              class="list-item"
            >
              <td class="track-list">
                <span class="index">{{ ('00' + (index + 1)).slice(-2) }}.</span>
                <p class="track">{{ track.title }}</p>
                <template v-if="track.artist2 != null">
                  <span class="feat"> feat. </span>
                  <a
                    :href="track.artist2.url"
                    target="_blank"
                    class="artist"
                    :class="{ 'link-enabled': track.artist2.url != null }"
                    @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
                    @mouseleave="
                      $store.dispatch('main/onChangeHoverLink', false)
                    "
                  >
                    {{ track.artist2.name }}</a
                  >
                </template>
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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
            name: 'Frums',
            url: 'https://twitter.com/frumsdotxyz',
          },
          artist2: null,
          title: 'variadicgleam',
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
            name: 'LASTorder',
            url: 'https://twitter.com/LASTorder_kt',
          },
          artist2: null,
          title: 'Missing Person (行方不明の人)',
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
            name: 'Phasma',
            url: 'https://twitter.com/Phasma',
          },
          artist2: null,
          title: 'Gray Storm',
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
            name: 'cokiyu',
            url: 'https://twitter.com/c0kiyu',
          },
          artist2: null,
          title: 'Stay There As You Are',
          url: '',
        },
        {
          artist: {
            name: 'charlot',
            url: 'https://twitter.com/charlot_bn',
          },
          artist2: null,
          title: 'leaving home',
          url: '',
        },
        {
          artist: {
            name: '9887n',
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
            name: '黒皇帝',
            url: 'https://twitter.com/dialgadu77',
          },
          artist2: null,
          title: 'world connection',
          url: '',
        },
        {
          artist: {
            name: 'ginrei',
            url: 'https://twitter.com/ginrei',
          },
          artist2: null,
          title: 'terra nostra',
          url: '',
        },
        {
          artist: {
            name: 'Seiji Takahashi',
            url: 'https://twitter.com/N41_E141',
          },
          artist2: null,
          title: 'butterfly effect remix for zohryu',
          url: '',
        },
      ],
    }
  },

  methods: {},
}
</script>

<style scoped lang="scss">
.special-top-container {
  position: relative;
  display: flex;
  justify-content: bottom;
  width: 100vmax;
  height: 100vh;
}

.content {
  display: flex;
  position: relative;
  background: $color-white;
  width: 100vmax;
  height: 100vh;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 5.7vw 0 16.4vw;
  overflow: hidden;
  .line1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
  }
  .line2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 55%;
  }
}
.title {
  position: absolute;
  display: inline;
  padding-left: 45px;
  line-height: 1em;
  justify-content: flex-end;
  bottom: 0;
  @include font-hightower();
  color: $color-black;
  font-size: 7.29vw;
  transform-origin: left bottom;
  transform: translate(calc(1em + 2.5vw), 0) rotate(-90deg);
  z-index: 10;
}

.tracks {
  z-index: 10;
  padding-bottom: 45px;
}

.table {
  width: 100%;
  // max-width: 550px;
}

.track-list {
  list-style: none;

  .index {
    display: inline-block;
    font-size: 2.2vmin;
    @include font-acumin-bold();
    letter-spacing: 0.05em;
    line-height: 2em;
    color: $color-black;
    text-decoration: none;
    width: 2em;
  }
  .track {
    display: inline-block;
    font-size: 2.2vmin;
    @include font-acumin-bold();
    letter-spacing: 0.05em;
    line-height: 2em;
    color: $color-black;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      transition: color 0.2s ease;
      // color: $color-blue;
      color: $color-black;
    }
  }
  .artist,
  .feat {
    position: relative;
    text-decoration: none;
    color: $color-black;
    transition: color 0.2s ease;
    font-size: 2.2vmin;
    @include font-acumin-bold();
    letter-spacing: 0.05em;
    line-height: 2em;
    color: $color-black;
    text-decoration: none;

    &.link-enabled {
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
      }
    }
  }
}

.artist-list {
  position: relative;
  list-style: none;
  font-size: 2.2vmin;
  @include font-acumin();
  letter-spacing: 0.05em;
  line-height: 2.3em;
  color: $color-black;
  padding-left: 2.5em;

  .artist {
    position: relative;
    text-decoration: none;
    color: $color-black;
    transition: color 0.2s ease;
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
    }
  }
}
</style>
