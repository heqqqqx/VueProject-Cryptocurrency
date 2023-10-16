<template>
  <div>
    <crypto-charts :cryptoname="$route.params.cryptoname"></crypto-charts>
    <trading-view-chart :cryptoname="$route.params.cryptoname"></trading-view-chart>
  </div>
</template>

<script>
import CryptoCharts from '../components/CryptoChart.vue';
import TradingViewChart from '../components/TradingViewChart.vue';

export default {
  components: {
    CryptoCharts,
    TradingViewChart
  }
}
</script>
