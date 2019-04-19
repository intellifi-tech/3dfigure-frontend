<template>
  <unity src="assets/utils/unity/build3.json" class="w-100 responsive" height="750" unityLoader="assets/utils/unity/UnityLoader.js"></unity>  
</template>

<script>
import Unity from 'vue-unity-webgl'
  
 export default {
    components: {
        Unity
  }
}
</script>