<template>
  <div class="credits-container">
    <div class="left">
      <ul class="credit-list">
        <li class="credit">
          Produce - zohryu (<a
            class="link"
            href="https://twitter.com/zohryu"
            target="_blank"
            @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
            @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
            >@zohryu</a
          >)
        </li>
        <li class="credit">
          Illustration - 塚本穴骨 (<a
            class="link"
            href="https://twitter.com/DOnut_bone"
            target="_blank"
            @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
            @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
            >@DOnut_bone</a
          >)
        </li>
        <li class="credit">
          Web creation - thorn (<a
            class="link"
            href="https://twitter.com/gericass"
            target="_blank"
            @mouseover="$store.dispatch('main/onChangeHoverLink', true)"
            @mouseleave="$store.dispatch('main/onChangeHoverLink', false)"
            >@gericass</a
          >)
        </li>
        <li class="credit">Special thanks -</li>
      </ul>
    </div>
    <div class="right">
      <h2 class="section-title">Credits</h2>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.credits-container {
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

.credit-list {
  list-style: none;
  font-size: 18px;
  @include font-acumin();
  letter-spacing: 0.05em;
  line-height: 48px;
  color: $color-white;
  @include mq() {
    font-size: 12px;
    line-height: 32px;
  }
  .credit {
    .link {
      color: $color-white;
      transition: color 0.2s ease;
      text-decoration: none;
      &:hover {
        color: $color-blue;
        transition: color 0.2s ease;
      }
    }
  }
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-white;
  @include mq() {
    font-size: 36px;
  }
}
</style>
