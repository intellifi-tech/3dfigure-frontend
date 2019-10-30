<template>
  <!-- FORM WITH LABEL PLACEHOLDER -->
  <div class="vx-col w-full mb-base">
    <div class="mt-6">
      <vs-tabs vs-alignment="fixed" class="shadow-none p-3 profil-tabs">
        <vs-tab :vs-label="$t('dashboard.profile.tabOne.title')" class="pt-5" @click="isUpdated=true" v-on:click="first=true">
          <div class="md:w-1/2">
            <h3>{{$t('dashboard.profile.tabOne.subTitle')}}</h3>
            <vx-card class="shadow-md">
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input
                    :class="{'vs-input-danger':this.$v.member.firstName.$invalid && !first}"
                    class="w-full"
                    :disabled="isUpdated"
                    :label-placeholder="$t('dashboard.profile.tabOne.card.firstName')"
                    v-model="member.firstName"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    :class="{'vs-input-danger':this.$v.member.lastName.$invalid && !first}"
                    class="w-full"
                    :disabled="isUpdated"
                    :label-placeholder="$t('dashboard.profile.tabOne.card.lastName')"
                    v-model="member.lastName"
                  />
                </div>
              </div>

              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    :class="{'vs-input-danger':this.$v.member.login.$invalid && !first}"
                    class="w-full"
                    :disabled="isUpdated"
                    type="email"
                    :label-placeholder="$t('dashboard.profile.tabOne.card.email')"
                    v-model="member.login"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    :class="{'vs-input-danger':this.$v.member.tcno.$invalid && !first}"
                    class="w-full"
                    :disabled="isUpdated"
                    type="text"
                    :label-placeholder="$t('dashboard.profile.tabOne.card.idNo')"
                    v-model="member.tcno"
                  />
                </div>
              </div>
              <div class="vx-row mb-4">
                <div class="vx-col w-1/2">
                <span class="text-xs font-light">{{$t('dashboard.profile.tabOne.card.birthDay')}}</span>
                  <datepicker
                    :class="{'vs-input-danger':this.$v.member.birthDay.$invalid && !first, 'bg-light-secondary' : this.isUpdated}" 
                    class="w-full"
                    :disabled="isUpdated"
                    v-model="member.birthDay"
                    :disabled-dates="datePicker.disableD"
                    :language="datePicker.dateLang[this.$i18n.locale.toLowerCase()]"
                    :format="datePicker.formatList[this.$i18n.locale.toLowerCase()]"
                    :placeholder="$t('dashboard.profile.tabOne.card.dayMonthYear')"
                  ></datepicker>
                </div>
                
                <div class="vx-col w-1/2">
                <span class="text-xs font-light">{{$t('dashboard.profile.tabOne.card.sex.label')}}</span>
                  <select
                    class="select-input form-control-lg w-full focus:shadow-md"
                    :disabled="isUpdated"
                    :class="{'bg-light-secondary' : this.isUpdated}"
                    v-model="member.sex"
                  >
                    <option
                      :key="index"
                      v-for="(item,index) in sexList"
                      :value="item.value"
                    >{{ $t(item.text)}}</option>
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
                  >{{$t('dashboard.profile.tabOne.card.btnUpdate')}}</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                  <vs-button type="relief" @click="isUpdated = false">{{$t('dashboard.profile.tabOne.card.btnEdit')}}</vs-button>
                </div>
              </div>
            </vx-card>
          </div>
        </vs-tab>

        <vs-tab :vs-label="$t('dashboard.profile.tabTwo.title')" class="row pt-5" v-on:click="first=true">
          <div class="md:w-1/2">
            <vs-table class="px-4" v-model="adres" :data="addresses">
              <template slot="header">
                <h3>{{$t('dashboard.profile.tabTwo.subTitle')}}</h3>
              </template>
              <template slot="thead">
                <vs-th>{{$t('dashboard.profile.tabTwo.table.th.one')}}</vs-th>
                <vs-th>{{$t('dashboard.profile.tabTwo.table.th.two')}}</vs-th>
                <vs-th>{{$t('dashboard.profile.tabTwo.table.th.three')}}</vs-th>
                <vs-th>{{$t('dashboard.profile.tabTwo.table.th.four')}}</vs-th>
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
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.firstName')"
                    v-model="name"
                  />
                </div>
                <div class="vx-col w-1/2">
                  <vs-input
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.surname.$invalid && !first}"
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.lastName')"
                    v-model="surname"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.addressName.$invalid && !first}"
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.addressName')"
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
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.address')"
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
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.phone')"
                    v-model="adres.mobile"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.taxNo')"
                    :class="{'vs-input-danger':this.$v.adres.taxNo.$invalid && !first}"
                    v-model="adres.taxNo"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <select
                    class="select-input form-control-lg selecting selectExample w-full focus:shadow-md"
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
                    class="select-input form-control-lg selecting selectExample w-full focus:shadow-md"
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
                    :label-placeholder="$t('dashboard.profile.tabTwo.card.postCode')"
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
                  >{{this.adres.id != null ? $t('dashboard.profile.tabTwo.card.btnUpdate') : $t('dashboard.profile.tabTwo.card.btnAdd')}}</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                  <vs-button type="relief" @click="clearAddress">{{$t('dashboard.profile.tabTwo.card.btnClear')}}</vs-button>
                </div>
              </div>
            </vx-card>
          </div>
        </vs-tab>
        <vs-tab :vs-label="$t('dashboard.profile.tabThree.title')" class="row pt-5 pl-4" v-on:click="first=true">
          <div class="md:w-1/2">
           <h3>{{$t('dashboard.profile.tabThree.subTitle')}}</h3>
            <vx-card class="shadow-md">
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    :type="showPsw ? 'text' : 'password'"
                    :label-placeholder="$t('dashboard.profile.tabThree.card.oldPsw')"
                    v-model="passwordDTO.currentPassword"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    icon-after="true"
                    :type="showPsw ? 'text' : 'password'"
                    :class="{'vs-input-danger':this.$v.passwordDTO.newPassword.$invalid && !first}"
                    :label-placeholder="$t('dashboard.profile.tabThree.card.newPsw')"
                    v-model="passwordDTO.newPassword"
                  />
                </div>
              </div>
              <div class="vx-row mb-4">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    icon-after="true"
                    :type="showPsw ? 'text' : 'password'"
                    :class="{'vs-input-danger':this.$v.passwordDTO.confirm.$invalid && !first}"
                    :label-placeholder="$t('dashboard.profile.tabThree.card.newPswConfirm')"
                    v-model="passwordDTO.confirm"
                  />
                  
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2 text-left">
                  <vs-button color="success" @click="changePassword" type="relief">{{$t('dashboard.profile.tabThree.card.btnUpdate')}}</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                <vs-button class="float-right" icon="visibility" color="primary" @click="showFunc" type="relief">{{showPsw ? $t('dashboard.profile.tabThree.card.btnHide') : $t('dashboard.profile.tabThree.card.btnShow')}}</vs-button>
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
  email,
  sameAs
} from "vuelidate/lib/validators";
import turkish from "@/plugins/turkish_regex.js"
import AddressService from "@/services/address.service";
import PlaceService from "@/services/place.service";
import Datepicker from "vuejs-datepicker";
import * as lang from "vuejs-datepicker/src/locale";
import UserService from "@/services/user.service";
export default {
  data() {
    return {
      showPsw:false,
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
      sexList: [{ text: "register.sex.man", value: "M" }, { text: "register.sex.woman", value: "F" }]
      /*TODO çeviri*/
    };
  },
  created: async function() {
    this.cities = await PlaceService.getCities();
    this.addresses = await AddressService.getUserAddress();
    this.adres.userId = this.$store.state.member.id;
    this.member = this.$store.state.member;
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
  showFunc(){
    if(this.showPsw)
      this.showPsw=false;
      else
      this.showPsw=true;
  },
    deleteAddress: async function(index, adres) {
      var res = await AddressService.deleteUserAddress(adres.id);
      if (res.status >= 400) {
        this.$vs.notify({
          time: 6000,
          title:`${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.profile.address.delete}`,
          color: "danger"
        });
        return;
      }
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
          time: 6000,
          title:`${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.default}`,
          color: "danger"
        });
      }
    },
    updateMember: async function() {
      if (!this.$v.member.$invalid) {
      this.member.email = this.member.login;
      await UserService.setMember(this.member);
      await this.$store.dispatch("getCurrentUser");
      this.$router.push("/profile");
      this.isUpdated = true;
      this.$vs.notify({
        time: 6000,
        color:"success",
        text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.profile.update}`
      });
      }else {
         this.first=false;
        this.$vs.notify({
          time: 6000,
          title:`${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text:`${this.$i18n.messages[this.$i18n.locale].notify.error.text.default}`,
          color: "danger"
        });
      }
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
      } else if (this.$v.passwordDTO.newPassword.$invalid)
        this.$vs.notify({
          time: 6000,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.profile.password.minLenght}`,
          color: "danger"
        });
      else {
        this.$vs.notify({
          time: 6000,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.profile.password.notConfirm}`,
          color: "danger"
        });
      }
    }
  },
  validations: {
    member:{
      firstName:{required,turkish},
      lastName:{required,turkish},
      login:{required,email},
      tcno:{required,numeric, minLength: minLength(11),    maxLength: maxLength(11)},
      birthDay:{required}
    },
    name: { required, turkish },
    surname: { required, turkish },
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

