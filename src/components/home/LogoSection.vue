<template>
  <section class="logo-section">
    <img
      src="../../assets/healthcatcherlog.png"
      alt="헬스캐처 로고"
      class="logo"
    />
    <div class="text-content">
      <p class="highlight-text">
        <span class="highlight">드림캐처</span>가 좋은 꿈을 <span class="highlight">선물</span>하듯,
        <br class="mobile-break" />
        <span class="highlight">헬스캐처는</span> 당신에게<br class="mobile-break" /> 
        더 나은 건강과 미래를 <span class="highlight">선물</span>합니다.
      </p>
      <div class="description">
        <div class="text-wrapper">
          <p>헬스캐처는 최첨단 기술과 통합 솔루션을 제공하는<br class="mobile-break" /> 헬스케어 선도 기업입니다.</p>
          <p>우리의 목표는 <strong>건강한 삶을 위한 혁신적인 제품과 서비스를 통해<br class="mobile-break" /> 고객이 자신의 건강 상태를 최적으로 유지하고<br class="mobile-break" /> 향상할 수 있도록 지원하는 것</strong>입니다.</p>
          <p>헬스캐처는 사용자의 건강 여정을<br class="mobile-break" /> 보다 쉽고 스마트하게 만들어갑니다.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 20px;
}

.logo {
  width: 280px;
  height: auto;
  margin-bottom: 40px;
}

.text-content {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.highlight-text {
  font-size: 32px;
  line-height: 1.6;
  font-weight: 500;
  color: #333;
  margin-bottom: 30px;
  word-break: keep-all;
  letter-spacing: -0.5px;
}

.highlight {
  color: #00a0e9;
  font-weight: 500;
}

.description {
  font-size: 20px;
  line-height: 1.8;
  color: #666;
  margin-top: 30px;
  letter-spacing: -0.3px;
}

.text-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.description p {
  margin: 0;
  padding: 5px 0;
  text-align: center;
  word-break: keep-all;
}

.mobile-break {
  display: none;
}

/* 태블릿 스타일 */
@media screen and (max-width: 1024px) {
  .highlight-text {
    font-size: 28px;
  }

  .description {
    font-size: 18px;
  }
}

/* 모바일 스타일 */
@media screen and (max-width: 768px) {
  .logo-section {
    padding: 40px 20px;
  }

  .logo {
    width: 140px;
    margin-bottom: 30px;
  }

  .highlight-text {
    font-size: 22px;
    line-height: 1.5;
    padding: 0 10px;
  }

  .description {
    font-size: 16px;
    line-height: 1.6;
    padding: 0 10px;
  }

  .text-wrapper {
    gap: 15px;
  }

  .mobile-break {
    display: inline;
  }

  .description p {
    padding: 0;
  }
}

/* 작은 모바일 화면 */
@media screen and (max-width: 480px) {
  .highlight-text {
    font-size: 20px;
  }

  .description {
    font-size: 14px;
  }
}
</style>