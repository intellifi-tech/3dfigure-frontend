<template lang="html">
<div class="col-md-6">
	<apex-pie-chart
  pieChartTitle="Yaş Aralığı" :pieChart="pieChart" />
</div>
</template>

<script>
import ApexPieChart from "@/components/statistics-cards/ApexPieChart.vue";
import DashboardService from "@/services/admin/dashboard.service.js"

export default {
  components: {
    ApexPieChart
  },
  created: async function() {
    const data = await DashboardService.getAgeCategory()
    this.pieChart.series = data.split("-").map(Number);
  },
  data() {
    return {
      	pieChart: {
		series: [44, 55, 13, 43],
		chartOptions: {
			labels: ['<20', '20-30', '30-50', '>50'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}
	},
    };
  }
};
</script>