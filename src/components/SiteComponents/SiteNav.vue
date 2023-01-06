<template>
  <nav class="site-nav" :style="{ '--nav-pos': indicatorPos }">
    <div class="nav-indicator" />
    <Transition name="fade">
      <div v-show="showHint" class="nav-hint">{{ hintText }}</div>
    </Transition>
    <ul>
      <li
        v-for="(link, index) in links"
        :key="link.class"
        :ref="link.name"
        :class="link.class"
        :data-pos="index+1"
      >
        <router-link :to="link.path" @click="hintRoute(link.text)">
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
import { convertPxToRem } from "@/utils/function";

export default {
  data() {
    return {
      indicatorPos: "1",
      showHint: false,
      hintText: "",
      hintTimeout: "",
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
          class: "link-illustration",
          name: "illustration",
          path: "/illustration",
          icon: require("@/assets/img/nav/illustration.svg"),
          text: this.$t("TabIllustration"),
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
      this.indicatorPos = this.$refs[newValue.name] ? this.$refs[newValue.name][0]?.attributes["data-pos"]?.value : "1";
    }
  },
  methods: {
    convertPxToRem,
    hintRoute(text) {
      this.hintText = text;
      clearTimeout(this.hintTimeout);
      this.showHint = true;
      this.hintTimeout = setTimeout(() => {
        this.showHint = false;
      }, 1500);
    }
  },
};
</script>

<style lang="scss" scoped>
.site-nav {
  isolation: isolate;
  background: #fff;
  box-shadow: var(--box-shadow);
  border-radius: calc(var(--nav-gap-width, .625rem) + var(--nav-item-size, 4rem) / 2);
  padding: var(--nav-gap-width, .625rem) var(--nav-LR-width, .625rem);
  // box-shadow: 0 .25rem 0.25rem #f7dee4;
  transition: padding .5s ease;
  z-index: 1;
  .nav-indicator {
    text-align: center;
    position: absolute;
    top: calc(var(--nav-gap-width, .625rem) * var(--nav-pos, 1) + var(--nav-item-size, 4rem) * (var(--nav-pos, 1) - 1));
    left: var(--nav-LR-width, .625rem);
    width: var(--nav-item-size, 4rem);
    height: var(--nav-item-size, 4rem);
    background: var(--color-main-light);
    border-radius: var(--nav-item-size, 4rem);
    transition: top 0.3s ease;
    z-index: -1;
  }
  .nav-hint {
    --fade-time: .3s;
    color: #fff;
    position: absolute;
    bottom: calc(100% + .5rem);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(171, 140, 171, .75);
    border-radius: .25rem;
    padding: .5rem;
    z-index: 2;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    gap: var(--nav-gap-width, .625rem);
  }
  li{
    display: block;
    a {
      font-weight: bold;
      text-decoration: none;
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      border-radius: calc(var(--nav-item-size, 4rem) / 2);
      > div {
        // pointer-events: none;
        display: flex;
        align-items: center;
      }
    }
    .link-icon {
      flex-shrink: 0;
      justify-content: center;
      width: var(--nav-item-size, 4rem);
      height: var(--nav-item-size, 4rem);
      border-radius: var(--nav-item-size, 4rem);
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

  @media screen and (min-width: 48.0625em) { // 48.0625 * 16 = 769
    .nav-hint {
      display: none !important;
    }
  }

  @media screen and (max-width: 48em) { // 48 * 16 = 768
    --nav-item-size: 2.75rem;
    --nav-mobile-btn-padding: 1rem;
    height: var(--nav-mobile-height);
    border-radius: 10rem;
    padding-top: 0;
    padding-bottom: 0;
    .nav-indicator {
      top: auto;
      bottom: 0.5rem;
      left: calc(var(--nav-LR-width, .625rem) + (var(--nav-item-size, 2.75rem) + var(--nav-mobile-btn-padding, 1rem) * 2) * (var(--nav-pos, 1) - 1) + (var(--nav-item-size, 2.75rem) + var(--nav-mobile-btn-padding, 1rem) * 2) / 2);
      right: auto;
      width: 0.5rem;
      height: 0.5rem;
      transform: translateX(-50%);
      transition: left 0.3s ease;
    }
    ul {
      height: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }
    li {
      a {
        flex-direction: column;
        align-items: center;
        padding: var(--nav-mobile-btn-padding, 1rem);
        .link-icon {
          filter: grayscale(1);
          transition: all .3s ease;
          img {
            width: auto;
          }
        }
        .link-text {
          display: none;
        }
        &.router-link-active {
          .link-icon {
            filter: grayscale(0);
            transform: translateY(-.5rem);
          }
        }
      }
    }
  }

  @media screen and (max-width: 30em) { // 30 * 16 = 480
    --nav-item-size: 2.5rem;
    --nav-mobile-btn-padding: .75rem;
  }
}
</style>
