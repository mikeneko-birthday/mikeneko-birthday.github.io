<template>
  <header class="site-header">
    <div class="wrapper">
      <img alt="logo" class="site-logo" src="@/assets/logo.svg" @click="switchCursor">
      <ActionBar />
    </div>
  </header>
</template>

<script>
import ActionBar from "../Controls/ActionBar.vue";

export default {
  components: { ActionBar }
};
</script>

<style lang="scss">
.site-header {
  display: block;
  position: fixed;
  inset: 0 0 auto;
  height: var(--header-height);
  border-top: .5rem solid var(--color-main);
  background: #fff;
  z-index: 1;
  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .site-logo {
    width: 12.5rem;
    margin-right: auto;
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    position: static;
    .site-logo {
      width: 10rem;
      margin-right: auto;
    }
  }
}
</style>
