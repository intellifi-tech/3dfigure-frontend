<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title=null
      :subtitle=null
      nextButtonText="İleri"
      backButtonText="Geri dön"
      finishButtonText="Bitti!"
    >
      <tab-content title="Sepet" class="mb-5" icon="feather icon-shopping-cart" :before-change="validateStep1">
        <div>
          <checkout-list @valid="dummyFunc"></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Fatura Adresi" class="mb-5" icon="feather icon-file-text" :before-change="validateStep3">
        <div>
          <adres :isBilling=true></adres>
        </div>
      </tab-content>
      <tab-content title="Kargo Adresi" class="mb-5" icon="feather icon-home" :before-change="validateStep2">
        <div>
          <adres :isBilling=false></adres>
        </div>
      </tab-content>
      <tab-content title="Ödeme" class="mb-5" icon="feather icon-credit-card">
        <div class="d-lg-flex mt-4">
          <VueCardPayment @card-submit="finishShopping"></VueCardPayment>
          <!--<p>Ödeme sayfasına yönlendiriliyorsunuz</p>
          <iframe :src=iframe height="1000" width="1000" class="border-none pt-5"></iframe>-->
          <div v-html=iframe> </div>
           <div class="col-lg-4 pt-4 pt-md-0">
        <div class="vx-card shadow-md py-8 px-4">
          <ul class="list-group">
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">Net Toplam</h6>
              </div>
              <span class="text-muted">₺{{this.$store.state.checkout.order.totalPriceNet}}</span>
            </li>
             <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between" v-if="discountActive">
              <div>
                <h6 class="my-0">İndirim Tutarı</h6>
              </div>
              <span class="text-muted">₺2.5</span>
            </li>
            <li class="mb-2 py-3 border-bottom border-black d-flex justify-content-between">
              <div>
                <h6 class="my-0">KDV(%18)</h6>
              </div>
              <span class="text-muted">₺{{this.$store.state.checkout.order.kdv}}</span>
            </li>
            <li class="pt-3 pb-2 d-flex justify-content-between">
              <span>Genel Toplam (TL)</span>
              <strong>₺{{this.$store.state.checkout.order.totalPrice}}</strong>
            </li>
            <hr>
            <li class="pt-2 d-flex justify-content-between">
              <h6>Tüm siparişlerinizde kargo ücetsizdir.</h6>
            </li>
          </ul>
        </div>
        <!--card checkout -->
      </div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import CheckoutList from "@/components/checkout/CheckoutList.vue";
import CheckoutService from '@/services/checkout.service.js'
import Adres from "@/components/address/Adres.vue";
import VueCardPayment from "@/components/card/VueCardPayment"
import PaymentService from "@/services/payment.service.js"
import i18n from '@/plugins/i18n.js'
export default {
  data() {
    return {
      counterDanger: false,
      counterDanger2: false,
      iframe: "",
    };
  },
  updated() {
    var c = document.querySelector('#figure')
    if (c) {
      c.click();
    }
  },
  methods: {
    finishShopping: async function(card) {
      var self = this
      this.$store.commit('checkout/FINISH_ORDER', this.$store.state.member.id)
      if (!this.$store.state.checkout.order.id) {
        await CheckoutService.sendOrder(this.$store.state.checkout.order) 
      } else {
        await CheckoutService.sendOrderUpdate(this.$store.state.checkout.order) 
      }

      this.$store.commit("checkout/SET_ORDER_LANG")
      this.$store.commit("checkout/ADD_CARD", card)
      const paymentRes = await PaymentService.pay(this.$store.state.checkout.order)
      if (paymentRes.status >= 400) {
          this.$vs.notify({
            time: 6000,
            title: "HATA!",
            text: "Bir hata oluştu",
            color: "danger"
          });
          return
      }
      if (paymentRes.data.status == 'failure') {
          this.$vs.notify({
            time: 6000,
            title: "HATA!",
            text: `${paymentRes.data.errorMessage}`,
            color: "danger"
          });
          return;
      }
      this.iframe = paymentRes.data.htmlContent
      this.iframe = this.iframe.replace('name="submitBtn"', 'name="submitBtn" id="figure" style="display:none !important;"')
      
      return;
    },
    validateStep1() {
      if(this.counterDanger)
      {
          this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen notları kontrol ediniz!",
          color: "danger"
        });
      }
      return (this.$store.state.checkout.basketList.length !== 0) && !this.counterDanger 

    },
    dummyFunc(counterDanger) {
      this.counterDanger = counterDanger
    },
    validateStep2: function() {
      if (this.$store.state.checkout.order.deliveryId == -1) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen Adres seçiniz!",
          color: "danger"
        });
        return false
      }
      return this.$store.state.checkout.order.deliveryId != -1
    },
    validateStep3: async function() {
        
      if (this.$store.state.checkout.order.billingId == -1) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen Adres seçiniz!",
          color: "danger"
        });
        return false
      }
      return this.$store.state.checkout.order.billingId != -1
    
    }
  },
  components: {
    CheckoutList,
    Adres,
    FormWizard,
    TabContent,
    VueCardPayment
  }
};
</script>