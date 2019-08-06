<template>
  <profile></profile>
</template>

<script>
import Profile from "@/components/profile/Profile.vue";
export default {
  components: {
    Profile
  }
};
</script>
<style>
.profil-tabs .vdp-datepicker{
  font-size:14px
}
.profil-tabs .vdp-datepicker input{
  width:100%
}
.profil-tabs .vdp-datepicker .vdp-datepicker__calendar{
   bottom: 0;
   width:250px;
}
.profil-tabs .vdp-datepicker .vdp-datepicker__calendar .cell{
     height: 30px;
    line-height: 30px;
}
.max-ch{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
}
</style>
