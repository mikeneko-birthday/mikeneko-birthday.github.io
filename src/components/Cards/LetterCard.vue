<template>
  <div class="letter">
    <div class="letter-txt">
      <div class="letter-top">{{ top }}</div>
      <div class="letter-content">
        <p v-for="(c, index) in content" :key="index">{{ c }}</p>
      </div>
      <div class="letter-bottom">{{ bottom }}</div>
    </div>

    <div class="letter-photo other-paw">
      <img
        :src="require(`@/assets/img/letters/thumbnail/${id}.jpg`)"
        :alt="`${name} の手紙`"
      >
      <div class="overlay">
        <button type="button" class="zoom-in" @click="viewPhoto">
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
      this.$emit("photoClicked");
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
  .letter-txt {
    padding: .75rem 1rem;
  }
  .letter-top, .letter-bottom, .letter-content p {
    white-space: pre-line;
  }
  .letter-top, .letter-bottom {
    font-size: 1.125em;
    font-weight: bold;
  }
  .letter-top {
    color: var(--color-main);
    margin-bottom: .75rem;
  }
  .letter-content {
    p {
      margin-top: 0.5rem;
    }
  }
  .letter-bottom {
    color: var(--color-sub);
    text-align: right;
    margin-top: .5rem;
  }
  .letter-photo {
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
    @media screen and (min-width: 48.0625em) {
      &:hover {
        img {
          transform: scale(1.1);
        }
        .overlay {
          opacity: 1;
        }
      }
    }
  }

  &.oliver-letter {
    .letter-photo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 48em) {
    .letter-photo {
      .overlay {
        inset: auto .5rem .5rem auto;
        opacity: 1;
        .zoom-in {
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
