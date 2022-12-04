<template>
  <div class="lang-switch">
    <button class="lang-button" @click="toggleList">
      <v-icon name="io-language-outline" />
    </button>
    <div>Change to svg for fixing space problem</div>
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
        <button @click="changeLang(lang.code)">{{ lang.text }}</button>
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
        { code: "en", text: "Aa" },
        { code: "cn", text: "中" },
        { code: "ja", text: "日" },
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
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
      line-height: 1;
      width: 2em;
      height: 2em;
      background-color: var(--color-main);
      border-radius: 10rem;
      border: none;
      box-shadow: 0 .25rem 0 #f7dee4;
      transition: all .3s ease;
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
    &:hover, &.active {
      button {
        background: var(--color-sub);
        border-color: var(--color-sub);
        box-shadow: 0 .25rem 0 #dfd2df;
      }
    }
  }
}
</style>
