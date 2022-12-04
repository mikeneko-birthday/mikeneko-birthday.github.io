<template>
  <div class="action-bar">
    <LangSwitch />
    <CursorSwitch />
  </div>
</template>

<script>
import CursorSwitch from "./CursorSwitch.vue";
import LangSwitch from "./LangSwitch.vue";

export default {
  components: { LangSwitch, CursorSwitch },
};
</script>

<style lang="scss">

</style>
