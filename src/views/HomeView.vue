<template>
  <SiteContent fade-white-bg>
    <section class="view view-home">
      <h1 class="page-title">{{ $t("General.projectName") }}</h1>
      <PawLine up-down-style />

      <ContentBlock class="celebrate-draw" :title="$t('Home.draw.title')">
        <div class="block-media other-paw" v-viewer.static="{ 'navbar': false }">
          <img src="@/assets/img/drawings/mikeneko_bd1.jpg" alt="Mikeneko Birthday Celebration Drawing">
          <i18n-t class="warning" keypath="Home.draw.warn" tag="p">
            <template #drawer>
              <a href="https://twitter.com/cantdraw0" target="_blank" rel="noopener noreferrer">
                <v-icon name="fa-twitter" />
                <span>水🐾🦋🍭🔺</span>
              </a>
            </template>
          </i18n-t>
        </div>
        <div class="block-content">
          <p>{{ $t('Home.draw.content') }}</p>
        </div>
      </ContentBlock>

      <ContentBlock class="celebrate-video" :title="$t('Home.video.title')">
        <div class="block-media">
          <YoutubePlayer vid="UOXO0I5N36E" />
        </div>
        <div class="block-content">
          <p>{{ $t('Home.video.content') }}</p>
        </div>
      </ContentBlock>

      <ContentBlock class="celebrate-minecraft" :title="$t('Home.minecraft.title')">
        <div class="block-media other-paw" v-viewer.static="{ 'navbar': false }">
          <img src="@/assets/img/drawings/mikeneko_mapart.jpg" alt="Mikeneko Birthday Celebration Minecraft Map Art">
        </div>
        <div class="block-content">
          <p>{{ $t('Home.minecraft.content') }}</p>
        </div>
      </ContentBlock>
    </section>
  </SiteContent>
</template>

<script>
import ContentBlock from "@/components/ContentBlock.vue";
import SiteContent from "@/components/SiteComponents/SiteContent.vue";
import PawLine from "@/components/Widgets/PawLine.vue";
import YoutubePlayer from "@/components/Widgets/YoutubePlayer.vue";

export default {
  components: {
    SiteContent,
    YoutubePlayer,
    ContentBlock,
    PawLine
  },
};
</script>

<style lang="scss">
.view-home {
  .warning {
    line-height: 1.25;
    text-align: center;
    white-space: pre-line;
    margin-top: .75rem;
    a {
      text-decoration: none;
      span {
        color: inherit;
      }
    }
    .ov-icon {
      display: inline-block;
      margin-right: 0.25rem;
    }
  }
  .block-media {
    width: 70%;
    margin: auto;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: 48.0625em) {
    .paw-line {
      display: none;
    }
  }
  @media screen and (max-width: 48em) {
    .paw-line {
      margin-bottom: 1rem;
    }
    .block-media {
      width: 100%;
      margin: auto;
      margin-bottom: 1rem;
    }
  }
}
</style>
