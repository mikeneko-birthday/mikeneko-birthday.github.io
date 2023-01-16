<template>
  <div
    :class="[
      'page-select',
      { 'has-bg': hasBackground }
    ]"
  >
    <button
      type="button"
      :class="[
        'btn-control',
        'btn-prev',
        { 'disabled': currentPage <= 1 }
      ]"
      :disabled="currentPage <= 1"
      @click="$emit('changePage', currentPage - 1)"
    >
      <inline-svg
        :src="catPaw"
        aria-hidden="false"
      />
    </button>
    <div class="pages">
      <a
        v-for="n in max"
        :key="n"
        :class="[
          'page-num',
          { 'page-active': n === currentPage }
        ]"
        @click="$emit('changePage', n)"
      >
        {{ n }}
      </a>
      <input
        type="text"
        v-model.number="pageInput"
        name="page-num"
        id="page-num"
        class="page-input"
        maxlength="2"
        @focus="$event.target.select()"
        @keypress="pageLimitInput($event)"
        @keyup.enter="submitPageNum($event)"
        @blur="submitPageNum($event)"
      >
    </div>
    <button
      type="button"
      :class="[
        'btn-control',
        'btn-next',
        { 'disabled': currentPage >= max }
      ]"
      :disabled="currentPage >= max"
      @click="$emit('changePage', currentPage + 1)"
    >
      <inline-svg
        :src="catPaw"
        aria-hidden="false"
      />
    </button>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
const paw = require("@/assets/img/paw/paw2.svg");

export default {
  components: { InlineSvg },
  props: {
    max: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    hasBackground: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      catPaw: paw,
      pageInput: this.currentPage,
      noSubmit: false
    };
  },
  watch: {
    pageInput(newValue) {
      if (newValue == "") return;
      if (newValue < 1) {
        this.pageInput = 1;
      } else if (newValue > this.max) {
        this.pageInput = this.max;
      }
    },
    currentPage(newValue) {
      this.pageInput = newValue;
    },
  },
  methods: {
    viewPhoto() {
      this.$refs.photo.click();
    },
    pageLimitInput(e) {
      if (e.keyCode <= 47 || e.keyCode >= 58) {
        e.preventDefault();
      }
    },
    submitPageNum(e) {
      if (this.noSubmit) {
        this.noSubmit = false;
        return;
      }

      if (e.type !== "blur") this.noSubmit = true;
      if (this.pageInput !== this.currentPage) {
        if (!this.pageInput) {
          this.pageInput = this.currentPage;
        } else {
          this.$emit("changePage", this.pageInput);
        }
      }
      e.target.blur();
    }
  },
};
</script>

<style lang="scss" scoped>
.page-select {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  column-gap: 1rem;
  .btn-control {
    color: var(--color-main);
    .ov-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  .btn-prev {
    transform: rotate(-90deg);
  }
  .btn-next {
    transform: rotate(90deg);
  }
  .pages {
    display: flex;
    flex-flow: row nowrap;
    column-gap: .5rem;
    .page-num, .page-input {
      text-align: center;
      font-size: 1rem;
      font-family: "FakePearl-Regular", sans-serif;
      width: 2.5rem;
      height: 2.5rem;
      background: transparent;
      border-radius: 5rem;
      transition: background .3s ease;
    }
    .page-num {
      line-height: 2.5rem;
      &.page-active {
        background: var(--color-sub-light);
      }
    }
    .page-input {
      display: none;
      text-align: center;
      border: none;
      outline: none;
      &:focus {
        background: var(--color-sub-light);
      }
    }
  }

  @media screen and (min-width: 30.0625em) {
    .btn-control {
      &:disabled, &.disabled {
        display: none;
      }
    }
  }
  @media screen and (max-width: 30em) {
    .btn-control {
      &:disabled, &.disabled {
        color: #dedede;
      }
    }

    .pages {
      .page-num {
        display: none;
      }
      .page-input {
        display: block;
      }
    }
  }

  &.has-bg {
    background: #fff;
    border-radius: 5rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
    padding: .5rem 1rem;
  }
}
</style>
