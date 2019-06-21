<template>
  <div class="row">
    <div class="col-lg-6 mb-4">
      <vx-card class="mb-4">
        <unity ref="unity"></unity>
      </vx-card>
      <vx-card
        title=""
        subtitle=""
        class="shadow-primary"
      >
      <h4 class="pb-4">
        <span class="align-text-bottom  mr-2">
           <vs-icon class="" icon="info" size="small" bg="blue" color="white" round></vs-icon>
        </span>Bilgilendirme Panosu </h4>
        <p class="mb-3">
          Modelde bazı eksiklikler olabilir, hiç endişe etmeyin. Siz istediğiniz konsepti seçin. Geri kalan tüm düzenlemeleri biz tasarım aşamasında gerçekleştirmekteyiz. Sonrasında ise siparişinizi üretime almadan önce izin onayınıza sunacağız.

        </p>
      </vx-card>
    </div>
    <!--unity card column-->
    <div class="col-lg-6 mb-3">
      <vx-card class="fotograflarim-card">
        <div class="mb-4 row">
         <div class="col-xl-6">
             <h4 class="pb-4">Fotoğraflarım </h4>
         </div>
         <div class="col-xl-6 text-right">
             <span class="h6">Fotoğraf yükleme hakkınız: </span>
             <h3 class="text-primary">{{this.limit}} / {{ this.number.totalFigure}}</h3>
         </div>
        </div>
        <p>
          Figürünü oluşturmak istediğin fotoğrafı
          <code>Galerinden</code>
          seçebilir veya yeni fotoğraf yükleyebilirsin.
        </p>
      <hr>
        <div class="mt-0">
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
import AvatarSdkService from "@/services/avatarsdk.service";

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
        userId: null,
        isLiked: false
      },
      currentAvatar: null,
      limit: null,
      userFigures: null,
      number: {}
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
    updateGallery: async function() {},
    initialize: async function() {
      this.number = await PricingService.getUserPricing();
      this.userFigures = await FigureService.getUserFigures();
      this.limit = this.number.totalFigure - this.userFigures.length;
    },
    avatarUpload: async function($event, index) {
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
                  text: "Sonuca yaklaştık.. Hazır mısınız…?",
                  clickEffect: true,
                  textAfter: true
                });
                setTimeout(async () => {
                  this.$vs.loading.close();
                  var res = await AvatarSdkService.getAvatarInformation(
                    response.code
                  );
                  if (res.data.status === "Failed") {
                    this.$vs.notify({
                      title: "HATA",
                      time: 30000,
                      text:
                        "Figür oluşturulamadı! Lütfen başka fotoğraf deneyiniz!",
                      color: "danger"
                    });
                  } else {
                    this.showAvatar(response.code);
                    this.$refs.upload.srcs[index].avatarKey = response.code;
                    this.figure.avatarKey = response.code;
                    this.figure.figureName = response.code;

                    /*const formData = new FormData()
        formData.append("avatarKey", this.figure.avatarKey)
        formData.append("imageName", this.figure.imagePath)*/
                    this.figure.userId = this.$store.state.member.id;
                    FigureService.saveUserFigure(this.figure);
                  }
                }, 6000);
              }, 6000);
            }, 6000);
          }, 6000);
        }, 6000);
      } else {
        this.$vs.notify({
          title: "HATA",
          text: "Figür oluşturulamadı! Lütfen başka fotoğraf deneyiniz!",
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
<style>
.fotograflarim-card .vx-card__body{
    padding-bottom: .6rem;
}
.title-loading{
  font-weight: 900;
  font-size:2rem;
}
.con-vs-loading{
 background:hsla(0,0%,100%,.9);
}
</style>