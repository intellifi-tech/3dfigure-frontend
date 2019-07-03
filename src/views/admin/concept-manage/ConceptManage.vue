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
                    <json-excel
      class="vs-component vs-button vs-button-warning vs-button-relief"
      :fetch="exportConcept"
      :fields="json_fields"
      worksheet="My Worksheet"
      name="concepts.xls">
      Download Excel
    </json-excel>
          </div>
          <div>
            <vs-button color="success" type="relief" @click="newPopup = true">Yeni ekle</vs-button>
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
              @click="showDetail(concept)"
            >Düzenle</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="totalPages" v-model="currentx"></vs-pagination>
    </div>
      <vs-popup :active.sync="updatePopup">
        <div>
          <vs-input label-placeholder="Konsept Adı" v-model="selected.conceptName"/>
          <select class="form-control" v-model="selected.categoryId">
                <option
                  :key="index"
                  v-for="(item,index) in categories"
                  :value="item.id"
                >{{item.name}}</option>
          </select>
          <vs-button class="float-right" @click="updateConcept">Güncelle</vs-button>
        </div>
      </vs-popup>
      <vs-popup :active.sync="newPopup">
        <div>
          <vs-input label-placeholder="Konspet Adı" v-model="newConcept.conceptName"/>
          <select class="form-control" v-model="newConcept.categoryId">
                <option
                  :key="index"
                  v-for="(item,index) in categories"
                  :value="item.id"
                >{{item.name}}</option>
          </select>
          <vs-button class="float-right" @click="addConcept">Ekle</vs-button>
        </div>
      </vs-popup>
      
     
  </div>
</template>

<script>
import ConceptService from "@/services/concept.service";
import CategoryService from "@/services/category.service";
import JsonExcel from 'vue-json-excel'

export default {
  components: {
    JsonExcel
  },
  data() {
    return {
      searchQuery: "",
      concepts: [],
      selected: {},
      newConcept: {},
      detailConcept: {},
      totalPages: 0,
      currentx: 1,
      categories: [],
      updatePopup: false,
      newPopup: false,
      json_fields: {
        'Sketch ID': 'sketchId',
        'Konsept Adı': 'conceptName',
        'Sketch Tag': 'sketchTag',
        'Görünür mü?': 'isConceptsVisible',
        'Açıklama': 'description',
        'Index': 'showIndex',
        'Fiyat': 'price',
        'Dil': 'lang',
        'Çift Resimler İçin mi': 'doubleConcept'
      }
    };
  },
  created: async function() {
    const response = await ConceptService.getAllConceptsAdmin(0)
    this.concepts = response.content
    this.totalPages = response.totalPages
    this.categories = await CategoryService.getAllCategories()
  },
  watch: {
    currentx: async function() {
      const response = await ConceptService.getAllConceptsAdmin(this.currentx - 1)
      this.concepts = response.content
    }
  },

  methods: {
    showDetail(concept) {
      this.selected = concept
      this.updatePopup = true
    },

    exportConcept: async function() {
      const exported = await ConceptService.exportConcept()
      return exported
    },

    updateConcept: async function() {
      await ConceptService.updateConcept(this.selected)
      this.selected = {}
      this.updatePopup = false
    },

    addConcept: async function() {
      const res = await ConceptService.createConcept(this.newConcept)
      this.concepts.push(res)
      this.newPopup = false
      this.newConcept = {}
    }
  }
};
</script>