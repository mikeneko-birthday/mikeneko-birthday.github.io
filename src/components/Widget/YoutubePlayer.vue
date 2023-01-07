<template>
  <div
    class="youtube-player"
    :style="{
      '--player-width': widthData,
      '--player-mobile-width': mobileWidth
    }"
  >
    <div class="youtube-player-inner" :style="{ '--player-ratio': ratioData }">
      <iframe
        type="text/html"
        :src="`https://www.youtube.com/embed/${vid}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}&rel=0`"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    vid: {
      type: String,
      default: "MbDKe1um6jQ"
    },
    width: {
      type: String,
      default: "80%"
    },
    mobileWidth: {
      type: String,
      default: "100%"
    },
    ratio: {
      type: String,
      default: "56.25%" // Heigh:Width = 9:16 = 56.25%
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      widthData: this.width,
      mobileWidthData: this.mobileWidth,
      ratioData: this.ratio,
    };
  },
};
</script>

<style lang="scss" scoped>
.youtube-player {
  width: var(--player-width);
  transition: width .3s ease;
  &-inner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: var(--player-ratio);
  }
  iframe {
    position: absolute;
    inset: 0;
  }
  @media screen and (max-width: 48em) {
    width: var(--player-mobile-width);
  }
}
</style>
