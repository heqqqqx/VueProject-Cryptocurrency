<!-- src/components/CryptoChart.vue -->

<template>
    <div>
      <apexchart type="candlestick" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue-apexcharts";
  
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    props: ['chartData'],
    data() {
      return {
        chartOptions: {
          chart: {
            id: "crypto-chart"
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
        series: [
          {
            data: this.transformData(this.chartData)
          }
        ]
      };
    },
    methods: {
      transformData(data) {
        return data.map(item => {
          return {
            x: new Date(item[0]),
            y: [item[1], item[2], item[3], item[4]]
          }
        });
      }
    },
    watch: {
      chartData(newData) {
        this.series[0].data = this.transformData(newData);
      }
    }
  }
  </script>
  