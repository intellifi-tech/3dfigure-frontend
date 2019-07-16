<!-- =========================================================================================
	File Name: Register.vue
	Description: Register Page
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
          <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto">
        </div>
        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
          <div class="p-8">
            <div class="vx-card__title">
              <h4 class="mb-4">{{$t('register.create')}}</h4>
            </div>
            <div class="clearfix">
              <vs-input
                label-placeholder="FirstName"
                :class="{'vs-input-danger':this.$v.firstName.$invalid && !first}"
                :placeholder="$t('register.first')"
                v-model="firstName"
                class="w-full mb-6"
              />
              <vs-input
                label-placeholder="LastName"
                :class="{'vs-input-danger':this.$v.lastName.$invalid && !first}"
                :placeholder="$t('register.last')"
                v-model="lastName"
                class="w-full mb-6"
              />
              <vs-input
                type="email"
                label-placeholder="Email"
                :class="{'vs-input-danger':this.$v.email.$invalid && !first}"
                :placeholder="$t('register.email')"
                v-model="email"
                class="w-full mb-3"
              />
              <!--<vs-select class="w-full mb-6" v-model="sex">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in sexList"
                  />
              </vs-select>-->
              <div :class="{'vs-select-danger': this.$v.sex.$invalid && !first}">
              <select class="register-sex form-control-lg w-full select-input mb-2 "
                 v-model="sex">
                <option
                  :key="index"
                  v-for="(item,index) in sexList"
                  :value="item.value"
                >{{item.text}}</option>
              </select>
              </div>
              <vs-input
                type="password"
                :class="{'vs-input-danger':this.$v.password.$invalid && !first}"
                label-placeholder="Password"
                :placeholder="$t('register.pass')"
                v-model="password"
                class="w-full mb-6"
              />
              <vs-input
                type="password"
                :class="{'vs-input-danger':this.$v.confirm.$invalid && !first}"
                label-placeholder="Confirm Password"
                :placeholder="$t('register.confirm')"
                v-model="confirm"
                class="w-full mb-6"
              />
              <vs-checkbox v-model="checkBox1" class="pb-4 pt-2">{{$t('register.terms')}}</vs-checkbox>

              
              <vs-button
                v-if="!isPopup"
                type="border"
                to="/login"
              >{{$t('login.loginbtn')}}</vs-button>
              <vs-button type="border" v-else @click="openLogin">{{$t('login.loginbtn')}}</vs-button>
              <vs-button class="float-right" @click="register">{{$t('login.reg')}}</vs-button>
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
  sameAs,
  minLength,
  maxLength,
  alpha,
  helpers
} from "vuelidate/lib/validators";
import { LoginService } from "@/services/login.service";
const turkish = helpers.regex('alpha', /^[a-zA-Z]*$/)
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      checkBox1: false,
      sexList: [{ text: "Male", value: "M" }, { text: "Female", value: "F" }],
      sex: "M",
      first: true
    };
  },
  props: {
    isPopup: {
      type: Boolean
    }
  },
  methods: {
    register: async function() {
      if (this.$v.$invalid || !this.checkBox1) {
        this.$vs.notify({
          title: "HATA!",
          text: "Lütfen bilgilerinizi kontrol ediniz.",
          color: "danger"
        });
        this.first = false
        return;
      }
      var credential = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        login: this.email,
        password: this.password,
        sex: this.sex,
        langKey: "en"
      };
      var res = await LoginService.register(credential);
      debugger
      if (res.status < 400) {
        /*this.$vs.notify({
          title: "BAŞARILI!",
          text: "Aktivasyon linki e-postanıza gönderilmiştir. Mailin ulaşması biraz zaman alabilir",
          color: "success",
        })*/
        this.$vs.dialog({
          color:'success',
          title: "Başarılı!",
          text: 'Aktivasyon linki e-postanıza gönderilmiştir. E-postanın ulaşması biraz zaman alabilir.',
          acceptText: "Anladım"
        })
        this.openLogin();
      } else {
        if (res.data.errorKey === "userexists") {
          this.$vs.notify({
          title: "HATA!",
          text: "Bu e-posta zaten kayıtlıdır.",
          color: "danger"
        });
        } else {
        this.$vs.notify({
          title: "HATA!",
          text: "Kayıt başarısız.",
          color: "danger"
        });
        }
      }
    },
    openLogin() {
      this.$store.commit("UPDATE_REGISTER_POPUP", false);
      this.$store.commit("UPDATE_LOGIN_POPUP", true);
      this.firstName = "",
      this.lastName = "",
      this.email = "",
      this.password = "",
      this.confirm = "",
      this.checkBox1 = false,
      this.first = true
    }
  },
  validations: {
    email: { required, email },
    firstName: { required, minLength: minLength(2), alpha, turkish },
    lastName: { required, minLength: minLength(2), alpha },
    sex: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(15) },
    confirm: { required, sameAsPassword: sameAs("password") }
  }
};
</script>