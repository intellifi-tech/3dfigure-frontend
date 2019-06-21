<template>
  <div></div>
</template>

<script>
import ActivationService from "@/services/activation.service";
export default {
  created: async function() {
      debugger
    var res = await ActivationService.activateUser(this.$route.query.key);
    if (res < 400) {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
