<template lang="html">
  <div>

    <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
      <div class="w-full mr-0 pr-0">
        <vs-button class="w-full" color="success" @click="newPopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
        <json-excel
      class="vs-component vs-button w-full vs-button-warning vs-button-filled includeIcon"
      :data="categories"
      :fields="json_fields"
      worksheet="My Worksheet"
      name="category.xls">
      Download Excel
    </json-excel>
          </div>
      </div>
      <vs-table
        v-model="selected"
        pagination
        max-items="10"
        search
        :data="categories">
        <template slot="header">
          <h3>
            Kategoriler
          </h3>
        </template>
      
        <template slot="thead">
          <vs-th sort-key="name">Kategori Adı</vs-th>
          <vs-th sort-key="lang">Dil</vs-th>
          <vs-th>Seçenekler</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].lang">{{data[indextr].lang}}</vs-td>

            <vs-td>
              <div class="flex items-center">
                <div class="mr-2">
                  <vs-button class="px-3" color="primary" type="relief" @click="updateCategory">Düzenle</vs-button>
                </div>
                <div>
                  <vs-button class="px-3" color="danger" type="relief" @click="deleteCategory(data[indextr], indextr)">Sil</vs-button>
                </div>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-popup :active.sync="updatePopup">
        <div>
          <vs-input label-placeholder="Kategory Adı" v-model="selected.name"/>
          <select class="form-control" v-model="selected.lang">
                <option
                  :key="index"
                  v-for="(item,index) in lang"
                  :value="item.value"
                >{{item.text}}</option>
          </select>
          <vs-button class="float-right" @click="updateCategory">Güncelle</vs-button>
        </div>
      </vs-popup>
      <vs-popup :active.sync="newPopup">
        <div>
          <vs-input label-placeholder="Kategory Adı" v-model="newCategory.name"/>
          <select class="form-control" v-model="newCategory.lang">
                <option
                  :key="index"
                  v-for="(item,index) in lang"
                  :value="item.value"
                >{{item.text}}</option>
          </select>
          <vs-button class="float-right" @click="addCategory">Ekle</vs-button>
        </div>
      </vs-popup>
    </div>
</template>

<script>
import CategoryService from '@/services/category.service.js'
import JsonExcel from 'vue-json-excel'
export default {
  components: {
    JsonExcel
  },
  data: () => ({
    selected: {},
    newCategory: {},
    categories: [],
    lang: [{ text: "İngilizce", value: "EN" }, { text: "Türkçe", value: "TR" }],
    updatePopup: false,
    newPopup: false,
    json_fields: {
        'Kategori Adı': 'name',
        'Dil': 'lang',
      }
  }),
  created: async function() {
    this.categories = await CategoryService.getAllCategories()
  },
  methods: {
    deleteCategory: function(category, index) {
      var self = this
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: `${category.name} silmek istiyor musunuz?`,
        accept: async function() {
          await CategoryService.deleteCategory(category.id)
          self.categories.splice(index, 1)
          self.$vs.notify({
            color: 'success',
            title:'Kategori silindi'
          });
        }
      })
    },
    updateCategory: async function() {
      this.updatePopup = !this.updatePopup
      if (!this.updatePopup) {
        await CategoryService.updateCategory(this.selected)
      }
    },
    addCategory: async function() {
      const res = await CategoryService.addCategory(this.newCategory)
      this.$vs.notify({
        color:'success',
        title:'Kategori eklendi'
      });
      this.categories.push(res)
      this.newCategory = {}
      this.newPopup = false
    }
  }
};
</script>