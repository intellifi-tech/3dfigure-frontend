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
  <div class="h-screen flex w-full bg-img">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
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
                />
                <div class="flex flex-wrap justify-between my-5">
                  <vs-checkbox v-model="remember" class="mb-3">{{$t('login.rem')}}</vs-checkbox>
                  <router-link to="/pages/forgot-password">{{$t('login.forgot')}}</router-link>
                </div>
                <vs-button type="border" to="/pages/register">{{$t('login.reg')}}</vs-button>
                <vs-button class="float-right" @click="login">{{$t('login.login')}}</vs-button>

                <vs-alert
                  color="danger"
                  :title="$t('login.alert.title')"
                  :active="activated"
                >{{$t('login.alert.message')}}</vs-alert>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import consta from "@/plugins/const";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      password: "",
      remember: false,
      activated: false
    };
  },

  beforeCreate() {
    var jwt = localStorage.getItem("id_token");
    if (jwt) {
      this.$router.push("/main");
    }
  },

  methods: {
    login: function() {
      if (this.$v.$invalid) {
        this.activated = true;
        return;
      }
      this.activated = false;
      var credential = {
        username: this.username,
        password: this.password,
        rememberMe: this.remember
      };
      axios
        .post(consta.LOGIN_URL, credential, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          localStorage.setItem("id_token", res.data.id_token);
          this.$router.push("/main");
        })
        .catch(err => {
          console.error(err);
          this.activated = true;
        });
    }
  },
  validations: {
    username: { required, email },
    password: { required, minLength: minLength(5), maxLength: maxLength(15) }
  }
};
</script>