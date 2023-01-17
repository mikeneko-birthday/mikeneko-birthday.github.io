<template>
  <div class="action-bar">
    <LangSwitch />
    <CursorSwitch />
    <Surprise />
    <ProfilePic />
  </div>
</template>

<script>
import ProfilePic from "../ProfilePic.vue";
import CursorSwitch from "./CursorSwitch.vue";
import LangSwitch from "./LangSwitch.vue";
import Surprise from "./SurpriseBtn.vue";

export default {
  components: { LangSwitch, CursorSwitch, ProfilePic, Surprise },
};
</script>

<style lang="scss">
.action-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 48em) { // 48 * 16 = 768
    gap: 0.75rem;
  }
  @media screen and (max-width: 30em) { // 48 * 16 = 768
    .cursor-switch {
      display: none;
    }
  }
}
</style>
