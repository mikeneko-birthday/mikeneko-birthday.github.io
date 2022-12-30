<template>
  <div
    :class="[
      'site-content',
      { 'fade-white-bg': fadeWhiteBg }
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fadeWhiteBg: {
      type: Boolean,
      default: true
    },
  },
};
</script>

<style lang="scss">
.site-content {
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  &::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
  }
  &.fade-white-bg .view {
    background: rgba(255, 255, 255, .8);
    border-radius: calc(var(--nav-gap-width, 0.625rem) + var(--nav-item-size, 4rem) / 2);
    padding: 1.5rem 2rem;
  }
}
</style>
