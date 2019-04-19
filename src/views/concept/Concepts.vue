<template>
  <vx-card class="mt-5 pt-2 px-2">
    <h4>Konseptler</h4>
    <div class="search-page__search-bar flex items-center">
      <vs-input
        placeholder="Search"
        v-model="searchQuery"
        class="w-full input-rounded-full no-icon-border"
        icon="icon-search"
        icon-pack="feather"
      />
    </div>
    <div class="vx-row pt-5">
      <div class="col-md-4" v-for="n in 12" :key="n">
        <concept></concept>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="40" v-model="currentx"></vs-pagination>
    </div>
  </vx-card>
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import Concept from "@/components/vx-card/ConceptCard.vue";

export default {
  components: {
    Unity,
    Concept
  }
};
</script>