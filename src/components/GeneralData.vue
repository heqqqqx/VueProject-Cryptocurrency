<template>
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
  setupClickListeners() {
    const rows = document.querySelectorAll('.tv-data-table__row');
    rows.forEach(row => {
      row.addEventListener('click', this.handleRowClick);
    });
  },
  handleRowClick(event) {
    console.log("clicked");
    const symbol = event.currentTarget.getAttribute('data-symbol').split(':')[1];
    this.$router.push(`/data/${symbol}`);
  }
},
mounted() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    width: 1000,
    height: 490,
    defaultColumn: "overview",
    screener_type: "crypto_mkt",
    displayCurrency: "USD",
    colorTheme: "dark",
    largeChartUrl: "http://127.0.0.1:5173/data/{tvsymbol}",

    locale: "en",
  });
  this.$el.appendChild(script);
  
  const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if(mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        this.setupClickListeners();
      }
    }
  });
  
  observer.observe(this.$el, { childList: true, subtree: true });
}

  }
  </script>
  
  <style scoped>
  .tradingview-widget-container {
    margin-top: 60px;
  }
  </style>