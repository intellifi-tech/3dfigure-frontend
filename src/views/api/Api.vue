<template>
<div></div>
</template>

<script>
import LoginService from "@/services/login.service";
export default {
  created: async function() {
      var res = await LoginService.activateUser(this.$route.query.key);
      if (res < 400) {
        this.$router.push("/login");
      }
  }
}
</script>

<style>
</style>
