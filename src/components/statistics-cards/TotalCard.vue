<template>
  <vx-card class="overflow-hidden">
    <div slot="no-body">
      <div
        class="p-6 pb-10"
        :class="{'flex justify-between flex-row-reverse items-center': iconRight}"
      >
        <feather-icon
          :icon="icon"
          class="p-3 inline-flex rounded-full"
          :class="[`text-${color}`, {'mb-4': !iconRight}]"
          :style="{background: `rgba(var(--vs-${color}),.15)`}"
        ></feather-icon>
        <div>
          <h3 class="mb-1 font-bold">{{ statistic }}</h3>
          <span>{{ statisticTitle }}</span>
        </div>
      </div>
      <vs-button class="w-100 rounded-0 text-right" :color="btnColor" :type="btnType" :to="toLink" >
        <span class="text-white">{{ btnText }}</span>
      </vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    btnText: {
      type: String,
      default: "Detaylar"
    },
    toLink: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      default: "gradient"
    },
    btnColor: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {
      type: Object
    },
    color: {
      type: String,
      default: "primary"
    },
    chartType: {
      type: String,
      default: "line-chart"
    },
    type: {
      type: String,
      default: "line"
    },
    iconRight: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: { monochrome: { color: this.getHex() } }
      });
    }
  },
  computed: {
    themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex() {
      let rgb = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--vs-${this.color}`);
      rgb = rgb.split(",");
      return (
        "#" +
        (
          (1 << 24) +
          (Number(rgb[0]) << 16) +
          (Number(rgb[1]) << 8) +
          Number(rgb[2])
        )
          .toString(16)
          .slice(1)
      );
    }
  },
  created() {
    if (this.type == "area") {
      this.chartData.chartOptions["theme"] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: "light",
          shadeIntensity: 0.65
        }
      };
    }
  }
};
</script>