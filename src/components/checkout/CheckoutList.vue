<template>
  <div class="container-fluid">
    <div class="col-12 vx-card py-3 px-5 mt-5" v-if="basketList.length == 0">
      Sepette ürün bulunmuyor.
      <a href="/main">Yeni Model Oluştur!</a>
    </div>

    <div class="row" v-else>
      <div class="col-lg-8">
        <div
          class="row vx-card shadow-md px-4 py-4 mb-5"
          v-for="basket in basketList"
          :key="basket.id"
        >
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
            <!--<vs-input-number class="col-lg-3" min="1" v-model="basket.quantity"/>-->
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
            >
          </div>
        </div>
        <!--row card products-->
      </div>

      <!--col products-->

      <div class="col-lg-4">
        <div class="vx-card shadow-md py-8 px-4">
          <ul class="list-group">
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Ürün Fiyatı</h6>
              </div>
              <span class="text-muted">${{totalPriceNet.toFixed(2)}}</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">KDV</h6>
              </div>
              <span class="text-muted">${{kdv.toFixed(2)}}</span>
            </li>
            <li class="pt-3 d-flex justify-content-between">
              <strong>Toplam (USD)</strong>
              <strong>${{totalPrice.toFixed(2)}}</strong>
            </li>
          </ul>
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
  data() {
    return {};
  },
  props: {
    basketList: {
      type: Array
    },
    totalPriceNet: {
      type: Number
    },
    kdv: {
      type: Number
    },
    totalPrice: {
      type: Number
    }
  },
  methods: {
    updateBasket: function(basket) {
      console.log(basket);
    },
    outBasket: async function(concept) {
      await CheckoutService.deleteFromBasket(concept.id);
      this.basketList = this.basketList.filter(function(element) {
        return element.id !== concept.id;
      });
      this.totalPriceNet = 0;
      this.totalPrice = 0;
      this.kdv = 0;
      this.basketList.forEach(element => {
        this.totalPriceNet += element.price * element.quantity;
        this.totalPrice += element.price * element.quantity * 1.18;
        this.kdv += element.price * element.quantity * 0.18;
      });
    }
  }
};
</script>

<style>
</style>
