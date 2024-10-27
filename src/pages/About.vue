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
        <li
          :class="{ active: isCompanyIntroduction }"
          @click="showCompanyIntroduction"
        >
          회사소개
        </li>
        <li
          :class="{ active: !isCompanyIntroduction }"
          @click="showTeamIntroduction"
        >
          운영진 소개
        </li>
      </ul>
    </nav>

    <!-- 회사소개 내용 -->
    <section
      v-if="isCompanyIntroduction"
      class="company-introduction"
      id="company-introduction"
    >
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
            헬스캐처는 당신에게 더 나은 건강과 미래를
            <span class="highlight">선물</span>합니다.
          </p>
          <p>
            건강을 향한 여정에서, 헬스캐처는
            <span class="highlight"
              >모든 장애물을 함께 넘어서<br />
              당신의 목표 달성을 돕습니다.</span
            >
          </p>
        </div>
      </div>

      <div class="highlight-background">
        <h1>HEALTH CATCHER</h1>
        <p>
          건강을 향한 여정에서, 헬스캐처는 모든 장애물을 함께 넘어서<br />
          당신의 목표 달성을 돕습니다.
        </p>
      </div>

      <img
        src="@/assets/introductionimage2.jpg"
        alt="운동 이미지"
        class="athlete-image"
      />

      <div class="bottom-section">
        <h2>건강한 삶을 위한 작은 시작,<br />헬스캐처가 함께합니다.</h2>
        <p>
          누구나 쉽게 따라할 수 있는 건강관리 팁과 다양한 정보를 통해<br />
          <span class="highlight">당신의 건강한 생활을</span> 도와드립니다.
        </p>
        <div class="guide-text">
          <p>건강한 삶을 위한 작은 시작, 헬스캐처가 함께합니다.</p>
          <p>
            누구나 쉽게 따라할 수 있는 건강관리 팁과 다양한 정보를 통해<br />
            당신의 건강한 생활을 도와드립니다.
          </p>
        </div>
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
          헬스케어는 질병의 기술이 통합 솔루션 제공하는 헬스케어
          선도기업입니다.<br />
          우리의 목표는 건강관리를 위한 최적화된 서비스를 제공하여 사람들의
          건강한 삶을 돕는 것입니다.<br />
          헬스케어는 사용자의 건강 여정을 보다 쉽고 스마트하게 만들어갑니다.
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
        <p>
          "헬스캐처는
          <span class="highlight">열정과 도전을 바탕으로 한 청년 창업팀</span>이
          이끌고 있습니다."
        </p>
        <p>
          헬스캐처의 운영진은 건강과 행복을 추구하는 이들의 곁에서 늘
          함께합니다. 각 분야의 경험을 바탕으로 건강한 삶을 위한 다양한 활동을
          기획하고 운영하고 있습니다.
        </p>
        <p>
          운영진은 각 분야의 전문성을 바탕으로 고객의 건강 목표를 달성할 수
          있도록 최선을 다하고 있습니다. 우리의 팀은 헬스케어의 미래를 선도하며,
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
  name: "IntroductionPage",
  data() {
    return {
      isCompanyIntroduction: true, // 기본값은 회사소개 페이지
    };
  },
  methods: {
    showCompanyIntroduction() {
      this.isCompanyIntroduction = true;
      this.scrollToSection("company-introduction");
    },
    showTeamIntroduction() {
      this.isCompanyIntroduction = false;
      this.scrollToSection("team-introduction");
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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
.introduction-nav {
  text-align: center;
  background-color: #f8f8f8;
  padding: 15px 0;
}

.introduction-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.introduction-nav ul li {
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.introduction-nav ul li.active {
  border-bottom: 2px solid #00a0e9;
}

/* 회사소개 타이틀 */
.title-container {
  text-align: center;
  margin-top: 40px;
}

.title-container h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

/* 회사소개 섹션 */
.intro-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
}

.image-container {
  flex: 1;
  max-width: 50%;
  padding-right: 60px;
}

.intro-image-wrapper {
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 0 50px 50px 0;
  overflow: hidden;
}

.intro-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-size: 18px;
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
  background-color: #f8f8f8;
}

.highlight-background h1 {
  font-size: 48px;
  font-weight: bold;
  color: #ddd;
  margin-bottom: 20px;
}

.highlight-background p {
  font-size: 24px;
  color: #666;
}

.athlete-image {
  width: 100%;
  height: auto;
  margin-top: 100px;
}

.bottom-section {
  text-align: center;
  padding: 100px 0;
}

.bottom-section h2 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.bottom-section p {
  font-size: 18px;
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
  justify-content: center;
  gap: 80px;
  margin-top: 60px;
}

.icon-item {
  text-align: center;
}

.icon-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.icon-item p {
  font-size: 18px;
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
.team-introduction {
  padding: 40px;
  text-align: center;
}

.team-introduction .team-content {
  margin-top: 20px;
  text-align: center;
}

.team-content p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
}

.team-content .highlight {
  color: #00a0e9;
  font-weight: bold;
}
</style>
