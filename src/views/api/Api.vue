<template>
  <div>
    <div v-if="this.$route.query.type == 'pass'">
      <!-- Buraya yeni şifre alınacak -->
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
  
    }
  },
  created: async function() {
    if (this.$route.query.type == 'activation') {
      var res = await LoginService.activateUser(this.$route.query.key);
        if (res < 400) {
      this.$router.push("/login");
      }
    }
  },
  methods: {
    newPassword: async function() {
      this.dto.key = this.$route.query.key
      var res = await LoginService.rememberPasswordFinish(this.dto);
        if (res < 400) {
          this.$router.push("/login");
        } else {
          // buraya da kullanıcı bulunamadı notfy error
        }
      this.dto.key = ""
      this.dto.newPassword = ""
    }
  }
}
</script>

<style>
</style>
