<template>
  <div class="container-fluid">
    <div class="col-12 vx-card py-3 px-5 mt-5" v-if="basketList.length == 0">
      Sepette ürün bulunmuyor.
      <a href="/main">Yeni Model Oluştur!</a>
    </div>

    <div class="row" v-else>
      <div class="col-lg-8">
        <div class="row vx-card shadow-md px-4 py-4 mb-5" v-for="basket in basketList" :key="basket.id">

          <div class="col-lg-2 px-0">
            <img src="assets/images/3dmodelornek1.png">
          </div>
          <div class="border-black border-right col-lg-7 pl-5">

            <h3 class="card-title pb-3">{{basket.conceptName}}</h3>
            <!--<h5 class="text-gray">
            Konsept:
            <span class="text-success">Mezuniyet</span>
            </h5>-->
            <span class="col-lg-12 pl-0">{{basket.description}}</span>
          </div>
          <div class="col-lg-3 pt-3 text-center">
            <h4>${{basket.price}}</h4>
            <feather-icon icon="checkIcon" class="m-0 cursor-pointer"></feather-icon>
            <!--<h6 class="mt-4 text-success" icon-pack="feather" icon="icon-check">Kargo Ücretsiz</h6>-->
             <input
              type="button"
              @click="outBasket(basket)"
              value="KALDIR"
              class="btn btn-block btn-danger mt-4"
            />
          </div>
        </div>
        <!--row card products-->
      </div>

      <!--col products-->

      <div class="col-lg-4">
        <div class="vx-card shadow-md py-8 px-4">
          <ul class="list-group mb-3">
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="mb-2 py-3 d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <input
            type="button"
            value="SİPARİŞ VER"
            class="vs-button vs-button-filled vs-button-success btn-block"
          >
        </div>

        <!--card checkout -->
      </div>
      <!--col totals -->
    </div>
    <!--row checkout -->
  </div>
  <!--container checkout -->

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
