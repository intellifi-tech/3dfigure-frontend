<template>
  <div class="vx-col w-full mb-base">
    <vx-card class="shadow">
      <div slot="no-body">

        <iframe v-if="sketchName"
          class="responsive card-img-top"
          style="height: 250px"
          :src="'https://sketchfab.com/models/'+sketchName+'/embed'"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
        <div v-else-if="figure.isDoubled">
          <img  :src='"assets/images/figures/"+getFigurePath(figure, 0)' class="order-status-icon">
          <img  :src='"assets/images/figures/"+getFigurePath(figure, 1)' class="order-status-icon">
        </div>
        <img v-else :src='"assets/images/figures/"+figure.imagePath' class="order-status-icon">
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
          <div class="col-lg-6 p-4 p-lg-0" >
            <h3>Sipariş Bilgilendirmesi</h3>
            <hr class="w-3/4"/>
            <p class="px-3 pb-5">{{order.information}}</p>
            <h3 class="position-absolute" style="right: 15px;bottom: 0;"><span>Bu konseptin tutarı: </span>${{conceptPrice}}</h3>
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
      sketchName: ""
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
  },
  methods: {
    getFigurePath(figure, index) {
      return atob(figure.imagePath).split(',')[index]
    }
  }
};
</script>
<style>
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