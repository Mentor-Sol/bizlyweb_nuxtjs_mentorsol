<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    // this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
