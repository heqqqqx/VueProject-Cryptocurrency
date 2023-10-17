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
