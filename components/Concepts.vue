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
          I really wanted to bring back together many members of the Japanese
          electronica scene (previous members of fusz. for example). The key
          concepts of this album were - The main genres (electronica, lo-fi,
          downtempo, ambient) - A fixation on nostalgia, time travel and
          butterflies - A revival of the small Japanese inner electronica scene
          In summary, I wanted to bring people from different scenes together
          for a project every fan will love. It is a show of generosity, for a
          really big fan from overseas. I really want the artists to feel loved.
        </p>
        <p v-if="selectedLang == 'ja'" class="concepts--ja">
          私は、日本のエレクトロニカ・シーンの多くのメンバー（例えばfusz.の前のメンバー）を再び集めたいと思っていました。
          (例えば、fusz.の前メンバー) このアルバムのキーコンセプトは -
          主なジャンル（エレクトロニカ、ローファイ、ダウンテンポ、アンビエント -
          ノスタルジー、タイムトラベル、蝶々へのこだわり -
          日本の小さなインナー・エレクトロニカ・シーンの再興
          要約すると、様々なシーンの人たちを集めて、すべてのファンに愛されるプロジェクトにしたかったのです。
          これは、海外の大ファンに対する寛大さの表れでもあります。アーティストたちには、愛されていることを実感してもらいたいですね。
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

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-white;
}

.concepts-content {
  color: $color-white;
  padding: 0 11.4vw;
  .language-wrapper {
    display: flex;
    margin-bottom: 32.5px;
    align-items: center;
    flex-shrink: 1;
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
    }
    &__ja {
      font-size: 18px;
      transition: opacity 0.1s ease;
      cursor: pointer;
    }
    .unselected {
      opacity: 0.45;
    }
  }
  .concepts {
    &--en {
      @include font-hightower();
      line-height: 26px;
    }
    &--ja {
      @include font-hightower();
      line-height: 26px;
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
