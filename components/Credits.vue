<template>
  <div class="credits-container">
    <div class="left">
      <ul class="credit-list">
        <li class="credit">Produce - zohryu (@zohryu)</li>
        <li class="credit">Illustration - 塚本穴骨 (@DOnut_bone)</li>
        <li class="credit">Web creation - thorn (@gericass)</li>
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

.credit-list {
  list-style: none;
  font-size: 18px;
  @include font-acumin();
  letter-spacing: 0.05em;
  line-height: 48px;
  color: $color-white;
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-white;
}
</style>
