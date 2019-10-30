<template>
  <div class="container-fluid">
    <div class="col-12 vx-card py-3 px-5 mt-5" v-if="this.$store.state.checkout.basketList === null || this.$store.state.checkout.basketList.length === 0">
      {{$t('dashboard.checkout.wizard.tabOne.checkoutList.emptyCart')}}
     <router-link to="main">{{$t('dashboard.checkout.wizard.tabOne.checkoutList.createModel')}}</router-link>
    </div>

    <div class="row" v-else>
      <div class="col-lg-8">
        <div v-for="concept in this.$store.state.checkout.basketList" :key="concept.id">
          <div
            class="d-lg-flex vx-card shadow-md px-4 py-4 mb-5"
            v-for="figure in concept.figures.filter(f => f.userId == $store.state.member.id)"
            :key="figure.id"
          >
            <div class="col-lg-2 px-0 checkout-figures" v-if="!concept.doubleConcept">
              <img :src='"assets/images/figures/"+figure.imagePath'>
            </div>
            <div class="col-lg-2 px-0 overflow-x-auto flex checkout-figures" v-else>
              <img :src='"assets/images/figures/"+getFigurePath(figure, 0)'>
              <img :src='"assets/images/figures/"+getFigurePath(figure, 1)'>
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
              <h4>{{$t('landing.pricing.symbol')}}{{concept.price}} <span class="h6 text-secondary">+{{$t('landing.pricing.kdv')}}</span></h4>
              <feather-icon icon="checkIcon" class="m-0 cursor-pointer"></feather-icon>
              <!--<h6 class="mt-4 text-success" icon-pack="feather" icon="icon-check">Kargo Ücretsiz</h6>-->
              <input
                type="button"
                @click="outBasket(figure.id, concept.id)"
                :value="$t('dashboard.checkout.wizard.tabOne.checkoutList.removeItem')"
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
                <h6 class="my-0">{{$t('dashboard.checkout.wizard.totalCard.netTotal')}}</h6>
              </div>
              <span class="text-muted">{{$t('landing.pricing.symbol')}}{{this.$store.state.checkout.order.totalPriceNet}}</span>
            </li>
             <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between" v-if="this.$store.state.checkout.discount != null">
              <div>
                <h6 class="my-0">{{$t('dashboard.checkout.wizard.totalCard.discountTotal')}}</h6>
              </div>
              <span class="text-muted">{{$t('landing.pricing.symbol')}}{{this.$store.state.checkout.discount}}</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">{{$t('dashboard.checkout.wizard.totalCard.tax')}}</h6>
              </div>
              <span class="text-muted">{{$t('landing.pricing.symbol')}}{{this.$store.state.checkout.order.kdv}}</span>
            </li>
            <li class="pt-3 pb-2 d-flex justify-content-between">
              <span>{{$t('dashboard.checkout.wizard.totalCard.grandTotal')}}</span>
              <strong>{{$t('landing.pricing.symbol')}}{{this.$store.state.checkout.order.totalPrice}}</strong>
            </li>
            <hr>
            <li class="pt-2 pb-1 d-flex justify-content-between">
              <h6>{{$t('dashboard.checkout.wizard.totalCard.freeCargo')}}</h6>
            </li>
            <hr>
             <li class="py-3 justify-content-between">
              <h6 class="font-sans text-secondary">{{$t('dashboard.checkout.wizard.totalCard.discountCode')}}</h6>
              <div>
              <vs-input 
               class="mt-3 w-full sepet-textarea float-left"
               v-model="discountCode"
              ></vs-input>
              <vs-button
               class="mt-3 w-full sepet-textarea float-right"
               @click="addDiscount"
               icon="done"
               color="success"
              >{{$t('dashboard.checkout.wizard.totalCard.btnActiveDiscount')}}</vs-button>
              </div>

             </li>
             <li class="mb-2 justify-content-between">
              <h6 class="font-sans text-secondary">{{$t('dashboard.checkout.wizard.totalCard.orderNote')}}</h6>
              <vs-textarea 
                class="mt-3 w-full sepet-textarea"
                v-model="areaOrderNote"
                counter="200" 
                :counter-danger.sync="counterDanger2"
              ></vs-textarea>
            </li>
          </ul>
          <div><!--<vs-button color="success" type="filled" @click="$router.push('/main', exact)">Alışverişe Devam Et</vs-button>-->
            <router-link to="main"  exact>
              <vs-button color="primary" type="filled" icon="add" class="w-full">{{$t('dashboard.checkout.wizard.totalCard.btnCreateModel')}}</vs-button>
            </router-link>
          </div>
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
import DiscountService from '@/services/discount.service.js'
export default {
  data() {
    return {
      counterDanger: false,
      counterDanger2: false,
      areaFeedback:"",
      areaOrderNote:"",
      discountCode: "",
      discountActive: false,
      discountRate: 0,
      discount: 0
    };
  },
  created: async function() {
    await this.initPage()
  },
  watch: {
    counterDanger() {
      this.$emit('valid', this.counterDanger || this.counterDanger2)
    },
    counterDanger2() {
      this.$emit('valid', this.counterDanger || this.counterDanger2)
    },
    areaFeedback() {
      this.$store.commit("checkout/UPDATE_FEEDBACK", this.areaFeedback)
    },
    areaOrderNote() {
      this.$store.commit("checkout/UPDATE_ORDER_NOTE", this.areaOrderNote)
    }
  },
  methods: {
    ...mapActions('checkout', ['initBasketList', 'deleteFromBasketList']),
    outBasket: async function(figureId, conceptId) {
      this.deleteFromBasketList({f: figureId, c: conceptId})
    },
    addDiscount: async function() {
      if (this.discountCode.trim() !="") {
        
      const res = await DiscountService.getRate(this.discountCode)
      if (!res) {
        this.$vs.notify({
          time: 6000,
          title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.checkout.discountCode}`,
          color: "danger"
        });
      } else if (!this.discountActive) {
        this.discountRate = res
        this.discountActive = true
        this.$store.commit("checkout/SET_DISCOUNT", (this.$store.state.checkout.order.totalPrice * (res / 100)))
        this.$store.commit("checkout/SET_TOTAL_PRICE", this.$store.state.checkout.order.totalPrice * ((100-res) / 100))
        this.$vs.notify({
          time: 6000,
          title: `${this.$i18n.messages[this.$i18n.locale].notify.success.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.checkout.discountCode}`,
          color: "success"
        });
        this.discountCode=""
        }
      }
      else{
         this.$vs.notify({
          time: 6000,
          title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.checkout.discountCode}`,
          color: "danger"
        });
      }
    },
    initPage: async function() {
      this.initBasketList()
    },
    getFigurePath(figure, index) {
      return atob(figure.imagePath).split(',')[index]
    }
  },
  computed: {
    ...mapGetters('checkout', ['basketList', 'totalPrice', 'totalPriceNet', 'kdv'])
  },
};
</script>

<style>
.sepet-textarea .vs-textarea{
  max-height:150px;
}
.checkout-figures img{
  width:100%;
  height:130px;
  object-fit:cover;
  padding-bottom:5px;
}
</style>
