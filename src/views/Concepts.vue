<template>
  <vx-card class="mt-5 pt-2 px-2">
    <h4>Konseptler</h4>
	<p>Figürünü oluşturmak istediğin fotoğrafı <code>Galerinden</code> seçebilir veya yeni fotoğraf yükleyebilirsin.</p>
    <div class="vx-row pt-5">
      <div class="col-md-4" v-for="n in 12" :key="n">
        <concept></concept>
      </div>
    </div>
  </vx-card>
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import Concept from "@/components/vx-card/Concept.vue";

export default {
  components: {
    Unity,
    Concept
  }
};
</script>