<template>
  <div>
    <crypto-chart :chart-data="binanceData"></crypto-chart>
  </div>
</template>

<script>
import { getCryptoData } from "@/services/binance.js";
import CryptoChart from "@/components/CryptoChart.vue";

export default {
  components: {
    CryptoChart
  },
  data() {
    return {
      binanceData: []  // Tes données provenant de l'API Binance
    };
  },
  async mounted() {
    try {
      const data = await getCryptoData("BTC");  // Assume que tu veux les données pour Bitcoin
      this.binanceData = data;
    } catch (error) {
      console.error("Error fetching Binance data:", error);
    }
  }
}
</script>