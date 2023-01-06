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
  --header-height: 8.125rem;
  height: 100vh;
  height: 100dvh;
  background: #e0b4bf url("@/assets/img/background.svg") repeat center;
  background-size: 350px;
  &.cat-paw {
    * {
      cursor: url("@/assets/img/cursor/cat_paw1.svg"), auto;
    }
    a {
      cursor: url("@/assets/img/cursor/cat_paw2.svg"), pointer;
    }
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    height: auto;
  }
}

.view {
  --router-fade-time: 0.3s;
}
</style>
