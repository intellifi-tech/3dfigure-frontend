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
                  <h4 class="mb-4">Create Account</h4>
                  <p>Fill the below form to create a new account.</p>
                </div>
                <div class="clearfix">
                  <vs-input
                    label-placeholder="FirstName"
                    placeholder="FirstName"
                    v-model="firstName"
                    class="w-full mb-6"
                  />
                  <vs-input
                    label-placeholder="LastName"
                    placeholder="LastName"
                    v-model="lastName"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="email"
                    label-placeholder="Email"
                    placeholder="Email"
                    v-model="email"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="password"
                    label-placeholder="Password"
                    placeholder="Password"
                    v-model="password"
                    class="w-full mb-6"
                  />
                  <vs-input
                    type="password"
                    label-placeholder="Confirm Password"
                    placeholder="Confirm Password"
                    v-model="confirm"
                    class="w-full mb-6"
                  />
                  <vs-checkbox v-model="checkBox1" class="mb-6">I accept the terms & conditions.</vs-checkbox>
                  <vs-alert
                    color="danger"
                    title="Danger"
                    :active="activated"
                  >Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</vs-alert>
                  <vs-button type="border" to="/pages/login">Login</vs-button>
                  <vs-button class="float-right" @click="register">Register</vs-button>
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
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
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
    register: function() {
      if (this.$v.$invalid) {
        this.activated = true;
        return;
      }
      this.activated = false;
      axios
        .post(
          "http://localhost:8080/api/register",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            login: this.email,
            password: this.password
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.activated = true;
        });
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