<template>
  <section class="view view-home">
    <img alt="Vue logo" src="../assets/logo.svg" @click="switchCursor">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld
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
