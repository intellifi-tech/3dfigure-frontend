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
      <p class="text-grey">{{concept.price}}$</p>
      <div class="flex justify-between flex-wrap">
        <vs-button class="mt-4" color="#7367F0" @click="popupActivo=true" gradient-color-secondary="#CE9FFC" type="gradient">Detail</vs-button>
      </div>
      <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
    </vs-popup>
    </vx-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      popupActivo: false
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