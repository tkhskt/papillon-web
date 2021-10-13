<template>
  <div class="credits-container">
    <div class="left">
      <ul class="credit-list">
        <li class="credit">
          Produce - zohryu (<a
            class="link"
            href="https://twitter.com/zohryu"
            target="_blank"
            >@zohryu</a
          >)
        </li>
        <li class="credit">
          Illustration - 塚本穴骨 (<a
            class="link"
            href="https://twitter.com/DOnut_bone"
            target="_blank"
            >@DOnut_bone</a
          >)
        </li>
        <li class="credit">
          Web creation - thorn (<a
            class="link"
            href="https://twitter.com/gericass"
            target="_blank"
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
}
</style>
