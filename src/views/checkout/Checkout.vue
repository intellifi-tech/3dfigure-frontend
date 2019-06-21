<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      nextButtonText="İleri"
      backButtonText="Geri dön"
      finishButtonText="Siparişi Tamamla"
    >
      <tab-content title="Sepet" class="mb-5" icon="feather icon-home" :before-change="validateStep1">
        <div>
          <checkout-list></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Adres" class="mb-5" icon="feather icon-home">
        <div>
          <adres></adres>
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
import Adres from "@/components/address/Adres.vue";
export default {
  data() {
    return {
    };
  },
  methods: {
    validateStep1() {
      return this.$store.state.checkout.basketList.length !== 0
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