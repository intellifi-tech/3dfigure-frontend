<template>
  <div class="vx-col w-full mb-base pt-3">
     <h3>
          Konseptler
        </h3>
    <div class="row">
      <div class="col-md-9">
        <div class="search-page__search-bar flex items-center pt-3">
          <vs-input
            v-model="searchQuery"
            class="w-full input-rounded-full no-icon-border"
            icon="icon-search"
            icon-pack="feather"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="flex items-center float-right pt-3">
          <div class="mr-2">
            <vs-button color="warning" type="relief">Export</vs-button>
          </div>
          <div>
            <vs-button color="success" type="relief">Yeni ekle</vs-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 my-3" v-for="(concept, index) in concepts" :key="index">
        <vx-card class="shadow">
          <div slot="no-body">
            <iframe
              class="responsive card-img-top"
              style="height: 170px"
              :src="'https://sketchfab.com/models/'+concept.sketchId+'/embed'"
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
      <h5 class="mb-2">{{concept.conceptName}}</h5>
      <p class="text-grey">{{concept.description}}</p>
      <p class="text-grey">Fiyat: {{concept.price}}</p>
      <p class="text-grey">{{concept.doubleConcept ? 'Çift Kişilik' : 'Tek Kişilik'}}</p>
      <p class="text-grey">{{concept.isConceptsVisible ? 'Konsept Aktif' : 'Konsept Aktif Değil'}}</p>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="shadow-md w-full px-1 mt-3"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
            >Düzenle</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="totalPages" v-model="currentx"></vs-pagination>
    </div>
  </div>
</template>

<script>
import ConceptService from "@/services/concept.service";
import CategoryService from "@/services/category.service";

export default {
  data() {
    return {
      activeItem: 0,
      searchQuery: "",
      concepts: [],
      totalPages: 0,
      currentx: 1
    };
  },
  created: async function() {
    const response = await ConceptService.getAllConceptsAdmin(0)
    this.concepts = response.content
    this.totalPages = response.totalPages
  },
  watch: {
    currentx: async function() {
      const response = await ConceptService.getAllConceptsAdmin(this.currentx - 1)
      this.concepts = response.content
    }
  }
};
</script>