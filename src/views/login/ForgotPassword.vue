<template>
  <div class="h-screen flex w-full bg-img">
  <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
    <forgot-password :isPopup=false></forgot-password>
    </div>
  </div>
</template>

<script>
import ForgotPassword from "@/components/login/ForgotPassword.vue";

export default {
  components: {
  ForgotPassword
  },
};
</script>