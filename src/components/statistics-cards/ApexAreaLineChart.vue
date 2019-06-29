<template>
  <div id="extra-component-chartist-demo">
    <div class="vx-row">
      <!-- LINE AREA CHART -->
      <div class="vx-col w-full mb-base">
        <vx-card>
          <div class="pb-3">
            <span class="text-dark mb-2 h4">{{ AreaLineChartTitle }}</span>
            <span class="text-grey float-right">{{ AreaLineChartSubtitle }}</span>
          </div>
          <vue-apex-charts
            type="area"
            height="350"
            :options="apexChatData.lineAreaChartSpline.chartOptions"
            :series="apexChatData.lineAreaChartSpline.series"
          ></vue-apex-charts>
          <template slot="codeContainer">{{ apexChatData.lineAreaChartSplineCode }}</template>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChatData from "@/components/statistics-cards/apexChartData.js";

export default {
  data() {
    return {
      apexChatData: apexChatData
    };
  },
  props: {
    AreaLineChartTitle: {
      type: String
    },
    AreaLineChartSubtitle: {
      type: String
    }
  },
  components: {
    VueApexCharts
  }
};
</script>