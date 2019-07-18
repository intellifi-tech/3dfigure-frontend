<template>
  <div class="con-upload">
    <view-upload v-if="viewActive" :src="viewSrc"/>

    <div class="con-img-upload overflow-y-auto preview-images" ref="savedImg">
            <!-- photo upload input start-->
      <div
        :class="{
          'on-progress-all-upload':percent != 0,
          'is-ready-all-upload':percent >= 100,
          'disabled-upload':$attrs.hasOwnProperty('disabled') || !limit
        }"
        class="con-input-upload img-upload bg-primary shadow-primary text-white p-0"
      >
        <input
          ref="fileInput"
          v-bind="$attrs"
          :disabled="$attrs.disabled || !limit"
          type="file"
          @change="getFiles"
        >
        <span class="text-input text-5xl">
          +
          <!--{{ text }}-->
        </span>
        <span :style="{
            width:`${percent}%`
          }" class="input-progress"></span>
      </div>
      <!--photo upload input end-->
      <!-- Burası adamın önceden yüklediği resimlerin olduğu yer db'den çekiliyor -->
      <div class="main-upload img-upload">
        <img :class="{'selectedimg': constantImage}"
          src="assets/images/portre/man/man-0.jpg"
          alt
          v-if="this.$store.state.member.sex === 'M'"
        >
        <img src="assets/images/portre/woman/woman-0.jpg" :class="{'selectedimg': constantImage}"
        alt v-else>
      </div>
      <div
        v-for="(img, index) in this.savedImages"
        :key="index"
        class="main-upload img-upload"
        :class="toogleClass(img.avatarKey)"
      >
        <img
          v-if="img.avatarKey"
          :alt="img.avatarKey"
          :key="index"
          :src="'assets/images/figures/'+img.imagePath"
          @touchend="viewImage(img.imagePath,$event, img.avatarKey)"
          @click="viewImage(img.imagePath,$event, img.avatarKey)"
        >
        <span class="select-span">
          <vs-icon icon-pack="fa fa-check" hidden></vs-icon>
        </span>
      </div>
      <!-- <transition-group v-for="(img,index) in getFilesFilter" :key="index" name="upload"> -->
      <!-- Burası upload edildikten sonra oluşturuluyor -->
      <div
        v-for="(img,index) in getFilesFilter"
        :class="img.error ? 'fileError' : toogleClass(img.avatarKey)"

        :key="index"
        
        class="img-upload main-upload"
      >
        <button class="btn-x-file" @click="removeFile(index)" v-if="!img.avatarKey">
          <i translate="no" class="material-icons notranslate">clear</i>
        </button>
        <button
          :class="{
              'on-progress':img.percent,
              'ready-progress':img.percent >= 100,
              'height-unset':img.avatarKey
            }"
          :style="{
              height:`${img.percent}%`
            }"
          class="btn-upload-file"
          @click="upload(index, true)"
        >
          <i
            translate="no"
            class="material-icons notranslate"
          >{{ img.percent >= 100?img.error?'report_problem':'cloud_done':'cloud_upload' }}</i>
          <span>{{ img.percent }} %</span>
          
        </button>
        <span class="select-span">
          <vs-icon icon-pack="fa fa-check" hidden></vs-icon>
        </span>
        <img
          v-if="img.src"
          :alt="img.avatarKey"
          :style="{
              maxWidth:img.orientation == 'h'?'100%':'none',
              maxHeight:img.orientation == 'w'?'100%':'none'
            }"
          :key="index"
          :src="img.src"
          @touchend="viewImage(img.src,$event, img.avatarKey)"
          @click="viewImage(img.src,$event, img.avatarKey)"
        >
        <h4 v-if="!img.src" class="text-archive">
          <i translate="no" class="material-icons notranslate">description</i>
          <span>{{ img.name }}</span>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
import viewUpload from "./viewUpload";
var lastTap = 0;
export default {
  components: {
    viewUpload
  },
  inheritAttrs: false,
  props: {
    fileName: {
      default: null,
      type: String
    },
    text: {
      default: "Upload File",
      type: String
    },
    textMax: {
      default: "Maximum of files reached",
      type: String
    },
    limit: {
      default: null,
      type: [Number, String]
    },
    server: {
      default: null,
      type: String
    },
    avatarsdk: {
      default: null,
      type: String
    },
    headers: {
      default: null,
      type: Object
    },
    avatarHeaders: {
      default: null,
      type: Object
    },
    data: {
      default: null,
      type: Object
    },
    automatic: {
      default: false,
      type: Boolean
    },
    showUploadButton: {
      default: true,
      type: Boolean
    },
    singleUpload: {
      default: false,
      type: Boolean
    },
    savedImages: {
      default: null,
      type: Array
    }
  },
  data: () => ({
    inputValue: null,
    selectedTags: [],
    type: null,
    srcs: [],
    filesx: [],
    itemRemove: [],
    percent: 0,
    viewActive: false,
    viewSrc: null,
    clicked: -1,
    hideClass: false
  }),
  computed: {

    constantImage() {
      if (this.$store.state.selectedFigures.avatarKey.length == 0) {
        this.$emit('show-avatar', this.$store.state.member.sex == 'M' ? 'd3f54ad9-5b26-4fd7-b7a4-30ba53f42049' : '75c32a9a-346a-4408-b342-65f068a5ce60')
        return true;
      }
      return false;
    },
    getFilesFilter() {
      let files = this.srcs.filter(item => {
        return !item.remove;
      });

      return files;
    },
    postFiles() {
      let postFiles = Array.prototype.slice.call(this.filesx);
      postFiles = postFiles.filter(item => {
        return !item.hasOwnProperty("remove");
      });
      return postFiles.length;
    }
  },
  watch: {
    percent() {
      if (this.percent >= 100) {
        this.srcs.forEach(file => {
          file.percent = 100;
        });
        setTimeout(() => {
          this.percent = 0;
        }, 1000);
      }
    }
  },
  methods: {
    toogleClass(index) {
      const isSelected = this.$store.state.selectedFigures.avatarKey.includes(index);

      return {
        selectedimg: isSelected
      };
    },
    viewImage(src, evt, avatarKey) {
      var timeout;
      if (!avatarKey) {
        var eventx =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)
            ? "touchstart"
            : "click";
        if (eventx == "click") {
          this.viewActive = true;
          this.viewSrc = src;
        } else {
          if (evt.type == "touchend") {
            var currentTime = new Date().getTime();
            var tapLength = currentTime - lastTap;
            clearTimeout(timeout);
            if (tapLength < 500 && tapLength > 0) {
              this.viewActive = true;
              this.viewSrc = src;
              event.preventDefault();
            }
            lastTap = currentTime;
          }
        }
      } else {
        const findex = this.$store.state.selectedFigures.avatarKey.findIndex(t => t == avatarKey);
        const mindex = this.$store.state.selectedFigures.imagePath.findIndex(t => t == src);
        if (findex >= 0) this.$store.commit('DELETE_FIGURE_FROM_SELECTED', {f: findex, m: mindex});
        else {
          if (this.$store.state.selectedFigures.avatarKey.length == 2) {
            this.$vs.notify({
              time: 6000,
              title: "HATA",
              text: "En fazla 2 fotoğraf seçebilirsiniz!",
              color: "danger"
            });
          } else {
            this.$store.commit('ADD_FIGURE_SELECTED', {a: avatarKey, s: src});
          }
        }

        this.$emit('show-avatar', avatarKey)
      }
    },
    removeFile(index) {
      
      this.itemRemove.push(index);
      this.$emit("on-delete", this.filesx[index]);
      this.filesx.splice(index,1)
      this.srcs.splice(index, 1)
    },
    getFiles(e) {
      this.$emit("update:vsFile", e.target.value);
      this.hideClass = false;
      let _this = this;
      function uploadImage(e) {
        let orientation = "h";
        var image = new Image();
        image.src = e.target.result;
        image.onload = function() {
          if (this.width > this.height) {
            orientation = "w";
          }
          switchImage(this, orientation);
        };
      }
      function switchImage(image, orientation) {
        _this.srcs.push({
          src: image.src,
          orientation: orientation,
          type: _this.typex,
          percent: null,
          error: false,
          remove: null,
          avatarKey: null
        });
      }

      var files = e.target.files;
      let count = this.srcs.length - this.itemRemove.length;
      for (const file in files) {
        if (files.hasOwnProperty(file)) {
          if (this.limit) {
            count++;
            if (count > Number(this.limit)) {
              break;
            }
          }

          var reader = new FileReader();
          const filex = files[file];
          if (/image.*/.test(filex.type)) {
            this.typex = "image";
            this.filesx.push(filex);
            reader.onload = uploadImage;
            reader.readAsDataURL(filex);
          } else if (/video.*/.test(filex.type)) {
            this.typex = "video";
            this.filesx.push(filex);
            _this.srcs.push({
              src: null,
              name: filex.name,
              type: "video",
              percent: null,
              error: false,
              remove: null,
              avatarKey: null
            });
          } else {
            this.filesx.push(filex);
            _this.srcs.push({
              src: null,
              name: filex.name,
              percent: null,
              error: false,
              remove: null,
              avatarKey: null
            });
          }
          this.$emit("change", e.target.value, this.filesx);
        }
      }
      const input = this.$refs.fileInput;
      input.type = "text";
      input.type = "file";

      if (this.automatic) {
        this.upload("all");
      }
    },
    upload(index, forAvatar) {
      const formData = new FormData();
      let postFiles = Array.prototype.slice.call(this.filesx);
      if (typeof index == "number") {
        postFiles = [postFiles[index]];
      } else if (index == "all") {
        postFiles = postFiles.filter(item => {
          return !item.hasOwnProperty("remove");
        });
      }

      const data = this.data || {};
      for (var key in data) {
        formData.append(key, data[key]);
      }

      if (this.singleUpload) {
        postFiles.forEach(filex => {
          const formData = new FormData();
          for (var key in data) {
            formData.append(key, data[key]);
          }
          if (forAvatar) {
            formData.append(this.fileName, filex, filex.name);
          } else {
            formData.append(this.fileName, filex, this.srcs[index].avatarKey + '.' + filex.name.split('.').pop());
          }

          this.uploadx(index, formData, forAvatar);
          // this.uploadx(index, formData, true);
        });
      } else {
        postFiles.forEach(filex => {
          formData.append(this.fileName, filex, filex.name);
        });
        this.uploadx(index, formData, forAvatar);
        // this.uploadx(index, formData, true);
      }
    },
    uploadx(index, formData, forAvatar) {
      let self = this;
      const xhr = new XMLHttpRequest();

      xhr.onerror = function error(e) {
        self.$emit("on-error", e);
        if (typeof index == "number") {
          self.srcs[index].error = true;
        }
      };

      xhr.onload = function onload(e) {
        if (xhr.status < 200 || xhr.status >= 300) {
          self.$emit("on-error", e);
          if (typeof index == "number") {
            self.srcs[index].error = true;
          }
        } else {
          if (forAvatar) {
            self.$emit("on-avatar-success", e, index);
            self.upload(index, false);
          } else {
            self.$emit("on-server-success", e, index);
          }
        }
      };

      if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
          if (e.total > 0) {
            let percent = (e.loaded / e.total) * 100;
            if (typeof index == "number") {
              self.srcs[index].percent = Math.trunc(percent);
            } else {
              self.percent = Math.trunc(percent);
            }
          }
        };
      }

      xhr.withCredentials = false;
      let headers = null;

      if (forAvatar) {
        formData.append("pipeline", "head_1.2");
        formData.append("name", "avatar");
        formData.append("pipeline_subtype", "base/legacy");
        xhr.open("POST", this.avatarsdk);

        headers = this.avatarHeaders || {};
      } else {
        xhr.open("POST", this.server);
        headers = this.headers || {};
      }

      for (let head in headers) {
        if (headers.hasOwnProperty(head) && headers[head] !== null) {
          xhr.setRequestHeader(head, headers[head]);
        }
      }

      xhr.send(formData);
    }
  }
};
</script>
<style>
.height-unset{
  height:unset !important;
}
.selectedimg {
  border: 5px solid #2bff45;
}

.selectedimg .select-span .fa {
  z-index: 999;
  position: absolute !important;
  color: #000 !important;
  background-color: #2bff45 !important;
  padding: 10px !important;
  top: 0 !important;
  right: 0 !important;
  display: block !important;
}

.con-img-upload .img-upload img{
    width: 170px;
    height: 170px;
    object-fit: cover;
}

.con-img-upload .img-upload {
  width: 170px;
  height: 170px;
  margin: 15px 5px;

}
.shadow-primary {
  -webkit-box-shadow: 0 5px 20px 0 rgba(var(--vs-primary), 1) !important;
  box-shadow: 0 5px 20px 0 rgba(var(--vs-primary), 1) !important;
}
@media only screen and (min-width: 1440px) {
  .con-img-upload .img-upload {
    margin: 1.5rem;
  }
}
</style>
