<template>
  <div class="concepts-container">
    <div class="left">
      <h2 class="section-title">Info</h2>
    </div>
    <div class="right">
      <table class="concepts-content">
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
              <p>2022.04.24</p>
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
              <a class="link" target="_blank" href="https://diverse.direct/"
                >DIVERSE DIRECT</a
              >
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
    margin-top: 60px;
  }
  .list-item {
    @include mq(md) {
      font-size: 16px;
      line-height: 38px;
    }
    @include mq() {
      font-size: 14px;
      line-height: 32px;
      padding: 4px 0;
    }
    .item-description {
      padding-left: 10px;
    }
  }
}
.link {
  position: relative;
  cursor: pointer;
  color: $color-white;
  text-decoration: none;
  &:after {
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 1px;
    left: 0;
    content: '';
    background: $color-white;
    @include mq() {
      bottom: -1px;
    }
  }
  &:hover {
    transition: color 0.2s ease;
    color: $color-blue;

    @include mq() {
      color: $color-white;
    }
  }
}
</style>
