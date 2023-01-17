<template>
  <SiteContent>
    <section class="view view-profile">
      <ProfileCard class="user-card">
        <div class="profile-photo">
          <img src="@/assets/img/user_icon/mikeneko_icon.jpg" alt="Mikeneko Profile Icon">
        </div>
        <div class="profile-content">
          <h2 class="profile-name">みけねこch</h2>
          <p class="profile-status">{{ $t("Profile.birthday") }}</p>
          <p class="introduction">{{ $t("Profile.introduction") }}</p>

          <ul class="social-accounts">
            <li>
              <a href="https://www.youtube.com/@user-vh4mj4ko6u" target="_blank" rel="noopener noreferrer">
                <v-icon name="fa-youtube" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/@95rn16" target="_blank" rel="noopener noreferrer">
                <v-icon name="fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </ProfileCard>

      <PawLine :num="15" size="2rem" gap=".5rem" upDownStyle glow />

      <ProfileCard class="event-video" :no-bg="true">
        <YoutubePlayer vid="cINTZQxhzko" />
      </ProfileCard>

      <ProfileCard class="blessing-container">
        <p class="blessing">{{ $t("Profile.blessing") }}</p>
      </ProfileCard>

      <PawLine :num="15" size="2rem" gap=".5rem" upDownStyle glow />

      <ProfileCard class="credits" :title="$t('Profile.credits.title')">
        <div class="credit-list">
          <div
            v-for="col in creditList"
            :key="col.id"
            class="credit-column"
          >
            <div
              v-for="(group, key) in col.list"
              :key="key"
              class="credit-group"
            >
              <div class="group-name">{{ key }}</div>
              <div
                v-for="member in group"
                :key="member.twitter"
                class="group-member"
              >
                <span class="member-name">{{ member.name }}</span>
                <span class="member-twitter">
                  <a :href="`https://twitter.com/${member.twitter}`" target="_blank" rel="noopener noreferrer">(@{{ member.twitter }})</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ProfileCard>
    </section>
  </SiteContent>
</template>

<script>
import ProfileCard from "@/components/Cards/ProfileCard.vue";
import SiteContent from "@/components/SiteComponents/SiteContent.vue";
import PawLine from "@/components/Widgets/PawLine.vue";
import YoutubePlayer from "@/components/Widgets/YoutubePlayer.vue";

export default {
  components: { SiteContent, YoutubePlayer, ProfileCard, PawLine },
  computed: {
    creditList() {
      return [
        {
          id: "col-1",
          list: {
            [this.$t("Profile.credits.organizer")]: [
              { name: "水無月", twitter: "mizukiame_neko_" },
              { name: "339", twitter: "339toy" },
              { name: "オリバー", twitter: "oliver_hei" },
              { name: "ヤンデレ猫", twitter: "yanneko_tw" },
              { name: "蒼アオ", twitter: "nkmraoao" },
              { name: "水", twitter: "cantdraw0" },
              { name: "ワンナ", twitter: "wanna_chan" },
            ],
            [this.$t("Profile.credits.illustrator")]: [
              { name: "水", twitter: "cantdraw0" },
              { name: "さかな", twitter: "sa__ka___na" },
              { name: "たこたこ", twitter: "efu3087914" },
              { name: "鹿肉", twitter: "mi_yu_ki__draw" },
              { name: "桃子羊(もも)", twitter: "dou_b2344" },
              { name: "佳苗", twitter: "kanae0192" },
              { name: "喵咪", twitter: "miaomi5555" },
              { name: "Milktea", twitter: "Milk_Tea_1993" },
            ],
          }
        },
        {
          id: "col-2",
          list: {
            [this.$t("Profile.credits.developer")]: [
              { name: "オリバー", twitter: "oliver_hei" },
              { name: "音羽みのり", twitter: "YuuJinS_CSJ" },
            ],
            [this.$t("Profile.credits.video")]: [
              { name: "ヤンデレ猫", twitter: "yanneko_tw" },
            ],
            [this.$t("Profile.credits.translator")]: [
              { name: "Koyuki", twitter: "KoyukiChan0101" },
              { name: "李瑭瑭", twitter: "tang_riko" },
              { name: "Teeyi81", twitter: "TY81MY" },
              { name: "Rockねこ", twitter: "FD1388888" },
              { name: "雪松", twitter: "YukiMatsu1225" },
              { name: "蒼アオ", twitter: "nkmraoao" },
              { name: "上井草", twitter: "_Kamiigusa_" },
              { name: "ワンナ", twitter: "wanna_chan" },
            ],
          }
        },
        {
          id: "col-3",
          list: {
            [this.$t("Profile.credits.mapart")]: [
              { name: "牧以琉", twitter: "bovi0916" },
              { name: "339", twitter: "339toy" },
              { name: "滿福堡", twitter: "GarnetCPZ" },
              { name: "雪松", twitter: "YukiMatsu1225" },
              { name: "水", twitter: "cantdraw0" },
              { name: "さかな", twitter: "sa__ka___na" },
              { name: "喵咪", twitter: "miaomi5555" },
              { name: "Milktea", twitter: "Milk_Tea_1993" },
              { name: "たこたこ　", twitter: "efu3087914" },
              { name: "桃子羊(もも)", twitter: "dou_b2344" },
              { name: "佳苗", twitter: "kanae0192" },
              { name: "鹿肉", twitter: "mi_yu_ki__draw" },
            ],
          }
        }
      ];
    }
  },
};
</script>

<style lang="scss">
.view-profile {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 56rem;
  margin: auto;
  .paw-line {
    margin: 4rem 0;
  }
  .user-card {
    display: flex;
    flex-flow: row nowrap;
    max-width: 90%;
    gap: 3rem;
    .profile-name {
      color: #e16f89;
    }
    .profile-status {
      margin-bottom: 1rem;
    }
    .profile-photo {
      img {
        display: inline-block;
        width: 10rem;
        border-radius: 5rem;
      }
    }
    .introduction {
      text-align: justify;
      white-space: pre-line;
    }
    .social-accounts {
      margin-top: 1rem;
    }
  }
  .profile-content {
    flex: 1 0 0;
  }
  .social-accounts {
    list-style-type: none;
    li {
      display: inline-block;
      a {
        color: var(--color-main);
        &:hover {
          color: var(--color-sub);
        }
      }
      .ov-icon {
        width: 3rem;
        height: 3rem;
      }
      + li {
        margin-left: 0.5rem;
      }
    }
  }

  .blessing-container {
    margin-top: 3rem;
  }

  .credits {
    .credit-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: stretch;
      gap: 1rem;
    }
    .credit-group {
      text-align: center;
      .group-name {
        font-weight: bold;
      }
      + .credit-group {
        margin-top: 1.5rem;
      }
    }
    .member-twitter {
      a {
        color: #e16f89;
        text-decoration: none;
        margin-left: 0.25rem;
        &:hover {
          color: var(--color-theme6);
        }
      }
    }
  }

  @media screen and (max-width: 58em) {
    .paw-line {
      svg:nth-child(n+12) {
        display: none;
      }
    }
    .user-card {
      flex-flow: column nowrap;
      .profile-photo, .profile-content, .introduction {
        text-align: center;
      }
    }
    .credits {
      .credit-list {
        grid-template-columns: repeat(2, 1fr);
        .credit-column:nth-of-type(1) {
          grid-column: 1 / 3;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          .credit-group {
            margin-top: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 48em) {
    .user-card {
      max-width: none;
    }
  }

  @media screen and (max-width: 37.5em) {
    .paw-line {
      svg:nth-child(n+10) {
        display: none;
      }
    }
    .credits {
      .credit-list {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        .credit-column:nth-of-type(1) {
          grid-column: auto;
          display: block;
          .credit-group + .credit-group {
            margin-top: 1.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 30em) {
    .paw-line {
      svg:nth-child(n+8) {
        display: none;
      }
    }
  }
}
</style>
