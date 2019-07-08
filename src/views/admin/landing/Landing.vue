<template lang="html">
<div class="vx-col w-full mb-base">
    <div class="mt-5">
        <vs-tabs vs-alignment="fixed"  class="shadow-none p-3">
           <vs-tab vs-label="3D Modeller">
              
     <div class="row">
       <div class="col-md-7">
        <div class="flex items-center pt-3">
            <h3>3D Modeller</h3>
        </div>
      </div>

      <div class="col-md-5 flex items-center float-right pt-3 ml-0 pr-0">
        <div class="col-md-6 pr-0">
            <vs-input
            type="text"
            v-model="searchQuery"
            class="w-full input-rounded-full"
            icon="icon-search"
            icon-pack="feather"
            size="small"
            icon-no-border
          />
        </div>
        <div class="col-md-6 pr-2">
                  <vs-button class="w-full" color="success" @click="newPopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
            </div>
      </div>
    </div>
    <div class="row pt-3">
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
      <p class="text-grey">{{concept.isConceptsVisible ? 'Konsept Aktif' : 'Konsept Aktif Değil'}}</p>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="shadow-md w-full px-1 mt-3"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              @click="showDetail(concept)"
            >Düzenle</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="totalPages" v-model="currentx"></vs-pagination>
    </div>
              
          </vs-tab>

          <vs-tab vs-label="Konseptler">
            <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="newExamplePopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
            <vs-table
      pagination
      max-items="5"
      search
      :sst="true"
      @change-page="handleChangePage"
      @search="sscb"
      :data="users">
      <template slot="header">
  <h3>Konseptler</h3>
</template>
      <template slot="thead">
  <vs-th sort-key="email">Çalışma Görseli</vs-th>
  <vs-th sort-key="firstName">Başlık</vs-th>
  <vs-th sort-key="siralama">Sıralama</vs-th>
  <vs-th sort-key="activated">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td
      :data="data[indextr].firstName"
    >{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>

  <vs-td data="siralama">1</vs-td>

    <vs-td :data="data[indextr].activated">{{data[indextr].activated}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="updateExamplePopup=true"
          >Güncelle</vs-button>
        </div>
        <div>
          <vs-button
            class="px-3"
            color="danger"
            type="relief"
            @click="userDelete(data[indextr], indextr)"
          >Sil</vs-button>
        </div>
      </div>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
<vs-popup :active.sync="newExamplePopup" title="Örnek Çalışma Oluştur">
     <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Başlık"
                  v-model="ornekBaslik"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="ornekSira"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="ornekDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                    <input 
                    type="file"
                    />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right">Oluştur</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup :active.sync="updateExamplePopup" title="Örnek Çalışma Güncelle">
      <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Başlık"
                  v-model="ornekBaslik"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                 <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="ornekSira"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="ornekDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                    <input 
                    type="file"
                    />
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right">Oluştur</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>
          
          <vs-tab vs-label="Örnek Çalışmalar">
            <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="newExamplePopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
            <vs-table
      pagination
      max-items="5"
      search
      :sst="true"
      @change-page="handleChangePage"
      @search="sscb"
      :data="users">
      <template slot="header">
  <h3>Örnek Çalışmalar</h3>
</template>
      <template slot="thead">
  <vs-th sort-key="email">Çalışma Görseli</vs-th>
  <vs-th sort-key="firstName">Başlık</vs-th>
  <vs-th sort-key="siralama">Sıralama</vs-th>
  <vs-th sort-key="activated">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td
      :data="data[indextr].firstName"
    >{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>

  <vs-td data="siralama">1</vs-td>

    <vs-td :data="data[indextr].activated">{{data[indextr].activated}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="updateExamplePopup=true"
          >Güncelle</vs-button>
        </div>
        <div>
          <vs-button
            class="px-3"
            color="danger"
            type="relief"
            @click="userDelete(data[indextr], indextr)"
          >Sil</vs-button>
        </div>
      </div>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
<vs-popup :active.sync="newExamplePopup" title="Örnek Çalışma Oluştur">
     <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Başlık"
                  v-model="ornekBaslik"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="ornekSira"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="ornekDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                    <input 
                    type="file"
                    />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right">Oluştur</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup :active.sync="updateExamplePopup" title="Örnek Çalışma Güncelle">
      <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Başlık"
                  v-model="ornekBaslik"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                 <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="ornekSira"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="ornekDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                    <input 
                    type="file"
                    />
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right">Oluştur</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>
          <vs-tab vs-label="Fiyatlandırma">
              <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="newPackagePopup=true" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
             <vs-table
      pagination
      max-items="5"
      search
      :sst="true"
      @change-page="handleChangePage"
      @search="sscb"
      :data="users">
      <template slot="header">
        <h3>
          Paketler
        </h3>
      </template>
      <template slot="thead">
  <vs-th sort-key="email">Paket Adı</vs-th>
  <vs-th sort-key="firstName">Fiyat</vs-th>
  <vs-th sort-key="surname">Özellikler</vs-th>
  <vs-th sort-key="activated">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td
      :data="data[indextr].firstName"
    >{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>
<vs-td data="surname">Özellk1,Özellk2</vs-td>
    <vs-td :data="data[indextr].activated">{{data[indextr].activated}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="updatePackagePopup=true"
          >Güncelle</vs-button>
        </div>
        <div>
          <vs-button
            class="px-3"
            color="danger"
            type="relief"
            @click="userDelete(data[indextr], indextr)"
          >Sil</vs-button>
        </div>
      </div>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
     <vs-popup :active.sync="newPackagePopup" title="Paket Oluştur">
     <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Paket Adı"
                  v-model="paketAdi"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyatı"
                  v-model="paketFiyat"
                />
              </div>
            </div>
            <div class="vx-row mb-1">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Özellikler"
                  description-text="Özelliklerin arasına virgül eklenerek yazılmalıdır."
                  v-model="paketOzellikler"
                />
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="paketSira"
                />
              </div>
            </div>
             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="paketDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              </div>
            </div>
           
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right">Oluştur</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup :active.sync="updatePackagePopup" title="Paket Güncelle">
      <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Paket Adı"
                  v-model="paketAdi"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyatı"
                  v-model="paketFiyat"
                />
              </div>
            </div>
            <div class="vx-row mb-1">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Özellikler"
                  description-text="Özelliklerin arasına virgül eklenerek yazılmalıdır."
                  v-model="paketOzellikler"
                />
              </div>
            </div>

            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="paketSira"
                />
              </div>
            </div>

             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="paketDurum">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" >Güncelle</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>
        </vs-tabs> 
    </div>
  </div>
</template>

<script>
import ConceptService from "@/services/concept.service";
import CategoryService from "@/services/category.service";
import UserService from "@/services/user.service.js";
export default {
  data() {
    return {
      ornekBaslik:"",
      ornekSira:1,
      ornekDurum:true,
      paketAdi:"",
      paketSira:"",
      paketFiyat:"",
      paketOzellikler:[],
      paketDurum:true,
      concepts: [],
      newConcept: {},
      detailConcept: {},
      totalPages: 0,
      currentx: 1,
      searchQuery:"",
      selected: {},
      categories: [],
      users: [],
      user: {},
      newPackagePopup: false,
      updatePackagePopup: false,
      newExamplePopup:false,
      updateExamplePopup:false,
      json_fields: {
        "Sketch ID": "sketchId",
        "Konsept Adı": "conceptName",
        "Sketch Tag": "sketchTag",
        "Görünür mü?": "isConceptsVisible",
        Açıklama: "description",
        Index: "showIndex",
        Fiyat: "price",
        Dil: "lang",
        "Çift Resimler İçin mi": "doubleConcept"
      }
    };
  },

  created: async function() {
    this.users = await UserService.getAllUsers(); 
    const response = await ConceptService.getAllConceptsAdmin(0)
    this.concepts = response.content
    this.totalPages = response.totalPages
    this.categories = await CategoryService.getAllCategories()
  },
watch: {
    currentx: async function() {
      const response = await ConceptService.getAllConceptsAdmin(this.currentx - 1)
      this.concepts = response.content
    }
  },
  methods: {
    userDelete(user, index) {
      var self = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        acceptText:"Onayla",
        cancelText:"Vazgeç",
        title: 'Paketi Sil',
        text: `${user.login} silmek istiyor musunuz?`,
        accept: async function() {
          await UserService.userDelete(user.login);
          self.users.splice(index, 1);
          self.$vs.notify({
            color: "success",
            title: "Kullanıcı silindi."
          });
        }
      });
    },
    handleChangePage(page) {
      debugger;
    },
    sscb(searching) {
      debugger;
    }
  }
};
</script>