<template>
  <SiteContent>
    <section class="view view-home">
      <img alt="Vue logo" src="../assets/logo.svg" @click="switchCursor">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </section>
  </SiteContent>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SiteContent from "@/components/SiteComponents/SiteContent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SiteContent
  },
  methods: {
    switchCursor() {
      document.querySelector("body").classList.toggle("cat-paw");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
