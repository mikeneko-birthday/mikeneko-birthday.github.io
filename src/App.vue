<template>
  <SiteHeader />
  <SiteNav />
  <router-view v-slot="{ Component }">
    <transition name="router-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import SiteHeader from "./components/SiteComponents/SiteHeader.vue";
import SiteNav from "./components/SiteComponents/SiteNav.vue";

export default {
  components: { SiteNav, SiteHeader },
};
</script>

<style lang="scss">
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
