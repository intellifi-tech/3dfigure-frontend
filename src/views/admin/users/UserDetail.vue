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
                  <p
                    class="text-grey"
                  >{{concept.isConceptsVisible ? 'Konsept Aktif' : 'Konsept Aktif Değil'}}</p>
                  <div class="flex justify-between flex-wrap">
                    <vs-button
                      class="shadow-md w-full px-1 mt-3"
                      type="gradient"
                      color="#7367F0"
                      gradient-color-secondary="#CE9FFC"
                      @click="showDetail(concept)"
                    >Detaylar</vs-button>
                  </div>
                </vx-card>
              </div>
            </div>
            <div class="my-5">
              <vs-pagination :total="totalPages" v-model="currentx"></vs-pagination>
            </div>
            <vs-popup :active.sync="updatePopup">
              <div>
                <vs-input label-placeholder="Konsept Adı" v-model="selected.conceptName" />
                <select class="form-control" v-model="selected.categoryId">
                  <option
                    :key="index"
                    v-for="(item,index) in categories"
                    :value="item.id"
                  >{{item.name}}</option>
                </select>
              </div>
            </vs-popup>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  alpha,
  sameAs
} from "vuelidate/lib/validators";
import AddressService from "@/services/address.service";
import PlaceService from "@/services/place.service";
import Datepicker from "vuejs-datepicker";
import * as lang from "vuejs-datepicker/src/locale";
import UserService from "@/services/user.service";
import ConceptService from "@/services/concept.service";
import CategoryService from "@/services/category.service";
export default {
  data() {
    return {
      searchQuery: "",
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
    Datepicker
  },
  created: async function() {
    this.user = await UserService.getUser(this.$route.query.id);
    this.addresses = await AddressService.getUserAddress(this.$route.query.id);
    const response = await OrderService.getUsersAllOrders(this.$route.query.id);
    this.orders = response.content;
  }
};
</script>
