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
          @on-server-success="serverUpload"
          @on-avatar-success="avatarUpload"
          :showUploadButton="false"
          ref="upload"
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
import FigureService from "@/services/figure.service";
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
      },
      figure: {
        figureName: null,
        avatarKey: null,
        imagePath: null
      },
      currentAvatar: null
    };
  },
  beforeCreate() {},
  methods: {
    avatarUpload($event, index) {
      // Avatar SDK isteğinin sonucu
      var response = JSON.parse($event.currentTarget.response);
      this.$vs.notify({
        color: "success",
        title: "<br>Fotoğraf yüklendi!",
        text: ""
      });
      this.$refs.upload.srcs[index].avatarKey = response.code;
      setTimeout(() => this.showAvatar(response.code), 30000);
      this.figure.avatarKey = response.code;
      this.figure.figureName = response.code;

      if (this.figure.avatarKey && this.figure.imagePath) {
        /*const formData = new FormData()
        formData.append("avatarKey", this.figure.avatarKey)
        formData.append("imageName", this.figure.imagePath)*/
        FigureService.saveUserFigure(this.figure);
      }
    },
    serverUpload($event) {
      this.figure.imagePath = $event.currentTarget.response;
    },
    showAvatar(code) {
      this.$refs.unity.sendAvatar(code);
    }
  },
  components: {
    Unity,
    VsCustomUpload
  }
};
</script>
