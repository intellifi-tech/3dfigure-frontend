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
            @click="newAdres=true"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >Home</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            @click="newAdres=false"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >Profile</a>
        </li>
      </ul>

      <div class="adreslerim" v-if="newAdres">
        <ul class="adreslerimList" v-for="adres in this.addressList" :key="adres.id">
          <li>
            <vs-radio color="success" v-model="radios2" :vs-value="adres.addressName">
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
        <div class="newAdres" v-show="!newAdres">
          <vs-checkbox v-model="checkBox1">Teslimat ve Fatura adresimi aynı kullan.</vs-checkbox>
          <hr>
          <div class="row pl-4">
            <div class="pt-4">
              <h4 class="mb-3 font-bold">Teslimat Adresi</h4>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" label-placeholder="Adres Adı" v-model="addressName"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Ad" v-model="name"/>
                </div>
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Soyad" v-model="surname"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input type="tel" class="w-full" label-placeholder="Telefon" v-model="mobile"/>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input type="text" class="w-full" label-placeholder="Adres" v-model="address"/>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Posta kodu"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6" v-if="this.checkBox1">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Vergi Dairesi"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6" v-if="this.checkBox1">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="TCKN/Vergi No"
                    v-model="postCode"
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
                    v-model="town"
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

            <!-- teslimat adresi-->

            <div class="pt-4 pl-5" v-if="!this.checkBox1">
              <h4 class="mb-3 font-bold">Fatura Adresi</h4>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" label-placeholder="Adres Adı" v-model="addressName"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Ad" v-model="name"/>
                </div>
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Soyad" v-model="surname"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input type="tel" class="w-full" label-placeholder="Telefon" v-model="mobile"/>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input type="text" class="w-full" label-placeholder="Adres" v-model="address"/>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Posta kodu"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Vergi Dairesi"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="TCKN/Vergi No"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col w-1/2">
                  <select
                    class="form-control form-control-lg selecting selectExample w-full"
                    label="Şehir"
                    v-model="cityF"
                  >
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in citiesF"
                    >{{item.name}}</option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                  <select
                    class="form-control form-control-lg selecting selectExample w-full"
                    label="İlçe / Semt"
                    v-model="townF"
                  >
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in townsF"
                    >{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- fatura adresi-->
          </div>
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
import { required, helpers } from "vuelidate/lib/validators";
import PlaceService from "@/services/place.service";
import AddressService from '@/services/address.service'
const mobileRegex = helpers.regex("mobile", /^[2-9]\d{2}-\d{3}-\d{4}$/);
export default {
  data() {
    return {
      tabAdres: "",
      tabNewAdres: "",
      adres: true,
      newAdres: true,
      checkBox1: false,
      radios2: "",
      name: "",
      surname: "",
      mobile: "",
      address: "",
      addressName: "",
      postCode: "",

      town: null,
      city: 1,
      townF: null,
      cityF: 1,
      cities: [],
      citiesF: [],
      towns: [],
      townsF: [],
      addressList: []
    };
  },
  watch: {
    city: async function() {
      this.towns = await PlaceService.getTownsByCity(this.city);
    },
    cityF: async function() {
      this.townsF = await PlaceService.getTownsByCity(this.cityF);
    }
  },
  created: async function() {
    this.cities = await PlaceService.getCities();
    this.citiesF = await PlaceService.getCities();
    this.addressList = await AddressService.getUserAddress();
  },
  methods: {
    changenewAdres() {}
  },
  validations: {
    name: { required },
    surname: { required },
    address: { required },
    postCode: { required },
    mobile: { mobileRegex },
    town: { required },
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


