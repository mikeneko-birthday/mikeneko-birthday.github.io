<template>
  <main class="site-body">
    <div class="wrapper">
      <div class="container">
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
export default {
};
</script>

<style lang="scss">
.site-body {
  padding-top: var(--header-height);
  .wrapper {
    padding: 0;
  }
  .site-content {
    overflow-y: auto;
    padding: 2rem;
    padding-left: calc(var(--nav-item-size) + var(--nav-LR-width) * 2 + 4rem);
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    padding-top: 0;
    .site-content {
      overflow-y: visible;
      padding-left: 2rem;
      padding-bottom: calc(var(--nav-mobile-height) + 2rem);
    }
  }
  @media screen and (max-width: 30em) { // 30 * 16 = 480
    --nav-item-size: 2.25rem;
    .site-content {
      padding-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
</style>
