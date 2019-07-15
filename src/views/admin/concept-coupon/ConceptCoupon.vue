<template lang="html">
  <div>
    <div class="float-right flex items-center col-md-4 pt-3 ml-0 pr-0">
      <div class="w-full mr-0 pr-0 flex">
         <div class="w-1/2 mr-2">
        <json-excel
          class="vs-component vs-button w-full vs-button-warning vs-button-filled includeIcon"
          :data="categories"
          :fields="json_fields"
          worksheet="My Worksheet"
          name="category.xls">
          Export Excel
        </json-excel>
    </div>
        <div  class="w-1/2">
            <vs-button class="w-full" color="success" @click="newPopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
        </div>
     
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
            Kuponlar
          </h3>
        </template>
      
        <template slot="thead">
          <vs-th sort-key="name">Kupon Adı</vs-th>
          <vs-th sort-key="code">Kupon Kodu</vs-th>
          <vs-th sort-key="code">Başlangıç Tarihi</vs-th>
          <vs-th sort-key="code">Bitiş Tarihi</vs-th>
          <vs-th sort-key="code">İndirim Oranı</vs-th>
          <vs-th sort-key="status">Durumu</vs-th>
          <vs-th>Seçenekler</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td data=""></vs-td>
            <vs-td data=""></vs-td>
            <vs-td data=""></vs-td>
            <vs-td data=""></vs-td>
            <vs-td data=""></vs-td>
            <vs-td data=""></vs-td>
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
      <vs-popup class="couponPopups" :active.sync="updatePopup" title="Kupon Güncelle">
        <div>
           <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input class="mb-2 w-full" label-placeholder="Kupon Adı" v-model="coupon.discountName"/>
              </div>
              <div class="vx-col w-1/2">
               <vs-input class="mb-2 w-full" label-placeholder="Kupon Kodu" v-model="coupon.code"/>
              </div>
            </div>
           
              <div class="vx-col w-full mb-3">
                   <p class=" mb-1 ml-1 text-sm">Başlangıç Tarihi</p>
             <datepicker
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="coupon.startDate"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Başlangıç Tarihi"
                  ></datepicker>
              </div>
              <div class="vx-col w-full mb-4">
                   <p class=" mb-1 ml-1 text-sm">Bitiş Tarihi</p>
             <datepicker
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="coupon.finishDate"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Bitiş Tarihi"
                  ></datepicker>
              </div>
            <div class="vx-col w-full">
               <vs-input class="mb-2 w-full" label-placeholder="İndirim Oranı" v-model="coupon.rate"/>
              </div>

            <p class=" mb-1 ml-1 text-sm">Durumu</p>
          <select class="w-full form-control-lg select-input mb-4" v-model="coupon.active">
                <option
                  :key="index"
                  v-for="(item,index) in lang"
                  :value="item.value"
                >{{item.text}}</option>
          </select>
          <vs-button class="float-right" @click="updateCoupon">Güncelle</vs-button>
        </div>
      </vs-popup>
      <vs-popup class="couponPopups"  :active.sync="newPopup" title="Kupon Ekle">
        <div>
           <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input class="mb-2 w-full" label-placeholder="Kupon Adı" v-model="coupon.discountName"/>
              </div>
              <div class="vx-col w-1/2">
               <vs-input class="mb-2 w-full" label-placeholder="Kupon Kodu" v-model="coupon.code"/>
              </div>
            </div>
           
              <div class="vx-col w-full mb-3">
                   <p class=" mb-1 ml-1 text-sm">Başlangıç Tarihi</p>
             <datepicker
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="coupon.startDate"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Başlangıç Tarihi"
                  ></datepicker>
              </div>
              <div class="vx-col w-full mb-4">
                   <p class=" mb-1 ml-1 text-sm">Bitiş Tarihi</p>
             <datepicker
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="coupon.finishDate"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Bitiş Tarihi"
                  ></datepicker>
              </div>
            <div class="vx-col w-full">
               <vs-input class="mb-2 w-full" label-placeholder="İndirim Oranı" v-model="coupon.rate"/>
              </div>

            <p class=" mb-1 ml-1 text-sm">Durumu</p>
          <select class="w-full form-control-lg select-input mb-4" v-model="coupon.active">
                <option
                  :key="index"
                  v-for="(item,index) in lang"
                  :value="item.value"
                >{{item.text}}</option>
          </select>
          <vs-button class="float-right" @click="addCoupon">Ekle</vs-button>
        </div>
      </vs-popup>
    </div>
</template>

<script>
import CategoryService from '@/services/category.service.js'
import JsonExcel from 'vue-json-excel'
import Datepicker from "vuejs-datepicker";
import * as lang from "vuejs-datepicker/src/locale";
export default {
  components: {
    JsonExcel,
    Datepicker
  },
  data: () => ({
      isUpdated: false,
      datePicker: {
        disableD: {
          customPredictor: function(date) {
            if (date > new Date()) {
              return true;
            }
          }
        },
        dateLang: lang,
        formatList: { en: "MMM d yyyy", tr: "d MMM yyyy" }
      },
    selected: {},
    newCategory: {},
    categories: [],
    lang: [{ text: "İngilizce", value: "EN" }, { text: "Türkçe", value: "TR" }],
    updatePopup: false,
    newPopup: false,
    coupon:{
        discountName:"",
        code:"",
        startDate:null,
        finishDate:null,
        rate:"",
        active:"",
    },
    json_fields: {
        'Kupon Adı': 'name',
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
        title: `Onayla`,
        text: `${category.name} silmek istiyor musunuz?`,
        accept: async function() {
          await CategoryService.deleteCategory(category.id)
          self.categories.splice(index, 1)
          self.$vs.notify({
            color: 'success',
            title:'Kupon silindi.'
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
        title:'Kupon eklendi.'
      });
      this.categories.push(res)
      this.newCategory = {}
      this.newPopup = false
    },

  }
};
</script>

<style>
.couponPopups .vdp-datepicker{
  font-size:14px
}
.couponPopups .vdp-datepicker input{
  width:100%
}
.couponPopups .vdp-datepicker .vdp-datepicker__calendar{
   bottom: -120px;
   width:250px;
}
.couponPopups .vdp-datepicker .vdp-datepicker__calendar .cell{
     height: 30px;
    line-height: 30px;
}
</style>
