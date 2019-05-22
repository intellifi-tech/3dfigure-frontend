<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
    >
      <tab-content title="Checkout" class="mb-5" icon="feather icon-home" :before-change="validateStep1">
        <div>
          <checkout-list></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Adress" class="mb-5" icon="feather icon-home">
        <div>
          <adres></adres>
        </div>
      </tab-content>
      <tab-content title="Payment" class="mb-5" icon="feather icon-home">
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
<<<<<<< HEAD
=======
  beforeCreate: async function() {
    this.basketList = await ConceptService.getConceptsInBasket();
    this.basketList.forEach(element => {
      this.totalPriceNet += element.price * 1;
      this.totalPrice += element.price * 1 * 1.18;
      this.kdv += element.price * 1 * 0.18;
    });
  },
>>>>>>> f86bf7410d384e7c726f30322dff85c98444f4a9
  methods: {
    generateId() {
      var length = 11;
      var timestamp = +new Date();

      var _getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      return function() {
        var ts = timestamp.toString();
        var parts = ts.split("").reverse();
        var id = "";

        for (var i = 0; i < length; ++i) {
          var index = _getRandomInt(0, parts.length - 1);
          id += parts[index];
        }

        return id;
      };
    },
    validateStep1() {
      return sessionStorage.getItem("basket") !== 0
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