<template>
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
              <img src="/assets/images/obj/artboard.png" alt="forgot" class="w-3/5 mx-auto" />
            </div>
            <div class="vx-col w-full sm:w-full md:w-full lg:w-1/2 mx-auto bg-white">
              <div class="p-8" v-if="!isPopup">
                <div class="vx-card__title mb-10">
                  <h4 class="mb-4">{{$t('forgot.title')}}</h4>
                  <p>{{$t('forgot.reset.subtitle')}}</p>
                </div>

                <vs-input
                  type="password"
                  :label-placeholder="$t('forgot.reset.placeholder')"
                  v-model="dto.newPassword"
                  class="w-full mb-10"
                />
                 <vs-button
                v-if="!isPopup"
                type="border"
                to="/login"
              >{{$t('login.loginbtn')}}</vs-button>
                <vs-button type="border" v-else @click="openLogin">{{$t('login.loginbtn')}}</vs-button>
                <vs-button @click="newPassword" class="px-4 md:w-auto float-right">{{$t('forgot.btn')}}</vs-button>
              </div>

              <!-- forgot reset finish -->

                <div class="p-8" v-else>
                <div class="vx-card__title mb-10">
                  <h4 class="mb-4">{{$t('forgot.title')}}</h4>
                  <span>{{$t('forgot.email.subtitle')}}</span>
                </div>

                <vs-input
                  :label-placeholder="$t('forgot.email.placeholder')"
                  :class="{'vs-input-danger':this.$v.email.$invalid && !first}"
                  type="text"
                  v-model="email"
                  class="w-full mb-10"
                />
                <vs-button
                v-if="!isPopup"
                type="border"
                to="/login"
              >{{$t('login.loginbtn')}}</vs-button>
                <vs-button type="border" v-else @click="openLogin">{{$t('login.loginbtn')}}</vs-button>
                <vs-button @click="sendMail" class="px-4 md:w-auto float-right">{{$t('forgot.btn')}}</vs-button>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import LoginService from "@/services/login.service";
export default {
  data() {
    return {
      first: true,
      dto: {
        newPassword: "",
        key: ""
      },
      email:"",
    };
  },

props: {
  isPopup: {
    type: Boolean
  }
},
  methods: {
    newPassword: async function() {
      this.dto.key = this.$route.query.key;
      var res = await LoginService.rememberPasswordFinish(this.dto);
      if (res < 400) {
        this.$router.push("/login");
      } else {
       this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "İşlem başarısız.",
          color: "danger"
        });
      }
      this.dto.key = "";
      this.dto.newPassword = "";
    },
     sendMail: async function() {
       if (this.$v.$invalid) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen e-postayı kontrol ediniz.",
          color: "danger"
        });
        this.first = false
        return;
      }
      var res = await LoginService.rememberPasswordInit(this.email);
      if (res < 400) {
        this.$vs.notify({
          time: 6000,
          title: "Başarılı!",
          text: "Sıfırlama e-postası gönderildi.",
          color: "success"
        });
        this.$store.commit("UPDATE_FORGOT_POPUP", false);
        this.email = "";
        this.first = true
      } 
      else if(res == 404){
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "E-posta bulunamadı.",
          color: "danger"
        });
        this.first=false
      }
      else {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "İşlem başarısız.",
          color: "danger"
        });
        this.first=false
      }
    },
     openLogin() {
       this.$store.commit("UPDATE_FORGOT_POPUP", false);
      this.$store.commit("UPDATE_LOGIN_POPUP", true);
      this.firstName = "",
      this.lastName = "",
      this.email = "",
      this.password = "",
      this.confirm = "",
      this.checkBox1 = false,
      this.first = true
    },
  },
    validations: {
    email: { required, email },
  }
};
</script>