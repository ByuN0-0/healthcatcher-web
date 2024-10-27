<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/banner1.jpg" alt="메인 이미지" />
      <div class="hero-text">
        <h1>HEALTH <br />CATCHER</h1>
        <p>
          좋은 꿈을 선물하는 드림캐처처럼, 더 건강한 내일을 선물하는 헬스캐처
        </p>
        <button class="cta-button">자세히 보기 →</button>
      </div>
      <!-- 슬라이드 넘김 표시
      <div class="slide-controls">
        <span>1</span>
        <span class="divider"></span>
        <span>3</span>
        <button class="pause-btn">⏸</button>
      </div> -->
    </section>

    <!-- Logo & Introduction Section -->
    <section class="logo-section">
      <img
        src="@/assets/healthcatcherlog.png"
        alt="헬스캐처 로고"
        class="logo"
      />
      <p class="highlight-text">
        드림캐처가 좋은 꿈을 <span class="highlight">선물</span>하듯,
        <br />
        헬스캐처는 당신에게 더 나은 건강과 미래를
        <span class="highlight">선물</span>합니다.
      </p>
      <p class="description">
        헬스캐처는 최첨단 기술과 통합 솔루션을 제공하는 헬스케어 선도
        기업입니다.<br />
        우리의 목표는 건강한 삶을 위한 혁신적인 제품과 서비스를 통해 고객이
        자신의 건강 상태를 최적으로 유지하고 향상할 수 있도록 지원하는
        것입니다.<br />
        헬스캐처는 사용자의 건강 여정을 보다 쉽고 스마트하게 만들어갑니다.
      </p>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="service-item">
        <img
          src="@/assets/healthapplicationbanner.jpg"
          alt="건강 어플리케이션 이미지"
        />
        <div class="service-overlay">
          <h3>건강 어플리케이션</h3>
          <p>
            언제 어디서나 헬스캐처의 맞춤형 건강 관리 플랫폼으로 당신의 건강을
            스마트하게 관리하세요.
          </p>
          <button class="more-info">자세히 보기 →</button>
        </div>
      </div>
      <div class="service-item">
        <img
          src="@/assets/healthcareproductsbanner.jpg"
          alt="건강 관리 상품 이미지"
        />
        <div class="service-overlay">
          <h3>건강 관리 상품</h3>
          <p>
            엄선된 품질과 검증된 효과! 헬스캐처가 추천하는 건강 관리 상품으로
            당신의 삶의 질을 높이세요.
          </p>
          <button class="more-info">자세히 보기 →</button>
        </div>
      </div>
      <div class="service-item">
        <img src="@/assets/healthadvicebanner.jpg" alt="건강 사주 이미지" />
        <div class="service-overlay">
          <h3>건강 사주</h3>
          <p>사주로 알아보는 건강, 전통과 과학의 조화를 경험하세요.</p>
          <button class="more-info">자세히 보기 →</button>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <div class="news-container">
        <div class="news-header">
          <h2>건강소식</h2>
          <p>
            헬스케어의 최신 트렌트와 정보를 헬스케처 커뮤니티에서 한눈에
            확인하세요.
          </p>
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
                <p>{{ news.description }}</p>
                <a href="#" class="news-more">
                  <div class="circle">
                    <span>→</span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Partnership Section -->
    <section class="partnership">
      <div class="partnership-content">
        <h2 class="partnership-title">PARTNERSHIP</h2>
        <h3 class="partnership-heading">파트너십 문의</h3>
        <p class="partnership-description">
          헬스캐처는 지속 가능한 성장을 위해 다양한 기업과 협력 기회를 열어두고
          있습니다.<br />
          광고, 협력, 후원 및 투자와 관련된 모든 문의를 환영하며, 함께
          헬스케어의 미래를 혁신할 파트너를 기다리고 있습니다.
        </p>
        <button class="partnership-button">소식 더보기 →</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      // 뉴스 항목 배열
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
      selectedNewsIndex: null, // 선택된 뉴스 항목 인덱스
    };
  },
  methods: {
    selectNews(index) {
      this.selectedNewsIndex = index; // 선택한 뉴스 인덱스를 설정
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
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
  max-width: 50%;
  margin-right: 5%;
  text-align: right;
  color: white;
}

.hero-text h1 {
  font-size: 6rem;
  line-height: 1.1;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.5rem;
  margin-top: 20px;
}

.cta-button {
  margin-top: 30px;
  padding: 14px 30px;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #ddd;
}

/* Logo Section */
.logo-section {
  text-align: center;
  padding: 50px 20px;
}

.logo {
  width: 120px;
}

.logo-section p {
  margin-top: 20px;
  font-size: 1.2rem;
}

/* Logo Section */
.logo-section {
  text-align: center;
  padding: 50px 20px;
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

.highlight-text {
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: bold;
  color: #333;
}

.highlight {
  color: #00a0e9;
}

.description {
  margin-top: 20px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
}

/* Services Section */
.services {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 60px 20px;
}

.service-item {
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
}

.service-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-item:hover img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.service-item:hover .service-overlay {
  opacity: 1;
}

.more-info {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.more-info:hover {
  background-color: #ddd;
}

/* News Section */
.news {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  background-color: white;
}

.news-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
}

.news-header {
  flex: 1;
}

.news-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.news-header p {
  font-size: 1.2rem;
  color: #666;
}

.news-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
}

.news-button:hover {
  background-color: #f5f5f5;
}

.news-list {
  flex: 2;
  margin-left: 80px;
}

.news-list ul {
  list-style: none;
  padding: 0;
}

.news-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.news-date {
  font-size: 1rem;
  color: #999;
  width: 100px;
  text-align: left;
}

.news-content {
  flex-grow: 1;
  padding-left: 20px;
  position: relative;
}

.news-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
}

.news-title:hover {
  color: #00a0e9;
}

.news-title.active {
  color: #00a0e9;
}

.news-more {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: 40px;
  height: 40px;
  background-color: #e6f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle span {
  color: #00a0e9;
  font-size: 1.5rem;
}

.circle:hover {
  background-color: #d6efff;
} 

/* Partnership Section */
.partnership {
  position: relative;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/partnershipInquirybanner.jpg");
  background-size: cover;
  background-position: center;
}

.partnership::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.partnership-content {
  text-align: center;
  color: white;
  z-index: 1;
  padding: 40px;
  border-radius: 10px;
}

.partnership-title {
  font-size: 1.5rem;
  color: #00a0e9; /* 파트너십 강조 색상 */
  margin-bottom: 10px;
}

.partnership-heading {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.partnership-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.partnership-button {
  padding: 12px 24px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
}

.partnership-button:hover {
  background-color: white;
  color: black;
}
</style>
