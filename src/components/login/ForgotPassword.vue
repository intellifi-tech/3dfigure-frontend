<template>
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
              <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto" />
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
              <div class="p-8">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">{{$t('login.forgot')}}</h4>
                  <p>{{$t('login.forgotsubtitle')}}</p>
                </div>

                <vs-input
                  type="password"
                  :placeholder="$t('login.forgotplaceholder')"
                  v-model="dto.newPassword"
                  class="w-full mb-8"
                />
                <vs-button type="border" @click="openLogin">{{$t('login.loginbtn')}}</vs-button>
                <vs-button @click="newPassword" class="px-4 w-full md:w-auto float-right">{{$t('login.forgotbtn')}}</vs-button>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
</template>

<script>
import LoginService from "@/services/login.service";
export default {
  data() {
    return {
      dto: {
        newPassword: "",
        key: ""
      }
    };
  },

props: {
  isPopup: {
    default:false,
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
        // buraya da kullanıcı bulunamadı notfy error
      }
      this.dto.key = "";
      this.dto.newPassword = "";
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
    }
  }
};
</script>