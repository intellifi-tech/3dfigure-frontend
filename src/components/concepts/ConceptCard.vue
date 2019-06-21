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
      if (concept.doubleConcept) {
        concept.avatarKey = btoa(this.$store.state.selectedFigures.avatarKey[0] + ',' + this.$store.state.selectedFigures.avatarKey[1])
        await FigureService.saveUserFigure({
        figureName: concept.avatarKey,
        avatarKey: concept.avatarKey,
        imagePath: btoa(this.$store.state.selectedFigures.imagePath[0] + ',' + this.$store.state.selectedFigures.imagePath[1]),
        isProduct: false,
        isDoubled: true,
        userId: this.$store.state.member.id,
        isLiked: false
      })
      } else {
        concept.avatarKey = this.$store.state.selectedFigures.avatarKey[0]
      }
      await FigureService.addAndDeleteFromFigure(concept);
      this.isAdded = !this.isAdded;
      this.$router.push("/checkout");
    },
    checkIsAdded: async function() {
      if (this.concept.doubleConcept) {
        this.isAdded = await FigureService.isConceptAdded(
        btoa(this.$store.state.selectedFigures.avatarKey[0] + ',' + this.$store.state.selectedFigures.avatarKey[1]),
        this.concept.id
      );
      } else {
        this.isAdded = await FigureService.isConceptAdded(
        this.$store.state.selectedFigures.avatarKey[0],
        this.concept.id
      );
      }
    }
  }
};
</script>