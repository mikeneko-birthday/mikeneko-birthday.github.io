<template>
  <ul>
    <li @click="changeLang('cn')">cn</li>
    <li @click="changeLang('en')">en</li>
    <li @click="changeLang('ja')">ja</li>
  </ul>
  <nav>
    <router-link to="/">{{ $t("TabHome") }}</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      localStorage.site_lang = lang;
      this.$i18n.locale = lang;
    }
  },
};
</script>

<style lang="scss">
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
