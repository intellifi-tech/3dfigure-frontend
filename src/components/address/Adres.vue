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
        <ul class="adreslerimList">
          <li>
            <vs-radio color="success" v-model="radios2" vs-value="evAdresi">
              <div class="pl-4">
                <i>Ev Adresi</i>
                <br><b>Nebhen Aytaş</b> - (539) 505 06 47 
                <br>Sarıdemir Mahallesi, Ragıp Gümüşpala Cad. No:14,
                <br>EMİNÖNÜ / FATİH - İSTANBUL 34134
              </div>
            </vs-radio>
          </li>
          <li>
            <vs-radio color="success" v-model="radios2" vs-value="isAdresi">
              <div class="pl-4">
                <i>İş Adresi</i>
                <br><b>Nebhen Aytaş</b> - (539) 505 06 47 
                <br>Ortabayır Mahallesi, Talatpaşa Cad. No:67/5 Kat:3,
                <br>Gültepe / Kağıthane - İSTANBUL 34134
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
              <div class="vx-row mb-6"  v-if="this.checkBox1">
                <div class="vx-col w-full">
                  <vs-input
                    type="text"
                    class="w-full"
                    label-placeholder="Vergi Dairesi"
                    v-model="postCode"
                  />
                </div>
              </div>
              <div class="vx-row mb-6"  v-if="this.checkBox1">
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
                  <vs-select class="selectExample w-full" label="İlçe / Semt" v-model="select1">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item,index) in options1"
                    />
                  </vs-select>
                </div>
                <div class="vx-col w-1/2">
                  <vs-select class="selectExample w-full" label="Şehir" v-model="select2">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item,index) in options2"
                    />
                  </vs-select>
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
                  <vs-select class="selectExample w-full" label="İlçe / Semt" v-model="select1">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item,index) in options1"
                    />
                  </vs-select>
                </div>
                <div class="vx-col w-1/2">
                  <vs-select class="selectExample w-full" label="Şehir" v-model="select2">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item,index) in options2"
                    />
                  </vs-select>
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

      select1: 1,
      select2: 2,
      options1: [
        { text: "Square", value: 1 },
        { text: "Rectangle", value: 2 },
        { text: "Rombo", value: 3 },
        { text: "Romboid", value: 4 },
        { text: "Trapeze", value: 5 },
        { text: "Triangle", value: 6 },
        { text: "Polygon", value: 7 },
        { text: "Regular polygon", value: 8 },
        { text: "Circumference", value: 9 },
        { text: "Circle", value: 10 },
        { text: "Circular sector", value: 11 },
        { text: "Circular trapeze", value: 12 }
      ],
      options2: [
        { text: "Square", value: 1 },
        { text: "Rectangle", value: 2 },
        { text: "Rombo", value: 3 },
        { text: "Romboid", value: 4 },
        { text: "Trapeze", value: 5 },
        { text: "Triangle", value: 6 },
        { text: "Polygon", value: 7 },
        { text: "Regular polygon", value: 8 },
        { text: "Circumference", value: 9 },
        { text: "Circle", value: 10 },
        { text: "Circular sector", value: 11 },
        { text: "Circular trapeze", value: 12 }
      ]
    };
  },
  methods: {
    changenewAdres() {}
  }
};
</script>

