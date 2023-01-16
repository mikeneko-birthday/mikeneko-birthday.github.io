<template>
  <article :class="[
    'profile-card',
    { 'no-bg': noBg }
  ]">
    <h2 v-if="title" class="card-title">{{ title }}</h2>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    noBg: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-card{
  width: 100%;
  &:not(.no-bg) {
    background: rgba(255,255,255,.4);
    backdrop-filter: blur(2px);
    border-radius: 2rem;
    box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.15);
    padding: 3rem;
    @media screen and (max-width: 30em) {
      padding: 2rem;
    }
  }
  .card-title {
    text-align: center;
    position: relative;
    padding-bottom: .5rem;
    margin-bottom: 2rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 5.5rem;
      height: 0.1875rem;
      background: var(--color-main);
      border-radius: 3rem;
      transform: translateX(-50%);
    }
  }
}
</style>
