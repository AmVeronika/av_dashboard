<template>
  <DoughnutChart v-bind="doughnutChartProps" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "vue";

Chart.register(...registerables);

export default defineComponent({
  name: "Diagram",
  components: {
    DoughnutChart,
  },
  setup() {
    const data = ref([30, 40, 60]);

    const chartData = computed(() => ({
      labels: ["Выполнено", "В работе", "Нерешённые задачи"],
      datasets: [
        {
          data: data.value,
          backgroundColor: ["#2ED47A", "#FFB946", "#F7685B"],
        },
      ],
    }));

    const options = computed(() => ({
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
          },
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData,
      options,
    });

    return { doughnutChartProps, doughnutChartRef, options };
  },
});
</script>
