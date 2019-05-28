<template>
  <div class="container-fluid">
    <div class="col-12 vx-card py-3 px-5 mt-5" v-if="this.$store.state.checkout.basketList === null || this.$store.state.checkout.basketList.length === 0">
      Sepette ürün bulunmuyor.
      <a href="/main">Yeni Model Oluştur!</a>
    </div>

    <div class="row" v-else>
      <div class="col-lg-8">
        <div v-for="basket in this.$store.state.checkout.basketList" :key="basket.id">
          <div
            class="row vx-card shadow-md px-4 py-4 mb-5"
            v-for="concept in basket.concepts"
            :key="concept.id"
          >
            <div class="col-lg-2 px-0">
              <img :src='"assets/images/figures/"+basket.imagePath'>
            </div>
            <div class="border-black border-right col-lg-7 pl-5">
              <h3 class="card-title pb-3">{{concept.conceptName}}</h3>
              <!--<h5 class="text-gray">
            Konsept:
            <span class="text-success">Mezuniyet</span>
              </h5>-->
              <span class="col-lg-12 pl-0">{{concept.description}}</span>
            </div>
            <div class="col-lg-3 pt-3 text-center">
              <h4>${{concept.price}}</h4>
              <feather-icon icon="checkIcon" class="m-0 cursor-pointer"></feather-icon>
              <!--<h6 class="mt-4 text-success" icon-pack="feather" icon="icon-check">Kargo Ücretsiz</h6>-->
              <input
                type="button"
                @click="outBasket(basket.id, concept.id)"
                value="KALDIR"
                class="btn btn-block btn-danger mt-4"
              >
            </div>
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
                <h6 class="my-0">Net Toplam</h6>
              </div>
              <span class="text-muted">${{totalPriceNet.toFixed(2)}}</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">KDV(%18)</h6>
              </div>
              <span class="text-muted">${{kdv.toFixed(2)}}</span>
            </li>
            <li class="mb-2 py-3 d-flex justify-content-between">
              <span>Genel Toplam (USD)</span>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  created: async function() {
    this.initBasketList()
  },
  methods: {
    ...mapActions(["initBasketList", "deleteFromBasketList"]),
    outBasket: async function(basketId, conceptId) {
      this.deleteFromBasketList(basketId, conceptId)
    }
  },
  computed: {
    ...mapGetters(['basketList', 'totalPrice', 'totalPriceNet', 'kdv'])
  }
};
</script>

<style>
</style>
