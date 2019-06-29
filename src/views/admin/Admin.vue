<template lang="html">
<div>
<div class="row">
	<toplam-siparis/>
    <toplam-satis/>
    <toplam-musteri/>
</div>
<div class="row mt-5">
    <registered-user/>
    <siparis-sayisi/>
    <sales/>
    <uploaded-figures/>
    <likes/>
    <yas-araligi/>
</div>
 
</div>
</template>

<script>
import ToplamSiparis from "@/components/statistics-cards/ToplamSiparis.vue";
import ToplamSatis from "@/components/statistics-cards/ToplamSatis.vue";
import ToplamMusteri from "@/components/statistics-cards/ToplamMusteri.vue";
import RegisteredUser from "@/components/statistics-cards/RegisteredUser.vue";
import SiparisSayisi from "@/components/statistics-cards/SiparisSayisi.vue";
import Sales from "@/components/statistics-cards/Sales.vue";
import UploadedFigures from "@/components/statistics-cards/UploadedFigures.vue";
import Likes from "@/components/statistics-cards/Likes.vue";
import YasAraligi from "@/components/statistics-cards/YasAraligi.vue";

export default {
  components: {
    ToplamSiparis,
    ToplamSatis,
    ToplamMusteri,
    RegisteredUser,
    SiparisSayisi,
    Sales,
    UploadedFigures,
    Likes,
    YasAraligi
  },
  data() {
    return {
    };
  }
};
</script>