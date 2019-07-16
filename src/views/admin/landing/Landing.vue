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
                  <vs-button class="w-full" color="success" @click="openNewPackagePopup(d3figure)" type="filled" icon="add" >Yeni ekle</vs-button>
            </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-md-3 my-3" v-for="(concept, index) in d3figureList" :key="index">
        <vx-card class="shadow">
          <div slot="no-body">
            <iframe
              class="responsive card-img-top"
              style="height: 170px"
              :src="'https://sketchfab.com/models/'+concept.title+'/embed'"
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
      <h5 class="mb-2">{{concept.description}}</h5>
      <p class="text-grey">Fiyat: {{concept.price}}</p>
      <p class="text-grey">Gösterim Sırası: {{concept.showIndex}}</p>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="shadow-md w-full px-1 mt-3"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              @click="openUpdatePackagePopup(concept)"
            >Düzenle</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="totalPages" v-model="currentx"></vs-pagination>
    </div>
              
<vs-popup :active.sync="newModelPopup" title="3D Model Ekle">
     <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Model Adı"
                  v-model="d3figure.description"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="d3figure.showIndex"
                />
              </div>
            </div>
           <div class="vx-row mb-3">
                  <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sketch Url"
                  v-model="d3figure.title"
                />
                </div>
            </div>

             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="d3figure.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">3D Model Görsel</h5>
                <hr class="w-3/4"/>
                <input type="file" ref="fileAddFigure" v-on:change="handleFileUpload('fileAddFigure')" 
                accept="image/*" class="input-file" />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="submitFile(d3figure, 'add')">Ekle</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup :active.sync="updateModelPopup" title="3D Model Güncelle">
         <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Model Adı"
                  v-model="d3figure.description"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="d3figure.showIndex"
                />
              </div>
            </div>
           <div class="vx-row mb-3">
                  <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sketch Url"
                  v-model="d3figure.title"
                />
                </div>
            </div>

             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="d3figure.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-4">
              <div class="vx-col w-full">
                <h5 class="text-muted">3D Model Görsel</h5>
                <hr class="w-3/4"/>
                <input type="file" ref="fileUpdateFigure" v-on:change="handleFileUpload('fileUpdateFigure')" 
                accept="image/*" class="input-file" />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                   <vs-button color="danger" class="float-left" @click="userDelete(d3figure.id)">Sil</vs-button>
                       <vs-button class="float-right" @click="submitFile(d3figure, 'update')">Güncelle</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>

          <vs-tab vs-label="Konseptler">
            <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="openNewPackagePopup(concept)" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
            <vs-table
      pagination
      max-items="5"
      search
      :data="conceptList">
      <template slot="header">
  <h3>Konseptler</h3>
</template>
      <template slot="thead">
  <vs-th sort-key="imagePath">Konsept Görseli</vs-th>
  <vs-th sort-key="title">Konsept Adı</vs-th>
  <vs-th sort-key="price">Fiyat</vs-th>
  <vs-th sort-key="showIndex">Sıralama</vs-th>
  <vs-th sort-key="active">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].imagePath">{{data[indextr].imagePath}}</vs-td>
    <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>

    <vs-td :data="data[indextr].price">{{data[indextr].price}}</vs-td>

  <vs-td :data="data[indextr].showIndex">{{data[indextr].showIndex}}</vs-td>

    <vs-td :data="data[indextr].active">{{data[indextr].active}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="openUpdatePackagePopup(data[indextr])"
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
<vs-popup :active.sync="newConceptPopup" title="Konsept Ekle">
     <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Konsept Adı"
                  v-model="concept.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyat"
                  v-model="concept.price"
                />
              </div>
            </div>
           <div class="vx-row mb-3">
                  <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="concept.showIndex"
                />
                </div>
            </div>

             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="concept.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Konsept Görsel</h5>
                <hr class="w-3/4"/>
                    <input type="file" ref="fileAddConcept" v-on:change="handleFileUpload('fileAddConcept')"
                accept="image/*" class="input-file" />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="submitFile(concept, 'add')">Ekle</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup :active.sync="updateConceptPopup" title="Konsept Güncelle">
         <div class="vx-row mb-2">
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Konsept Adı"
                  v-model="concept.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyat"
                  v-model="concept.price"
                />
              </div>
            </div>
           <div class="vx-row mb-3">
                  <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="concept.showIndex"
                />
                </div>
            </div>

             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="concept.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Konsept Görsel</h5>
                <hr class="w-3/4"/>
                    <input type="file" ref="fileUpdateConcept" v-on:change="handleFileUpload('fileUpdateConcept')" 
                accept="image/*" class="input-file" />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="submitFile(concept, 'update')">Güncelle</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>
          
          <vs-tab vs-label="Örnek Çalışmalar">
            <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="openNewPackagePopup(exampleProcess)" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
            <vs-table
      pagination
      max-items="5"
      search
      :data="exampleProcessList">
      <template slot="header">
  <h3>Örnek Çalışmalar</h3>
</template>
      <template slot="thead">
  <vs-th sort-key="email">Çalışma Görseli</vs-th>
  <vs-th sort-key="title">Başlık</vs-th>
  <vs-th sort-key="showIndex">Sıralama</vs-th>
  <vs-th sort-key="active">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].imagePath">{{data[indextr].imagePath}}</vs-td>

    <vs-td
      :data="data[indextr].title"
    >{{data[indextr].title}}</vs-td>

  <vs-td :data="data[indextr].showIndex">{{data[indextr].showIndex}}</vs-td>

    <vs-td :data="data[indextr].active">{{data[indextr].active}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="openUpdatePackagePopup(data[indextr])"
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
                  v-model="exampleProcess.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="exampleProcess.showIndex"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
               
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="exampleProcess.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
              <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                    <input type="file" ref="fileAddExample" v-on:change="handleFileUpload('fileAddExample')"
                accept="image/*" class="input-file" />
              </div>
            </div>

             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="submitFile(exampleProcess, 'add')">Oluştur</vs-button>
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
                  v-model="exampleProcess.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                 <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="exampleProcess.showIndex"
                />
              </div>
            </div>
           
             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="exampleProcess.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <h5 class="text-muted">Örnek Görsel</h5>
                <hr class="w-3/4"/>
                   <input type="file" ref="fileUpdateExample" v-on:change="handleFileUpload('fileUpdateExample')"
                accept="image/*" class="input-file" />
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="submitFile(exampleProcess, 'update')">Güncelle</vs-button>
              </div>
            </div>
    </vs-popup>
          </vs-tab>
          <vs-tab vs-label="Fiyatlandırma">
              <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
                <div class="w-full mr-0 pr-0">
                  <vs-button class="w-full" color="success" @click="openNewPackagePopup(paket)" type="filled" icon="add" >Yeni ekle</vs-button>
                 </div>
             </div>
             <vs-table
      pagination
      max-items="5"
      search
      :data="paketler">
      <template slot="header">
        <h3>
          Paketler
        </h3>
      </template>
      <template slot="thead">
  <vs-th sort-key="title">Paket Adı</vs-th>
  <vs-th sort-key="price">Fiyat</vs-th>
  <vs-th sort-key="description">Özellikler</vs-th>
  <vs-th sort-key="active">Durum</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>

    <vs-td
      :data="data[indextr].price"
    >{{data[indextr].price}}</vs-td>
<vs-td data="description">{{data[indextr].description}}</vs-td>
    <vs-td :data="data[indextr].active">{{data[indextr].active}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="pr-2">
          <vs-button
            class="px-3"
            color="primary"
            type="relief"
            @click="openUpdatePackagePopup(data[indextr])"
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
                  v-model="paket.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyatı"
                  v-model="paket.price"
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
                  v-model="paket.description"
                />
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="paket.showIndex"
                />
              </div>
            </div>
             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="paket.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              
              </select>
              </div>
            </div>
           
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="saveLanding(paket, 'add')">Oluştur</vs-button>
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
                  v-model="paket.title"
                />
              </div>
           
            
              <div class="vx-col w-1/2">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Fiyatı"
                  v-model="paket.price"
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
                  v-model="paket.description"
                />
              </div>
            </div>

            <div class="vx-row mb-2">
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  label-placeholder="Sıralama"
                  v-model="paket.showIndex"
                />
              </div>
            </div>

             <div class="vx-row mb-3">
              <div class="vx-col w-full">
                <span class="text-sm pl-1">Durumu</span>
                <select class="form-control-lg w-full select-input mb-2" v-model="paket.active">
                <option
                  :key="index"
                  v-for="(item,index) in activeList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              
              </div>
            </div>
             <div class="vx-row mb-2">
              <div class="vx-col w-full">
                       <vs-button class="float-right" @click="saveLanding(paket, 'update')" >Güncelle</vs-button>
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
import LandingService from "@/services/admin/landing.service.js";
import {
  required
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      d3figure: {
        title: "",
        showIndex: "",
        price: "",
        description: "",
        active: true,
        landingStatus: 'FIRST',
        sex: "",
        imagePath: "",
        divActive: true
      },
      d3figureList: [],
      paket: {
        title: "",
        showIndex: "",
        price: "",
        description: "",
        active: true,
        landingStatus: 'FOURTH',
        sex: "",
        imagePath: "",
        divActive: true
      },
      paketler: [],
      activeList: [{text: "Aktif", value: true}, {text: "Aktif Değil", value: false}],
      exampleProcess: {
        title: "",
        showIndex: "",
        price: "",
        description: "",
        active: true,
        landingStatus: 'THIRD',
        sex: "",
        imagePath: "",
        divActive: true
      },
      exampleProcessList: [],
      concept: {
        title: "",
        showIndex: "",
        price: "",
        description: "",
        active: true,
        landingStatus: 'SECOND',
        sex: "",
        imagePath: "",
        divActive: true
      },
      conceptList: [],
      totalPages: 0,
      currentx: 1,
      file: {},
      searchQuery:"",
      newPackagePopup: false,
      updatePackagePopup: false,
      newExamplePopup:false,
      updateExamplePopup:false,
      newConceptPopup:false,
      updateConceptPopup:false,
      newModelPopup:false,
      updateModelPopup:false
    };
  },

  created: async function() {
    const list = await LandingService.getAll()
    this.d3figureList = list.filter(f => f.landingStatus == 'FIRST')
    this.conceptList = list.filter(f => f.landingStatus == 'SECOND')
    this.exampleProcessList = list.filter(f => f.landingStatus == 'THIRD')
    this.paketler = list.filter(f => f.landingStatus == 'FOURTH')
  },
  watch: {
    currentx: async function() {
      const response = await ConceptService.getAllConceptsAdmin(this.currentx - 1)
      this.concepts = response.content
    },
    searchQuery: async function() {
      if (this.searchQuery.length == 0) {
        const list = await LandingService.getAll()
        this.d3figureList = list.filter(f => f.landingStatus == 'FIRST')
      }
    }
  },
  validations: {
    d3figure: {
      imagePath: {required}
    },
    concept: {
      imagePath: {required}
    },
    exampleProcess: {
      imagePath: {required}
    }
  },
  methods: {
    searchModel: async function() {
      this.d3figureList = await LandingService.searchModel(this.searchQuery)
    },
    handleFileUpload(refName) {
      switch(refName) {
        case 'fileAddFigure':
          this.file = this.$refs.fileAddFigure.files[0];
          break;
        case 'fileUpdateFigure':
          this.file = this.$refs.fileUpdateFigure.files[0];
          break;
        case 'fileAddConcept':
          this.file = this.$refs.fileAddConcept.files[0];
          break;
        case 'fileUpdateConcept':
          this.file = this.$refs.fileUpdateConcept.files[0];
          break;
        case 'fileAddExample':
          this.file = this.$refs.fileAddExample.files[0];
          break;
        case 'fileUpdateExample':
          this.file = this.$refs.fileUpdateExample.files[0];
          break;
      }
    },
    submitFile: async function(data, type) {
      if (Object.entries(this.file).length === 0 && this.file.constructor === Object) {
         this.$vs.notify({
            color: "danger",
            title: "Resim Yüklemelisiniz"
          });
          return
      }
      let formData = new FormData();
      formData.append('landing', this.file);
      formData.append('status', data.landingStatus)
      const path = await LandingService.uploadImage(formData)
      this.file = {}
      data.imagePath = path
      await this.saveLanding(data, type)
    },
    openUpdatePackagePopup(data) {
      switch (data.landingStatus) {
        case 'FIRST':
          this.updateModelPopup = true
          this.d3figure = data
          break;
        case 'SECOND':
          this.updateConceptPopup = true
          this.concept = data
          break;
        case 'THIRD':
          this.updateExamplePopup = true
          this.exampleProcess = data
          break;
        case 'FOURTH':
          this.updatePackagePopup = true
          this.paket = data
          break;
        default:
          break;
      }
    },
    openNewPackagePopup(data) {
      switch (data.landingStatus) {
        case 'FIRST':
          this.newModelPopup = true
          this.d3figure = {active: true, landingStatus: 'FIRST'}
          break;
        case 'SECOND':
          this.newConceptPopup = true
          this.concept = {active: true, landingStatus: 'SECOND'}
          break;
        case 'THIRD':
          this.newExamplePopup = true
          this.exampleProcess = {active: true, landingStatus: 'THIRD'}
          break;
        case 'FOURTH':
          this.newPackagePopup = true
          this.paket = {active: true, landingStatus: 'FOURTH'}
          break;
        default:
          break;
      }
    },
    saveLanding: async function(data, type) {
      const res = await LandingService.save(data)
      switch(data.landingStatus) {
        case 'FIRST':
          if (type == 'add') {
            this.d3figureList.push(res)
          }
          this.d3figure = {active: true, landingStatus: 'FIRST'}
          this.newModelPopup = false
          this.updateModelPopup = false
          break;
        case 'SECOND':
          if (type == 'add') {
            this.conceptList.push(res)
          }
          this.concept =  {active: true, landingStatus: 'SECOND'}
          this.newConceptPopup = false
          this.updateConceptPopup = false
          break;
        case 'THIRD':
          if (type == 'add') {
            this.exampleProcessList.push(res)
          }
          this.exampleProcess =  {active: true, landingStatus: 'THIRD'}
          this.newExamplePopup = false
          this.updateExamplePopup = false
          break;
        case 'FOURTH':
          if (type == 'add') {
            this.paketler.push(res)
          }
          this.paket = {active: true, landingStatus: 'FOURTH'}
          this.newPackagePopup = false
          this.updatePackagePopup = false
          break;
      }
    },
    userDelete(data, index) {
      var self = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        acceptText:"Onayla",
        cancelText:"Vazgeç",
        title: 'Paketi Sil',
        text: `${data.title} silmek istiyor musunuz?`,
        accept: async function() {
          await LandingService.delete(data.id);
          switch(data.landingStatus) {
            case 'FIRST':
              self.d3figureList.splice(index, 1);
              break;
          case 'SECOND':
              self.conceptList.splice(index, 1);
              break;
          case 'THIRD':
              self.exampleProcessList.splice(index, 1);
              break;
          case 'FOURTH':
              self.paketler.splice(index, 1);
              break;
          }
          self.$vs.notify({
            color: "success",
            title: "Silindi."
          });
        }
      });
    },
  }
};
</script>