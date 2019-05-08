<!-- =========================================================================================
	File Name: UploadMultiple.vue
	Description: Uploading multiple files at once
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Fotoğraflarım">
    <p>
      Figürünü oluşturmak istediğin fotoğrafı
      <code>Galerinden</code> seçebilir veya yeni fotoğraf yükleyebilirsin.
    </p>

    <div class="mt-5">
      <vs-custom-upload
        :single-upload="true"
        :limit="10"
        class="uploadBtn"
        text="Fotoğraf Yükle"
        :server="actionUrl"
        :avatarsdk="avatarsdk"
        :headers="authHeader"
        :avatarHeaders="avatarHeader"
        fileName="photo"
        accept="image/*"
        @on-success="successUpload"
      />
    </div>
  </vx-card>
</template>

<script>
import ApiService from "@/services/api.service";
import { TokenService } from "@/services/storage.service";
import VsCustomUpload from "@/components/vx-upload/vsCustomUpload";
export default {
  data() {
    return {
      actionUrl: `${ApiService.getBaseURL()}\\images\\upload`,
      avatarsdk: process.env.VUE_APP_AVATAR_SDK_AVATAR_API,
      authHeader: {
        Authorization: `Bearer ${TokenService.getToken()}`
      },
      avatarHeader: {
        Authorization: `Bearer ${TokenService.getAvatarToken()}`
      }
    };
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "<br>Fotoğraf yüklendi!",
        text: ""
      });
    }
  },
  components: {
    VsCustomUpload
  }
};
</script>
