<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title=null
      :subtitle=null
      nextButtonText="İleri"
      backButtonText="Geri dön"
      finishButtonText="Siparişi Tamamla"
      @on-complete="finishShopping"
    >
      <tab-content title="Sepet" class="mb-5" icon="feather icon-home" :before-change="validateStep1">
        <div>
          <checkout-list></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Kargo Adresi" class="mb-5" icon="feather icon-home" :before-change="validateStep2">
        <div>
          <adres :isBilling=false></adres>
        </div>
      </tab-content>
      <tab-content title="Fatura Adresi" class="mb-5" icon="feather icon-home" :before-change="validateStep3">
        <div>
          <adres :isBilling=true></adres>
        </div>
      </tab-content>
      <tab-content title="Ödeme" class="mb-5" icon="feather icon-home">
        <div></div>
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
export default {
  data() {
    return {
    };
  },
  methods: {
    validateStep1() {
      return this.$store.state.checkout.basketList.length !== 0
    },
    validateStep2: function() {
      if (!this.$store.state.checkout.chooseAddress) {
        this.$vs.notify({
          time: 4000,
          title: "Error",
          text: "Lütfen Adres Seçin",
          color: "danger"
        });
        return false
      }
      return this.$store.state.checkout.order.deliveryId != -1
    },
    validateStep3: function() {
      if (!this.$store.state.checkout.chooseAddress) {
        this.$vs.notify({
          time: 4000,
          title: "Error",
          text: "Lütfen Adres Seçin",
          color: "danger"
        });
        return false
      }
      return this.$store.state.checkout.order.billingId != -1
    },
    finishShopping: async function() {
      this.$store.commit('checkout/FINISH_ORDER', this.$store.state.member.id)
      await CheckoutService.sendOrder(this.$store.state.checkout.order)
      this.$store.dispatch('checkout/createNewBasket')
      this.$store.dispatch('getCurrentUser')
      this.$router.push("/main")
    }
  },
  components: {
    CheckoutList,
    Adres,
    FormWizard,
    TabContent
  }
};
</script>