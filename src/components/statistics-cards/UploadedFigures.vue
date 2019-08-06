<template lang="html">
<div class="col-md-6">
	<apex-area-line-chart AreaLineChartTitle="Yüklenen Fotoğraflar" AreaLineChartSubtitle="Günlük/Aylık" :chartData="lineAreaChartSpline" />
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
      lineAreaChartSpline: {
		series: [{
				name: 'Aylık Sipariş Sayısı',
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
				categories: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
			}
		}
	}
    }
  }
}
</script>