<template>
  <div class="lang-switch">
    <button class="lang-button" @click="showList">
      <v-icon name="io-language-outline" />
    </button>
    <TransitionGroup name="list-stagger" tag="ul" class="lang-list">
      <li
        v-for="(lang, index) in computedList"
        :key="lang.code"
        :style="{
          'transition-delay': transitionRev ? `calc(${index} * var(--list-stagger-time) / 2)` : `calc(${langList.length - index} * var(--list-stagger-time) / 2)`
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
  --list-stagger-distance: -15px;
}
</style>
