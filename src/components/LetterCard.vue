<template>
  <div class="letter">
    <div class="letter-txt">
      <div class="letter-top">{{ top }}</div>
      <div class="letter-content">
        <p v-for="(c, index) in content" :key="index">{{ c }}</p>
      </div>
      <div class="letter-bottom">{{ bottom }}</div>
    </div>

    <div class="letter-photo">
      <img ref="photo" :src="require(`@/assets/img/letters/2001.jpg`)" :alt="`${name} の手紙`">
      <div class="overlay">
        <button class="zoom-in" @click="viewPhoto">
          <v-icon name="bi-zoom-in" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: "1001"
    },
    name: {
      type: String,
      default: "ねこふぁみ"
    },
    top: {
      type: String,
      default: "みけねこへ"
    },
    content: {
      type: Array,
      default: () => []
    },
    bottom: {
      type: String,
      default: "ねこふぁみ"
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
.letter {
  background: #fff;
  border-radius: .5rem;
  border-top: .5rem solid var(--color-main);
  box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.15);
  overflow: hidden;
  &-txt {
    padding: .75rem 1rem;
  }
  &-top, &-bottom {
    font-size: 1.125em;
    font-weight: bold;
  }
  &-top {
    color: var(--color-main);
    margin-bottom: .5rem;
  }
  &-bottom {
    color: var(--color-sub);
    text-align: right;
    margin-top: .5rem;
  }
  &-photo {
    position: relative;
    max-height: 18.75rem;
    overflow: hidden;
    img {
      transition: transform .3s ease;
    }
    .overlay {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity .3s ease;
      .zoom-in {
        color: #fff;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        border: none;
      }
      .ov-icon {
        display: inline-block;
        width: 2.5rem;
        height: 3.5rem;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      .overlay {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 48em) {
    &-photo {
      .overlay {
        opacity: 1;
        .zoom-in {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          width: auto;
          height: auto;
          padding: .5rem;
          border-radius: 3rem;
        }
        .ov-icon {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
