<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title=null
      :subtitle=null
      nextButtonText="İleri"
      backButtonText="Geri dön"
    >
      <tab-content title="Sepet" class="mb-5" icon="feather icon-shopping-cart" :before-change="validateStep1">
        <div>
          <checkout-list @valid="dummyFunc"></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Kargo Adresi" class="mb-5" icon="feather icon-home" :before-change="validateStep2">
        <div>
          <adres :isBilling=false></adres>
        </div>
      </tab-content>
      <tab-content title="Fatura Adresi" class="mb-5" icon="feather icon-file-text" :before-change="validateStep3">
        <div>
          <adres :isBilling=true></adres>
        </div>
      </tab-content>
      <tab-content title="Ödeme" class="mb-5" icon="feather icon-credit-card">
        <div class="text-center">
          <!--<VueCardPayment @card-submit="payment"></VueCardPayment>-->
          <p>Ödeme sayfasına yönlendiriliyorsunuz</p>
          <iframe :src=iframe height="1000" width="1000" class="border-none pt-5"></iframe>
          
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
      iframe: ""
    };
  },
  methods: {
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
      if (!this.$store.state.member.tcno) {
        const self = this;
        this.$vs.dialog({
          color:'danger',
          title: "Hata",
          text: 'Ödeme yapabilmeniz için kimlik numaranızı girmelisiniz',
          acceptText: "Anladım",
          accept: function() {
            self.$router.push("/profile")
          }
        })
      }
      return (this.$store.state.checkout.basketList.length !== 0) && !this.counterDanger && !!this.$store.state.member.tcno

    },
    dummyFunc(counterDanger) {
      this.counterDanger = counterDanger
    },
    validateStep2: function() {
      if (!this.$store.state.checkout.chooseAddress) {
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
      if (!this.$store.state.checkout.billingAddress.id) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen Adres seçiniz!",
          color: "danger"
        });
        return false
      }

      this.$store.commit('checkout/FINISH_ORDER', {userId: this.$store.state.member.id, lang: sessionStorage.getItem('lang') == null ? i18n.locale : sessionStorage.getItem('lang')})
      !this.$store.state.checkout.order.id 
        ? await CheckoutService.sendOrder(this.$store.state.checkout.order) 
        : await CheckoutService.sendOrderUpdate(this.$store.state.checkout.order)


      const res = await PaymentService.iyzicoForm(this.$store.state.checkout.order)
      /*if (res.data.status === "success") {
        window.location = res.data.paymentPageUrl
        return true
      }*/
      // buraya iyzico uyarı bas
      this.iframe = res.data.paymentPageUrl + '&iframe=true'

      /*this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: `${res.data.errorMessage}`,
          color: "danger"
        });*/
      return true
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