<template>
  <div class="introduction-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/introductionbanner1.jpg" alt="소개 페이지 배너" />
      <div class="hero-text">
        <h1>헬스캐처 소개</h1>
        <p>HEALTH CATCHER INTRODUCTION</p>
      </div>
    </section>

    <!-- 네비게이션 -->
    <nav class="introduction-nav">
      <ul>
        <li>
          <router-link to="/" class="home-icon">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li class="dropdown">
          <button class="nav-button" @click="toggleMainDropdown">
            소개
            <i class="fas fa-chevron-down"></i>
          </button>
          <ul class="dropdown-menu" v-show="isMainDropdownOpen">
            <li><router-link to="/about">소개</router-link></li>
            <li><router-link to="/business">사업</router-link></li>
            <li><router-link to="/community">커뮤니티</router-link></li>
            <li><router-link to="/contact">문의</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="nav-button" @click="toggleSubDropdown">
            {{ isCompanyIntroduction ? "회사소개" : "운영진 소개" }}
            <i class="fas fa-chevron-down"></i>
          </button>
          <ul class="dropdown-menu" v-show="isSubDropdownOpen">
            <li>
              <a
                href="#"
                @click.prevent="showCompanyIntroduction"
                :class="{ active: isCompanyIntroduction }"
              >
                회사소개
              </a>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="showTeamIntroduction"
                :class="{ active: !isCompanyIntroduction }"
              >
                운영진 소개
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- 회사소개 내용 -->
    <section
      v-if="isCompanyIntroduction"
      class="company-introduction"
      id="company-introduction"
    >
      <div class="title-container">
        <h2>회사 소개</h2>
      </div>
      <div class="intro-content">
        <div class="image-container">
          <div class="intro-image-wrapper">
            <img
              src="@/assets/introductionimage1.jpg"
              alt="회사소개 이미지"
              class="intro-image"
            />
          </div>
        </div>
        <div class="text-content">
          <p class="highlight-text">
            드림캐처가 좋은 꿈을 <span class="highlight">선물</span>하듯,<br />
            헬스캐처는
            <span class="highlight">당신에게 더 나은 건강과 미래를 선물</span
            >합니다.
          </p>
        </div>
      </div>

      <div class="highlight-background">
        <h1>HEALTH CATCHER</h1>
        <p>
          건강을 향한 여정에서,<br />
          헬스캐처는
          <span class="highlight"
            >모든 장애물을 함께 넘어서 당신의 목표 달성</span
          >을 돕습니다.
        </p>
      </div>

      <img
        src="@/assets/introductionimage2.jpg"
        alt="운동 이미지"
        class="athlete-image"
      />

      <div class="bottom-section">
        <h2>건강한 삶을 위한 작은 시작, 헬스캐처가 함께합니다.</h2>
        <p>
          누구나 쉽게 따라할 수 있는 건강관리 팁과 다양한 정보를 통해<br />
          <span class="highlight">당신의 건강한 생활을</span> 도와드립니다.
        </p>
        <div class="icons-section">
          <div class="icon-item">
            <img src="@/assets/icon1.jpg" alt="최첨단 기술" />
            <p>최첨단 기술</p>
          </div>
          <div class="icon-item">
            <img src="@/assets/icon2.jpg" alt="통합 솔루션" />
            <p>통합 솔루션</p>
          </div>
          <div class="icon-item">
            <img src="@/assets/icon3.jpg" alt="헬스케어" />
            <p>헬스케어</p>
          </div>
        </div>
        <p class="caution-text">
          헬스캐처는
          <span class="highlight"
            >최첨단 기술과 통합 솔루션을 제공하는 헬스케어 선도기업</span
          >입니다.<br />
          우리의 목표는 건강관리를 위한 혁신적인 제품과 서비스를 통해 고객이 자신의 건강상태를
          최적으로 유지하고 항상할 수 있도록 지원하는 것 입니다.<br />
          헬스캐처는 사용자의 건강 여정을 보다 쉽고 스마트하게 만들어갑니다.
        </p>
      </div>
    </section>

    <!-- 운영진 소개 내용 -->
    <section v-else class="team-introduction" id="team-introduction">
      <div class="title-container">
        <h2>운영진 소개</h2>
      </div>
      <div class="team-image">
        <img src="@/assets/member.jpg" alt="운영진 이미지" />
      </div>
      <div class="team-content">
        <p style="margin-bottom: 30px;">
          "헬스캐처는
          <span class="highlight">열정과 도전을 바탕으로 한 청년 창업팀</span>이
          이끌고 있습니다."
        </p>
        <p>
          <strong>헬스캐처의 운영진은 건강과 행복을 추구하는 이들의 곁에서 늘
          함께합니다.<br /> 각 분야의 경험을 바탕으로 건강한 삶을 위한 다양한 활동을
          기획하고 운영하고 있습니다.</strong>
        </p>
        <p>
          운영진은 각 분야의 전문성을 바탕으로 고객의 건강 목표를 달성할 수
          있도록 최선을 다하고 있습니다.<br /> 우리의 팀은 헬스케어의 미래를 선도하며,
          건강 관리 혁신을 이루기 위한 도전에 함께합니다.
        </p>
        <p>
          고객의 건강을 위한
          <span class="highlight">헌신이 곧 우리의 열정</span>입니다.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IntroductionNav",
  data() {
    return {
      isMainDropdownOpen: false,
      isSubDropdownOpen: false,
      isCompanyIntroduction: true, // 기본값 추가
    };
  },
  methods: {
    toggleMainDropdown() {
      this.isMainDropdownOpen = !this.isMainDropdownOpen;
      this.isSubDropdownOpen = false;
    },
    toggleSubDropdown() {
      this.isSubDropdownOpen = !this.isSubDropdownOpen;
      this.isMainDropdownOpen = false;
    },
    showCompanyIntroduction() {
      this.isCompanyIntroduction = true;
      this.isSubDropdownOpen = false;
      this.currentSection = "회사소개";
      this.scrollToSection("company-introduction");
    },
    showTeamIntroduction() {
      this.isCompanyIntroduction = false;
      this.isSubDropdownOpen = false;
      this.currentSection = "운영진 소개";
      this.scrollToSection("team-introduction");
    },
    scrollToSection(sectionId) {
      this.isSubDropdownOpen = false;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  // 드롭다운 외부 클릭시 닫기
  mounted() {
    document.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMainDropdownOpen = false;
        this.isSubDropdownOpen = false;
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdowns);
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
.introduction-nav {
  background-color: white;
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
}

.introduction-nav ul {
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.home-icon {
  display: flex;
  align-items: center;
  color: #00a0e9;
  text-decoration: none;
  font-size: 16px;
  padding: 0 20px;
  border-right: 1px solid #e5e5e5;
}

.home-icon i {
  color: #00a0e9;
}

.nav-button {
  background: none;
  border: none;
  padding: 0 20px;
  height: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  border-right: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-button:hover {
  color: #00a0e9;
}

.nav-button i {
  font-size: 12px;
  margin-left: 5px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 5px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 8px 20px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
  color: #00a0e9;
}

/* 타이틀 컨테이너 */
.title-container {
  text-align: center;
  margin-top: 60px; /* 타이틀 위치 통일을 위한 여백 */
  margin-bottom: 40px;
}

/* 회사소개 섹션 */
.intro-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.intro-image-wrapper {
  width: 100%;
  padding-top: 56.25%; /* 16:9 비율 */
  position: relative;
  border-radius: 0 150px 150px 0;
  overflow: hidden;
  max-height: 400px; /* 높이 제한 추가 */
}

.intro-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container {
  flex: 1;
  max-width: 50%; /* 이미지 최대 너비 제한 */
  margin-right: 40px;
}

.text-content {
  flex: 1;
  padding-left: 60px;
}

.highlight-text {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.4;
}

.text-content p {
  font-size: 28px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.highlight {
  color: #00a0e9;
}

.highlight-background {
  text-align: center;
  padding: 80px 0;
}

.highlight-background h1 {
  font-size: 48px;
  font-weight: bold;
  color: #ddd;
  margin-bottom: 20px;
}

.highlight-background p {
  font-size: 28px;
  color: #666;
}

.athlete-image {
  width: 100%;
  height: auto;
}

.bottom-section {
  text-align: center;
}

.bottom-section h2 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 50px;
  margin-top: 100px;
}

.bottom-section p {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
}

.guide-text {
  margin-top: 60px;
  margin-bottom: 80px;
}

.guide-text p {
  font-size: 20px;
  color: #666;
  line-height: 1.6;
}

.icons-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 80px auto;
  gap: 60px;
}

.icon-item {
  text-align: center;
}

.icon-item img {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

.icon-item p {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.caution-text {
  font-size: 14px;
  color: #999;
  margin-top: 80px;
  line-height: 1.6;
}

/* 운영진 소개 섹션 */

.team-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  max-width: 1200px;
}

.team-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.team-introduction .team-content {
  margin-top: 20px;
  text-align: center;
}

.team-content p {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
}

.team-content .highlight {
  color: #00a0e9;
  font-weight: bold;
}
</style>
