<template lang="html">
<div class="col-md-6">
	<apex-area-line-chart AreaLineChartTitle="Satış $" AreaLineChartSubtitle="Aylık"/>
</div>
</template>

<script>
import ApexAreaLineChart from '@/components/statistics-cards/ApexAreaLineChart.vue'

export default {
  components: {
    ApexAreaLineChart
  },
  data() {
    return {
    }
  }
}
</script>