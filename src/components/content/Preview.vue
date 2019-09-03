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
        <p>
           Modelde bazı eksiklikler olabilir, hiç <b class="text-primary">endişe etmeyin!</b><br>
        </p>
        <p class="mb-3">
          Siz istediğiniz <b class="text-primary">konsepti</b> seçin. Geri kalan tüm düzenlemeler, alanında uzman tasarımcılarımız tarafından düzenlenecektir.
        </p>
        <p class="mb-3" v-if="!limit">
          Limitiniz dolduysa uygulamamızı paylaşarak fotoğraf yükleme hakkına sahip olabilirsiniz.
        </p>
      </vx-card>
    </div>
    <!--unity card column-->
    <div class="col-lg-6 mb-3">
      <vx-card class="fotograflarim-card">
        <div class="row">
         <div class="col-xl-4 pt-2">
            <h4 class="pb-4"> Fotoğraflarım</h4>
         </div>
         <div class="col-xl-8 text-md-right pt-2">
            <h6>Fotoğraf yükleme hakkınız: </h6>
            <div class="alignright flex">
            <span class="text-primary h3 pr-2"> {{showLimit}} / {{ this.$store.state.member.totalFigure}}</span>
            <vs-button @click="openInvitePopup=true" class="btnDavet" color="success" type="filled" icon="add" size="small" radius></vs-button>
            </div>
          
         </div>
        </div>
        <p>
          En iyi 3D Figürünü oluşturmak için, <b class="cursor-pointer hover:underline text-primary" @click="popupContent">en doğru fotoğrafı</b> yükle ve galerinden fotoğrafını seç!
        </p>
        <p>
          <b class="text-primary">Çift kişilik</b> konsept kullanabilmek için <b class="text-primary">2 fotoğraf</b> yükleyip seçmelisiniz. 
        </p>
      <hr>
        <div class="mt-0">
          <vs-custom-upload
            :single-upload="true"
            :limit="showLimit"
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
            @show-avatar="showAvatar"
            :showUploadButton="false"
            :savedImages="userFigures"
            ref="upload"
          />
        </div>
      </vx-card>
    </div>
    <!--fotoğraflar card column -->
     
<vs-popup @close="closePopup" :active.sync="openInvitePopup" title="Arkadaşını Davet Et">
     <div class="vx-row mb-4">
             <div class="vx-col w-full mb-3">
                <span>Fotoğraf yükleme hakkınız bittiğinde <b>3 arkadaşınızın</b> e-posta adresine davet yollayarak <b>3 yükleme hakkı</b> daha kazanabilirsiniz.</span>
                <br><br>
                <span>Ayrıca sipariş verdikten sonra tüm haklarınız <b>yenilenir.</b></span>
              </div>
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.first.$invalid && !first}"
                  label-placeholder="1.E-posta"
                  v-model="inviteMail.first"
                />
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.second.$invalid && !first}"
                  label-placeholder="2.E-posta"
                  v-model="inviteMail.second"
                />
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.third.$invalid && !first}"
                  label-placeholder="3.E-posta"
                  v-model="inviteMail.third"
                />
              </div>
      </div>
             <div class="vx-row mb-1">
              <div class="vx-col w-full">
                       <vs-button color="success" class="float-right" @click="mailSend">Davet et</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup class="xl-popup" :active.sync="popupContentHow" title="Nasıl Yapılır?">
      <div class="how-to-popup">  
         <div class="man-div row m-auto p-4" v-if="man">
          <div class="card-footer col-lg-5 px-0 rounded-lg ">
                    <div class="single-inline-feature-item">
                      <img src="assets/images/icon/icon-true.png" class="selfie-true-icon">
                      <img
                        src="assets/images/portre/man/man-true.jpg"
                        class="-mt-4 img-fluid rounded-t-lg"
                      >
                      <div class="content pt-4 pt-lg-5 px-4">
                        <h4>{{$t('landing.howtouse.trueHeader')}}</h4>
                        <p class="pt-3 pt-lg-4" v-html="$t('landing.howtouse.trueDesc')"></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 pr-lg-0">
                    <ul id="man-list" class="falseList">
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-1.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-3.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-2.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-4.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                 </div> 
        <div class="woman-div row m-auto p-4" v-else>
          <div class="card-footer col-lg-5 px-0 rounded-lg ">
                    <div class="single-inline-feature-item">
                      <img src="assets/images/icon/icon-true.png" class="selfie-true-icon">
                      <img
                        src="assets/images/portre/woman/woman-true.jpg"
                        class="-mt-4 img-fluid rounded-t-lg"
                      >
                      <div class="content pt-4 pt-lg-5 px-4">
                        <h4>{{$t('landing.howtouse.trueHeader')}}</h4>
                        <p class="pt-3 pt-lg-4" v-html="$t('landing.howtouse.trueDesc')"></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 pr-lg-0">
                    <ul id="woman-list" class="falseList">
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-1.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-3.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-2.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-12 col-md-4  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-4.jpg"
                              class="rounded-l-lg img-scale fit-img"
                            >
                          </div>
                          <div class="content col-12 col-md-8 pt-3">
                            <p class="text-sm text-dark">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                 </div> 
              </div>
    </vs-popup>
  </div>
  <!--preview row-->
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import ApiService from "@/services/api.service";
import { TokenService } from "@/services/token.service";
import MailService from "@/services/mail.service";
import VsCustomUpload from "@/components/vx-upload/vsCustomUpload";
import FigureService from "@/services/figure.service";
import AvatarSdkService from "@/services/avatarsdk.service";
import {
  required,
  email,
  sameAs,
  not,
  and
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      man: true,
      first:true,
      openInvitePopup:false,
      popupContentHow:false,
      inviteMail: {
        first: "",
        second: "",
        third: ""
      },
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
        isDoubled: false,
        userId: null,
        isLiked: false,
        createdDate: null,
      },
      currentAvatar: null,
      limit: null,
      userFigures: null
    };
  },
  created: async function() {
    // fetch the data when the view is created and the data is
    // already being observed
    await this.initialize();
    this.userFigures = await FigureService.getUserFigures();
  },
  /*watch: {
    // call again the method if the route changes
    $route: "initialize"
  },*/
  computed: {
    showLimit: function() {
      if (this.userFigures.length != null)
      return this.$store.state.member.totalFigure - this.userFigures.length
    },
  },
  methods: {
    closePopup() {
      this.inviteMail.first = ""
      this.inviteMail.second = ""
      this.inviteMail.third = ""
      this.first=true
    },
     openPopupHowtoUse() {
      this.$store.commit("OPEN_SIDEBAR_POPUP", true);
    },
    popupContent(){
      this.popupContentHow=true;
      if (this.$store.state.member.sex == 'F') {
        this.man=false;
      }
      else{
         this.man=true;
      }
    },
    updateGallery: async function() {},
    initialize: async function() {
      this.userFigures = await FigureService.getUserFigures();
      var a = this.$store.state.member.totalFigure
      var b = this.userFigures.length
      this.limit = a - b;
    },
    mailSend: async function() {
    /*this.$store.state.member.sendFriend != 0 &&*/  if ( !this.$v.inviteMail.$invalid) {
      Object.values(this.inviteMail).forEach(element => {
        MailService.sendMail(element)
      });
      this.inviteMail.first = ""
      this.inviteMail.second = ""
      this.inviteMail.third = ""
      this.openInvitePopup = false
      this.$store.commit("UPDATE_SEND_FRIEND", 0)
      this.$store.commit("UPDATE_TOTAL_FIGURE", this.$store.state.member.totalFigure + 3)
      this.$store.dispatch("updateFirstLogin", this.$store.state.member)
      this.$vs.notify({
          time: 6000,
          title: "Başarılı!",
          text: "Davet gönderildi.",
          color: "success"
        });
      } else if (this.$v.inviteMail.$invalid) {
        this.first=false;
          this.$vs.notify({
            time: 6000,
            title: "HATA!",
            text: "Girilen e-postaları kontrol ediniz.",
            color: "danger"
          });
      } else {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Davet gönderme hakkınız dolmuştur.",
          color: "danger"
        });
      }
    },
    avatarUpload: async function($event, index) {
      // Avatar SDK isteğinin sonucu
      var response = JSON.parse($event.currentTarget.response);
      if (response.code) {
        this.$refs.upload.srcs[index].avatarKey = response.code;
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
                text: "Biraz bekletiyoruz ama bir de heykeltraşları düşünün..",
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
                  this.$vs.loading({
                      text: "Biliyoruz merakla bekliyorsunuz..",
                      clickEffect: true,
                      textAfter: true
                  });
                  setTimeout(() => {
                    this.$vs.loading.close();
                    this.$vs.loading({
                      text: "Biz de bu çalışmayı büyük bir özenle size özel hazırlıyoruz..",
                      clickEffect: true,
                      textAfter: true
                    });
                    setTimeout(() => {this.$vs.loading.close();}, 8000)
                  }, 8000)
                  var res = await AvatarSdkService.getAvatarInformation(
                    response.code
                  );
                  if (res.data.status === "Failed") {
                    this.$vs.notify({
                      title: "HATA!",
                      time: 30000,
                      text:
                        "Figür oluşturulamadı! Lütfen başka fotoğraf deneyiniz!",
                      color: "danger"
                    });
                    this.$refs.upload.srcs.pop()
                  } else {
                    this.$refs.upload.hideClass = true;
                    this.showAvatar(response.code);
                    this.figure.avatarKey = response.code;
                    this.figure.figureName = response.code;

                    /*const formData = new FormData()
        formData.append("avatarKey", this.figure.avatarKey)
        formData.append("imageName", this.figure.imagePath)*/
                    this.figure.userId = this.$store.state.member.id;
                    this.figure.createdDate = new Date()
                    FigureService.saveUserFigure(this.figure);
                    this.limit = this.limit - 1;
                  }
                }, 6000);
              }, 6000);
            }, 6000);
          }, 6000);
        }, 6000);
      } else {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
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
    change() {
      this.man = !this.man;
    },
  },
  validations: {
    inviteMail: {
      first: {required, email,},
      second: {required, email, sameAsPassword: not(sameAs("first"))},
      third: {required, email, sameAsPassword: and(not(sameAs("first")), not(sameAs("second")))}
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
.btnDavet i{
  font-weight:bold;
  font-size:1rem !important;
}
.xl-popup .vs-popup{
  width: 950px !important;
}
.xl-popup .vs-popup--content {
  width: 100%;
  overflow-x:hidden;
  padding:0 !important;
  margin: 0 !important;
  border-bottom-left-radius:.5rem !important;
  border-bottom-right-radius:.5rem !important;
}
</style>