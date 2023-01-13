<template>
  <div class="lang-switch">
    <!-- Change to component la -->
    <button type="button" class="lang-button" @click="toggleList" @blur="closeList">
      <v-icon name="io-language" />
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
        <button type="button" @click="changeLang(lang.code)">
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
        { code: "zh", img: require("@/assets/img/lang/zh.svg") },
        { code: "ja", img: require("@/assets/img/lang/ja.svg") },
      ],
    };
  },
  methods: {
    toggleList() {
      this.showUp = !this.showUp;
    },
    showList() {
      this.showUp = true;
    },
    closeList() {
      this.showUp = false;
    },
    changeLang(lang) {
      localStorage.site_lang = lang;
      this.currentLang = lang;
      this.$i18n.locale = lang;

      document.documentElement.setAttribute("lang", lang);

      this.closeList();
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-switch {
  position: relative;
  .lang-button {
    color: var(--color-main);
    .ov-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
.lang-list {
  --list-stagger-time: 0.3s;
  --list-stagger-distance: -1rem;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: .75rem;
  transform: translateX(-50%);
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
      transition: all .3s ease;
      img {
        fill: #fff;
        width: 60%;
        pointer-events: none;
      }
    }
    + .lang-choice {
      margin-top: .5rem;
    }
    &.active {
      button {
        background: var(--color-sub);
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
