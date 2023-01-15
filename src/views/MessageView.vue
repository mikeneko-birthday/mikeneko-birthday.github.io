<template>
  <SiteContent>
    <section class="view view-messages" v-viewer="{ url: 'data-source' }">
      <Transition name="fade" mode="out-in">
        <div v-show="showWall" class="wall-container">
          <masonry-wall
            class="letter-wall"
            :items="lettersPaginated"
            :column-width="400"
            :gap="24"
            @redraw="wallLoaded"
          >
            <template #default="{ item, index }">
              <LetterCard
                :class="{ 'oliver-letter': item.id === '0001' }"
                :id="item.id"
                :name="item.name"
                :top="item.top"
                :bottom="item.bottom"
                :content="item.content"
                @photoClicked="viewPhoto(index, item.name)"
              />
            </template>
          </masonry-wall>
        </div>
      </Transition>

      <div class="page-switch">
        <PageSelect
          :max="maxPage"
          :current-page="currentPage"
          has-background
          @changePage="changePage"
        />
      </div>
    </section>
  </SiteContent>
</template>

<script>
import SiteContent from "@/components/SiteComponents/SiteContent.vue";
import LetterCard from "@/components/LetterCard.vue";

import letters from "@/data/letters";
import PageSelect from "@/components/Widget/PageSelect.vue";

export default {
  components: { SiteContent, LetterCard, PageSelect },
  props: {
    itemPerPage: {
      type: Number,
      default: 12
    },
  },
  data() {
    return {
      currentPage: parseInt(this.$route.params.page) || "1",
      lettersData: letters,
      showWall: true,
      timer: "",
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
    sourceImageList() {
      return this.lettersPaginated.map(letter => {
        return {
          src: require(`@/assets/img/letters/${letter.id}.jpg`),
          alt: `${letter.name} の手紙`,
        };
      });
    },
    maxPage() {
      return Math.ceil(this.lettersData.length / this.itemPerPage);
    },
  },
  watch: {
    "$route.params.page": {
      handler(newValue) {
        this.currentPage = parseInt(newValue);
      }
    },
  },
  methods: {
    changePage(n) {
      this.showWall = false;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$router.push({
          name: "message",
          params: { page: n }
        });
        this.showWall = true;
      }, 300);
    },
    wallLoaded() {
      window.scrollTo(0, 0);
    },
    viewPhoto(index) {
      this.$viewerApi({
        options: {
          initialViewIndex: index
        },
        images: this.sourceImageList,
      });
    },
    isPageOutRange(p) {
      return p < 1 || p > this.maxPage;
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.isPageOutRange(parseInt(to.params.page))) {
        vm.$router.replace({
          name: "message",
          params: { page: 1 }
        });
      }
    });
  },
  beforeRouteUpdate(to) {
    if (this.isPageOutRange(parseInt(to.params.page))) {
      this.$router.replace({
        name: "message",
        params: { page: 1 }
      });
    }
  }
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

  .page-switch {
    text-align: center;
    margin: 2rem 0;
  }
}
</style>
