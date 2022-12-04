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
  mounted() {
    if (!localStorage.cursor) {
      localStorage.cursor = "catpaw";
    }
    if (localStorage.cursor == "catpaw") {
      document.querySelector("#app").classList.add("cat-paw");
    }
  },
};
</script>

<style lang="scss">
#app {
  &.cat-paw {
    cursor: url("@/assets/cursor/cat_paw1.svg"), auto;
    a {
      cursor: url("@/assets/cursor/cat_paw2.svg"), pointer;
    }
  }
}

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
