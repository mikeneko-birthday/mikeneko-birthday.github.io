<template>
  <SiteContent>
    <section class="view view-illustration" v-viewer="{ url: 'data-source' }">
      <masonry-wall
        class="drawing-wall"
        :items="drawingData"
        :column-width="400"
        :gap="24"
        @redraw="wallLoaded"
      >
        <template #default="{ item }">
          <DrawingCard
            :id="item.id"
            :name="item.name"
            :twitter-id="item.twitterId"
            :drawer-icon="item.drawerIcon"
          />
        </template>
      </masonry-wall>
    </section>
  </SiteContent>
</template>

<script>
import DrawingCard from "@/components/Cards/DrawingCard.vue";
import SiteContent from "@/components/SiteComponents/SiteContent.vue";

import drawing from "@/data/drawing";

export default {
  components: { SiteContent, DrawingCard },
  data() {
    return {
      drawingData: drawing,
    };
  },
  methods: {
    wallLoaded() {
      window.scrollTo(0, 0);
    }
  },
};
</script>

<style lang="scss">
.view-illustration {
  .drawing-wall .masonry-column {
    align-items: center;
  }
}
</style>
