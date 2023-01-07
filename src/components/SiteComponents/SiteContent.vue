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
  transition: all .3s ease;
  &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
  &.fade-white-bg .view {
    background: rgba(255, 255, 255, .75);
    border-radius: calc(var(--nav-gap-width, 0.625rem) + var(--nav-item-size, 4rem) / 2);
    box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.15);
    padding: 1.5rem 2rem;
  }

  .page-title {
    color: var(--color-theme1);
    font-size: 1.75rem;
    text-align: center;
  }
  @media screen and (min-width: 48.0625em) {
    .page-title {
      padding-bottom: .75rem;
      border-bottom: 1px dashed var(--color-main);
      &::before, &::after {
        content: url("@/assets/img/paw/paw1.svg");
        display: inline-block;
        position: relative;
        width: 1em;
        object-fit: contain;
      }
      &::before {
        margin-right: .75rem;
      }
      &::after {
        margin-left: .75rem;
      }
    }
  }
  @media screen and (max-width: 48em) {
    .page-title {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 30em) {
    .page-title {
      font-size: 1.375rem;
    }
    &.fade-white-bg .view {
      padding: 1rem;
      border-radius: 1.5rem;
    }
  }
}
</style>
