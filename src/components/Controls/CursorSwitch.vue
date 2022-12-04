<template>
  <div class="cursor-switch" @click="changeCursor">
    <v-icon v-if="cursorType == 'catpaw'" name="fa-paw" />
    <v-icon v-else name="bi-cursor-fill" flip="horizontal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursorType: localStorage.cursor || "catpaw",
    };
  },
  methods: {
    changeCursor() {
      if (localStorage.cursor == "catpaw") {
        this.cursorType = "normal";
        localStorage.cursor = "normal";
        document.querySelector("#app").classList.remove("cat-paw");
      } else {
        this.cursorType = "catpaw";
        localStorage.cursor = "catpaw";
        document.querySelector("#app").classList.add("cat-paw");
      }
    }
  },
};
</script>

<style lang="scss">

</style>
