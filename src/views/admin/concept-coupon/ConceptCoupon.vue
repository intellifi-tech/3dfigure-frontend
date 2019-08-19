<template lang="html">
  <div>
    <div class="float-right flex items-center col-md-4 pt-3 ml-0 pr-0">
      <div class="w-full mr-0 pr-0 flex">
         <div class="w-1/2 mr-2">
        <json-excel
          class="vs-component vs-button w-full vs-button-warning vs-button-filled includeIcon"
          :data="coupons"
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
        :data="coupons">
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
            <vs-td data="">{{tr.discountName}}</vs-td>
            <vs-td data="">{{tr.code}}</vs-td>
            <vs-td data="">{{tr.startDate}}</vs-td>
            <vs-td data="">{{tr.finishDate}}</vs-td>
            <vs-td data="">{{tr.rate}}</vs-td>
            <vs-td data="">{{tr.active ? 'Aktif':'Pasif'}}</vs-td>
            <vs-td>
              <div class="flex items-center">
                <div class="mr-2">
                  <vs-button class="px-3" color="primary" type="relief" @click="updateCategory(data[indextr])">Düzenle</vs-button>
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
                    :disabled-dates="datePicker.startDateDisable"
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
                    :disabled-dates="datePicker.startDateDisable"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Bitiş Tarihi"
                  ></datepicker>
              </div>
            <div class="vx-col w-full">
               <vs-input class="mb-2 w-full" label-placeholder="İndirim Oranı" v-model="coupon.rate"/>
              </div>

            <p class=" mb-1 ml-1 text-sm">Durumu</p>
          <select class="w-full form-control-lg select-input mb-4 focus:shadow-md" v-model="coupon.active">
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
                    :disabled-dates="datePicker.startDateDisable"
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
                    :disabled-dates="datePicker.startDateDisable"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Bitiş Tarihi"
                  ></datepicker>
              </div>
            <div class="vx-col w-full">
               <vs-input class="mb-2 w-full" label-placeholder="İndirim Oranı" v-model="coupon.rate"/>
              </div>

            <p class=" mb-1 ml-1 text-sm">Durumu</p>
          <select class="w-full form-control-lg select-input mb-4 focus:shadow-md" v-model="coupon.active">
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
import DiscountService from '@/services/discount.service.js'
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
        startDateDisable: {
          customPredictor: function(date) {
            if (date < new Date()) {
              return true;
            }
          }
        },
        dateLang: lang,
        formatList: { en: "MMM d yyyy", tr: "d MMM yyyy" }
      },
    selected: {},
    newCategory: {},
    coupons: [],
    lang: [{ text: "Aktif", value: true }, { text: "Pasif", value: false }],
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
    this.coupons = await DiscountService.getAllDiscounts()
  },
  methods: {
    deleteCategory: function(discount, index) {
      var self = this
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Kupon Sil`,
        acceptText:'Onayla',
        cancelText:'Vazgeç',
        text: `Bu kuponu silmek istiyor musunuz?`,
        accept: async function() {
          await DiscountService.deleteDiscount(discount.id)
          self.coupons.splice(index, 1)
          self.$vs.notify({
            color: 'success',
            title:'Kupon silindi.'
          });
        }
      })
    },
    updateCategory: async function(coupon) {
      this.updatePopup = !this.updatePopup
      this.coupon = coupon
      if (!this.updatePopup) {
        await DiscountService.updateDiscount(this.coupon)
      }
    },
    updateCoupon: async function() {
      await DiscountService.updateDiscount(this.coupon)
      this.updatePopup = !this.updatePopup
    },
    addCoupon: async function() {
      const res = await DiscountService.saveDiscount(this.coupon)
      this.$vs.notify({
        time: 6000,
        color:'success',
        title:'Kupon eklendi.'
      });
      this.coupons.push(res)
      this.coupon = {}
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
