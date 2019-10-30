<template>
  <div class="pt-0">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      :finishButtonText="$t('dashboard.main.wizard.btnFinish')"
      :nextButtonText="$t('dashboard.main.wizard.btnNext')"
      :backButtonText="$t('dashboard.main.wizard.btnBack')"
      class="yeniModelWizard"
      @on-complete="finishOrder"
    >
      <tab-content
        data-vv-scope="vs1"
        :title="$t('dashboard.main.wizard.tabOne.title')"
        icon="feather icon-edit"
        :before-change="validateStep1"
      >
        <div>
          <preview></preview>
        </div>
      </tab-content>
      <tab-content 
      :title="$t('dashboard.main.wizard.tabTwo.title')"
       class="mb-5" 
       icon="feather icon-check-square"
       >
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
          title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.preview.isSelect}`,
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