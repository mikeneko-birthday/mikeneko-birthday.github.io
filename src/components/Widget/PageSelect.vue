<template>
  <div
    :class="[
      'page-select',
      { 'has-bg': hasBackground }
    ]"
  >
    <button v-show="currentPage > 1" class="btn-control btn-prev" @click="$emit('changePage', currentPage - 1)">
      <inline-svg
        :src="catPaw"
        aria-hidden="false"
      />
    </button>
    <div class="pages">
      <a
        v-for="n in max"
        :key="n"
        :class="[
          'page-num',
          { 'page-active': n === currentPage }
        ]"
        @click="$emit('changePage', n)"
      >
        {{ n }}
      </a>
    </div>
    <button v-show="currentPage < max" class="btn-control btn-next" @click="$emit('changePage', currentPage + 1)">
      <inline-svg
        :src="catPaw"
        aria-hidden="false"
      />
    </button>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
const paw = require("@/assets/img/paw/paw2.svg");

export default {
  components: { InlineSvg },
  props: {
    max: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    hasBackground: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      catPaw: paw
    };
  },
  methods: {
    viewPhoto() {
      this.$refs.photo.click();
    }
  },
};
</script>

<style lang="scss" scoped>
.page-select {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  column-gap: 1rem;
  .btn-control {
    color: var(--color-main);
    fill: var(--color-main);
    .ov-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  .btn-prev {
    transform: rotate(-90deg);
  }
  .btn-next {
    transform: rotate(90deg);
  }
  .pages {
    display: flex;
    flex-flow: row nowrap;
    column-gap: .5rem;
    .page-num {
      text-align: center;
      font-size: 1rem;
      font-family: "FakePearl-Regular", sans-serif;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      background: transparent;
      border-radius: 5rem;
      transition: background .3s ease;
      &.page-active {
        background: var(--color-sub-light);
      }
    }
  }

  &.has-bg {
    background: #fff;
    border-radius: 5rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
    padding: .5rem 1rem;
  }
}
</style>
