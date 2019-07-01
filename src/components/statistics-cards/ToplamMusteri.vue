<template lang="html">
<div class="col-md-4">
	<statistics-card-line
		icon="UsersIcon"
		icon-right
		statistic="18"
		statisticTitle="Toplam Müşteri"
		:chartData="usersChartData" />
	</div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
  components: {
    StatisticsCardLine
  },
  data() {
    return {
      usersChartData: {
          series: [{
              name: 'Toplam Müşteri',
              data:  [150, 200, 125, 225, 200, 250]
          }],
          chartOptions: {
              grid: {
                  show: false,
                  padding: {
                      left: 0,
                      right: 0
                  }
              },
              chart: {
                  type: 'line',
                  dropShadow: {
                      enabled: true,
                      top: 5,
                      left: 0,
                      blur: 4,
                      opacity: 0.10,
                  },
                  toolbar: {
                      show: false,
                  },
                  sparkline: {
                      enabled: true
                  }
              },
              stroke: {
                  width: 5,
                  curve: 'smooth'
              },
              xaxis: {
                  type: 'numeric',
              },
              colors: ['#EA5455'],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      gradientToColors: ['#EA5455'],
                      shadeIntensity: 1,
                      type: 'horizontal',
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [0, 100, 100, 100]
                  },
              },
              markers: {
                  size: 0,
                  hover: {
                      size: 5
                  }
              },
              tooltip: {
                  x: { show: false }
              },
          }
      },
    }
  }
}
</script>