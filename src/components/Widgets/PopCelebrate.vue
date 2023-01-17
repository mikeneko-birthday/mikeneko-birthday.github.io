<template>
  <div
    :class="[
      'model-celebrate',
      { 'show': show }
    ]"
  >
    <div class="msg-holder">
      <img src="@/assets/img/drawings/mikeneko_bd2.png" alt="Happy Birthday to Mikeneko">
      <div class="msg msg-bottom">Happy Birthday</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 5000);
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.model-celebrate {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: all .5s ease;
  .msg-holder {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    .msg {
      color: #FFC000;
      font-size: 10vw;
      font-family: "Dancing Script", cursive;
      text-align: center;
      text-shadow: 0 0 .5rem #acacac;
      position: absolute;
      bottom: 2rem;
      width: 100%;
      opacity: 0;
    }
    img {
      opacity: 0;
    }
  }
  &.show {
    opacity: 1;
    visibility: visible;
    img, .msg {
      opacity: 1;
    }
  }
  @media screen and (max-width: 48em) {
    .msg-holder {
      .msg {
        font-size: 12vw;
        transition: opacity 1s ease 1.5s;
      }
      img {
        max-width: none;
        max-height: 80vh;
        transition: opacity 1s ease .5s;
      }
    }
  }
  @media screen and (max-width: 30em) {
    .msg-holder {
      img {
        max-height: 70vh;
      }
      .msg {
        font-size: 18vw;
        word-spacing: 100rem;
      }
    }
  }
}
</style>
