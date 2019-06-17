<template>
  <div class="vx-col w-full mb-base">
    <vx-card class="shadow">
      <div slot="no-body">
        <iframe
          class="responsive card-img-top"
          style="height: 200px"
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
      <div class="flex justify-between flex-wrap">
        <vs-button
          v-if="!this.isAdded"
          class="shadow-md w-1/2 px-2 mt-4"
          type="gradient"
          color="#7367F0"
          gradient-color-secondary="#CE9FFC"
          @click="addBasket(concept)"
        >Sepete Ekle</vs-button>
        <vs-button
          v-else
          class="shadow-md px-2 mt-4"
          type="gradient"
          color="#7367F0"
          gradient-color-secondary="#CE9FFC"
          @click="addBasket(concept)"
        >Sepetten Çıkar</vs-button>
        <vs-button @click="openAlert('primary')" class="px-2 mt-4" type="border" color="#b9b9b9">Detayı gör</vs-button>
      </div>
    </vx-card>
  </div>
</template>

<script>
import FigureService from "@/services/figure.service";
import { TokenService } from "@/services/token.service";
export default {
  data() {
    return {
      choosen: "",
      isAdded: null
    };
  },
  props: {
    concept: {
      type: Object,
      required: true
    }
  },
  mounted: async function() {
    this.checkIsAdded();
  },
  methods: {
    addBasket: async function(concept) {
      concept.avatarKey = TokenService.getClickedPhoto();
      await FigureService.addAndDeleteFromFigure(concept);
      this.isAdded = !this.isAdded;
    },
    checkIsAdded: async function() {
      this.isAdded = await FigureService.isConceptAdded(
        TokenService.getClickedPhoto(),
        this.concept.id
      );
    }
  }
};
</script>