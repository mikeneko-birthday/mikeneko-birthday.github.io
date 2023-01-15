<template>
  <SiteContent>
    <section class="view view-about">
      <div class="profile_page">
        <div class="profile_card">
          <div class="profile_picture">
            <img class="profile_photo" src="@/assets/img/user_icon/mikeneko_icon.jpg" alt="Mikeneko Profile Icon">
          </div>
          <div class="profile_content">
            <h2 class="profile_name">@95rn16</h2>
            <ul class="profile_status_frame">
              <li class="profile_status_content">{{ this.$t("Profile.posts", { count: "?" }) }}</li>
              <li class="profile_status_content">{{ this.$t("Profile.followers", { count: "?" }) }}</li>
              <li class="profile_status_content">{{ this.$t("Profile.following", { count: "?" }) }}</li>
            </ul>
            <p class="introduction">{{ this.$t("Profile.introduction") }}</p>
            <a href="https://www.youtube.com/@user-vh4mj4ko6u" target="_blank" rel="noopener noreferrer"><v-icon
                scale="3" fill="#e697a9" name="fa-youtube" /></a>
            <a href="https://twitter.com/@95rn16" target="_blank" rel="noopener noreferrer">
              <v-icon scale="3" fill="#e697a9" name="fa-twitter" />
            </a>
          </div>
        </div>
        <hr>
        <video class="introduction_video">mikeneko intro video here</video>
        <div class="blessing_container">
          <p class="blessing">{{ this.$t("Profile.blessing") }}</p>
        </div>
        <div class="credits">
          <div class="credits_title">Credits</div>
          <div class="credits_categories">{{ this.$t("Profile.credits.artists") }}</div>
          <div class="credits_categories">{{ this.$t("Profile.credits.assistants") }}</div>
          <div class="credits_contents">Artist List</div>
          <div class="credits_contents">Assistants List</div>
          <div class="credits_categories">{{ this.$t("Profile.credits.leads") }}</div>
          <div class="credits_categories">{{ this.$t("Profile.credits.developers") }}</div>
          <div class="credits_contents">Leads List</div>
          <div class="credits_contents">Developers List</div>
        </div>
      </div>
    </section>
  </SiteContent>
</template>

<script>
import SiteContent from "@/components/SiteComponents/SiteContent.vue";

export default {
  components: { SiteContent },
};
</script>

<style lang="scss" scoped>
.profile_page {
  padding: 0 10rem;
}

.profile_card {
  padding: 2rem;
  display: flex;
}

.profile_picture {
  width: 25vw;
}

.profile_photo {
  border-radius: 50%;
}

.profile_content {
  width: 75vw;
}

.profile_name {}

.profile_status_frame {
  display: flex;
  list-style: none;
  margin-bottom: 1.5rem;
}

.profile_status_content {
  margin-left: 2.5rem;
}

.introduction_video {}

.blessing_container {
  padding: 2.5rem 5rem;
}

.blessing {}

.credits {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.credits_title {
  height: 10%;
  width: 100%;
}

.credits_categories {
  height: 10%;
  width: 50%;
}

.credits_contents {
  height: 35%;
  width: 50%;
}
</style>
