<template>
  <div class="tradingview-widget-container" style="height: 100%; width: 100%">
    <div id="tradingview_394a0" style="height: calc(100% - 32px); width: 100%"></div>
    <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
  <RedirectButton :cryptoname="cryptoname" />
</template>
  
  <script>
  import RedirectButton from '../components/RedirectButton.vue';
export default {
    components: {
    RedirectButton},
    props: ['cryptoname'],

  mounted() {

    const script = document.createElement('script')

    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      new window.TradingView.widget({
        width: 980,
        height: 610,
        symbol: `BINANCE:${this.cryptoname}USDT`,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        container_id: 'tradingview_394a0'
      })
    }
    document.body.appendChild(script)
  }
}
</script>
  
  <style scoped>
/* Styles si nécessaire */
</style>
  