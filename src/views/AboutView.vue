<template>
  <SiteContent>
    <section class="view view-about">
      <div class="profile-page">
        <div class="profile-card">
          <div class="profile-picture">
            <img class="profile-photo" src="@/assets/img/user_icon/mikeneko_icon.jpg" alt="Mikeneko Profile Icon">
          </div>
          <div class="profile-content">
            <h2 class="profile-name">みけねこch</h2>
            <ul class="profile-status-frame">
              <li class="profile-status-content">{{ this.$t("Profile.posts", { count: "?" }) }}</li>
              <li class="profile-status-content">{{ this.$t("Profile.followers", { count: "?" }) }}</li>
              <li class="profile-status-content">{{ this.$t("Profile.following", { count: "?" }) }}</li>
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
        <video class="introduction-video">mikeneko intro video here</video>
        <div class="blessing-container">
          <p class="blessing">{{ this.$t("Profile.blessing") }}</p>
        </div>
        <div class="credits">
          <div class="credits-title">Credits</div>
          <div class="credits-categories">{{ this.$t("Profile.credits.artists") }}</div>
          <div class="credits-categories">{{ this.$t("Profile.credits.assistants") }}</div>
          <div class="credits-contents">Artist List</div>
          <div class="credits-contents">Assistants List</div>
          <div class="credits-categories">{{ this.$t("Profile.credits.leads") }}</div>
          <div class="credits-categories">{{ this.$t("Profile.credits.developers") }}</div>
          <div class="credits-contents">Leads List</div>
          <div class="credits-contents">Developers List</div>
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
.profile-page {
  padding: 0 10rem;
}

.profile-card {
  padding: 2rem;
  display: flex;
}

.profile-picture {
  width: 25vw;
}

.profile-photo {
  border-radius: 50%;
}

.profile-content {
  width: 75vw;
}

.profile-name {}

.profile-status-frame {
  display: flex;
  list-style: none;
  margin-bottom: 1.5rem;
}

.profile-status-content {
  margin-left: 2.5rem;
}

.introduction-video {}

.blessing-container {
  padding: 2.5rem 5rem;
}

.blessing {}

.credits {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.credits-title {
  height: 10%;
  width: 100%;
}

.credits-categories {
  height: 10%;
  width: 50%;
}

.credits-contents {
  height: 35%;
  width: 50%;
}
</style>
