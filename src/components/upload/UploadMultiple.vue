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
      <vs-upload
        class="uploadBtn"
        text="Fotoğraf Yükle "
        action="http://localhost:8080/api/images/upload"
        :headers=authHeader()
        fileName="image"
        @on-success="successUpload"
      />
    </div>
  </vx-card>
</template>

<script>
import { TokenService } from "@/services/storage.service";
export default {
  data() {
    return {
      actionUrl: ''
    }
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "<br>Fotoğraf yüklendi!",
        text: ""
      });
    },
    authHeader() {
      return {
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    }
  }
};
</script>
