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
      <h5 class="mb-2 max-ch">{{concept.conceptName}}</h5>
      <p class="text-grey max-ch">{{concept.description}}</p>
      <p class="text-grey">${{concept.price}}</p>
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
        <vs-button @click="conceptDetailPopup=true" class="px-2 mt-4" type="border" color="#b9b9b9">Detayı gör</vs-button>
      </div>
    </vx-card>
       <vs-popup class="conceptDetail" title="Konsept Detayları" :active.sync="conceptDetailPopup">
        <div class="row">
          <div class="col-12 p-4" >
            <h3>{{concept.conceptName}}</h3>
            <hr class="w-3/4"/>
            <p class="px-3 pb-4">{{concept.description}}</p>
            <div class="col-12"><p class="text-right">Fiyat :<span class="h2 text-dark"> ${{concept.price}}</span></p></div>
          </div>
        </div>
      </vs-popup>
  </div>
</template>

<script>
import FigureService from "@/services/figure.service";
export default {
  data() {
    return {
      choosen: "",
      isAdded: null,
      conceptDetailPopup:false,
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
      this.$store.commit('CLEAR_FIGURE_FROM_SELECTED')
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
<style>
.max-ch{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
}
.conceptDetail .vs-popup--content{
  overflow-x:hidden;
}
</style>
