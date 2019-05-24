<template>
  <vx-card class="mt-5 pt-2 px-2">
    <h4>Konseptler</h4>
    <div class="search-page__search-bar flex items-center pt-3">
      <vs-input
        placeholder="Search"
        v-model="searchQuery"
        class="w-full input-rounded-full no-icon-border"
        icon="icon-search"
        icon-pack="feather"
      />
    </div>
    <div class="vx-row pt-5">
      <div class="col-md-4" v-for="concept in this.conceptValues" :key="concept.showIndex">
        <concept :concept="concept"></concept>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="this.totalPages" v-model="currentx"></vs-pagination>
    </div>
  </vx-card>
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import Concept from "@/components/concepts/ConceptCard.vue";
import ConceptService from "@/services/concept.service";

export default {
  data() {
    return {
      searchQuery: null,
      currentx: 1,
      conceptValues: null,
      totalPages: 0
    };
  },
  created: async function() {
    var res = await ConceptService.getAllConcepts(0);
    this.conceptValues = res.content;
    this.totalPages = res.totalPages;
  },
  watch: {
    currentx: async function() {
      var res = await ConceptService.getAllConcepts(this.currentx - 1);
      this.conceptValues = res.content;
    }
  },
  methods: {},
  components: {
    Unity,
    Concept
  }
};
</script>