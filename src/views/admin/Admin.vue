<template lang="html">
<div>
<div class="row">
	<toplam-siparis :isSales="false"/>
    <toplam-siparis :isSales="true"/>
    <toplam-musteri/>
</div>
<div class="row mt-5">
    <registered-user/>
    <siparis-sayisi :isSales="false" />
    <siparis-sayisi :isSales="true" />
    <likes :isLiked="false"/>
    <likes :isLiked="true"/>
    <yas-araligi/>
 
</div>
 
</div>
</template>

<script>
import ToplamSiparis from "@/components/statistics-cards/ToplamSiparis.vue";
import ToplamMusteri from "@/components/statistics-cards/ToplamMusteri.vue";
import RegisteredUser from "@/components/statistics-cards/RegisteredUser.vue";
import SiparisSayisi from "@/components/statistics-cards/SiparisSayisi.vue";
import Likes from "@/components/statistics-cards/Likes.vue";
import YasAraligi from "@/components/statistics-cards/YasAraligi.vue";

export default {
  components: {
    ToplamSiparis,
    ToplamMusteri,
    RegisteredUser,
    SiparisSayisi,
    Likes,
    YasAraligi
  },
  data() {
    return {
    };
  }
};
</script>