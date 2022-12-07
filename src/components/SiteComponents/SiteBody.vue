<template>
  <main class="site-body">
    <div class="wrapper">
      <SiteNav />
      <router-view v-slot="{ Component }">
        <transition name="router-fade">
          <component :is="Component" />
        </transition>
      </router-view>
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
</style>
