<template>
  <div
    :class="[
      'paw-line',
      { 'up-down': upDownStyle },
      { 'glow': glow },
    ]"
    :style="{
      '--paw-size': sizeData,
      '--paw-gap': gapData,
    }"
  >
    <template v-for="n in num" :key="n">
      <inline-svg
        :class="n % 2 == 0 ? 'purple-paw' : 'pink-paw'"
        :src="catPaw"
        aria-hidden="false"
      />
    </template>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
const paw = require("@/assets/img/paw/paw2.svg");

export default {
  components: {
    InlineSvg,
  },
  props: {
    num: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: "1.5rem"
    },
    gap: {
      type: String,
      default: "0.25rem"
    },
    upDownStyle: {
      type: Boolean,
      default: false
    },
    glow: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      catPaw: paw,
      sizeData: this.size,
      gapData: this.gap
    };
  },
};
</script>

<style lang="scss" scoped>
.paw-line {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  column-gap: var(--paw-gap);
  svg {
    width: var(--paw-size);
    height: var(--paw-size);
    &.pink-paw {
      color: var(--color-main);
      fill: var(--color-main);
    }
    &.purple-paw {
      color: var(--color-sub);
      fill: var(--color-sub);
    }
  }
  &.up-down {
    svg {
      &.purple-paw {
        margin-top: 0.25rem;
      }
    }
  }
  &.glow {
    svg {
      filter: drop-shadow(0 0px 3px #fff);
    }
  }
}
</style>
