<template>
  <unity src="../../assets/utils/unity/BuildWeb.json" width="1000" height="600" unityLoader="../../assets/utils/unity/UnityLoader.js"></unity>  
</template>

<script>
  import Unity from 'vue-unity-webgl'
  
 export default {
    components: {
        Unity
    }
}
</script>