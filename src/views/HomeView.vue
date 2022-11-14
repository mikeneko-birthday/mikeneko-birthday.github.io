<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" @click="switchCursor">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
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
