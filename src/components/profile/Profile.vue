<template>
  <!-- FORM WITH LABEL PLACEHOLDER -->
  <div class="vx-col w-full mb-base">
    <div class="mt-6">
      <vs-tabs vs-alignment="fixed" class="shadow-none p-3">
        <vs-tab vs-label="Profilim" class="pt-5">
          <div class="md:w-1/2">
            <h3>Profil Bilgileri</h3>
            <vx-card class="shadow-md">
              <div class="vx-row mb-2">
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Ad" v-model="ad"/>
                </div>
                <div class="vx-col w-1/2">
                  <vs-input class="w-full" label-placeholder="Soyad" v-model="soyad"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" label-placeholder="Mobile" v-model="cepNo"/>
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" type="email" label-placeholder="Email" v-model="email"/>
                </div>
              </div>

              <div class="vx-row mb-6">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    type="password"
                    label-placeholder="Password"
                    v-model="psw"
                  />
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2 text-left">
                  <vs-button disabled color="success" type="relief">Güncelle</vs-button>
                </div>
                <div class="vx-col w-1/2 text-right">
                  <vs-button type="relief">Düzenle</vs-button>
                </div>
              </div>
            </vx-card>
          </div>
        </vs-tab>

        <vs-tab vs-label="Adreslerim" class="row pt-5">
          <div class="md:w-1/2">
            <vs-table class="px-4" @selected="handleSelected" v-model="selectAdres" :data="users">
              <template slot="header">
                <h3>Adresler</h3>
              </template>
              <template slot="thead">
                <vs-th>Email</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Website</vs-th>
                <vs-th>Nro</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

                  <vs-td :data="data[indextr].username">{{data[indextr].username}}</vs-td>

                  <vs-td :data="data[indextr].website">{{data[indextr].id}}</vs-td>

                  <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

          <div class="md:w-1/2">
            <vx-card class="shadow-md mx-4">
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input
                    class="w-full"
                    label-placeholder="Adres Adı"
                    v-model="adres.addressName"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full mt-4">
                  <vs-textarea
                    counter="100"
                    label="Adres"
                    :counter-danger.sync="counterDanger"
                    v-model="adres.address"
                  />
                </div>
              </div>
              <div class="vx-row mb-2">
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
                  <vs-input class="w-full" label-placeholder="Posta Kodu" v-model="adres.postCode"/>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full">
                <vs-button color="success" type="relief">Güncelle</vs-button>
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
import AddressService from "@/services/address.service";
export default {
  data() {
    return {
      counterDanger: false,
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
      selectAdres: [],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        }
      ]
    };
  },
  methods: {
    handleSelected(tr) {
      this.$vs.notify({
        title: `Selected ${tr.username}`,
        text: `Email: ${tr.email}`
      })
    }
  }
};
</script>
<style>
.vs-button-text {
  color: #fff !important;
}
</style>
