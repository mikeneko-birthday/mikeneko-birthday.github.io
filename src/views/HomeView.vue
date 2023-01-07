<template>
  <SiteContent>
    <section class="view view-home">
      <YoutubePlayer />
    </section>
  </SiteContent>
</template>

<script>
import SiteContent from "@/components/SiteComponents/SiteContent.vue";
import YoutubePlayer from "@/components/Widget/YoutubePlayer.vue";

export default {
  components: {
    SiteContent,
    YoutubePlayer
  },
  methods: {
    switchCursor() {
      document.querySelector("body").classList.toggle("cat-paw");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
