<template>
  <div>
    <h1>{{ cryptoName }} Prix : ${{ price }}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCryptoData } from '../services/binance.js';

export default {
  props: ['cryptoname'],
  setup(props) {
    const price = ref(null);
    const cryptoName = ref(props.cryptoname);

    onMounted(async () => {
      const data = await getCryptoData(cryptoName.value);
      const latestData = data[data.length - 1];
      price.value = latestData[4];  // closing price
    });

    return {
      price,
      cryptoName
    };
  }
}
</script>

<style scoped>
/* Ajoutez ici le CSS pour styliser votre composant */
</style>
