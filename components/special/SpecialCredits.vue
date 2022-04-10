<template>
  <div class="special-credits-container">
    <div class="content">
      <img class="line1" src="~/assets/img/special-credits-line1.svg" />
      <img class="line2" src="~/assets/img/special-credits-line2.svg" />

      <p class="title">Credits</p>

      <div class="description-wrapper">
        <div class="description">
          <div class="credits-text">
            <table>
              <tbody>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Produce</p>
                  </td>
                  <td class="item-description">
                    <p>
                      zohryu (<a
                        class="link"
                        href="https://twitter.com/zohryu"
                        target="_blank"
                        @mouseover="
                          $store.dispatch('main/onChangeHoverLink', true)
                        "
                        @mouseleave="
                          $store.dispatch('main/onChangeHoverLink', false)
                        "
                        >@zohryu</a
                      >)
                    </p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Illustration</p>
                  </td>
                  <td class="item-description">
                    <p>
                      塚本穴骨 (<a
                        class="link"
                        href="https://twitter.com/DOnut_bone"
                        target="_blank"
                        @mouseover="
                          $store.dispatch('main/onChangeHoverLink', true)
                        "
                        @mouseleave="
                          $store.dispatch('main/onChangeHoverLink', false)
                        "
                        >@DOnut_bone</a
                      >)
                    </p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Interior art</p>
                  </td>
                  <td class="item-description">
                    <p>
                      chiffon (<a
                        class="link"
                        href="https://twitter.com/chantillycreamy"
                        target="_blank"
                        @mouseover="
                          $store.dispatch('main/onChangeHoverLink', true)
                        "
                        @mouseleave="
                          $store.dispatch('main/onChangeHoverLink', false)
                        "
                        >@chantillycreamy</a
                      >)
                    </p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Web creation</p>
                  </td>
                  <td class="item-description">
                    <p>
                      thorn (<a
                        class="link"
                        href="https://twitter.com/gericass"
                        target="_blank"
                        @mouseover="
                          $store.dispatch('main/onChangeHoverLink', true)
                        "
                        @mouseleave="
                          $store.dispatch('main/onChangeHoverLink', false)
                        "
                        >@gericass</a
                      >)
                    </p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Special thanks</p>
                  </td>
                  <td class="item-description">
                    <p>
                      Bitplane (<a
                        class="link"
                        href="https://twitter.com/AnitaSun"
                        target="_blank"
                        @mouseover="
                          $store.dispatch('main/onChangeHoverLink', true)
                        "
                        @mouseleave="
                          $store.dispatch('main/onChangeHoverLink', false)
                        "
                        >@AnitaSun</a
                      >)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="gradient-circle">
            <special-gradient-circle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialGradientCircle from './SpecialGradientCircle.vue'
export default {
  components: { SpecialGradientCircle },
  methods: {},
}
</script>

<style scoped lang="scss">
.special-credits-container {
  position: relative;
  display: flex;
  justify-content: bottom;
  width: calc(112vmax - $width-special-sidebar);
  height: 100vh;
}

.content {
  position: relative;
  background: $color-black;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin-left: 12vw;
  overflow: hidden;
  .line1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
  .line2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
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
  color: $color-white;
  font-size: 7.29vw;
  transform-origin: left bottom;
  transform: translate(calc(1em + 2.5vw), 0) rotate(-90deg);
  z-index: 20;
}

.description-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.description {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: $width-special-sidebar;
  .gradient-circle {
    margin-left: 6.92vw;
  }
  .credits-text {
    font-size: 2.22vmin;
    color: $color-white;
    margin-left: 16.66vmin;
    letter-spacing: 0.05em;
    line-height: 2em;
    .item-title {
      @include font-acumin-bold();
    }
    .item-description {
      @include font-acumin();
      padding-left: 1.5em;
    }
  }
}
.link {
  color: $color-white;
  transition: color 0.2s ease;
  text-decoration: none;
  &:hover {
    color: $color-blue;
    transition: color 0.2s ease;
  }
}
</style>
