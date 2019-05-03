<template>
  <div class="pt-4">
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
    >
      <tab-content
        data-vv-scope="vs1"
        :title="$t('plugins')"
        class="mb-5"
        icon="feather icon-home"
        :before-change="validateStep1"
      >
        <div>
          <p>{{ $t('plugins') }}</p>
        </div>
      </tab-content>
      <tab-content title="Unity Preview" class="mb-5" icon="feather icon-briefcase">
        <vx-card class="p-2">
          <unity></unity>
        </vx-card>
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
import Unity from "@/components/unity/Unity.vue";
import Upload from "@/components/upload/UploadMultiple.vue";
import Concepts from "@/views/concept/Concepts.vue";

export default {
  methods: {
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
    },
  },
  beforeCreate() {
    var jwt = localStorage.getItem('id_token')
    if (!jwt) {
      this.$router.push('/pages/login')
    }
  },
  components: {
    Unity,
    Upload,
    Concepts,
    FormWizard,
    TabContent
  }
};
</script>