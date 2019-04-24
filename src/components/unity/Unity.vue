<template>
  <unity src="assets/utils/unity/build8.json" class="w-100 responsive" height="550" unityLoader="assets/utils/unity/UnityLoader.js"></unity>  
</template>

<script>
import Unity from 'vue-unity-webgl'
  
 export default {
    components: {
        Unity
  }
}
</script>
<style>
.webgl-content .footer {display:none !important;}
</style>