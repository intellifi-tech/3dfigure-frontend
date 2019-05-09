<template>
  <unity
    src="assets/utils/unity/build11_just_pre.json"
    class="w-100 responsive"
    height="550"
    unityLoader="assets/utils/unity/UnityLoader.js"
    ref="myInstance"
  ></unity>
</template>

<script>
import Unity from "vue-unity-webgl";

export default {
  props: {
    avatar: {
      default: null,
      type: String
    }
  },
  components: {
    Unity
  },
  methods: {
    sendAvatar(avatarId) {
      this.$refs.myInstance.message("Canvas", "showAvatar", avatarId);
    }
  }
};
</script>
<style>
.webgl-content .footer {
  display: none !important;
}
</style>