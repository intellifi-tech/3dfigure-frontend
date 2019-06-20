<template>
  <div class="container-fluid">
    <div class="col-12 vx-card py-3 px-5 mt-5" v-if="this.$store.state.checkout.basketList === null || this.$store.state.checkout.basketList.length === 0">
      Sepette ürün bulunmuyor.
     <router-link to="main">Yeni Model Oluştur!</router-link>
    </div>

    <div class="row" v-else>
      <div class="col-lg-8">
        <div v-for="concept in this.$store.state.checkout.basketList" :key="concept.id">
          <div
            class="row vx-card shadow-md px-4 py-4 mb-5"
            v-for="figure in concept.figures"
            :key="figure.id"
          >
            <div class="col-lg-2 px-0" v-if="!concept.doubleConcept">
              <img :src='"assets/images/figures/"+figure.imagePath'>
            </div>
            <div class="col-lg-2 px-0" v-else>
              <img :src='"assets/images/figures/"+getFigurePath(figure.avatarKey, 0)'>
              <img :src='"assets/images/figures/"+getFigurePath(figure.avatarKey, 1)'>
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
                @click="outBasket(figure.id, concept.id)"
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
          <div><vs-button color="success" type="filled" to="main">Alışverişe Devam Et</vs-button></div>
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
    await this.initPage()
  },
  methods: {
    ...mapActions('checkout', ['initBasketList', 'deleteFromBasketList']),
    outBasket: async function(figureId, conceptId) {
      this.deleteFromBasketList({f: figureId, c: conceptId})
    },
    initPage: async function() {
      this.initBasketList()
    },
    getFigurePath(figureKey, index) {
      return this.$store.state.member.login + '/' + atob(figureKey).split(',')[index];
    }
  },
  computed: {
    ...mapGetters('checkout', ['basketList', 'totalPrice', 'totalPriceNet', 'kdv'])
  }
};
</script>

<style>
</style>
