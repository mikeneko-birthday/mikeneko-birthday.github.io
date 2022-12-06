<template>
  <div class="lang-switch">
    <button class="lang-button" @click="toggleList">
      <v-icon name="io-language-outline" />
    </button>
    <TransitionGroup name="list-stagger" tag="ul" class="lang-list">
      <li
        v-for="(lang, index) in langList"
        v-show="showUp"
        :key="lang.code"
        :class="[
          'lang-choice',
          `lang-${lang.code}`,
          { 'active': lang.code == currentLang }
        ]"
        :style="{
          'transition-delay': showUp ? `calc(${index} * var(--list-stagger-time) / 2)` : `calc(${langList.length - index} * var(--list-stagger-time) / 2)`
        }"
      >
        <button @click="changeLang(lang.code)">
          <img :src="lang.img" :alt="lang.code">
        </button>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: localStorage.site_lang,
      showUp: false,
      langList: [
        { code: "en", img: require("@/assets/img/lang/en.svg") },
        { code: "cn", img: require("@/assets/img/lang/cn.svg") },
        { code: "ja", img: require("@/assets/img/lang/ja.svg") },
      ],
    };
  },
  methods: {
    toggleList() {
      this.showUp = !this.showUp;
    },
    changeLang(lang) {
      localStorage.site_lang = lang;
      this.currentLang = lang;
      this.$i18n.locale = lang;
      this.toggleList();
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-list {
  --list-stagger-time: 0.3s;
  --list-stagger-distance: -1rem;
  list-style: none;
  padding: 0;
  .lang-choice {
    button {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      background-color: var(--color-main);
      box-shadow: 0 .25rem 0 #f7dee4;
      border-radius: 10rem;
      border: none;
      padding: 0;
      margin: 0;
      transition: all .3s ease;
      img {
        fill: #fff;
        width: 60%;
        object-fit: contain;
      }
    }
    &:is(.lang-cn, .lang-ja) {
      button {
        font-family: "Kosugi Maru", sans-serif !important;
        // font-size: 1em;
      }
    }
    + .lang-choice {
      margin-top: .5rem;
    }
    &.active {
      button {
        background: var(--color-sub);
        border-color: var(--color-sub);
        box-shadow: 0 .25rem 0 #dfd2df;
      }
    }
    &:hover {
      button {
        background: var(--color-theme6);
        border-color: var(--color-theme6);
        box-shadow: 0 .25rem 0 #d5c3d5;
      }
    }
  }
}
</style>
