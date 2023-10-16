<template>
    <div id="chart-container" ref="chartContainer"></div>
  </template>
  
  <script>
  import { createChart } from 'lightweight-charts';
  import { getCryptoData } from '../services/binance.js';
  
  export default {
    props: ['cryptoname'],
    data() {
      return {
        chart: null,
      };
    },
    async mounted() {
      const container = this.$refs.chartContainer;
      this.chart = createChart(container, {
        width: container.offsetWidth,
        height: 400,
        layout: {
          backgroundColor: '#253248',
          textColor: '#ffffff',
        },
        grid: {
          vertLines: {
            color: '#334158',
          },
          horzLines: {
            color: '#334158',
          },
        },
        crosshair: {
          mode: 0,
        },
        rightPriceScale: {
          borderColor: '#485c7b',
          scaleMargins: {
            top: 0.2,
            bottom: 0.2,
          },
        },
        timeScale: {
          borderColor: '#485c7b',
        },
        priceAxis: {
          left: {
            visible: true,
          },
          right: {
            visible: true,
          },
        },
        timeAxis: {
          visible: true,
        },
      });
      const lineSeries = this.chart.addLineSeries({
        color: 'rgba(4, 111, 232, 1)',
        lineWidth: 2,
      });
      const data = await this.fetchChartData();
      lineSeries.setData(data);
      window.addEventListener('resize', () => {
        this.chart.resize(container.offsetWidth, 400);
      });
    },
    methods: {
    async fetchChartData() {
      const rawData = await getCryptoData(this.cryptoname);
      return rawData.map((item, index) => ({
        time: new Date(item[0]).toISOString().substring(0, 10),  // Tronquer la chaîne pour obtenir le format yyyy-mm-dd
        value: parseFloat(item[4]),
      }));
    },
  },
};
  
  </script>
  
  <style scoped>
  #chart-container {
    width: 100%;
    min-width: 400px;
    min-height: 400px;
  }
  </style>
  