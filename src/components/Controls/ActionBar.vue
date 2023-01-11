<template>
  <div class="action-bar">
    <LangSwitch />
    <CursorSwitch />
    <ProfilePic />
  </div>
</template>

<script>
import ProfilePic from "../ProfilePic.vue";
import CursorSwitch from "./CursorSwitch.vue";
import LangSwitch from "./LangSwitch.vue";

export default {
  components: { LangSwitch, CursorSwitch, ProfilePic },
};
</script>

<style lang="scss">
.action-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
}
</style>
