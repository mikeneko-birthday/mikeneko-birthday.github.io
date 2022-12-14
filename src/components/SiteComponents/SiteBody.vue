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
    top: 0;
    left: 2rem;
  }
  .site-content {
    overflow-y: auto;
    padding: 2rem;
    padding-left: calc(var(--nav-item-size) + var(--nav-LR-width) * 2 + 4rem);
  }
}
</style>
