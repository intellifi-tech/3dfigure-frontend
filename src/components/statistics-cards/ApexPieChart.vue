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
            :options="apexChatData.pieChart.chartOptions"
            :series="apexChatData.pieChart.series"
          ></vue-apex-charts>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChatData from "@/components/statistics-cards/apexChartData.js";

export default {
  components: {
    VueApexCharts
  },
  props: {
    pieChartTitle: {
      type: String
    }
  },
  data() {
    return {
      apexChatData: apexChatData
    };
  }
};
</script>