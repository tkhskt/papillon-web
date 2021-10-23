<template>
  <div class="concepts-container">
    <div class="left">
      <h2 class="section-title">Concepts</h2>
    </div>
    <div class="right">
      <div class="concepts-content">
        <div class="language-wrapper">
          <div
            class="language"
            @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
            @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
          >
            <p
              class="language__en"
              :class="{ unselected: selectedLang != 'en' }"
              @click="selectedLang = 'en'"
            >
              en
            </p>
            <span class="language__stroke"></span>
            <p
              class="language__ja"
              :class="{ unselected: selectedLang != 'ja' }"
              @click="selectedLang = 'ja'"
            >
              ja
            </p>
          </div>
        </div>
        <p v-if="selectedLang == 'en'" class="concepts--en">
          Papillon is a passion project that I designed and developed over the
          course of two years.<br />
          <br />
          Initially, I strove to organize a small album themed around
          electronica, and other genres such as downtempo, lo-fi and ambient.
          Over time, I began to invite various members of the Japanese
          electronic music scene to participate in the project. <br />
          <br />
          My goals for this album were to revive a sense of nostalgia towards
          the electronica genre, as well as a fixation on time travel,
          butterflies and the ideal of beauty within music.<br />
          <br />
          For this project, I want the artists to feel the love and passion of
          their fans.<br />
          <br />
          From the bottom of my heart, to the listeners, to the artists, to my
          friends...
        </p>
        <p v-if="selectedLang == 'ja'" class="concepts--ja">
          Papillonは、2年間の構想の末に実現した情熱的なプロジェクトです。<br />
          <br />
          最初は、エレクトロニカを中心に、ダウンテンポやlo-fi、アンビエントなどのジャンルをテーマにした小さなアルバムを作ろうとしていました。そのうちに、日本の電子音楽シーンのさまざまなメンバーに参加してもらうようになりました。<br />
          <br />
          このアルバムの目的は、エレクトロニカというジャンルへのノスタルジーと、タイムトラベル、蝶、音楽の中の美へのこだわりを復活させることです。<br />
          <br />
          このプロジェクトを通して、アーティストの皆さんにはファンからの愛と情熱を感じてもらいたいと思っています。<br />
          <br />
          心の底から、リスナーの皆さん、アーティストの皆さん、そして私の友人たちへ...<br />
        </p>
        <div class="from">
          <span class="stroke"></span>
          <p>zohryu</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLang: 'en',
    }
  },
}
</script>

<style scoped lang="scss">
.concepts-container {
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
    @include mq() {
      width: 100%;
      height: auto;
      order: 1;
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
      order: 2;
    }
  }
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-white;
  @include mq(md) {
    font-size: 96px;
  }
  @include mq() {
    font-size: 36px;
  }
}

.concepts-content {
  color: $color-white;
  padding: 0 100px;
  max-width: 900px;
  @include mq() {
    padding: 0;
    margin-top: 77px;
  }
  .language-wrapper {
    display: flex;
    margin-bottom: 32.5px;
    align-items: center;
    flex-shrink: 1;
    @include mq() {
      margin-bottom: 25.5px;
    }
  }
  .language {
    display: flex;
    align-items: center;
    &__stroke {
      display: inline-block;
      background: $color-white;
      height: 20px;
      width: 1px;
      margin: 0 15px;
    }
    &__en {
      font-size: 18px;
      transition: opacity 0.1s ease;
      cursor: pointer;
      @include mq(md) {
        font-size: 16px;
      }
      @include mq() {
        font-size: 16px;
      }
    }
    &__ja {
      font-size: 18px;
      transition: opacity 0.1s ease;
      cursor: pointer;
      @include mq(md) {
        font-size: 16px;
      }
      @include mq() {
        font-size: 16px;
      }
    }
    .unselected {
      opacity: 0.45;
    }
  }
  .concepts {
    &--en {
      @include font-hightower();
      line-height: 26px;
      letter-spacing: 0.05em;
      @include mq(md) {
        font-size: 14px;
      }
      @include mq() {
        font-size: 12px;
        line-height: 18px;
      }
    }
    &--ja {
      @include font-hightower();
      line-height: 26px;
      letter-spacing: 0.05em;
      @include mq(md) {
        font-size: 14px;
      }
      @include mq() {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  .from {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    @include font-hightower();
    margin-top: 5px;
    @include mq(md) {
      font-size: 20px;
    }
    @include mq() {
      font-size: 18px;
    }
    .stroke {
      display: inline-block;
      content: '';
      width: 45px;
      height: 1px;
      background: $color-white;
      margin-right: 15px;
    }
  }
}
</style>
