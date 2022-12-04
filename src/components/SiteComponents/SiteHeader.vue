<template>
  <header class="site-header">
    <!-- <img alt="logo" src="@/assets/logo.svg" @click="switchCursor"> -->
    <ActionBar />
  </header>
</template>

<script>
import ActionBar from "../Controls/ActionBar.vue";

export default {
  components: { ActionBar }
};
</script>

<style lang="scss" scoped>

</style>
