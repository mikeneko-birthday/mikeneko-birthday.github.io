<template>
  <SiteContent>
    <section class="view view-messages" v-viewer>
      <masonry-wall
        class="letter-wall"
        :items="lettersPaginated"
        :column-width="400"
        :gap="24"
      >
        <template #default="{ item }">
          <LetterCard
            :id="item.id"
            :name="item.name"
            :top="item.top"
            :bottom="item.bottom"
            :content="item.content"
          />
        </template>
      </masonry-wall>
    </section>
  </SiteContent>
</template>

<script>
import SiteContent from "@/components/SiteComponents/SiteContent.vue";
import LetterCard from "@/components/LetterCard.vue";

import letters from "@/data/letter_demo";
import { convertPxToRem } from "@/utils/function";

export default {
  components: { SiteContent, LetterCard },
  props: {
    itemPerPage: {
      type: Number,
      default: 12
    },
  },
  data() {
    return {
      currentPage: 1,
      lettersData: letters
    };
  },
  computed: {
    indexStart() {
      return (this.currentPage - 1) * this.itemPerPage;
    },
    indexEnd() {
      return this.indexStart + this.itemPerPage;
    },
    lettersPaginated() {
      return this.lettersData.slice(this.indexStart, this.indexEnd);
    },
  },
  methods: {
    convertPxToRem,
  },
};
</script>

<style lang="scss">
.view-messages{
  .letter-wall .masonry-column {
    align-items: center;
  }
  @media screen and (max-width: 62.5em) {
    .letter {
      max-width: 31.25rem;
    }
  }
  @media screen and (max-width: 30em) {
    .letter {
      font-size: 0.875rem;
    }
  }
}
</style>
