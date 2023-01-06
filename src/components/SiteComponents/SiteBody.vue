<template>
  <main class="site-body">
    <div class="wrapper">
      <div class="container">
        <SiteNav />
        <router-view v-slot="{ Component }">
          <transition name="router-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>

<script>
import SiteNav from "./SiteNav.vue";

export default {
  components: { SiteNav }
};
</script>

<style lang="scss">
.site-body {
  --nav-item-size: 4rem;
  --nav-gap-width: .625rem;
  --nav-LR-width: .625rem;
  --nav-mobile-height: 5.25rem;
  height: 100%;
  overflow: hidden;
  padding-top: var(--header-height);
  .wrapper {
    padding: 0;
  }
  .container {
    position: relative;
    height: 100%;
  }
  .site-nav {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .site-content {
    overflow-y: auto;
    padding: 2rem;
    padding-left: calc(var(--nav-item-size) + var(--nav-LR-width) * 2 + 4rem);
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    --nav-LR-width: 1.5rem;
    padding-top: 0;
    .site-nav {
      position: fixed;
      inset: auto auto 1rem 50%;
      transform: translateX(-50%);
    }
    .site-content {
      overflow-y: visible;
      padding-left: 2rem;
      padding-bottom: calc(var(--nav-mobile-height) + 2rem);
    }
  }
  @media screen and (max-width: 30em) { // 30 * 16 = 480
    --nav-item-size: 2.25rem;
  }
}
</style>
