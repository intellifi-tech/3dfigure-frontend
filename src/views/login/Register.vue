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
  <div class="h-screen flex w-full bg-img">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
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
                    :placeholder="$t('register.first')"
                    v-model="firstName"
                    class="w-full mb-6"
                  />
                  <vs-input
                    label-placeholder="LastName"
                    :placeholder="$t('register.last')"
                    v-model="lastName"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="email"
                    label-placeholder="Email"
                    :placeholder="$t('register.email')"
                    v-model="email"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="password"
                    label-placeholder="Password"
                    :placeholder="$t('register.pass')"
                    v-model="password"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="password"
                    label-placeholder="Confirm Password"
                    :placeholder="$t('register.confirm')"
                    v-model="confirm"
                    class="w-full mb-6"
                  />
                  <vs-checkbox v-model="checkBox1" class="pb-4 pt-2">{{$t('register.terms')}}</vs-checkbox>
                  <vs-alert
                    class="mb-3"
                    color="danger"
                    :title="$t('register.alert.title')"
                    :active="activated"
                  >{{$t('register.alert.message')}}</vs-alert>
                  <vs-button  @click="register">{{$t('login.reg')}}</vs-button>
                  <vs-button class="float-right" type="border" to="/login">{{$t('login.loginbtn')}}</vs-button>
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
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators"
import { LoginService } from "@/services/login.service"
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
      checkBox1: false,
      activated: false
    };
  },
  methods: {
    register: async function() {
      if (this.$v.$invalid && !this.checkBox1) {
        this.activated = true;
        return;
      }
      this.activated = false;
      var credential = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        login: this.email,
        password: this.password
      };
      var status = await LoginService.register(credential)
      if (status < 400) {
        this.$router.push('/login')
      }
    }
  },
  validations: {
    email: { required, email },
    firstName: { required },
    lastName: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(15) },
    confirm: { required, sameAsPassword: sameAs("password") }
  }
};
</script>