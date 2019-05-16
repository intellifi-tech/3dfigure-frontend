<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
      @on-complete="goToBasket"
    >
      <tab-content
        data-vv-scope="vs1"
        :title="$t('plugins')"
        class="mb-5"
        icon="feather icon-home"
        :before-change="validateStep1"
      >
        <div>
          <preview></preview>
        </div>
      </tab-content>
      <tab-content title="Konsept Seç" class="mb-5" icon="feather icon-home">
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
import Preview from "@/components/content/Preview";
import Concepts from "@/views/concept/Concepts.vue";
import Checkout from "@/views/checkout/Checkout.vue";

export default {
  data() {
    return {
      order: {
        choosenAvatar: null,
        choosenConcept: []
      }
    };
  },
  methods: {
    goToBasket() {
      this.$router.push("/checkout");
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    }
  },
  components: {
    Preview,
    Concepts,
    Checkout,
    FormWizard,
    TabContent
  }
};
</script>