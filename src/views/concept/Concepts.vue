<template>
  <vx-card class="mt-5 pt-2 px-2">
    <div class="d-md-flex d-inline-block align-items-center">
      <div class="col-lg-4">
        <h4>{{$t('dashboard.main.wizard.tabTwo.cardTitle')}}</h4>
      </div>
      <div class="col-lg-8">
     <vs-select
        placeholder="Konsept seç"
        multiple
        class="px-4 float-right form-control-lg selecting selectExample w-full md:w-1/2 focus:shadow-md"
        v-model="tags"
        >
        <vs-select-item :key="index" :value="category.id" :text="category.name" v-for="(category,index) in categories"></vs-select-item>
      </vs-select>
      </div>
    </div>
    <div class="search-page__search-bar flex items-center pt-3">
      <vs-input
        :placeholder="$t('dashboard.main.wizard.tabTwo.searchBar')"
        v-model="searchQuery"
        class="w-full input-rounded-full no-icon-border"
        icon="icon-search"
        icon-pack="feather"
        @keyup="searchConcept"
      />
    </div>

    <div class="vx-row pt-5">
      <div
        class="col-md-3"
        v-for="concept in this.$store.state.conceptPage.conceptList"
        :key="concept.showIndex"
      >
        <concept :concept="concept"></concept>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="this.$store.state.conceptPage.totalPages" v-model="currentx"></vs-pagination>
    </div>
  </vx-card>
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import Concept from "@/components/concepts/ConceptCard.vue";
import ConceptService from "@/services/concept.service";
import CategoryService from "@/services/category.service";

export default {
  data() {
    return {
      categories: [],
      tags: [],
      searchQuery: null,
      currentx: 1,
      conceptValues: null,
      totalPages: 0
    };
  },
  created: async function() {
    const result  = await CategoryService.getAllCategories()
    this.categories=  result.filter(word => word.lang == sessionStorage.getItem('lang') );
  },
  methods: {
    searchConcept: async function() {
      const res = await ConceptService.searchConcept(this.$store.state.selectedFigures.avatarKey.length == 2, this.searchQuery)
      this.$store.dispatch("initConcept", res);
    }
  },
  watch: {
    searchQuery: async function() {
      if (this.searchQuery.length == 0) {
        const res = await ConceptService.getAllConcepts(0, this.$store.state.selectedFigures.avatarKey.length == 2);
        this.$store.dispatch("initConcept", res);
      }
    },
    currentx: async function() {
      var res = {};
      if (this.tags.length === 0) {
        res = await ConceptService.getAllConcepts(
          this.currentx - 1,
          this.$store.state.selectedFigures.avatarKey.length == 2
        );

        this.$store.dispatch("initConcept", res);
      } else {
        res = await ConceptService.getAllConceptsByCategory(
          this.tags,
          this.currentx - 1,
          this.$store.state.selectedFigures.avatarKey.length == 2
        );
        this.$store.dispatch("initConcept", res);
      }
    },
    tags: async function() {
      var res = {};
      if (this.tags.length === 0) {
        res = await ConceptService.getAllConcepts(
          this.currentx - 1,
          this.$store.state.selectedFigures.avatarKey.length == 2
        );
        this.$store.dispatch("initConcept", res);
      } else {
        res = await ConceptService.getAllConceptsByCategory(
          this.tags,
          0,
          this.$store.state.selectedFigures.avatarKey.length == 2
        );
        this.$store.dispatch("initConcept", res);
      }
    }
  },
  components: {
    Unity,
    Concept
  }
};
</script>