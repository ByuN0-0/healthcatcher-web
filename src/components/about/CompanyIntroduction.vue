<template>
  <!-- 회사소개 내용 -->
  <section class="company-introduction" id="company-introduction">
    <div class="title-container">
      <h2 class="section-title">회사 소개</h2>
    </div>
    <div class="intro-content">
      <div class="video-container">
        <!-- image-container를 video-container로 변경 -->
        <div class="video-wrapper">
          <video class="intro-video" autoplay loop muted playsinline controls>
            <source src="@/assets/introVideo.mp4" type="video/mp4" />
            귀하의 브라우저는 비디오 태그를 지원하지 않습니다.
          </video>
        </div>
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
        <span class="highlight">모든 장애물을 함께 넘어서 당신의 목표 달성</span
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
        우리의 목표는 건강관리를 위한 혁신적인 제품과 서비스를 통해 고객이
        자신의 건강상태를 최적으로 유지하고 항상할 수 있도록 지원하는 것
        입니다.<br />
        헬스캐처는 사용자의 건강 여정을 보다 쉽고 스마트하게 만들어갑니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyIntroduction",
};
</script>

<style scoped>
.company-introduction {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px; /* HealthAppSection.vue와 동일한 패딩 */
}

.title-container {
  text-align: center;
  margin-top: 0; /* 타이틀 위치를 HealthAppSection.vue와 동일하게 조정 */
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem; /* HealthAppSection.vue와 동일한 크기 */
  font-weight: bold;
  color: #333;
  margin-bottom: 50px; /* 아래 여백 설정 */
}

/* 회사소개 섹션 */
.intro-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.video-container {
  width: 100%;
  max-width: 1200px; /* 컨테이너 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 0;
}

.video-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  margin: 0 auto; /* 중앙 정렬 */
}

.intro-video {
  width: 100%;
  display: block;
  object-fit: contain; /* cover에서 contain으로 변경 */
}

.text-content {
  flex: 1;
  padding-left: 60px;
}

.highlight-text {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  margin-bottom: 30px;
  line-height: 1.4;
  text-align: center;
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

/* 반응형 스타일 */
@media screen and (max-width: 768px) {
  .intro-content {
    flex-direction: column;
    padding: 0;
  }

  .intro-video {
    max-height: 350px;
  }

  .text-content {
    padding-left: 20px;
    padding-right: 20px;
  }

  .highlight-text {
    font-size: 22px;
  }

  .highlight-background h1 {
    font-size: 36px;
  }

  .highlight-background p {
    font-size: 20px;
    padding: 0 20px;
  }

  .bottom-section h2 {
    font-size: 28px;
    padding: 0 20px;
  }

  .icons-section {
    flex-direction: column;
    gap: 40px;
  }

  .icon-item img {
    width: 200px;
    height: 200px;
  }

  .caution-text {
    padding: 0 20px;
  }
}

/* 더 작은 모바일 화면을 위한 추가 조정 */
@media screen and (max-width: 480px) {
  .highlight-text {
    font-size: 18px;
  }

  .highlight-background h1 {
    font-size: 28px;
  }

  .icon-item img {
    width: 150px;
    height: 150px;
  }

  .intro-video {
    max-height: 250px;
  }
}
</style>
