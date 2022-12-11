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
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  &.cat-paw {
    * {
      cursor: url("@/assets/img/cursor/cat_paw1.svg"), auto;
    }
    a {
      cursor: url("@/assets/img/cursor/cat_paw2.svg"), pointer;
    }
  }
}

.view {
  --router-fade-time: 0.3s;
}
</style>
