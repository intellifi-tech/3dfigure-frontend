<template>
  <div class="pt-0">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Sepete Git"
      nextButtonText="Devam et"
      backButtonText="Geri dön"
      class="yeniModelWizard"
      @on-complete="finishOrder"
    >
      <tab-content
        data-vv-scope="vs1"
        title="3D Figür Oluştur"
        icon="feather icon-edit"
        :before-change="validateStep1"
      >
        <div>
          <preview></preview>
        </div>
      </tab-content>
      <tab-content title="Konsept Seç" class="mb-5" icon="feather icon-check-square">
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
import ConceptService from "@/services/concept.service";

export default {
  data() {
    return {
    };
  },
  methods: {
    finishOrder: async function() {
      this.$router.push("/checkout")
    },

    validateStep1: async function() {
      const res = this.$store.state.selectedFigures.avatarKey.length != 0;

      if (!res) {
        this.$vs.notify({
          time: 6000,
          title: "HATA",
          text: "Fotoğraf yüklemeli ya da seçmelisiniz!",
          color: "danger"
        });
        return res;
      }
      // this.$root.$emit('checkIsAdded')
      var res1 = await ConceptService.getAllConcepts(0, this.$store.state.selectedFigures.avatarKey.length == 2);
      this.$store.dispatch('initConcept', res1)
      return res;
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