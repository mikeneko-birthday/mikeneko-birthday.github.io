<template>
  <SiteHeader />
  <SiteBody />
</template>

<script>
import SiteBody from "./components/SiteComponents/SiteBody.vue";
import SiteHeader from "./components/SiteComponents/SiteHeader.vue";
import SiteNav from "./components/SiteComponents/SiteNav.vue";

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
html {
  background: var(--bg-color) url("@/assets/img/background.svg") repeat top center;
  background-size: 350px;
  background-attachment: fixed;
}

#app {
  --header-height: 8.125rem;
  --nav-item-size: 4rem;
  --nav-gap-width: .625rem;
  --nav-LR-width: .625rem;
  --nav-mobile-height: 5.25rem;
  display: flex;
  flex-flow: column nowrap;
  // min-height: 100vh;
  // min-height: 100dvh;
  &.cat-paw {
    * {
      cursor: url("@/assets/img/paw/cat_paw1.svg"), auto;
    }
    a {
      cursor: url("@/assets/img/paw/cat_paw2.svg"), pointer;
    }
  }
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    --nav-LR-width: 1.5rem;
  }
}

.view {
  --router-fade-time: 0.3s;
}
</style>
