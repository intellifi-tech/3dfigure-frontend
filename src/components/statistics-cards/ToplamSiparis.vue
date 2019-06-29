<template lang="html">
<div class="col-md-4">
	<statistics-card-line
		icon="ShoppingCartIcon"
		icon-right
		statistic="24"
		statisticTitle="Toplam Sipariş"
		:chartData="ordersChartData" />
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
      ordersChartData: {
          series: [{
              name: 'Toplam Sipariş',
              data:  [28, 40, 36, 52, 38, 60, 55]
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
              colors: ['#7367F0'],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      gradientToColors: ['#7367F0'],
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