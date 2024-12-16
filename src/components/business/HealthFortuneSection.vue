<template>
  <section class="health-fortune">
    <h2 class="section-title">건강 사주</h2>
    <!-- 메인 비주얼 -->
    <div class="main-visual">
      <div class="image-container">
        <img src="@/assets/healthadvicebanner.jpg" alt="건강 사주 이미지" />
      </div>
      <div class="main-text">
        <span class="category">Health fortune telling</span>
        <h3>
          <strong>
            사주로 알아보는 건강,<br />
            <span class="highlight">전통과 과학의 조화</span>를 경험하세요.
          </strong>
        </h3>
        <p class="main-description">
          MBTI처럼 어렵지 않고 친근한 접근을 통해 재미있게 건강을 챙길 수
          있는 방법을 생각한 헬스캐처의 새로운 서비스
        </p>
      </div>
    </div>

    <!-- 상세 설명 블록 -->
    <div class="feature-blocks">
      <div class="feature-block">
        <p>
          헬스캐처의 건강사주 서비스는 동양의 전통 사상과 최신 건강 데이터를
          결합하여 개인 맞춤형 건강 관리 솔루션을 제공합니다. 이 서비스는 고객의
          사주를 분석하여 그들의 체질과 건강 상태를 세밀하게 파악하고, 이에
          기반한 차별화된 건강 방안을 제시합니다.
        </p>
      </div>

      <div class="feature-block">
        <p>
          우리는 고객의 생년월일과 시간 등을 통해 얻은 정보를 활용하여, 개인의
          건강과 특성과 취약점을 분석합니다. 이를 통해 영양, 운동, 생활 습관 등
          다양한 측면에서 맞춤형 조언을 제공하여 고객이 건강 에르를 효율적으로
          달성할 수 있도록 돕습니다.
        </p>
      </div>

      <div class="feature-block">
        <p>
          이 독창적인 서비스는 단순한 건강 관리에 그치지 않고, 보다 깊이있는 건강 관리 경험을 제공합니다.
          전통적인 지식과 현대의 과학적 데이터를 융합함으로써, 고객은 자신만의 건강 여정을 이해하고,
          이를 통해 지속가능한 건강한 삶을 영위할 수 있게 됩니다.
          됩니다.
        </p>
      </div>

      <div class="feature-block">
        <p style="color: #00a0e9;">
          헬스캐처는 고객이 자신의 건강을 보다 체계적이고 효과적으로 관리할 수 있도록 최선을 다하고 있습니다.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HealthFortune",
};
</script>

<style scoped>
.health-fortune {
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

.main-visual {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.image-container {
  width: 500px;
  height: 370px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
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

.feature-block p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

@media (max-width: 968px) {
  .main-visual {
    flex-direction: column;
    gap: 40px;
  }

  .image-container {
    width: 100%;
    height: 300px;
  }

  .main-text {
    text-align: center;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .main-text h3 {
    font-size: 1.5rem;
  }

  .feature-block {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .health-fortune {
    padding: 40px 15px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .image-container {
    height: 250px;
  }
}
</style>
