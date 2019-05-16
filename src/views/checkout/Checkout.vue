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
          <checkout :basketList="this.order.choosenConcept"></checkout>
        </div>
      </tab-content>
      <tab-content title="Address" class="mb-5" icon="feather icon-home">
        <div>
          <concepts></concepts>
        </div>
      </tab-content>
      <tab-content title="Payment" class="mb-5" icon="feather icon-home">
        <div>
          <concepts></concepts>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Checkout from "@/views/checkout/Checkout.vue";

export default {
  data() {
    return {
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
    Checkout,
    FormWizard,
    TabContent
  }
};
</script>