<template lang="html">
<div class="col-md-6">
	<apex-area-line-chart AreaLineChartTitle="Kayıtlı Kullanıcı" AreaLineChartSubtitle="Günlük" :chartData="lineAreaChartSpline" />
</div>
</template>

<script>
import ApexAreaLineChart from '@/components/statistics-cards/ApexAreaLineChart.vue'
import DashboardService from "@/services/admin/dashboard.service.js"

export default {
  components: {
    ApexAreaLineChart
  },
  created: async function() {
	var data = await DashboardService.getUsersMonthly();
	var d = []
	d.length = 12
	d.fill(0)
	data.forEach(element => {
		const index = element.split("-")[0] - 1
		const value = element.split("-")[1]
		d.splice(index, 1, value);
	});
	this.lineAreaChartSpline.series[0].data = d

  },
  data() {
    return {
      lineAreaChartSpline: {
		series: [{
				name: 'Kaydolan Kullanıcı',
				data: [11, 32, 45, 32, 34, 52, 41, 23, 44, 22, 122, 32]
		}],
		chartOptions: {
			dataLabels: {
				enabled: true
			},
			stroke: {
				curve: 'smooth'
			},
			colors: ['#28C76F'],
			xaxis: {
				categories: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
			}
		}
	}
    }
  }
}
</script>