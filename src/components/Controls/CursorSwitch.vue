<template>
  <div class="cursor-switch">
    <button type="button" class="cursor-button" @click="changeCursor">
      <v-icon v-if="cursorType == 'catpaw'" name="fa-paw" />
      <v-icon v-else name="bi-cursor-fill" flip="horizontal"/>
    </button>
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

<style lang="scss" scoped>
.cursor-switch {
  .cursor-button {
    color: var(--color-main);
    .ov-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
</style>
