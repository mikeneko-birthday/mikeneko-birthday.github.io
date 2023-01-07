<template>
  <article
    :class="[
      'content-block',
    ]"
  >
    <h2 class="block-title">{{ title }}</h2>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
  },
};
</script>

<style lang="scss">
.content-block {
  display: flex;
  flex-flow: column nowrap;
  .block-title {
    color: var(--color-theme6);
    width: 100%;
  }
  & + .content-block {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--color-main);
  }
  @media screen and (max-width: 30em) {
    font-size: .875rem;
    & + .content-block {
      margin-top: 1rem;
      padding-top: 1rem;
    }
  }
}
</style>
