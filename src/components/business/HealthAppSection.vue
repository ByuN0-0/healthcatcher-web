<template>
  <!-- 건강 어플리케이션 -->
  <section class="business-content">
    <h2 class="section-title">건강 어플리케이션</h2>

    <!-- 메인 비주얼 -->
    <div class="main-visual">
      <div class="image-container">
        <img
          src="@/assets/healthapplications.jpg"
          alt="건강 어플리케이션 이미지"
        />
      </div>
      <div class="main-text">
        <span class="category">Health Applications</span>
        <h3>
          <strong
            >언제 어디서나, 헬스캐처의
            <span class="highlight">맞춤형 건강 관리 플랫폼</span>으로 당신의
            건강을 스마트하게 관리하세요.</strong
          >
        </h3>
        <p class="main-description">
          더 나은 생활 습관을 만들기 위한 간단하고 유익한 도구로서 일상 속에서
          건강을 관리할 수 있는 다양한 기능을 제공하여, 당신의 건강을 조금 더
          쉽게 관리할 수 있도록 도와드립니다.
        </p>
      </div>
    </div>

    <!-- 기능 블록 -->
    <div class="feature-blocks">
      <div class="feature-block">
        <h4>맞춤형 건강 관리 경험</h4>
        <p>
          <strong
            >헬스캐처 애플리케이션은 사용자 중심의 맞춤형 건강 관리 경험을
            제공합니다.</strong
          >
          우리는 각 사용자의 개별적인 필요와 목표에 맞춘 다양한 기능을 통해
          건강한 삶을 지원하고자 합니다.
        </p>
        <p>
          특히 체험단 기능은 사용자에게 최신 건강 솔루션을 직접 경험할 수 있는
          기회를 제공합니다. 이를 통해 고객은 새로운 제품이나 서비스를 체험하고,
          그 효과와 가치를 직접 검증함으로써 더욱 신뢰할 수 있는 선택을 할 수
          있습니다. 이 과정에서 고객의 피드백을 적극적으로 반영하여 서비스의
          품질을 지속적으로 개선해 나가고 있습니다.
        </p>
      </div>

      <div class="feature-block">
        <h4>커뮤니티 기능</h4>
        <p>
          <strong>커뮤니티 기능을 통해 사용자 간의 소통을 촉진합니다.</strong>
          사용자들은 자신의 건강 정보를 공유하며, 함께 건강 목표를 향해 나아갈
          수 있는 기반을 마련합니다. 이 커뮤니티는 서로의 동기를 부여하고,
          다양한 정보와 조언을 나눌 수 있는 소중한 공간입니다.
        </p>
      </div>

      <div class="feature-block">
        <h4>데이터 기반 분석</h4>
        <p>
          우리는 데이터 기반의 접근 방식을 통해 고객의 니즈를 심층적으로
          분석하고, 이를 바탕으로 개인 맞춤형 솔루션을 제공합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* 새로운 건강 어플리케이션 섹션 스타일 */
.business-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

/* 메인 비주얼 스타일 */
.main-visual {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.image-container {
  width: 500px; /* 원하는 고정 너비 */
  height: 370px; /* 원하는 고정 높이 */
  overflow: hidden; /* 이미지를 박스 크기에 맞춰 잘림 */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하며 박스에 맞춰 조정 */
  border-radius: 12px;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); */
}

.main-text {
  flex: 1;
}

.category {
  display: block;
  color: #00a0e9;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.main-text h3 {
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  color: #333;
}

.main-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.highlight {
  color: #00a0e9;
  font-weight: bold;
}

/* 기능 블록 스타일 */
.feature-blocks {
  display: grid;
  gap: 30px;
}

.feature-block {
  background: #f8f9fa;
  padding: 35px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.feature-block:hover {
  transform: translateY(-5px);
}

.feature-block h4 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
}

.feature-block p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

/* 반응형 스타일 */
@media (max-width: 968px) {
  .main-visual {
    flex-direction: column;
    gap: 40px;
  }

  .section-title {
    font-size: 2rem;
  }

  .main-text {
    text-align: center;
  }
}
</style>
