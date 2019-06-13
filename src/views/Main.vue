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
      @on-complete="goToBasket"
    >
      <tab-content
        data-vv-scope="vs1"
        title="3D Figür Oluştur"
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
import { TokenService } from "@/services/token.service";
import CheckoutService from "@/services/checkout.service";
import FigureService from "@/services/figure.service";

export default {
  data() {
    return {
    };
  },
  methods: {
    goToBasket: async function() {
      const res = await FigureService.hasItConcept(
        TokenService.getClickedPhoto()
      );
      if (res) {
        CheckoutService.addToBasket(TokenService.getClickedPhoto());
        this.$router.push("/checkout");
      } else {
        this.$vs.notify({
          title: "HATA",
          text: "En az 1 konsept seçmelisiniz",
          color: "danger"
        });
      }
    },
    validateStep1() {
      const res = TokenService.getClickedPhoto() !== "";
      if (!res) {
        this.$vs.notify({
          title: "HATA",
          text: "Fotoğraf yüklemeli ya da seçmelisiniz",
          color: "danger"
        });
      }
      // this.$root.$emit('checkIsAdded')
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