<template>
  <div class="row">
    <div class="col-lg-6 mb-4">
      <vx-card class="mb-3">
        <unity ref="unity"></unity>
      </vx-card>
      <vx-card
        title="Açıklama Bilgisi"
        subtitle="Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir."
        title-color="#fff"
        content-color="#fff"
        card-background="linear-gradient(120deg, #7f7fd5, #86a8e7, #91eae4)"
      >
        <p class="mb-3">
          Lorem Ipsum,
          <strong>dizgi ve baskı</strong> endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
        </p>
      </vx-card>
    </div>
    <!--unity card column-->
    <div class="col-lg-6 mb-3">
      <vx-card title="Fotoğraflarım">
        <p>
          Figürünü oluşturmak istediğin fotoğrafı
          <code>Galerinden</code> seçebilir veya yeni fotoğraf yükleyebilirsin.
        </p>

        <div class="mt-4">
          <vs-custom-upload
            :single-upload="true"
            :limit="limit"
            class="uploadBtn"
            text="Fotoğraf Yükle"
            :server="actionUrl"
            :avatarsdk="avatarsdk"
            :headers="authHeader"
            :avatarHeaders="avatarHeader"
            fileName="photo"
            accept="image/*"
            @on-server-success="serverUpload"
            @on-avatar-success="avatarUpload"
            :showUploadButton="false"
            :savedImages="userFigures"
            ref="upload"
          />
        </div>
      </vx-card>
    </div>
    <!--fotoğraflar card column -->
  </div>
  <!--preview row-->
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import ApiService from "@/services/api.service";
import { TokenService } from "@/services/token.service";
import VsCustomUpload from "@/components/vx-upload/vsCustomUpload";
import FigureService from "@/services/figure.service";
import PricingService from "@/services/pricing.service";

export default {
  data() {
    return {
      actionUrl: `${ApiService.getBaseURL()}\\images\\upload`,
      avatarsdk: process.env.VUE_APP_AVATAR_SDK_AVATAR_API,
      authHeader: {
        Authorization: `Bearer ${TokenService.getToken()}`
      },
      avatarHeader: {
        Authorization: `Bearer ${TokenService.getAvatarToken()}`
      },
      figure: {
        figureName: null,
        avatarKey: null,
        imagePath: null,
        isProduct: false,
        userId: null
      },
      currentAvatar: null,
      limit: null,
      userFigures: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.initialize();
  },
  watch: {
    // call again the method if the route changes
    $route: "initialize"
  },
  methods: {
    updateGallery: async function() {

    },
    initialize: async function() {
      var number = await PricingService.getUserPricing();
      this.userFigures = await FigureService.getUserFigures();
      this.limit = number.totalFigure - this.userFigures.length;
    },
    avatarUpload($event, index) {
      // Avatar SDK isteğinin sonucu
      var response = JSON.parse($event.currentTarget.response);
      if (response.code) {
        // Open loading page
        this.$vs.loading({
          text: "Fotoğraf, bulut sunucumuza yükleniyor..",
          clickEffect: true,
          textAfter: true
        });
        setTimeout(() => {
          this.$vs.loading.close();
          this.$vs.loading({
            text: "Şimdi fotoğraflar üzerinden analiz yapılıyor..",
            clickEffect: true,
            textAfter: true
          });
          setTimeout(() => {
            this.$vs.loading.close();
            this.$vs.loading({
              text:
                "Derin öğrenme ile en doğru geometri ve doku oluşturuluyor..",
              clickEffect: true,
              textAfter: true
            });
            setTimeout(() => {
              this.$vs.loading.close();
              this.$vs.loading({
                text: "Biraz bekletiyoruz ama bir de heykel traşları düşünün..",
                clickEffect: true,
                textAfter: true
              });
              setTimeout(() => {
                this.$vs.loading.close();
                this.$vs.loading({
                  text: "Sonuca yaklaştık.. Hazır mısınız…",
                  clickEffect: true,
                  textAfter: true
                });
                setTimeout(() => {
                  this.$vs.loading.close();
                  this.$vs.notify({
                    text:
                      "Modelde bazı eksiklikler olabilir, hiç endişe etmeyin. Siz istediğiniz konsepti seçin. Geri kalan tüm düzenlemeleri biz tasarım aşamasında gerçekleştirmekteyiz. Sonrasında ise siparişinizi üretime almadan önce sizin onayınıza sunacağız.",
                    color: "dark",
                    position: "top-right",
                    time: 6000
                  });
                  debugger
                  this.showAvatar(response.code);
                }, 6000);
              }, 6000);
            }, 6000);
          }, 6000);
        }, 6000);

        this.$refs.upload.srcs[index].avatarKey = response.code;
        this.figure.avatarKey = response.code;
        this.figure.figureName = response.code;

        /*const formData = new FormData()
        formData.append("avatarKey", this.figure.avatarKey)
        formData.append("imageName", this.figure.imagePath)*/
        this.figure.userId = this.$store.state.member.id;
        FigureService.saveUserFigure(this.figure);
      } else {
        this.$vs.notify({
          title: "HATA",
          text: "Avatar key oluşturulamadı başka fotoğraf deneyiniz",
          color: "danger"
        });
      }
    },
    serverUpload($event) {
      this.figure.imagePath = $event.currentTarget.response;
    },
    showAvatar(code) {
      this.$refs.unity.sendAvatar(code);
    },
    addFigureToBasket: function(code) {
      // const res = await FigureService.getFigureId(code)
      TokenService.addClickedPhoto(code);
    }
  },
  components: {
    Unity,
    VsCustomUpload
  }
};
</script>
