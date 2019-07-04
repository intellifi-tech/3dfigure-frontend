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
.vdp-datepicker{
  font-size:14px
}
.vdp-datepicker input{
  width:100%
}
.vdp-datepicker .vdp-datepicker__calendar{
   bottom: 0;
   width:250px;
}
.vdp-datepicker .vdp-datepicker__calendar .cell{
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
