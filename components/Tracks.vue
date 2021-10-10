<template>
  <div class="tracks-container">
    <div class="left">
      <ul class="track-list">
        <li class="track">01. effe - panta rhei</li>
        <li class="track">02. Hiroto Kudo (WIP)</li>
        <li class="track">03. callasoiled feat. smany - roar</li>
        <li class="track">04. BUNGALANGIT - 神様が見てる</li>
        <li class="track">05. Virtual Cat - Reminiscence</li>
        <li class="track">06. zohryu - butterfly effect</li>
        <li class="track">07. thorn - microcosm (WIP)</li>
        <li class="track">08. callasoiled feat. zohryu - state of mind</li>
        <li class="track">09. ido ito - butterfly effect remix (WIP)</li>
        <li class="track">
          10. seiji takahashi - butterfly effect remix for zohyru
        </li>
      </ul>
    </div>
    <div class="right">
      <h2 class="section-title">Tracks</h2>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.tracks-container {
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

.track-list {
  list-style: none;
  font-size: 18px;
  @include font-acumin();
  letter-spacing: 0.05em;
  line-height: 48px;
  color: $color-black;
}

.section-title {
  @include font-hightower();
  font-size: 120px;
  color: $color-black;
}
</style>
