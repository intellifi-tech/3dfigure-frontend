<template>
  <div class="vx-col w-full mb-base ">
    <vx-card class="shadow">
      <div slot="no-body">
        <iframe v-if="sketchName"
          class="responsive card-img-top mb-2"
          style="height: 225px"
          :src="'https://sketchfab.com/models/'+sketchName+'/embed'"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
        
        <div class="flex overflow-x-auto pb-2" v-else-if="figure.isDoubled">
          <img  :src='"/assets/images/figures/"+getFigurePath(figure, 0)' class="order-image">
          <img  :src='"/assets/images/figures/"+getFigurePath(figure, 1)' class="order-image">
        </div>
        <img v-else :src='"/assets/images/figures/"+figure.imagePath' class="order-image mb-3">
        <img :src="'/assets/images/icon/'+statusImage" class="order-status-icon">
      </div>
      <h5 class="mb-2">{{order.orderCode}}</h5>
      <p class="text-grey">{{order.cargoCode}}</p>
      <div class="flex justify-between flex-wrap">
        <vs-button
          class="mt-4 w-full"
          color="#7367F0"
          @click="popupActive=true"
          gradient-color-secondary="#CE9FFC"
          type="gradient"
        >Detayı gör</vs-button>
      </div>
      <div v-if="isAdmin" class="flex">
        <div class="w-1/3 pr-1">
        <vs-button 
           class="mt-4 w-full px-0" 
           color="dark"
           type="relief"
           size="small"
           @click="downloadAvatar(figure.avatarKey, 'mesh')" target="_blank">Mesh</vs-button>
          </div>
          <div class="w-1/3 pr-1">
         <vs-button 
           class="mt-4 w-full px-0"
           color="success"
           type="relief"
           size="small"
           @click="downloadAvatar(figure.avatarKey, 'texture')" target="_blank">Texture</vs-button>
           </div>
           <div class="w-1/3">
         <vs-button 
           class="mt-4 w-full px-0"
           color="warning"
           type="relief"
           size="small"
           @click="downloadAvatar(figure.avatarKey, 'thumbnail')" target="_blank">Thumbnail</vs-button>
           </div>
      </div>
      <vs-popup class="popupDetail" :title="title[order.status]" :active.sync="popupActive">
        <div class="row">
          <div class="col-12 p-4" >
            <h3>Sipariş Bilgilendirmesi</h3>
            <hr class="w-2/3"/>
            <p class="px-3 pb-5">{{order.information}}</p>
             <vs-list>
                 <vs-list-item title="Sipariş No" :subtitle="order.orderCode"></vs-list-item>
                 <vs-list-item title="Kargo Takip No" :subtitle="!order.cargoCode ? 'Mevcut değil.': order.cargoCode "></vs-list-item>
                 <vs-list-item title="Teslim Adresi" class="border-none"></vs-list-item>
                 <div class="pl-2">
                 <div><b class="text-uppercase text-black">{{address.addressName}}</b></div>
                 <div class="w-2/3"><p>{{address.address}} </p></div>
                 <div class="w-2/3"><p>{{address.townName}} / {{address.cityName}}</p></div>
                 </div>
            </vs-list>
            <div class="col-12"><p class="text-right">Tutar :<span class="h2 text-dark"> ${{conceptPrice}}</span></p></div>
          </div>
        </div>
      </vs-popup>
    </vx-card>
  </div>
</template>
<script>
import OrderService from '@/services/order.service.js'
import AvatarSdkService from "@/services/avatarsdk.service";
import AddressService from "@/services/address.service"
export default {
  data() {
    return {
      popupActive: false,
      sketchName: "",
      statusImage: "",
      address: {},
      title: {
        'ANALYSIS': 'Analiz ediliyor',
        'ACCEPT': 'Kabul edildi',
        'REJECT': 'Reddedildi',
        'BUILD': 'Yapım Aşamasında',
        'CARGO': 'Kargoda',
        'DONE': 'Tamamlandı'
      }
    };
  },
  props: {
    conceptPrice: {
      type: String
    },
    figure: {
      type: Object,
      required: true
    },
    order: {
      type: Object,
      required: true
    },
    ids: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  created: async function() {
    this.sketchName = await OrderService.getSketchName(this.ids)
    const res = await AddressService.getAddress(this.order.deliveryId)
    if (res.status < 400) {
      this.address = res.data
    }
    switch(this.order.status) {
      case 'ANALYSIS':
        this.statusImage = 'wait.png'
        break;
      case 'ACCEPT':
        this.statusImage = 'accept.png'
        break;
      case 'BUILD':
        this.statusImage = 'build.png'
        break;
      case 'CARGO':
        this.statusImage = 'cargo.png'
        break;
      case 'REJECT':
        this.statusImage = 'reject.png'
        break;
      case 'DONE':
        this.statusImage = 'done.png'
        break;
    }
  },
  methods: {
    getFigurePath(figure, index) {
      return atob(figure.imagePath).split(',')[index]
    },
    downloadAvatar: function(avatarKey, type) {
      AvatarSdkService.getAvatarDownloadable(avatarKey, type).then(res => this.downloadFile(res.data, type === 'mesh' ? 'application/zip' : 'image/jpeg'))
    },
    downloadFile(data, type) {
      const blob = new Blob([data], {type: type});
      const url = window.URL.createObjectURL(blob);
      const pwa = window.open(url);
      if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
        alert('Lütfen Pop-up engelleyicinizi(AdBlocker vb.) devre dışı bırakın ve tekrar deneyin.');
      }
    }
  }
};
</script>
<style>
.vs-list--title{
  font-size:1.3rem !important
}
.vs-list--subtitle{
  font-size:1.1rem !important
}
@media only screen and (min-width:1024px){
  
.popupDetail .vs-popup {
    width: 900px;
  
}
.popupDetail .vs-popup .vs-popup--content {
  overflow-x:hidden;
  max-height: calc(100vh - 260px);
   }
}
</style>