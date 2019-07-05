<!-- =========================================================================================
	File Name: Login.vue
	Description: Login Page
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card>
      <div slot="no-body" class="full-page-bg-color">
        <div class="vx-row">
          <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
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
                v-model="username"
                class="w-full mb-6 no-icon-border"
              />
              <vs-input
                type="password"
                icon="icon icon-lock"
                icon-pack="feather"
                :label-placeholder="$t('login.pass')"
                v-model="password"
                class="w-full mb-4 no-icon-border"
                @keyup.enter="login"
              />
              <div class="flex flex-wrap justify-between py-3">
                <vs-checkbox v-model="remember" class="mb-3">{{$t('login.rem')}}</vs-checkbox>
                <!-- <router-link to="/pages/forgot-password">{{$t('login.forgot')}}</router-link> -->
              </div>

             
              <vs-button
                v-if="!isPopup"
                type="border"
                to="/register"
              >{{$t('login.reg')}}</vs-button>
              <vs-button type="border" v-else  @click="openRegister">{{$t('login.reg')}}</vs-button>
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
                  ></vs-button>
                  <vs-button
                    color="#00aaff"
                    class="px-8"
                    icon="icon icon-twitter"
                    icon-pack="feather"
                  ></vs-button>
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
export default {
  data() {
    return {
      username: "",
      password: "",
      remember: false
    };
  },
  props: {
    isPopup: {
      type: Boolean
    }
  },
  methods: {
    login: async function() {
      if (this.$v.$invalid) {
        this.$vs.notify({
          time: 4000,
          title: "HATA!",
          text: "Lütfen bilgileri kontrol ediniz!",
          color: "danger"
        });
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
          time: 4000,
          title: "HATA!",
          text: "Hesap bulunamadı.",
          color: "danger"
        });
      }
    },
    openRegister() {
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", true);
      // this.$router.push("/register");
    }
  },
  validations: {
    username: { required, email },
    password: { required, minLength: minLength(5), maxLength: maxLength(15) }
  }
};
</script>