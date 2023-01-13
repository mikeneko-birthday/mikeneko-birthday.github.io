<template>
  <div class="drawing">
    <div class="drawing-meta">
      <div class="drawer-icon">
        <img :class="`type-${drawerIcon}`" :src="require(`@/assets/img/user_icon/nekofami${drawerIcon}.png`)" alt="Drawer Icon">
      </div>
      <div class="drawer-info">
        <div class="drawer-name">{{ name }}</div>
        <div class="drawer-twitter">
          <a :href="`https://twitter.com/${twitterId}`" target="_blank">
            @{{ twitterId }}
            <v-icon name="fa-twitter" />
          </a>
        </div>
      </div>
    </div>

    <div class="drawing-photo other-paw">
      <img
        ref="photo"
        :src="thumbnailLink"
        :data-source="originalLink"
        :alt="`${name} のイラスト`"
      >
      <!-- <div class="overlay">
        <button class="zoom-in" @click="viewPhoto">
          <v-icon name="bi-zoom-in" />
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: "0"
    },
    name: {
      type: String,
      default: ""
    },
    twitterId: {
      type: String,
      default: ""
    },
    drawerIcon: {
      type: String,
      default: "nekofami1.png"
    }
  },
  computed: {
    thumbnailLink() {
      return require(`@/assets/img/drawings/thumbnail/${this.id}.jpg`);
    },
    originalLink() {
      return require(`@/assets/img/drawings/${this.id}.jpg`);
    },
  },
  methods: {
    viewPhoto() {
      this.$refs.photo.click();
    }
  },
};
</script>

<style lang="scss" scoped>
.drawing {
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.15);
  overflow: hidden;
  .drawing-meta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
  }
  .drawer-icon {
    img {
      height: 3rem;
      background: var(--color-main);
      border-radius: 3rem;
      margin-right: 1rem;
      &.type-2 {
        background: var(--color-sub);
      }
    }
  }
  .drawer-info {
    font-size: 1.125rem;
    .drawer-name {
      color: var(--color-main);
      font-weight: bold;
    }
    .drawer-twitter {
      font-size: 0.875em;
      .ov-icon {
        color: #999;
        display: inline-block;
      }
      a {
        color: #7a7a7a;
        text-decoration: none;
        &:hover {
          color: var(--color-sub);
          .ov-icon {
            color: var(--color-sub);
          }
        }
      }
    }
  }

  @media screen and (max-width: 62.5em) {
    max-width: 31.25rem;
  }

  @media screen and (max-width: 30em) {
    .drawer-info {
      font-size: 1rem;
    }
  }
}
</style>
