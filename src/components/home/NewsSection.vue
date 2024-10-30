<template>
  <section class="news">
    <div class="news-container">
      <div class="news-header">
        <h3 class="news-subtitle">Health News</h3>
        <h2>건강소식</h2>
        <p>헬스케어의 최신 트렌드와 정보를</p>
        <p>헬스캐처 커뮤니티에서 한눈에 확인하세요.</p>
        <button class="news-button">소식 더보기 →</button>
      </div>
      <div class="news-list">
        <ul>
          <li v-for="(news, index) in newsItems" :key="index">
            <div class="news-date">{{ news.date }}</div>
            <div class="news-content">
              <div
                class="news-title"
                :class="{ active: selectedNewsIndex === index }"
                @click="selectNews(index)"
              >
                {{ news.title }}
              </div>
              <p class="news-description">{{ news.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsItems: [
        {
          date: "2024-10-01",
          title: "헬스캐처 건강소식 게시판입니다.",
          description: "건강에 대한 최신 정보와 트렌드를 한곳에서 확인하세요.",
        },
        {
          date: "2024-10-01",
          title: "헬스캐처 건강소식 게시판입니다.",
          description: "건강에 대한 최신 정보와 트렌드를 한곳에서 확인하세요.",
        },
        {
          date: "2024-10-01",
          title: "헬스캐처 건강소식 게시판입니다.",
          description: "건강에 대한 최신 정보와 트렌드를 한곳에서 확인하세요.",
        },
      ],
      selectedNewsIndex: null,
    };
  },
  methods: {
    selectNews(index) {
      this.selectedNewsIndex = index;
    },
  },
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #ffffff;
}

.news-container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
}

.news-header {
  flex: 1;
  /* max-width: 300px; */
}

.news-subtitle {
  color: #00a0e9;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.news-header h2 {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
}

.news-header p {
  font-size: 18px;
  color: #666;
  /* line-height: 1.8; */
}

.news-button {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-size: 1.1rem;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s, color 0.3s;
}

.news-button:hover {
  background-color: #f5f5f5;
}

.news-list {
  flex: 2;
}

.news-list ul {
  list-style: none;
  padding: 0;
}

.news-list li {
  display: flex;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid #ddd;
}

.news-date {
  font-size: 1.1rem;
  color: #999;
  width: 120px;
  text-align: left;
}

.news-content {
  flex-grow: 1;
  padding-left: 20px;
}

.news-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.3s;
}

.news-title.active,
.news-title:hover {
  color: #00a0e9;
}

.news-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
}
</style>
