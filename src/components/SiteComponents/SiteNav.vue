<template>
  <nav class="site-nav">
    <div class="nav-indicator" :style="{ '--pos-top': indicatorTop }" />
    <ul>
      <li
        v-for="link in links"
        :key="link.class"
        :ref="link.name"
        :class="link.class"
      >
        <router-link :to="link.path" @click="moveIndicator($event.target.offsetTop)">
          <div class="link-icon">
            <img :src="link.icon" :alt="link.text">
          </div>
          <div class="link-text">
            <span>{{ link.text }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      indicatorTop: "",
    };
  },
  computed: {
    links() {
      return [
        {
          class: "link-home",
          name: "home",
          path: "/",
          icon: require("@/assets/img/nav/home.svg"),
          text: this.$t("TabHome"),
        },
        {
          class: "link-about",
          name: "about",
          path: "/about",
          icon: require("@/assets/img/nav/about.svg"),
          text: this.$t("TabAbout"),
        },
        {
          class: "link-message",
          name: "message",
          path: "/message",
          icon: require("@/assets/img/nav/letter.svg"),
          iconActive: require("@/assets/img/nav/letter_active.svg"),
          text: this.$t("TabMessage"),
        },
      ];
    },
  },
  watch: {
    $route(newValue) {
      console.log(newValue);
      this.moveIndicator(this.$refs[newValue.name] ? this.$refs[newValue.name][0]?.offsetTop : "var(--gap-width)");
    }
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
  --gap-width: .625rem;
  --LR-width: .625rem;
  display: inline-block;
  position: relative;
  isolation: isolate;
  background: #fff;
  border-radius: calc(var(--gap-width) + var(--item-size) / 2);
  padding: var(--gap-width) var(--LR-width);
  // box-shadow: 0 .25rem 0.25rem #f7dee4;
  margin: 0;
  transition: padding .5s ease;
  .nav-indicator {
    position: absolute;
    top: var(--pos-top);
    left: var(--LR-width);
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
      align-items: stretch;
      border-radius: calc(var(--item-size) / 2);
      > div {
        // pointer-events: none;
        display: flex;
        align-items: center;
      }
    }
    .link-icon {
      flex-shrink: 0;
      justify-content: center;
      width: var(--item-size);
      height: var(--item-size);
      border-radius: var(--item-size);
      img {
        display: block;
        width: 65%;
        pointer-events: none;
      }
    }
    .link-text {
      white-space: nowrap;
      overflow: hidden;
      justify-content: start;
      max-width: 0;
      opacity: 0;
      visibility: hidden;
      transition: all .5s ease;
      span {
        padding-left: 0.75rem;
        padding-right: 1.25rem;
        pointer-events: none;
      }
    }
  }

  &:hover {
    ul {
      .link-text {
        max-width: 13rem;
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
