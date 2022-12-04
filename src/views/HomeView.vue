<template>
  <main class="home">
    <img alt="Vue logo" src="../assets/logo.svg" @click="switchCursor">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </main>
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
.home {
  --router-fade-time: 0.3s;
}
</style>
