<template>
  <div class="col-md-8 m-auto py-4 px-3 py-md-5" id="body-overlay">
    <div class="mx-auto text-center mb-5">
      <a href="/">
        <img src="assets/images/logo/logo.png" alt="logo" class="w-1/3" />
      </a>
    </div>
    <vx-card class="px-md-5">
      <vs-divider>
        <h3>Sipariş İptal ve İade Şartları</h3>
      </vs-divider>
      <ul>
        <li>
          <strong>
            Sipariş İptali
          </strong>
        </li>
      </ul>
      <p>
        <span>Sipariş iptal ve iade ile ilgili tüm taleplerinizi <b>siparis@3dfigur.com</b> adresinden, <b>0850 885 1991</b> numaralı telefondan veya canlı destek üzerinden bildirebilirsiniz.<br>
Siparişinizin üretim süreçleri ile ilgili tüm bilgilendirmeler anlık olarak e-posta adresinize yapılır. Dokümanınız onaylandıktan ve baskıya alındıktan sonra siparişinizin üretimine başlandığına dair bilgilendirme alırsınız. Üretim aşamasına gelmeden önce müşteri hizmetleri ile iletişime geçerek siparişinizi iptal edebilirsiniz.<br>
Siparişiniz üretime girdiyse siparişinizi iptal etme imkânı bulunmamaktadır. Siparişinizin güncel durumunu, "<b><i>Hesabım</i></b>" menüsü altında bulunan "<b><i>Siparişlerim</i></b>" bölümünden takip edebilirsiniz.
</span>
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          <strong>
            İade Şartları
          </strong>
        </li>
      </ul>
      <p>
        <span>Siparişinizin üretiminden ve kalitesinden memnun kalmamanız halinde, siparişinizi kargodan teslim almanızı takip eden <b>14 gün</b> içerisinde müşteri hizmetleri ile iletişime geçerek şikayetinizi bildirebilirsiniz.<br>
Siparişiniz ile ilgili talebiniz üzerine, Satış Sonrası Destek ekibimiz en geç 2 iş günü içerisinde sizinle irtibata geçerek, ürüne ait fotoğraf ve diğer gerekli bilgileri isteyecektir. Kalite Kontrol ekibimiz tarafından yapılacak detaylı inceleme sonucunda, üretim kaynaklı bir hata bulunması durumunda, siparişiniz yeniden basılacak ve adresinize gönderilecektir. <br>
Kişiye özel baskılı ürünlerde cayma hakkı ve iade imkânı bulunmamaktadır.
</span>
      </p>
      <p>&nbsp;</p>
     <ul>
        <li>
          <strong>
            İade İşlemleri
          </strong>
        </li>
      </ul>
      <p>
        <span>Üretim hatası kaynaklı iade işlemleriniz için, ürünü Mng Kargo ile aşağıdaki adrese '<i>Karşı Ödemeli</i>' olarak göndermeniz gerekmektedir.<br>
<i>3Durak Arge Tek. Bil. San. Tic. A.Ş.<br>
Abbasağa Mah. Ihlamur Yıldız Cad. No:8-Z1 Beşiktaş / İstanbul</i><br>
Üründe herhangi bir üretim hatası bulunmaması halinde, ürününüz '<i>Karşı Ödemeli</i>' olarak kayıtlı adresinize yeniden gönderilecektir.
</span>
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          <strong>
            Teslimat
          </strong>
        </li>
      </ul>
      <p>
        <span>
            Siparişinize ait faturanız kolinin üzerinde yer almaktadır. Siparişinizde teslimat sırasında hasar oluşmuş (yırtık, çatlak, vs.) veya eksik ürün olması durumunda kargo görevlisine tutanak tutturunuz. Tutanak tutulmaması halinde hasarlı siparişinizi teslim almadan iade ediniz.<br>
            Siparişiniz ile ilgili herhangi bir sorunuz olması durumunda 0850 885 1991 numaralı telefondan bizimle irtibata geçebilirsiniz.

        </span>
      </p>
      <p>&nbsp;</p>
    </vx-card>
    <div class="back-to-top base-color-2 d-block" v-if="isVisible">
      <i class="fas fa-rocket" v-scroll-to="'#body-overlay'"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
      value1: ""
    };
  },
  created: async function() {
    document.body.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = document.body.scrollTop
      this.isVisible = scroll > 150
    },
  }
};
</script>