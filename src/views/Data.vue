<!-- <template>
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
</script> -->


<template>
  <div>
    <trading-view :cryptoname="this.$route.params.cryptoname" />
  </div>
</template>

<script>
import TradingView from '../components/TradingVue.vue';

export default {
  components: { TradingView }
}
</script>
