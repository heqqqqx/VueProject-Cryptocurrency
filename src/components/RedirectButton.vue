<template>
    <button @click="goToNewsPage">News regarding this ticker</button>
  </template>
  
  <script>
  export default {
    props: ['cryptoname'],
    methods: {
      goToNewsPage() {
        this.$router.push(`/news/specific/${this.cryptoname}`);
      }
    }
  }
  </script>
  