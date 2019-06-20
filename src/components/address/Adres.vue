<template>
  <div class="container-fluid border rounded-lg px-5 py-4">
    <div class="row">
      <vs-tabs alignment="fixed">
        <vs-tab title="Adreslerim" v-model="tabAdres" @click="newAdres=true">
          <div></div>
        </vs-tab>
        <vs-tab label="Yeni Adres Ekle" v-model="tabNewAdres" @click="newAdres=false">
          <div></div>
        </vs-tab>
      </vs-tabs>
      <div class="adreslerim" v-if="newAdres==!this.tabAdres">
        <ul class="adreslerimList" v-for="adres in this.address" :key="adres.id">
          <li>
            <vs-radio color="success" v-model="radios2" vs-value="evAdresi">
              <div class="pl-4">
                <i>{{adres.addressName}}</i>  
                <br>
                <b>{{adres.person}}</b> - {{adres.mobile}}
                <br>{{adres.adress}}
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
                  <select class="selecting selectExample w-full" label="İlçe / Semt" v-model="town">
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in towns"
                    >{{item.name}}</option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                  <select class="selecting selectExample w-full" label="Şehir" v-model="city">
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in cities"
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
                  <select class="selecting selectExample w-full" label="İlçe / Semt" v-model="townF">
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in townsF"
                    >{{item.name}} </option>
                  </select>
                </div>
                <div class="vx-col w-1/2">
                  <select class="selecting selectExample w-full" label="Şehir" v-model="cityF">
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item,index) in citiesF"
                    >{{item.name}} </option>
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
import {
  required,
  helpers
} from "vuelidate/lib/validators";
import PlaceService from "@/services/place.service";
const mobileRegex = helpers.regex('mobile', /^[2-9]\d{2}-\d{3}-\d{4}$/);
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
      townsF: []
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

  },
  methods: {
    changenewAdres() {}
  },
  validations: {
    name: { required },
    surname: { required },
    address: {required},
    postCode: {required},
    mobile: {mobileRegex},
    town: {required},
    city: {required}
  }
};
</script>
<style>
.selecting {
  font-size: 1rem;
  color: #7f7c96;
}
</style>


