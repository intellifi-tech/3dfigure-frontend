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
        </span>{{$t('dashboard.main.wizard.tabOne.infoBoard.title')}}</h4>
        <p v-html="$t('dashboard.main.wizard.tabOne.infoBoard.descOne')">
           <br>
        </p>
        <p class="mb-3" v-html="$t('dashboard.main.wizard.tabOne.infoBoard.descTwo')">
        </p>
        <p class="mb-3" v-if="!limit" v-html="$t('dashboard.main.wizard.tabOne.infoBoard.descLimit')">
        </p>
      </vx-card>
    </div>
    <!--unity card column-->
    <div class="col-lg-6 mb-3">
      <vx-card class="fotograflarim-card">
        <div class="row">
         <div class="col-xl-4 pt-2">
            <h4 class="pb-4"> {{$t('dashboard.main.wizard.tabOne.gallery.title')}}</h4>
         </div>
         <div class="col-xl-8 text-md-right pt-2">
            <h6>{{$t('dashboard.main.wizard.tabOne.gallery.subTitle')}} </h6>
            <div class="alignright flex">
            <span class="text-primary h3 pr-2"> {{showLimit}} / {{ this.$store.state.member.totalFigure}}</span>
            <vs-button @click="openInvitePopup=true" class="btnDavet" color="success" type="filled" icon="add" size="small" radius></vs-button>
            </div>
          
         </div>
        </div>
        <p>   
          <span>{{$t('dashboard.main.wizard.tabOne.gallery.descOneFirst')}} <b class="cursor-pointer hover:underline text-primary" @click="popupContent">{{$t('dashboard.main.wizard.tabOne.gallery.descOneSecond')}}</b> {{$t('dashboard.main.wizard.tabOne.gallery.descOneThird')}}</span>
        </p>
        <p v-html="$t('dashboard.main.wizard.tabOne.gallery.descTwo')">
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
     
<vs-popup @close="closePopup" :active.sync="openInvitePopup" :title="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.title')">
     <div class="vx-row mb-4">
             <div class="vx-col w-full mb-3">
                <span v-html="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.descOne')"></span>
                <br><br>
                <span v-html="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.descTwo')"></span>
              </div>
              <div class="vx-col w-full">
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.first.$invalid && !first}"
                  :label-placeholder="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.inputOne')"
                  v-model="inviteMail.first"
                />
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.second.$invalid && !first}"
                  :label-placeholder="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.inputTwo')"
                  v-model="inviteMail.second"
                />
                <vs-input
                  type="text"
                  class="w-full"
                  :class="{'vs-input-danger': this.$v.inviteMail.third.$invalid && !first}"
                  :label-placeholder="$t('dashboard.main.wizard.tabOne.gallery.invitePopup.inputThree')"
                  v-model="inviteMail.third"
                />
              </div>
      </div>
             <div class="vx-row mb-1">
              <div class="vx-col w-full">
                       <vs-button icon="mail" color="success" class="float-right" @click="mailSend">{{$t('dashboard.main.wizard.tabOne.gallery.invitePopup.btnSubmit')}}</vs-button>
              </div>
            </div>
    </vs-popup>
    <vs-popup class="xl-popup" :active.sync="popupContentHow" :title="$t('dashboard.main.wizard.tabOne.gallery.howToPopup.title')">
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
          title: `${this.$i18n.messages[this.$i18n.locale].notify.success.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.invite}`,
          color: "success"
        });
      } else if (this.$v.inviteMail.$invalid) {
        this.first=false;
          this.$vs.notify({
            time: 6000,
            title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
            text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.preview.invite}`,
            color: "danger"
          });
      } else {
        this.$vs.notify({
          time: 6000,
          title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.preview.inviteLimit}`,
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
          text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.one}`,
          clickEffect: true,
          textAfter: true
        });
        setTimeout(() => {
          this.$vs.loading.close();
          this.$vs.loading({
            text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.two}`,
            clickEffect: true,
            textAfter: true
          });
          setTimeout(() => {
            this.$vs.loading.close();
            this.$vs.loading({
              text:`${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.three}`,
              clickEffect: true,
              textAfter: true
            });
            setTimeout(() => {
              this.$vs.loading.close();
              this.$vs.loading({
                text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.four}`,
                clickEffect: true,
                textAfter: true
              });
              setTimeout(() => {
                this.$vs.loading.close();
                this.$vs.loading({
                  text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.five}`,
                  clickEffect: true,
                  textAfter: true
                });
                setTimeout(async () => {
                  this.$vs.loading.close();
                  this.$vs.loading({
                      text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.six}`,
                      clickEffect: true,
                      textAfter: true
                  });
                  setTimeout(() => {
                    this.$vs.loading.close();
                    this.$vs.loading({
                      text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.loading.seven}`,
                      clickEffect: true,
                      textAfter: true
                    });
                    setTimeout(() => {
                      this.$vs.loading.close();
                       this.$vs.notify({
                           time: 6000,
                           title: `${this.$i18n.messages[this.$i18n.locale].notify.success.title}`,
                           text: `${this.$i18n.messages[this.$i18n.locale].notify.success.text.preview.upload.default}`,
                           color: "success"
                         });
                      }, 8000)
                  }, 8000)
                  var res = await AvatarSdkService.getAvatarInformation(
                    response.code
                  );
                  if (res.data.status === "Failed") {
                    this.$vs.notify({
                      title:`${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
                      time: 6000,
                      text:`${this.$i18n.messages[this.$i18n.locale].notify.error.text.preview.upload.default}`,
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
          title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
          text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.preview.upload.default}`,
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