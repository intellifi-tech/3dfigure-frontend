<template>
  <div class="vx-col w-full mb-base pt-3">
     <h3>Konseptler</h3>
    <div class="row">
      <div class="col-md-9">
        <div class="search-page__search-bar flex items-center pt-3">
          <vs-input
            v-model="searchQuery"
            class="w-full input-rounded-full no-icon-border"
            icon="icon-search"
            icon-pack="feather"
            @keyup="searchConcept"
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
      Export
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
      <h5 class="mb-2">{{concept.conceptName.substring(0, 10)}}</h5>
      <p class="text-grey">{{concept.description.substring(0, 20)}}</p>
      <p class="text-grey">Fiyat: {{concept.price}}</p>
      <p class="text-grey">{{concept.doubleConcept ? 'Çift Kişilik' : 'Tek Kişilik'}}</p>
      <p class="text-grey">{{concept.isConceptsVisible ? 'Konsept Aktif' : 'Konsept Pasif'}}</p>
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
      <!-- Update Concept Popup -->
      <vs-popup :active.sync="updatePopup" title="Konsept Düzenle">
        <div class="container">
          <div class="vx-col w-full mx-auto self-center mb-4">
            <iframe
              class="responsive card-img-top"
              style="height: 170px"
              :src="'https://sketchfab.com/models/'+selected.sketchId+'/embed'"
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
          <div class="vx-col mx-auto self-center">
         <vs-input class="mb-4 w-full" label-placeholder="Konsept Adı" :class="{'vs-input-danger':this.$v.selected.conceptName.$invalid}" v-model="selected.conceptName"/>
          <vs-input class="mb-4 w-full" label-placeholder="Sketch Linki" :class="{'vs-input-danger':this.$v.selected.sketchId.$invalid}"  v-model="selected.sketchId"/>
          
          <vs-input class="mb-4 w-full" label-placeholder="Açıklama" v-model="selected.description"/>
          <span class="vs-component isFocus is-label-placeholder">Kategori</span>
          <select class="form-control mb-4 w-full" multiple :class="{'vs-input-danger':this.$v.selected.categoryId.$invalid}"  v-model="selected.categoryIds">
                <option
                  :key="index"
                  v-for="(item,index) in categories"
                  :value="item.id"
                >{{item.name}}</option>
          </select>
          <span class="vs-component isFocus is-label-placeholder">Görünürlük</span>
          <select class="form-control mb-4" :class="{'vs-input-danger':this.$v.selected.isConceptsVisible.$invalid}" v-model="selected.isConceptsVisible">
                <option
                  :value="true"
                >Evet</option>
                <option
                  :value="false"
                >Hayır</option>
          </select>
          <span class="vs-component isFocus is-label-placeholder">Çift Resim Uygunluğu</span>
          <select class="form-control mb-4" :class="{'vs-input-danger':this.$v.selected.doubleConcept.$invalid}" v-model="selected.doubleConcept">
                <option
                  :value="true"
                >Evet</option>
                <option
                  :value="false"
                >Hayır</option>
          </select>
          <vs-input class="mb-6 w-full" :class="{'vs-input-danger':this.$v.selected.showIndex.$invalid}" label-placeholder="Sıralama" v-model="selected.showIndex"/>
          <vs-input class="mb-2 w-full" :class="{'vs-input-danger':this.$v.selected.price.$invalid}" label-placeholder="Fiyat" v-model="selected.price"/>
          <span class="vs-component isFocus is-label-placeholder pl-2 text-sm">Dil</span>
          <select class="form-control mb-4" v-model="selected.lang">
                <option
                  value="TR"
                >TR</option>
                <option
                  value="EN"
                >EN</option>
          </select>
          <vs-button class="float-right" @click="updateConcept">Güncelle</vs-button>
          </div>
        </div>
      </vs-popup>
      <!-- New Concept Popup -->
      <vs-popup :active.sync="newPopup"  title="Konsept Ekle">
        <div>
          <vs-input class="mb-4 w-full" label-placeholder="Konsept Adı" :class="{'vs-input-danger':this.$v.newConcept.conceptName.$invalid}" v-model="newConcept.conceptName"/>
          <vs-input class="mb-4 w-full" label-placeholder="Sketch Linki" :class="{'vs-input-danger':this.$v.newConcept.sketchId.$invalid}"  v-model="newConcept.sketchId"/>
          
          <vs-input class="mb-6 w-full" label-placeholder="Açıklama" v-model="newConcept.description"/>
          <span class="vs-component isFocus is-label-placeholder">Kategori</span>
          <select class="form-control mb-4"  multiple :class="{'vs-input-danger':this.$v.newConcept.categoryId.$invalid}"  v-model="newConcept.categoryId">
                <option
                  :key="index"
                  v-for="(item,index) in categories"
                  :value="item.id"
                >{{item.name}}</option>
          </select>
          <span class="vs-component isFocus is-label-placeholder">Görünürlük</span>
          <select class="form-control mb-4" :class="{'vs-input-danger':this.$v.newConcept.isConceptsVisible.$invalid}" v-model="newConcept.isConceptsVisible">
                <option
                  :value="true"
                >Evet</option>
                <option
                  :value="false"
                >Hayır</option>
          </select>
          <span class="vs-component isFocus is-label-placeholder">Çift Resim Uygunluğu</span>
          <select class="form-control mb-4" :class="{'vs-input-danger':this.$v.newConcept.doubleConcept.$invalid}" v-model="newConcept.doubleConcept">
                <option
                  :value="true"
                >Evet</option>
                <option
                  :value="false"
                >Hayır</option>
          </select>
          <vs-input class="mb-6 w-full" :class="{'vs-input-danger':this.$v.newConcept.showIndex.$invalid}" label-placeholder="Sıralama" v-model="newConcept.showIndex"/>
          <vs-input class="mb-2 w-full" :class="{'vs-input-danger':this.$v.newConcept.price.$invalid}" label-placeholder="Fiyat" v-model="newConcept.price"/>
          <span class="vs-component isFocus is-label-placeholder">Dil</span>
          <select class="form-control mb-4" v-model="newConcept.lang">
                <option
                  value="TR"
                >TR</option>
                <option
                  value="EN"
                >EN</option>
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
import {
  required,
  numeric,
  minLength
} from "vuelidate/lib/validators";

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
    },
    searchQuery: async function() {
      if (this.searchQuery.length == 0) {
        const response = await ConceptService.getAllConceptsAdmin(0)
        this.concepts = response.content
        this.totalPages = response.totalPages
      }
    }
  },

  methods: {
    showDetail(concept) {
      this.selected = concept
      this.updatePopup = true
    },

    searchConcept: async function() {
      var response;
      if (this.searchQuery.length == 0) {
        response = await ConceptService.getAllConceptsAdmin(0)
      } else {
        response = await ConceptService.searchConceptAdmin(this.searchQuery)
      }
      this.concepts = response.content
      this.totalPages = response.totalPages
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
      if (this.$v.newConcept.$invalid) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!!",
          text: "Lütfen zorunlu bilgileri giriniz.",
          color: "danger"
        });
        return
      }
      this.newConcept.sketchTag = this.newConcept.sketchId
      const res = await ConceptService.createConcept(this.newConcept)
      this.concepts.push(res)
      this.newPopup = false
      this.newConcept = {}
    }
  },
  validations: {
    newConcept: {
      price: {required, numeric},
      sketchId: {required},
      isConceptsVisible: {required},
      description: {required, minLength: minLength(48)},
      showIndex: {required},
      lang: {required},
      doubleConcept: {required},
      categoryId: {required},
      conceptName: {required, minLength: minLength(48)}
    },
    selected: {
      price: {required, numeric},
      sketchId: {required},
      isConceptsVisible: {required},
      description: {required, minLength: minLength(48)},
      showIndex: {required},
      lang: {required},
      doubleConcept: {required},
      categoryId: {required},
      conceptName: {required, minLength: minLength(48)}
    }
  }
  
};
</script>