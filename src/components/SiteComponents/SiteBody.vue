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
  flex: 1 0 0;
  .wrapper {
    padding: 2rem;
  }
  .container {
    position: relative;
    height: 100%;
  }
  .site-nav {
    position: absolute;
    top: 0;
    left: 0;
  }
  .site-content {
    margin-left: calc(var(--nav-item-size) + var(--nav-LR-width) * 2 + 2rem);
  }
}
</style>
