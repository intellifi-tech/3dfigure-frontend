<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
    >
      <tab-content title="Checkout" class="mb-5" icon="feather icon-home">
        <div>
          <checkout-list :basketList="this.basketList" :kdv="this.kdv" :totalPriceNet="this.totalPriceNet" :totalPrice="this.totalPrice"></checkout-list>
        </div>
      </tab-content>
      <tab-content title="Adres" class="mb-5" icon="feather icon-home">
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
import ConceptService from "@/services/concept.service.js";

export default {
  data() {
    return {
      basketList: [],
      totalPrice: 0,
      kdv: 0,
      totalPriceNet: 0,
      orderDTO: {
        orderCode: this.generateId(),
        cargoCode: null,
        orderStatus: "BUILD",
        information: null,
        totalPrice: null,
        createdDate: null,
        lastModificationDate: null
      }
    };
  },
  beforeCreate: async function() {
    this.basketList = await ConceptService.getConceptsInBasket();
    this.basketList.forEach(element => {
      this.totalPriceNet += element.price * element.quantity;
      this.totalPrice += element.price * element.quantity * 1.18;
      this.kdv += element.price * element.quantity * 0.18;
    });
  },
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