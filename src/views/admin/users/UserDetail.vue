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
                    :class="{'vs-input-danger':this.$v.name.$invalid}"
                    label-placeholder="Ad"
                    v-model="name"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    disabled
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.surname.$invalid}"
                    label-placeholder="Soyad"
                    v-model="surname"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    disabled
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.addressName.$invalid}"
                    label-placeholder="Adres Adı"
                    v-model="adres.addressName"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full mb-2">
                  <vs-input
                    disabled
                    type="text"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.address.$invalid}"
                    label-placeholder="Adres"
                    v-model="adres.address"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    disabled
                    type="tel"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.mobile.$invalid}"
                    label-placeholder="Telefon"
                    v-model="adres.mobile"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    disabled
                    type="text"
                    class="w-full"
                    label-placeholder="TCKN/Vergi No"
                    :class="{'vs-input-danger':this.$v.adres.taxNo.$invalid}"
                    v-model="adres.taxNo"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <select
                    disabled
                    class="select-input form-control-lg selecting selectExample w-full"
                    label="Şehir"
                    v-model="city"
                  >
                    <option
                      disabled
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in cities"
                    >{{item.name}}</option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                  <select
                    disabled
                    class="select-input form-control-lg selecting selectExample w-full"
                    label="İlçe / Semt"
                    v-model="adres.townId"
                    :class="{'form-control-danger': this.$v.adres.townId.$invalid}"
                  >
                    <option
                      disabled
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in towns"
                    >{{item.name}}</option>
                  </select>
                </div>
              </div>

              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    disabled
                    type="text"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.postCode.$invalid}"
                    label-placeholder="Posta kodu"
                    v-model="adres.postCode"
                  />
                </div>
              </div>
            </vx-card>
          </div>
          <div class="md:w-1/2">
            <vs-table class="px-4" v-model="adres" :data="addresses">
              <template slot="header">
                <h3>Adresler</h3>
              </template>
              <template slot="thead">
                <vs-th>Kişi</vs-th>
                <vs-th>Adres Adı</vs-th>
                <vs-th>Telefon</vs-th>
                <vs-th>İşlemler</vs-th>
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
          <vs-popup :active.sync="detailPopup">
            <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  disabled
                  class="w-full"
                  :class="{'vs-input-danger':this.$v.name.$invalid}"
                  label-placeholder="Ad"
                  v-model="name"
                />
              </div>
              <div class="vx-col w-1/2">
                <vs-input
                  disabled
                  class="w-full"
                  :class="{'vs-input-danger':this.$v.surname.$invalid}"
                  label-placeholder="Soyad"
                  v-model="surname"
                />
              </div>
            </div>
            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  disabled
                  class="w-full"
                  :class="{'vs-input-danger':this.$v.adres.addressName.$invalid}"
                  label-placeholder="Adres Adı"
                  v-model="adres.addressName"
                />
              </div>
            </div>
            <div class="vx-row mb-2">
              <div class="vx-col w-full mb-2">
                <vs-input
                  disabled
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger':this.$v.adres.address.$invalid}"
                  label-placeholder="Adres"
                  v-model="adres.address"
                />
              </div>
            </div>
            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  disabled
                  type="tel"
                  class="w-full"
                  :class="{'vs-input-danger':this.$v.adres.mobile.$invalid}"
                  label-placeholder="Telefon"
                  v-model="adres.mobile"
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
                      style="height: 225px"
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
      selected: {},
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
      member: {
        id: 0,
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        sex: "",
        birthDay: null
      },
      passwordDTO: {
        currentPassword: "",
        newPassword: "",
        confirm: ""
      },
      addresses: [],
      cities: [],
      towns: [],
      city: 1,
      sexList: [{ text: "Male", value: "M" }, { text: "Female", value: "F" }]
    };
  },
  created: async function() {
    this.cities = await PlaceService.getCities();
    this.addresses = await AddressService.getUserAddress();
    this.adres.userId = this.$store.state.member.id;
    this.member.id = this.$store.state.member.id;
    this.member.firstName = this.$store.state.member.firstName;
    this.member.lastName = this.$store.state.member.lastName;
    this.member.login = this.$store.state.member.email;
    this.member.sex = this.$store.state.member.sex;
    this.member.birthDay = this.$store.state.member.birthDay;
    const response = await ConceptService.getAllConceptsAdmin(0);
    this.concepts = response.content;
    this.totalPages = response.totalPages;
    this.categories = await CategoryService.getAllCategories();
  },
  watch: {
      currentx: async function() {
      const response = await ConceptService.getAllConceptsAdmin(this.currentx - 1)
      this.concepts = response.content
    },
    adres() {
      if (this.adres.person !== undefined) {
        this.name = this.adres.person.split(" ")[0];
        this.surname = this.adres.person.split(" ")[1];
      }
    },
    city: async function() {
      this.towns = await PlaceService.getTownsByCity(this.city);
    },
    name() {
      this.adres.person = this.name + " " + this.surname;
    },
    surname() {
      this.adres.person = this.name + " " + this.surname;
    }
  },
  methods: {
      showDetail(concept) {
      this.selected = concept
      this.updatePopup = true
    },
    deleteAddress: async function(index, adres) {
      await AddressService.deleteUserAddress(adres.id);
      this.addresses.splice(index, 1);
      this.adres = {};
      this.name = "";
      this.surname = "";
    },
    addOrUpdateAddress: async function() {
      if (!this.$v.adres.$invalid) {
        if (this.adres.id == null) {
          var res = await AddressService.saveUserAddress(this.adres);
          this.addresses.push(res);
        } else {
          await AddressService.updateUserAddress(this.adres);
        }

        this.adres = { id: null };
        (this.name = ""), (this.surname = "");
      } else {
        this.$vs.notify({
          text: "İşlem Başarısız!",
          color: "danger"
        });
      }
    },
    updateMember: async function() {
      this.member.email = this.member.login;
      await UserService.setMember(this.member);
      await this.$store.dispatch("getCurrentUser");
      this.$router.push("/profile");
      this.$vs.notify({
        text: "Güncelleme Başarılı!"
      });
    },
    clearAddress() {
      (this.name = ""),
        (this.surname = ""),
        (this.adres = {
          id: null
        });
    },
    changePassword: async function() {
      if (!this.$v.passwordDTO.$invalid) {
        await UserService.updatePassword(this.passwordDTO);
        this.passwordDTO = {};
      } else {
        this.$vs.notify({
          text: "Yeni Şifreler Uyuşmuyor!",
          color: "danger"
        });
      }
    }
  },
  validations: {
    name: { required, alpha },
    surname: { required, alpha },
    passwordDTO: {
      newPassword: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15)
      },
      confirm: { required, sameAsPassword: sameAs("newPassword") }
    },
    adres: {
      taxNo: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric
      },
      mobile: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(12),
        numeric
      },
      address: {
        required,
        maxLength: maxLength(100),
        minLength: minLength(15)
      },
      addressName: { required },
      postCode: { required },
      townId: { required }
    },
    city: { required }
  },
  components: {
    Datepicker
  }
};
</script>
