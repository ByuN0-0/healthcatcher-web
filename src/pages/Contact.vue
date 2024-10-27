<template>
    <div class="concat-page">
      <!-- Hero Section -->
      <section class="hero">
        <img src="@/assets/introductionbanner1.jpg" alt="문의 페이지 배너" />
        <div class="hero-text">
          <h1>헬스캐처 문의</h1>
          <p>HEALTH CATCHER CONTACT</p>
        </div>
      </section>
  
      <!-- 네비게이션 -->
      <nav class="concat-nav">
        <ul>
          <li
            :class="{ active: isQnASection }"
            @click="showQnASection"
          >
            고객 Q&A
          </li>
          <li
            :class="{ active: !isQnASection }"
            @click="showPartnerSection"
          >
            파트너십 문의
          </li>
        </ul>
      </nav>
  
      <!-- 고객 Q&A 섹션 -->
      <section v-if="isQnASection" class="qna-section">
        <div class="title-container">
          <h2>고객 Q&A</h2>
        </div>
        <div class="qna-content">
          <p>"헬스캐처 서비스에 대한 궁금증을 해결해드립니다. FAQ에서 모든 정보를 빠르게 확인하세요."</p>
          <div class="qna-list">
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
                <tr v-for="(qna, index) in qnaList" :key="index">
                  <td>{{ qnaList.length - index }}</td>
                  <td>{{ qna.title }}</td>
                  <td>{{ qna.author }}</td>
                  <td>{{ qna.date }}</td>
                </tr>
              </tbody>
            </table>
            <div class="pagination">
              <span v-for="page in totalPages" :key="page">{{ page }}</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 파트너십 문의 섹션 -->
      <section v-else class="partner-section">
        <div class="title-container">
          <h2>파트너십 문의</h2>
        </div>
        <div class="partner-content">
          <p>
            헬스캐처와 함께 혁신적인 건강 솔루션을 만들어갈
            <span class="highlight">비즈니스 파트너</span>를 찾고 있습니다.
          </p>
          <div class="icons-section">
            <div class="icon-item">
              <p>광고</p>
            </div>
            <div class="icon-item">
              <p>협력</p>
            </div>
            <div class="icon-item">
              <p>후원</p>
            </div>
            <div class="icon-item">
              <p>투자</p>
            </div>
          </div>
          <p class="partner-details">
            헬스캐처는 가능한 성장의 기회를 제공하고자 다양한 기업과 협력을 추구합니다. 우리의 목표는 사용자들의 건강 증진을 위한 최적화된 솔루션을 제공하는 것입니다. <br/>
            함께 더 건강하고 지속 가능한 미래를 만들어나가요.
          </p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConcatPage",
    data() {
      return {
        isQnASection: true,
        qnaList: [
          { title: '헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?', author: '헬스케어', date: '2024-01-01' },
          { title: '헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?', author: '헬스케어', date: '2024-01-01' },
          { title: '헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?', author: '헬스케어', date: '2024-01-01' },
          { title: '헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?', author: '헬스케어', date: '2024-01-01' },
        ],
        totalPages: 5,
      };
    },
    methods: {
      showQnASection() {
        this.isQnASection = true;
      },
      showPartnerSection() {
        this.isQnASection = false;
      },
    },
  };
  </script>
  
  <style scoped>
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
  
  /* 네비게이션 */
  .concat-nav {
    text-align: center;
    background-color: #f8f8f8;
    padding: 15px 0;
  }
  
  .concat-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  
  .concat-nav ul li {
    cursor: pointer;
    padding: 10px 30px;
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
  }
  
  .concat-nav ul li.active {
    border-bottom: 2px solid #00a0e9;
  }
  
  /* Q&A 섹션 */
  .qna-section {
    padding: 40px;
    text-align: center;
  }
  
  .qna-section .title-container {
    margin-bottom: 20px;
  }
  
  .qna-section .qna-list table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .qna-section .qna-list th,
  .qna-section .qna-list td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  
  .qna-section .pagination {
    margin-top: 20px;
  }
  
  .qna-section .pagination span {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
  }
  
  /* 파트너십 섹션 */
  .partner-section {
    padding: 40px;
    text-align: center;
  }
  
  .partner-section .title-container {
    margin-bottom: 20px;
  }
  
  .partner-content p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }
  
  .icons-section {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 20px;
  }
  
  .icon-item {
    text-align: center;
  }
  
  .icon-item p {
    font-size: 1.2rem;
    color: #333;
  }
  
  .partner-details {
    margin-top: 40px;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }
  </style>
  