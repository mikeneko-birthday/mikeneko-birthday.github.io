<template>
  <div class="surprise">
    <button type="button" class="surprise-button" @click="surprise">
      <v-icon name="hi-solid-cake" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    surprise() {
      this.$emitter.emit("surprise");
    }
  },
};
</script>

<style lang="scss" scoped>
.surprise {
  .surprise-button {
    color: var(--color-main);
    .ov-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
</style>
