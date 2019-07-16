<template>
  <div class="h-screen flex w-full bg-img">
    <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
              <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto" />
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
              <div class="p-8">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Parola sıfırlama</h4>
                  <p>Yeni Şifrenizi giriniz</p>
                </div>

                <vs-input
                  type="password"
                  label-placeholder="Yeni Şifre"
                  v-model="dto.newPassword"
                  class="w-full mb-8"
                />
                <vs-button type="border" @click="newPassword" class="px-4 w-full md:w-auto">Parola Sıfırla</vs-button>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
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
    }
  }
};
</script>