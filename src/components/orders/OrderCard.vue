<template>
  <div class="vx-col w-full mb-base">
    <vx-card class="shadow">
      <div slot="no-body">
        <img src="../../assets/images/landing/icon/wait.png" class="order-status-icon">
        <iframe
          class="responsive card-img-top"
          style="height: 250px"
          :src="'https://sketchfab.com/models/'+concept.sketchId+'/embed'"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <h5 class="mb-2">{{concept.conceptName}}</h5>
      <p class="text-grey">{{concept.description}}</p>
      <p class="text-grey">${{concept.price}}</p>
      <div class="flex justify-between flex-wrap">
        <vs-button
          class="mt-4"
          color="#7367F0"
          @click="popupActive=true"
          gradient-color-secondary="#CE9FFC"
          type="gradient"
        >Detayı gör</vs-button>
      </div>
      <vs-popup class="popupDetail" title="Onay bekliyor" :active.sync="popupActive">
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/portre/man/man-true.jpg"/>
          </div>
          <div class="col-lg-6 p-4 p-lg-0" >
            <h3>Konsept Adı</h3>
            <hr class="w-3/4"/>
            <p class="px-3 pb-5">Lorem ipsum aliqua dolor orem incididunt dolor sit amet, consectetur dolor adipisicing elit,dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3 class="position-absolute" style="right: 15px;bottom: 0;"><span>Fiyatı: </span>${{concept.price}}</h3>
          </div>
        </div>
      </vs-popup>
    </vx-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      popupActive: false
    };
  },
  props: {
    concept: {
      type: Object,
      required: true
    },
    price: {
      type: Number
    },
    orderName: {
      type: String
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