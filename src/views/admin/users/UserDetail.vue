<template>
  <!-- FORM WITH LABEL PLACEHOLDER -->
  <div class="vx-col w-full mb-base">
    <div class="mt-6">
      <vs-tabs vs-alignment="fixed" class="shadow-none p-3">
        <vs-tab vs-label="Genel" class="row pt-5">
          <div class="md:w-1/2">
            <vx-card class="shadow-md mx-2">
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input
                    disabled
                    class="w-full"
                    label-placeholder="Ad"
                    v-model="user.firstName"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    disabled
                    class="w-full"
                    label-placeholder="Soyad"
                    v-model="user.lastName"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    disabled
                    class="w-full"
                    label-placeholder="Email"
                    v-model="user.email"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full mb-2">
                  <vs-input
                    disabled
                    type="text"
                    class="w-full"
                    label-placeholder="Cinsiyet"
                    v-model="user.sex"
                  />
                </div>
              </div>
            </vx-card>
          </div>
          <div class="md:w-1/2">
            <vs-table class="px-4" v-model="selectedAdres" :data="addresses">
              <template slot="header">
                <h3>Adresler</h3>
              </template>
              <template slot="thead">
                <vs-th>Kişi</vs-th>
                <vs-th>Adres Adı</vs-th>
                <vs-th>Telefon</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td class="max-ch" :data="data[indextr].person">{{data[indextr].person}}</vs-td>

                  <vs-td :data="data[indextr].addressName">{{data[indextr].addressName}}</vs-td>

                  <vs-td :data="data[indextr].mobile">{{data[indextr].mobile}}</vs-td>

                  <vs-td>
                    <vs-button color="primary" type="filled" @click="detailPopup=true">Detay</vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
          <vs-popup :title="selectedAdres.addressName" :active.sync="detailPopup">
            <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  disabled
                  class="w-full"
                  label-placeholder="Ad Soyad"
                  v-model="selectedAdres.person"
                />
              </div>
            </div>
            <div class="vx-row mb-2">
              <div class="vx-col w-full mb-2">
                <vs-input
                  disabled
                  type="text"
                  class="w-full"
                  label-placeholder="Adres"
                  v-model="selectedAdres.address"
                />
              </div>
            </div>
            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  disabled
                  type="tel"
                  class="w-full"
                  label-placeholder="Telefon"
                  v-model="selectedAdres.mobile"
                />
              </div>
            </div>
          </vs-popup>
        </vs-tab>
        <vs-tab vs-label="Sipairiş Geçmişi" class="pt-5" @click="isUpdated=true">
          <div class="w-100">
            <div class="row">
              <div class="col-md-3" v-for="(order, index) in this.orderValues" :key="index">
                <div v-for="concept in order.basketDTO.concepts" :key="concept.id">
                  <div v-for="figure in concept.figures" :key="figure.id">
                    <order-card :isAdmin="true" :order="order" :conceptPrice="concept.price" :figure="figure" :ids="order.basketDTO.id + '-' + concept.id + '-' + figure.id"></order-card>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import AddressService from "@/services/address.service";
import Datepicker from "vuejs-datepicker";
import * as lang from "vuejs-datepicker/src/locale";
import UserService from "@/services/user.service";
import OrderService from "@/services/order.service";
import OrderCard from '@/components/orders/OrderCard.vue'
export default {
  data() {
    return {
      searchQuery: "",
      orderValues: [],
      concepts: [],
      selectedAdres: {},
      newConcept: {},
      detailConcept: {},
      totalPages: 0,
      currentx: 1,
      categories: [],
      updatePopup: false,
      newPopup: false,
      detailPopup: false,
      isUpdated: true,
      name: "",
      surname: "",
      adres: {
        id: null,
        taxAdmin: "",
        taxNo: "",
        person: "",
        mobile: "",
        address: "",
        addressName: "",
        postCode: "",
        townId: -1,
        userId: -1
      },
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
      user: {
        id: 0,
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        sex: "",
        birthDay: null
      },
      addresses: [],
      cities: [],
      towns: [],
      city: 1,
      sexList: [{ text: "Male", value: "M" }, { text: "Female", value: "F" }]
    };
  },
  components: {
    Datepicker,
    OrderCard
  },
  created: async function() {
    this.user = await UserService.getUser(this.$route.query.id);
    this.addresses = await AddressService.getUserAddress2(this.$route.query.id);
    this.orderValues = await OrderService.getUsersAllOrders(this.$route.query.id);
  }
};
</script>
