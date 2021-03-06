<template>
  <vx-card>
    <div slot="no-body" class="full-page-bg-color">
      <div class="vx-row">
        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
          <img src="/assets/images/obj/artboard.png" alt="login" class="w-3/5 mx-auto" />
        </div>
        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
          <div class="p-8">
            <div class="vx-card__title mb-8">
              <h4 class="mb-4">{{$t('login.login')}}</h4>
            </div>
            <vs-input
              icon="icon icon-user"
              icon-pack="feather"
              :label-placeholder="$t('login.user')"
              :class="{'vs-input-danger':this.$v.username.$invalid && !first}"
              v-model="username"
              class="w-full mb-6 no-icon-border"
            />
            <vs-input
              type="password"
              icon="icon icon-lock"
              icon-pack="feather"
              :class="{'vs-input-danger':this.$v.password.$invalid && !first}"
              :label-placeholder="$t('login.pass')"
              v-model="password"
              class="w-full mb-4 no-icon-border"
              @keyup.enter="login"
            />
            <div class="flex flex-wrap justify-between py-3">
              <vs-checkbox v-model="remember" class="mb-3">{{$t('login.rem')}}</vs-checkbox>
              <router-link
                v-if="!isPopup"
                to="/forgot-password"
                class="text-sm hover:text-primary"
              >{{$t('login.forgot')}}</router-link>
              <a v-else @click="openForgot" class="cursor-pointer">
                <span class="text-sm">{{$t('login.forgot')}}</span>
              </a>
            </div>

            <vs-button v-if="!isPopup" type="border" to="/register">{{$t('login.reg')}}</vs-button>
            <vs-button type="border" v-else @click="openRegister">{{$t('login.reg')}}</vs-button>
            <vs-button class="float-right" @click="login">{{$t('login.loginbtn')}}</vs-button>

            <vs-divider position="center" class="my-8"></vs-divider>

            <div class="social-login mb-4 flex flex-wrap justify-between">
              <span>{{$t('login.sos')}}</span>
              <div class="social-login-buttons flex">
                <vs-button
                  color="#1551b1"
                  class="mr-4 px-8"
                  icon="icon icon-facebook"
                  icon-pack="feather"
                  @click="faceLogin"
                ></vs-button>
                <vs-button
                  color="#00aaff"
                  class="px-8"
                  icon="icon icon-twitter"
                  icon-pack="feather"
                ></vs-button>
                <v-facebook-login app-id="455703481829848" @login="logged"></v-facebook-login>
              </div>
            </div>
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
import { LoginService } from "@/services/login.service";
import FacebookService from "@/services/facebook.service";
import VFacebookLogin from "vue-facebook-login-component";

export default {
  components: {
    VFacebookLogin
  },
  data() {
    return {
      username: "",
      password: "",
      remember: false,
      first: true
    };
  },
  props: {
    isPopup: {
      type: Boolean
    }
  },
  methods: {
    logged: async function(response) {
      debugger;
      if (response.status === "connected") {
        const response2 = await FacebookService.getFaceInfos(
          response.authResponse.accessToken
        );
        debugger;
        if (response2.status == 200) {
          var credential = {
            mail: response2.data.email,
            id: response2.data.id,
            firstName: response2.data.first_name,
            lastName: response2.data.last_name,
            gender: response2.data.gender
          }
          var status = await LoginService.socialLogin(credential);
          if (status == 200) {
            this.$store.commit("UPDATE_LOGIN_POPUP", false);
            this.$router.push("/main");
          } else {
            this.$vs.notify({
              time: 6000,
              title: "HATA!",
              text: "Lütfen giriş bilgilerinizi kontrol ediniz.",
              color: "danger"
            });
          }
        }
        console.log(response2);
        return;
      }

      //error
    },
    faceLogin: function() {
      const this_ = this;
      this.$auth.authenticate("facebook").then(function() {
        let token = this_.$auth.getToken();
        debugger;
        this_.$http
          .get("https://graph.facebook.com/v3.0/me?fields=id,name,email", {
            params: { access_token: token }
          })
          .then(function(response) {
            debugger;
            this_.profile = JSON.stringify(response);
            this_.$router.push("/main");
          })
          .catch(function(error) {
            debugger;
            console.log(error);
          });
      });
    },
    login: async function() {
      if (this.$v.$invalid) {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen giriş bilgilerinizi kontrol ediniz.",
          color: "danger"
        });
        this.first = false;
        return;
      }
      var credential = {
        username: this.username,
        password: this.password,
        rememberMe: this.remember
      };
      var status = await LoginService.login(credential);
      if (status == 200) {
        this.$store.commit("UPDATE_LOGIN_POPUP", false);
        this.$router.push("/main");
      } else {
        this.$vs.notify({
          time: 6000,
          title: "HATA!",
          text: "Lütfen giriş bilgilerinizi kontrol ediniz.",
          color: "danger"
        });
      }
    },
    openRegister() {
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_FORGOT_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", true);
      this.username = "";
      this.password = "";
      this.remember = false;
      this.first = true;
      // this.$router.push("/register");
    },
    openForgot() {
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_FORGOT_POPUP", true);
      this.$store.commit("UPDATE_REGISTER_POPUP", false);
      this.username = "";
      this.password = "";
      this.remember = false;
      this.first = true;
      // this.$router.push("/register");
    }
  },
  validations: {
    username: { required, email },
    password: { required, minLength: minLength(5), maxLength: maxLength(15) }
  },
  destroyed() {
    this.$store.commit("UPDATE_LOGIN_POPUP", false);
  }
};
</script>