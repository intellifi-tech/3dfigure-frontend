<template>
  <div class="d-lg-flex container-fluid border rounded-lg px-lg-5 py-4">
    <div class="col-lg-8">
      <ul class="nav nav-pills mb-3" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link"
            id="address"
            data-toggle="pill"
            href="#address"
            @click="chooseAddress=true"
            :class="{'active': chooseAddress}"
            role="tab"
            aria-controls="address"
            aria-selected="true"
          >Adres Seç</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="new-address"
            data-toggle="pill"
            href="#new-address"
            @click="chooseAddress=false"
            :class="{'active': !chooseAddress}"
            role="tab"
            aria-controls="new-address"
            aria-selected="false"
          >Adres Ekle</a>
        </li>
      </ul>

      <div class="mt-3 col-md-12">
         <div class="adreslerim" v-show="chooseAddress">
         <hr>
          <div class="col-12 vx-card py-3 px-lg-5 mt-5 mb-4" v-if="this.$store.state.checkout.addressList === null || this.$store.state.checkout.addressList.length === 0">
             Kayıtlı adres bulunmuyor.
           <a 
            href="#new-address" 
            @click="chooseAddress=false"
            >Yeni Adres Ekle!</a>
      </div>
        <ul class="adreslerimList" v-for="adres in this.$store.state.checkout.addressList" :key="adres.id">
          <li>
            <vs-radio color="success" v-model="radios2" :vs-value="adres" @change="updateAddress">
              <div class="pl-4">
                <i>{{adres.addressName}}</i>
                <br>
                <b>{{adres.person}}</b> - {{adres.mobile}}
                <br>
                {{adres.address}} - <span class="font-medium">{{adres.townName}} / {{adres.cityName}}</span>
              </div>
            </vs-radio>
          </li>
        </ul>
      </div>
      <!--adreslerim list radio buttons finish-->

        <div class="newAdres" v-show="!chooseAddress">
          <hr>
          <div class="row pl-4">
            <div class="pt-4">
              <h4 class="mb-3 font-bold">Yeni Adres</h4>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" :class="{'vs-input-danger':this.$v.adres.addressName.$invalid}" label-placeholder="Adres Adı" v-model="adres.addressName"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" :class="{'vs-input-danger':this.$v.name.$invalid}" label-placeholder="Ad" v-model="name"/>
                </div>
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" :class="{'vs-input-danger':this.$v.surname.$invalid}" label-placeholder="Soyad" v-model="surname"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                
                <div class="vx-col w-full">
                  <span class="h6 text-sm font-light">Telefon</span>
                  <div class="flex pt-2">
                  <vue-country-code defaultCountry='TR' class="selectCountry border-grey shadow-none h-12" @onSelect="changeDialCode" >
                  </vue-country-code>
                  <vs-input type="tel" class="w-full pl-1" :class="{'vs-input-danger':this.$v.adres.mobile.$invalid}" placeholder="(555) 000 0000" v-model="adres.mobile"/>
                  </div>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input type="text" class="w-full" :class="{'vs-input-danger':this.$v.adres.address.$invalid}" label-placeholder="Adres" v-model="adres.address"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    :class="{'vs-input-danger':this.$v.adres.postCode.$invalid}"
                    label-placeholder="Posta kodu"
                    v-model="adres.postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-2" v-if="isBilling">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Vergi Dairesi"
                    v-model="adres.taxAdmin"
                  />
                </div>
              </div>
              <div class="vx-row mb-2" v-if="isBilling">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="TCKN/Vergi No"
                    :class="{'vs-input-danger':this.$v.adres.taxNo.$invalid}"
                    v-model="adres.taxNo"
                  />
                </div>
              </div>
              <div class="vx-row mb-6 mt-4">
                <div class="vx-col w-1/2">
                <span class="text-xs text-grey">Şehir</span>
                  <select
                    class="form-control-lg selecting selectExample w-full focus:shadow-md"
                    v-model="city"
                    :class="{'border-danger': this.$v.city.$invalid}"
                  >
                    <option
                      :key="index"
                      :value="item"
                      v-for="(item,index) in cities"
                    >{{item.name}}</option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                <span class="text-xs text-grey">İlçe/Semt</span>
                  <select
                    class="form-control-lg selecting selectExample w-full focus:shadow-md"
                    v-model="adres.townId"
                    :class="{'border-danger': this.$v.adres.townId.$invalid}"
                  >
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in towns"
                    >{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- fatura adresi-->
          </div>
          <vs-button @click="saveAddress" color="success" type="filled" class="ml-2" icon="done">Kaydet</vs-button>
          <!--row yeni adres-->
        </div>
        <!--yeni adres section -->
      </div>
      <!--adres page column-->
    </div>
    <div class="col-lg-4 pt-4 pt-md-0">
        <div class="vx-card shadow-md py-8 px-4">
          <ul class="list-group">
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Net Toplam</h6>
              </div>
              <span class="text-muted">₺{{this.$store.state.checkout.order.totalPriceNet}}</span>
            </li>
             <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between" v-if="this.$store.state.checkout.discount != null">
              <div>
                <h6 class="my-0">İndirim Tutarı</h6>
              </div>
              <span class="text-muted">₺{{this.$store.state.checkout.discount}}</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">KDV(%18)</h6>
              </div>
              <span class="text-muted">₺{{this.$store.state.checkout.order.kdv}}</span>
            </li>
            <li class="pt-3 pb-2 d-flex justify-content-between">
              <span>Genel Toplam (TL)</span>
              <strong>₺{{this.$store.state.checkout.order.totalPrice}}</strong>
            </li>
            <hr>
            <li class="pt-2 d-flex justify-content-between">
              <h6>Tüm siparişlerinizde kargo ücretsizdir.</h6>
            </li>
          </ul>
        </div>
        <!--card checkout -->
      </div>
    <!--row-->
     </div>
  <!--container-->
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators";
import "vue-country-code/dist/vue-country-code.css";
import turkish from "@/plugins/turkish_regex.js"
import phone from "@/plugins/phone_regex.js"
import PlaceService from "@/services/place.service";
import AddressService from '@/services/address.service'
import VueCountryCode from "vue-country-code";
export default {
  components: {
    VueCountryCode
  },
  data() {
    return {
      chooseAddress: true,
      radios2: "",
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
        userId: -1,
        townName:"",
        cityName:"",
      },
      dialCode: "",
      city: 1,
      cities: [],
      towns: [],
      addressList: []
    };
  },
  props: {
    isBilling: {
      default: false,
      required: true
    }
  },
  watch: {
    chooseAddress() {
      this.$store.commit('checkout/UPDATE_IS_NEW_ADDRESS', this.chooseAddress)
    },
    city: async function() {
      this.towns = await PlaceService.getTownsByCity(this.city.id);
    },
    name() {
      this.adres.person = this.name + ' ' + this.surname
    },
    surname() {
      this.adres.person = this.name + ' ' + this.surname
    }
  },
  created: async function() {
    this.cities = await PlaceService.getCities();
    this.$store.commit('checkout/INIT_ADDRESS_LIST', await AddressService.getUserAddress())
  },
  methods: {
    changeDialCode({dialCode}) {
      this.dialCode = dialCode
    },
    saveAddress: async function() {

      if (this.$v.$invalid) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Bilgileri kontrol ediniz.",
          color: "danger"
        });
      } else {

        this.adres.userId = this.$store.state.member.id;

        const temp = this.adres.mobile
        this.adres.mobile = this.dialCode + temp

        const res = await AddressService.saveUserAddress(this.adres)
        res.cityName = this.city.name;

        if (this.isBilling) {
          this.$store.commit('checkout/ADD_BILLING_ADDRESS', res)
        } else {
          this.$store.commit('checkout/ADD_CARGO_ADDRESS', res)
        }
        this.$vs.notify({
          time: 6000,
          title: "Başarılı!",
          text: "Adres başarılı bir şekilde eklendi.",
          color: "success"
        });
        this.chooseAddress = true
        this.adres = {}
        this.name = "",
        this.surname = ""
      }
    },
    updateAddress() {
      if (this.isBilling) {
        this.$store.commit('checkout/UPDATE_BILLING_ADDRESS', this.radios2)
      } else {
        this.$store.commit('checkout/UPDATE_CARGO_ADDRESS', this.radios2)
      }
    }
  },
  validations() {
    if (this.isBilling) {
      return {
      name: { required, turkish },
      surname: { required, turkish},
      adres: {
      taxNo: {required, minLength: minLength(11), maxLength: maxLength(11), numeric},
      mobile: {required,  phone},
      address: { required, maxLength: maxLength(100), minLength: minLength(15) },
      addressName: { required },
      postCode: { required, numeric, maxLength: maxLength(5), minLength: minLength(5)},
      townId: { required }, 
    },
    city: { required }
      }
    } else {
            return {
      name: { required, turkish },
      surname: { required, turkish},
      adres: {
      mobile: {required,  phone},
      address: { required, maxLength: maxLength(100), minLength: minLength(15) },
      addressName: { required },
      postCode: { required, numeric, maxLength: maxLength(5), minLength: minLength(5)},
      townId: { required }, 
    },
    city: { required }
      }
    }
  }
};
</script>
<style>
.selecting {
  font-size: 1rem;
  color: #7f7c96;
}
</style>



