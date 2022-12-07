<template>
  <SiteHeader />
  <SiteBody />
</template>

<script>
import SiteBody from "./components/SiteComponents/SiteBody.vue";
import SiteHeader from "./components/SiteComponents/SiteHeader.vue";

export default {
  components: { SiteHeader, SiteBody },
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
    * {
      cursor: url("@/assets/img/cursor/cat_paw1.svg"), auto;
    }
    a {
      cursor: url("@/assets/img/cursor/cat_paw2.svg"), pointer;
    }
  }
}

nav {
  padding: 2rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view {
  --router-fade-time: 0.3s;
}
</style>
