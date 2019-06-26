<template>
  <div class="container-fluid border rounded-lg px-5 py-4">
    <div class="">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            @click="chooseAddress=true"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >Adres Seç</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            @click="chooseAddress=false"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >Adres Ekle</a>
        </li>
      </ul>

      <div class="adreslerim" v-show="chooseAddress">
        <ul class="adreslerimList" v-for="adres in this.$store.state.checkout.addressList" :key="adres.id">
          <li>
            <vs-radio color="success" v-model="radios2" :vs-value="adres" @change="updateAddress">
              <div class="pl-4">
                <i>{{adres.addressName}}</i>
                <br>
                <b>{{adres.person}}</b>
                - {{adres.mobile}}
                <br>
                {{adres.adress}}
              </div>
            </vs-radio>
          </li>
        </ul>
      </div>
      <!--radio buttons-->

      <div class="mt-3 col-md-12">
        <div class="newAdres" v-show="!chooseAddress">
          <hr>
          <div class="row pl-4">
            
            <!-- teslimat adresi-->

            <div class="pt-4">
              <h4 class="mb-3 font-bold">Fatura Adresi</h4>
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
                  <vs-input type="tel" class="w-full" :class="{'vs-input-danger':this.$v.adres.mobile.$invalid}" label-placeholder="Telefon" v-model="adres.mobile"/>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input type="text" class="w-full" :class="{'vs-input-danger':this.$v.adres.address.$invalid}" label-placeholder="Adres" v-model="adres.address"/>
                </div>
              </div>
              <div class="vx-row mb-6">
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
              <div class="vx-row mb-6" v-if="isBilling">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Vergi Dairesi"
                    v-model="adres.taxAdmin"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
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
              <div class="vx-row mb-6">
                <div class="vx-col w-1/2">
                  <select
                    class="form-control form-control-lg selecting selectExample w-full"
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
                    class="form-control form-control-lg selecting selectExample w-full"
                    label="İlçe / Semt"
                    v-model="adres.townId"
                    :class="{'form-control-danger': this.$v.adres.townId.$invalid}"
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
          <vs-button @click="saveAddress">Kaydet</vs-button>
          <!--row yeni adres-->
        </div>
        <!--yeni adres section -->
      </div>
      <!--adres page column-->
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
  numeric,
  alpha
} from "vuelidate/lib/validators";
import PlaceService from "@/services/place.service";
import AddressService from '@/services/address.service'
export default {
  data() {
    return {
      chooseAddress: true,
      radios2: "",
      name: "",
      surname: "",
      adres: {
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
      this.towns = await PlaceService.getTownsByCity(this.city);
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
    saveAddress: async function() {
      if (this.$v.$invalid) {
        this.$vs.notify({
          time: 4000,
          title: "Error",
          text: "Eksik Bilgi Girdiniz",
          color: "danger"
        });
      } else {
        this.adres.userId = this.$store.state.member.id;
        const res = await AddressService.saveUserAddress(this.adres)
        if (this.isBilling) {
          this.$store.commit('checkout/ADD_BILLING_ADDRESS', res)
        } else {
          this.$store.commit('checkout/ADD_CARGO_ADDRESS', res)
        }
        this.$vs.notify({
          time: 4000,
          title: "Başarılı",
          text: "Adres başarılı bir şekilde eklendi",
          color: "info"
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
  validations: {
    name: { required, alpha },
    surname: { required, alpha},
    adres: {
      taxNo: {required, minLength: minLength(11), maxLength: maxLength(11), numeric},
      mobile: {required, minLength: minLength(10), maxLength: maxLength(12), numeric},
      address: { required, maxLength: maxLength(100), minLength: minLength(15) },
      addressName: { required },
      postCode: { required },
      townId: { required }, 
    },
    city: { required }
  }
};
</script>
<style>
.selecting {
  font-size: 1rem;
  color: #7f7c96;
}
</style>



