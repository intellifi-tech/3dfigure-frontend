<template lang="html">
<div class="col-md-4">
	<statistics-card-line
		icon="ShoppingBagIcon"
		icon-right
		statistic="42"
		statisticTitle="Toplam Satış"
		:chartData="salesChartData" />
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
      salesChartData: {
          series: [{
              name: 'Toplam Satış',
              data: [10, 15, 8, 15, 7, 12, 8]
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
              colors: ['#FF9F43'],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      gradientToColors: ['#FF9F43'],
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