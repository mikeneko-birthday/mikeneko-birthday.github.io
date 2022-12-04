<template>
  <div class="lang-switch">
    <button class="lang-button" @click="showList">
      <v-icon name="io-language-outline" />
    </button>
    <TransitionGroup name="list-stagger" tag="ul" class="lang-list">
      <li
        v-for="(lang, index) in computedList"
        :key="lang.code"
        :class="[
          'lang-choice',
          `lang-${lang.code}`
        ]"
        :style="{
          'transition-delay': transitionRev ? `calc(${index} * var(--list-stagger-time) / 2)` : `calc(${langList.length - index} * var(--list-stagger-time) / 2)`
        }"
      >
        <button @click="changeLang(lang.code)">{{ lang.text }}</button>
        <!-- {{ lang.text }} -->
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionRev: false,
      showUp: false,
      langList: [
        { code: "en", text: "Aa" },
        { code: "cn", text: "中" },
        { code: "ja", text: "日" },
      ],
    };
  },
  computed: {
    computedList() {
      return this.showUp ? this.langList : [];
    },
  },
  methods: {
    showList() {
      this.transitionRev = !this.transitionRev;
      this.$nextTick(() => {
        this.showUp = !this.showUp;
      });
    },
    changeLang(lang) {
      localStorage.site_lang = lang;
      this.$i18n.locale = lang;
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
