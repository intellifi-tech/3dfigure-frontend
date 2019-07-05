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
      <p class="text-grey">${{order.cargoCode}}</p>
      <div class="flex justify-between flex-wrap">
        <vs-button
          class="mt-4"
          color="#7367F0"
          @click="popupActive=true"
          gradient-color-secondary="#CE9FFC"
          type="gradient"
        >Detayı gör</vs-button>
      </div>
      <vs-popup class="popupDetail" :title="order.status" :active.sync="popupActive">
        <div class="row">
          <div class="col-12 p-4" >
            <h3>Sipariş Bilgilendirmesi</h3>
            <hr class="w-3/4"/>
            <p class="px-3 pb-5">{{order.information}}Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.</p>
             <vs-list>
                 <vs-list-item title="Kargo Takip No" subtitle="FIG2346"></vs-list-item>
                 <vs-list-item title="Teslim Adresi" subtitle="Ev Adresim"></vs-list-item>
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
export default {
  data() {
    return {
      popupActive: false,
      sketchName: "",
      statusImage: ""
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
    }
  },
  created: async function() {
    this.sketchName = await OrderService.getSketchName(this.ids)
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
  max-height: calc(100vh - 400px);
   }
}
</style>