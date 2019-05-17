<template>
  <div class="container-fluid">
    <div class="row vx-card" v-if="basketList.length == 0"  >
      Ürün yok
    </div>
    <div class="row" v-else>
      <div class="row vx-card col-lg-8 py-4" v-for="basket in basketList" :key="basket.id">
        <div class="col-lg-2 px-0">
          <img src="assets/images/3dmodelornek1.png">
        </div>
        <div class="border-black border-right col-lg-7 pl-5">
          <h3 class="card-title pb-3">{{basket.conceptName}}</h3>
          <!--<h5 class="text-gray">
            Konsept:
            <span class="text-success">Mezuniyet</span>
          </h5>-->
          <p class="col-lg-10 pl-0 text-gray">{{basket.description}}</p>
        </div>
        <div class="col-lg-3 pt-3 text-center">
          <h4>{{basket.price}}</h4>
          <feather-icon icon="checkIcon" class="m-0 cursor-pointer"></feather-icon>
          <!--<h6 class="mt-4 text-success" icon-pack="feather" icon="icon-check">Kargo Ücretsiz</h6>-->
          <input
            type="button"
            @click="outBasket(basket)"
            value="KALDIR"
            class="btn btn-block btn-danger mt-4"
          >
        </div>
      </div>

      <div class="vx-card col-lg-4 py-8 ml-8">
        <input
          type="button"
          value="SİPARİŞ VER"
          class="vs-button vs-button-filled vs-button-success btn-block"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutService from "@/services/checkout.service";
export default {
  props: {
    basketList: {
      type: Array
    }
  },
  methods: {
    outBasket: async function(concept) {
      await CheckoutService.deleteFromBasket(concept.id);
      this.basketList = this.basketList.filter(function(element) {
        return element.id !== concept.id;
      });
      this.isAdded = !this.isAdded;
    }
  }
};
</script>

<style>
</style>
