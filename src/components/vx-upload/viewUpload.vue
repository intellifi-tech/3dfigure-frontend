<template>
  <transition name="view-upload">
    <div
      ref="view"
      class="view-upload"
      @click="closeView">
      <img
        :src="src"
        alt="image">
    </div>
  </transition>
</template>
<script>
  export default {
    name:'ViewUpload',
    props:{
      active:{
        default:false,
        type:Boolean
      },
      src:{
        default:null,
        type:String
      }
    },
    mounted(){
      document.body.insertBefore(this.$refs.view, document.body.firstChild)
    },
    upload(){ //Butonun altta çıkmasının nedeni burası olabilir 
      document.body.insertBefore(this.$refs.view, document.body.firstChild)
    },
    methods:{
      closeView(evt){
        if(evt.target.tagName != 'IMG'){
          this.$parent.viewActive = false
        }
      }
    }
  }
</script>