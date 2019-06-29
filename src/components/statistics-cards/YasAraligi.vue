<template lang="html">
<div class="col-md-6">
	<apex-pie-chart
  pieChartTitle="Yaş Aralığı"/>
</div>
</template>

<script>
import ApexPieChart from "@/components/statistics-cards/ApexPieChart.vue";

export default {
  components: {
    ApexPieChart
  },
  data() {
    return {};
  }
};
</script>