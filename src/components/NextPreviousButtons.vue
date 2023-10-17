<template>
    <button @click="goToPreviousPage">Previous page</button>
    <button @click="goToNextPage">Next page</button>    
    </template>
  
  <script>
  export default {
    props: ['page'],
    methods: {
    goToNextPage() {
        if (this.page) {
            const nextPage = parseInt(this.page, 10) + 1;
            this.$router.push(`/news/${nextPage}`);
        }
        else {
            const nextPage = parseInt(1, 10) + 1;
            this.$router.push(`/news/${nextPage}`);
        }
                
        
    },
    goToPreviousPage() {
        const previousPage = parseInt(this.page, 10) -1;
        if (previousPage <= 0) {
            previousPage = 1;
        }
        this.$router.push(`/news/${previousPage}`);
    }
}
  }
  </script>
  