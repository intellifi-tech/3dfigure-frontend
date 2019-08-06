<template>
  <div id="extra-component-chartist-demo">
    <div class="vx-row">
      <!-- PIE CHART -->
      <div class="vx-col w-full mb-base">
        <vx-card>
          <h4 class="mb-2">{{ pieChartTitle }}</h4>
          <vue-apex-charts
            type="pie"
            height="400"
            :options="pieChart.chartOptions"
            :series="pieChart.series"
          ></vue-apex-charts>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  props: {
    pieChartTitle: {
      type: String
    },
    pieChart: {
      type: Object
    }
  }
};
</script>