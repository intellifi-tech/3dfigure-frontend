<template>
  <div class="vx-col w-full mb-base">
    <vx-card>
      <div slot="no-body">
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
      <div class="flex justify-between flex-wrap">
        <vs-button
          v-if="isAdded(concept)"
          class="mt-4 shadow-lg"
          type="gradient"
          color="#7367F0"
          gradient-color-secondary="#CE9FFC"
          @click="addBasket(concept)"
        >Sepete Ekle</vs-button>
        <vs-button @click="openAlert('primary')" class="mt-4" type="border" color="#b9b9b9">Detail</vs-button>
      </div>
    </vx-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choosen: ""
    };
  },
  props: {
    concept: {
      type: Object,
      required: true
    }
  },
  methods: {
    addBasket(concept) {
      this.$parent.$parent.$parent.$parent.$parent.order.choosenConcept.push(concept);
    },
    isAdded(concept) {
      var isAdded = this.$parent.$parent.$parent.$parent.$parent.order.choosenConcept.filter(function(con) {
        if (con.id === concept.id) return con;
      });
      return isAdded.length == 0;
    },
    openAlert() {
      this.$vs.dialog({
        color: this.colorAlert,
        title: `Dialog`,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        accept: this.acceptAlert
      });
    }
  }
};
</script>