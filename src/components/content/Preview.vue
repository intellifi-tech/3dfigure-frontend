<template>
  <div>
    <vx-card class="p-2">
      <unity ref="unity"></unity>
    </vx-card>
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
          @click="clicked"
          @on-success="successUpload"
          :showUploadButton="false"
        />
      </div>
    </vx-card>
  </div>
</template>

<script>
import Unity from "@/components/unity/Unity.vue";
import ApiService from "@/services/api.service";
import { TokenService } from "@/services/token.service";
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
    clicked($event) {
      console.log($event)
    },
    successUpload($event) {
      if (response !== "") {
        // Avatar SDK isteğinin sonucu
        var response = JSON.parse($event.currentTarget.response);
        this.$vs.notify({
          color: "success",
          title: "<br>Fotoğraf yüklendi!",
          text: ""
        });
        setTimeout(() => this.$refs.unity.sendAvatar(response.code), 30000);
      }
    }
  },
  components: {
    Unity,
    VsCustomUpload
  }
};
</script>
