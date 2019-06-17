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
      <register :isPopup="false"></register>
    </div>
  </div>
</template>

<script>
import Register from "@/components/login/Register.vue";
export default {
  components: {
    Register
  }
};
</script>