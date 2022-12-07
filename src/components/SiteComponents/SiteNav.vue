<template>
  <nav class="site-nav">
    <div class="nav-indicator" :style="{ '--pos-top': indicatorTop }" />
    <ul>
      <li
        v-for="link in links"
        :key="link.class"
        :class="link.class"
      >
        <router-link :to="link.path" @click="moveIndicator($event.target.offsetTop)">
          <span class="link-icon">
            <img :src="link.icon" :alt="link.text">
          </span>
          <span class="link-text">{{ link.text }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      indicatorTop: "var(--gap-width)",
    };
  },
  computed: {
    links() {
      return [
        {
          class: "link-home",
          path: "/",
          icon: require("@/assets/img/nav/home.svg"),
          text: this.$t("TabHome"),
        },
        {
          class: "link-about",
          path: "/about",
          icon: require("@/assets/img/nav/about.svg"),
          text: this.$t("TabAbout"),
        },
        {
          class: "link-message",
          path: "/message",
          icon: require("@/assets/img/nav/letter.svg"),
          iconActive: require("@/assets/img/nav/letter_active.svg"),
          text: this.$t("TabMessage"),
        },
      ];
    },
  },
  methods: {
    moveIndicator(pos) {
      this.indicatorTop = this.convertPxToRem(pos) + "rem";
    },
    convertPxToRem(px) {
      return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
    },
  },
};
</script>

<style lang="scss" scoped>
.site-nav {
  --item-size: 4rem;
  --gap-width: 1rem;
  position: relative;
  width: 20rem;
  background: #fff;
  border-radius: calc(var(--item-size) / 2);
  padding: var(--gap-width);
  box-shadow: 0 .25rem 0.25rem #f7dee4;
  margin: 0;
  isolation: isolate;
  .nav-indicator {
    position: absolute;
    top: var(--pos-top);
    left: var(--gap-width);
    width: var(--item-size);
    height: var(--item-size);
    border-radius: var(--item-size);
    background: var(--color-main-light);
    transition: top 0.3s ease;
    z-index: -1;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--gap-width);
    padding: 0;
    margin: 0;
  }
  li{
    display: block;
    a {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-radius: calc(var(--item-size) / 2);
      span {
        pointer-events: none;
      }
    }
    .link-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--item-size);
      height: var(--item-size);
      border-radius: var(--item-size);
      img {
        display: block;
        width: 65%;
      }
    }
    .link-text {
      padding-left: 1rem;
    }
  }
}
</style>
