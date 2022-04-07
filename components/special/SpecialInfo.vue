<template>
  <div class="special-info-container">
    <div class="content">
      <img class="line1" src="~/assets/img/special-info-line1.svg" />
      <img class="line2" src="~/assets/img/special-info-line2.svg" />

      <p class="title">Info</p>

      <div class="description-wrapper">
        <div class="description">
          <div class="artwork">
            <picture>
              <source
                type="image/webp"
                class="artwork-img"
                srcset="~assets/img/papillon.webp"
              />
              <img class="artwork-img" src="~assets/img/papillon.jpg" />
            </picture>
          </div>
          <div class="info-text">
            <table>
              <tbody>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Event</p>
                  </td>
                  <td class="item-description">
                    <p>M3-49</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Booth</p>
                  </td>
                  <td class="item-description">
                    <p>L-21a</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Price</p>
                  </td>
                  <td class="item-description">
                    <p>1500¥ (event) - 1800¥ (storefront)</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Release</p>
                  </td>
                  <td class="item-description">
                    <p>2022.04.25</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Genre</p>
                  </td>
                  <td class="item-description">
                    <p>electronica</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Store</p>
                  </td>
                  <td class="item-description">
                    <p>diverse.direct</p>
                  </td>
                </tr>
                <tr class="list-item">
                  <td class="item-title">
                    <p>Circle</p>
                  </td>
                  <td class="item-description">
                    <p>zohryu (with the assistance of Four Corners)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style scoped lang="scss">
.special-info-container {
  position: relative;
  display: flex;
  justify-content: bottom;
  width: calc(112vmax);
  height: 100vh;
}

.content {
  position: relative;
  background: $color-purple;
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
  z-index: 10;
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
  .artwork {
    .artwork-img {
      width: 30.2vw;
      height: 30.2vw;
    }
  }
  .info-text {
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
</style>
