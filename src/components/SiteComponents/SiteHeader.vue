<template>
  <header class="site-header">
    <div class="wrapper">
      <div class="logo-holder">
        <router-link :to="{ name: 'home' }">
          <img alt="logo" class="site-logo" src="@/assets/logo.svg" @click="switchCursor">
        </router-link>
      </div>
      <ActionBar />
      <SiteNav />
    </div>
  </header>
</template>

<script>
import ActionBar from "../Controls/ActionBar.vue";
import SiteNav from "./SiteNav.vue";

export default {
  components: { ActionBar, SiteNav }
};
</script>

<style lang="scss">
.site-header {
  flex-shrink: 0;
  display: block;
  position: fixed;
  inset: 0 0 auto;
  height: var(--header-height);
  border-top: .5rem solid var(--color-main);
  background: #fff;
  z-index: 2;
  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .logo-holder {
    margin-right: auto;
  }
  .site-logo {
    width: 12.5rem;
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    --header-height: 7.75rem;
    position: static;
    .site-logo {
      width: 10rem;
      margin-right: auto;
    }
  }
}
</style>
