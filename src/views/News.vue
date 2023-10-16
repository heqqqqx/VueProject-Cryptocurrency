<template>
  <div class="news-container">
    <div v-for="(newsItem, index) in news" :key="index" class="news-item">
      <div class="ticker-box">
        {{ newsItem.tickers.join(', ') }}
      </div>
      <img :src="newsItem.image_url" alt="News Image" class="news-image">
      <h2>{{ newsItem.title }}</h2>
      <p>{{ newsItem.text }}</p>
      <a :href="newsItem.news_url" target="_blank">Read more</a>
    </div>
  </div>
</template>

<script>
import cryptonews from '@/services/cryptonews.js';

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    cryptonews.getNews().then(response => {
      this.news = response.data.data;
    });
  },
};
</script>

<style scoped>
.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px)); 
  gap: 20px;
  padding: 20px;
}

.news-item {
  background-color: rgb(25, 26, 26);
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
}
.ticker-box {
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffcc00; /* Yellow background like a post-it */
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
}

.news-item img {
  max-width: 100%;
  border-radius: 10px 10px 0 0;
}

.news-item h2 {
  font-size: 1.2rem;
  margin-top: 0;
}

.news-item p {
  font-size: 1rem;
}

.news-item a {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
  color: #007BFF;
  text-decoration: none;
}

/* Add this media query */
@media (min-width: 1025px) {
  .news-container {
    grid-template-columns: repeat(3, 400px);
  }
}

</style>
