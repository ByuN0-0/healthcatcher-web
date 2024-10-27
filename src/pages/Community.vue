<template>
    <div class="community-page">
      <!-- Hero Section -->
      <section class="hero">
        <img src="@/assets/introductionbanner1.jpg" alt="Hero Background" />
        <div class="hero-text">
          <h1>헬스캐처 커뮤니티</h1>
          <p>HEALTH CATCHER COMMUNITY</p>
        </div>
      </section>
  
      <!-- Navigation Tabs -->
      <div class="tab-navigation">
        <div class="tab-container">
          <div 
            class="tab-item" 
            :class="{ active: currentTab === '커뮤니티' }"
            @click="currentTab = '커뮤니티'"
          >
            커뮤니티
          </div>
          <div 
            class="tab-item" 
            :class="{ active: currentTab === '소통 공간' }"
            @click="currentTab = '소통 공간'"
          >
            소통 공간
          </div>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="content-section" v-if="currentTab === '커뮤니티'">
        <h2>건강 소식</h2>
        <div class="content-description">
          <p>"헬스케어의 최신 트렌드와 정보를 헬스캐처 커뮤니티에서 한눈에 확인하세요."</p>
          <p class="sub-text">건강에 대한 최신 정보와 트렌드를 한곳에서 확인하세요. 누구나 실천할 수 있는 건강 정보를 통해, 더욱 건강한 일상을 얻을수있어요.</p>
          <p class="sub-text">헬스케처 커뮤니티는 시작하려는 건강과 관련한 최신 정보를 통해 건강 수준을 높일 수 있는 곳입니다.</p>
          <p class="sub-text">혼자서만 알고 있기에는 너무 좋은 트렌드, 차별화 정보들을 공유하여 그 누구 생활을 좀 더 좋게 높일 수 있는 다양한 콘텐츠를 제공합니다.</p>
        </div>
      </div>
  
      <div class="content-section" v-if="currentTab === '소통 공간'">
        <h2>소통 공간</h2>
        <div class="content-description">
          <p>"함께 나누는 건강 이야기, 헬스캐처와 함께 건강 목표를 실천하세요."</p>
          <p class="sub-text">건강을 해결하는 이야기를 나누는 공간입니다.</p>
          <p class="sub-text">일상 속 건강 관리, 좋은 그리고 다양한 정보를 함께 나누어보세요.</p>
        </div>
  
        <div class="button-group">
          <button class="info-button">일상 자유</button>
          <button class="info-button active">정보 공유</button>
        </div>
      </div>
  
      <!-- Posts Table -->
      <div class="posts-table">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>{{ 11 - i }}</td>
              <td>헬스캐처 {{ currentTab === '커뮤니티' ? '건강 소식 게시판입니다.' : '소통 공간 정보 자유 게시판입니다.' }}</td>
              <td>헬스캐처</td>
              <td>2024-10-01</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Pagination -->
      <div class="pagination">
        <button class="page-button">1</button>
        <button class="page-button">2</button>
        <button class="page-button">3</button>
        <button class="page-button">4</button>
        <button class="page-button">5</button>
        <button class="page-button">6</button>
        <button class="page-button">7</button>
        <button class="page-button">...</button>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommunityPage',
    data() {
      return {
        currentTab: '커뮤니티'
      }
    }
  }
  </script>
  
  <style scoped>
  .community-page {
    width: 100%;
    min-height: 100vh;
  }
  
  /* Hero Section */
.hero {
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-text {
  text-align: center;
  color: white;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
}
  
  .tab-navigation {
    text-align: center;
    background-color: #f5f5f5;
    padding: 15px 0;
  }
  
  .tab-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 15px 0;
  }
  
  .tab-item {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #000;
    border-bottom: 2px solid transparent;
  }
  
  .tab-item.active {
    border-bottom: 2px solid #00a0e9;
  }
  
  .content-section {
    max-width: 1200px;
    margin: 60px auto;
    text-align: center;
  }
  
  .content-section h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  .content-description {
    margin-bottom: 40px;
  }
  
  .content-description p {
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }
  
  .content-description .sub-text {
    font-size: 14px;
    color: #666;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
  }
  
  .info-button {
    padding: 10px 30px;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  .info-button.active {
    background-color: #00a0e9;
    color: white;
  }
  
  .posts-table {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 40px 0;
  }
  
  .page-button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
  }
  
  footer {
    background-color: #333;
    color: white;
    padding: 40px 0;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .company-info {
    margin: 20px 0;
  }
  
  .company-info p {
    margin: 5px 0;
    font-size: 14px;
  }
  
  .copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: #999;
  }
  </style>