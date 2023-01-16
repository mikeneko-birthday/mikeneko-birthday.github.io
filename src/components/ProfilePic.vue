<template>
  <div class="profile-pic">
    <router-link :to="{ name: 'profile' }">
    <img
      src="@/assets/img/user_icon/mikeneko_icon.jpg"
      alt="Mikeneko Profile Icon"
      :style="{
        '--icon-size': size
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "2.75rem"
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-pic {
  img {
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: 5rem;
  }
}
</style>
