<template>
  <div class="vx-col w-full mb-base">
    <vx-card>
      <div slot="no-body">
        <img src="../../assets/images/landing/icon/wait.png" class="order-status-icon" />
        <iframe
          class="responsive card-img-top"
          style="height: 300px"
          :src="'https://sketchfab.com/models/'+concept.sketchId+'/embed'"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <h5 class="mb-2">{{concept.conceptName}}</h5>
      <p class="text-grey">{{concept.description}}</p>
      <p class="text-grey">{{concept.price}}</p>
    </vx-card>
  </div>
</template>


<script>
import CheckoutService from "@/services/checkout.service";
export default {
  data() {
    return {
    };
  },
  props: {
    concept: {
      type: Object,
      required: true
    }
  },
 
};
</script>