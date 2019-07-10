<template>
  <!-- FORM WITH LABEL PLACEHOLDER -->
  <div class="vx-col w-full mb-base">
    <div class="mt-6">
      <vs-tabs vs-alignment="fixed" class="shadow-none p-3 profil-tabs">
        <vs-tab vs-label="Profilim" class="pt-5" @click="isUpdated=true" v-on:click="first=true">
          <div class="md:w-1/2">
            <h3>Profil Bilgileri</h3>
            <vx-card class="shadow-md">
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input
                    class="w-full"
                    :readonly="isUpdated"
                    label-placeholder="Ad"
                    v-model="member.firstName"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    class="w-full"
                    :readonly="isUpdated"
                    label-placeholder="Soyad"
                    v-model="member.lastName"
                  />
                </div>
              </div>

              <div class="vx-row mb-3">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    :readonly="isUpdated"
                    type="email"
                    label-placeholder="E-posta"
                    v-model="member.login"
                  />
                </div>
              </div>
              <div class="vx-row mb-4">
                <div class="vx-col w-1/2">
                  <datepicker
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="member.birthDay"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    placeholder="Doğum Tarihi"
                  ></datepicker>
                </div>
                <div class="vx-col w-1/2">
                  <select
                    class="select-input form-control-lg w-full"
                    :disabled="isUpdated"
                    v-model="member.sex"
                  >
                    <option
                      :key="index"
                      v-for="(item,index) in sexList"
                      :value="item.value"
                    >{{item.text}}</option>
                  </select>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2 text-left">
                  <vs-button
                    :disabled="isUpdated"
                    color="success"
                    @click="updateMember"
                    type="relief"
                  >Güncelle</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                  <vs-button type="relief" @click="isUpdated = false">Düzenle</vs-button>
                </div>
              </div>
            </vx-card>
          </div>
        </vs-tab>

        <vs-tab vs-label="Adreslerim" class="row pt-5" v-on:click="first=true">
          <div class="md:w-1/2">
            <vs-table class="px-4" v-model="adres" :data="addresses">
              <template slot="header">
                <h3>Adresler</h3>
              </template>
              <template slot="thead">
                <vs-th>Kişi</vs-th>
                <vs-th>Adres Adı</vs-th>
                <vs-th>Telefon</vs-th>
                <vs-th>Sil</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td class="max-ch" :data="data[indextr].person">{{data[indextr].person}}</vs-td>

                  <vs-td :data="data[indextr].addressName">{{data[indextr].addressName}}</vs-td>

                  <vs-td :data="data[indextr].mobile">{{data[indextr].mobile}}</vs-td>

                  <vs-td>
                    <vs-button
                      color="danger"
                      type="filled"
                      icon="clear"
                      @click="deleteAddress(indextr, data[indextr])"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

          <div class="md:w-1/2">
            <vx-card class="shadow-md mx-4">
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.name.$invalid && !first }"
                    label-placeholder="Ad"
                    v-model="name"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.surname.$invalid && !first}"
                    label-placeholder="Soyad"
                    v-model="surname"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.addressName.$invalid && !first}"
                    label-placeholder="Adres Adı"
                    v-model="adres.addressName"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full mb-2">
                  <vs-input
                    type="text"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.address.$invalid && !first}"
                    label-placeholder="Adres"
                    v-model="adres.address"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    type="tel"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.mobile.$invalid && !first}"
                    label-placeholder="Telefon"
                    v-model="adres.mobile"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="TCKN/Vergi No"
                    :class="{'vs-input-danger':this.$v.adres.taxNo.$invalid && !first}"
                    v-model="adres.taxNo"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <select
                    class="select-input form-control-lg selecting selectExample w-full"
                    label="Şehir"
                    v-model="city"
                  >
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in cities"
                    >{{item.name}}</option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                  <select
                    class="select-input form-control-lg selecting selectExample w-full"
                    label="İlçe / Semt"
                    v-model="adres.townId"
                    :class="{'form-control-danger': this.$v.adres.townId.$invalid && !first}"
                  >
                    <option
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
                    type="text"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.postCode.$invalid && !first}"
                    label-placeholder="Posta kodu"
                    v-model="adres.postCode"
                  />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2 text-left">
                  <vs-button
                    color="success"
                    type="relief"
                    @click="addOrUpdateAddress"
                  >{{this.adres.id != null ? 'Güncelle' : 'Ekle'}}</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                  <vs-button type="relief" @click="clearAddress">Temizle</vs-button>
                </div>
              </div>
            </vx-card>
          </div>
        </vs-tab>
        <vs-tab vs-label="Şifre Değiştir" class="row pt-5 pl-4" v-on:click="first=true">
          <div class="md:w-1/2">
           <h3>Şifre Değiştir</h3>
            <vx-card class="shadow-md">
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    type="password"
                    label-placeholder="Eski Şifre"
                    v-model="passwordDTO.currentPassword"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    icon-after="true"
                    icon="visibility"
                    :type="'password'"
                    :class="{'vs-input-danger':this.$v.passwordDTO.newPassword.$invalid && !first}"
                    label-placeholder="Yeni Şifre"
                    v-model="passwordDTO.newPassword"
                  />
                </div>
              </div>
              <div class="vx-row mb-4">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    icon-after="true"
                    icon="visibility"
                    :type="'password'"
                    :class="{'vs-input-danger':this.$v.passwordDTO.confirm.$invalid && !first}"
                    label-placeholder="Tekrar Yeni Şifre"
                    v-model="passwordDTO.confirm"
                  />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2 text-left">
                  <vs-button color="success" @click="changePassword" type="relief">Güncelle</vs-button>
                </div>
              </div>
            </vx-card>
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
export default {
  data() {
    return {
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
      first: true,
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
  },
  watch: {
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
          this.first=true;
        } else {
          await AddressService.updateUserAddress(this.adres);
        }

        this.adres = { id: null };
        (this.name = ""), (this.surname = "");
      } else {
         this.first=false;
        this.$vs.notify({
          title:"HATA!",
          text: "Lütfen bilgileri kontrol ediniz.",
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
      this.first=true,
      (this.name = ""),
        (this.surname = ""),
        (this.adres = {
          id: null
        });
    },
    changePassword: async function() {
        this.first=false;
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
<style>
.profil-tabs .vs-input-danger input,.profil-tabs .vs-select-danger select{
  border:1px solid rgba(var(--vs-danger),1)!important;
}
</style>

