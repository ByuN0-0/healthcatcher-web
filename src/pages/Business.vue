<template>
  <div class="business-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/introductionbanner1.jpg" alt="사업 페이지 배너" />
      <div class="hero-text">
        <h1>헬스캐처 사업</h1>
        <p>HEALTH CATCHER BUSINESS</p>
      </div>
    </section>

    <!-- 네비게이션 -->
    <nav class="business-nav">
      <ul>
        <li :class="{ active: isHealthApp }" @click="showHealthApp">
          건강 어플리케이션
        </li>
        <li :class="{ active: isHealthProducts }" @click="showHealthProducts">
          건강 관리 상품
        </li>
        <li :class="{ active: isHealthFortune }" @click="showHealthFortune">
          건강 사주
        </li>
      </ul>
    </nav>

    <!-- 건강 어플리케이션 -->
    <section v-if="isHealthApp" class="business-content">
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
            기회를 제공합니다. 이를 통해 고객은 새로운 제품이나 서비스를
            체험하고, 그 효과와 가치를 직접 검증함으로써 더욱 신뢰할 수 있는
            선택을 할 수 있습니다. 이 과정에서 고객의 피드백을 적극적으로
            반영하여 서비스의 품질을 지속적으로 개선해 나가고 있습니다.
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

    <!-- 건강 관리 상품 섹션 -->
    <section v-if="isHealthProducts" class="business-content">
      <h2 class="section-title">건강 관리 상품</h2>
      <div class="health-products">
        <!-- 메인 비주얼 -->
        <div class="main-visual">
          <div class="image-container">
            <img
              src="@/assets/healthproducts.jpg"
              alt="건강 관리 상품 이미지"
            />
          </div>
          <div class="main-text">
            <span class="category">Health Care Products</span>
            <h3>
              <strong
                >엄선된 품질과 검증된 효과, 헬스캐처가 추천하는<br /><span
                  class="highlight"
                  >건강 관리 상품</span
                >으로 당신의 삶의 질을 높이세요.</strong
              >
            </h3>
            <p class="main-description">
              헬스캐처는 입증 수 있는 건강관리의 상품을 제공하며, 이를 건전한
              생활을 지원하기 위해 엄선된 제품들로 삶의 수준과 건강한 자기관리를
              도와줄 것입니다.
            </p>
          </div>
        </div>

        <!-- 상세 설명 블록 -->
        <div class="feature-blocks">
          <div class="feature-block">
            <p>
              헬스캐처는 사용자의 건강을 최우선으로 생각하며, 이를 실천할 수
              있는 최고의 제품만을 선별하여 제공합니다. 우리는 고객의 건강한
              활력을 위해 최선의 품질과 효과를 찾은 상품을 엄선하여, 사용자에게
              가장 믿으신 솔루션을 제공하고자 합니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              특히 우리의 제품은 철저한 검증 프로그램을 고객의 삶에 니즈와
              피드매칭 작업 일반화하여 더욱 신뢰할 수 있는 건강 관리 솔루션을
              만드는데 데 중점을 두고 있습니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              체험단을 통해 고객은 새로운 제품을 실제 사용하고, 그 평가를
              바탕으로 피드백을 제공함으로써, 헬스캐처가 제공하는 상품의 효과를
              지속적으로 향상시킬 수 있습니다. 고객의 소중한 의견은 우리가 이런
              상품을 선별하게 결정하는 중요한 기준이 됩니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              헬스캐처가 제공하는 상품은 단순한 소비재가 아니라, 당신의 건강을
              될 단계 더 발전시키는 필수적인 도구가 될 것입니다. 우리의 제품은
              건전적인 연구와 검증을 거쳐 개발되었으며, 사용자 개인의 활건에
              맞춰 최적의 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 건강 사주 섹션 -->
    <section v-if="isHealthFortune" class="business-content">
      <h2 class="section-title">건강 사주</h2>
      <div class="health-fortune">
        <!-- 메인 비주얼 -->
        <div class="main-visual">
          <div class="image-container">
            <img src="@/assets/healthadvicebanner.jpg" alt="건강 사주 이미지" />
          </div>
          <div class="main-text">
            <span class="category">Health fortune telling</span>
            <h3>
              <strong
                >사주로 알아보는 건강,<br /><span class="highlight"
                  >전통과 과학의 조화</span
                >를 경험하세요.</strong
              >
            </h3>
            <p class="main-description">
              MBTI처럼 여러가지 알고 있는점과 컴코를 통해 서버자기 건강을 엿보
              수 있는 방법을 엿보던 헬스캐처의 새로운 서비스
            </p>
          </div>
        </div>

        <!-- 상세 설명 블록 -->
        <div class="feature-blocks">
          <div class="feature-block">
            <p>
              헬스캐처의 건강사주 서비스는 동양의 전통 사상과 최신 건강 데이터를
              결합하여 개인 맞춤형 건강 관리 솔루션을 제공합니다. 이 서비스는
              고객의 사주를 분석하여 그들의 체질과 건강 상태를 세밀하게
              파악하고, 이에 기반한 차별화된 건강 방안을 제시합니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              우리는 고객의 삶의행복님의 사건 돌생 통하 또는 정보를 활용하여,
              개인의 건강 특성과 취약점을 분석합니다. 이를 통해 한약, 운동, 생활
              습관 등 다양한 측면에서 맞춤형 조언을 제공하여 고객이 건강 에르를
              효율적으로 달성할 수 있도록 돕습니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              이 혁신적인 서비스는 건강한 건강 관리에 고정사 앞고 코디 컴이 있는
              건강 관리 영향을 비롯합니다.
            </p>
            <p>
              건물적인 저지과 뒷되의 과특약 데이터를 통합함으로써, 고객의
              자신만의 건강 레짐을 이해하고, 이를 통해 자신 가능한 건전한 실를
              엿위할 수 있께 됩니다.
            </p>
          </div>

          <div class="feature-block">
            <p>
              헬스캐처는 고객이 자신의 건강을 보다 체계적이고 효과적으로 관리할
              수 있도록 최선을 다하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BusinessPage",
  data() {
    return {
      isHealthApp: true,
      isHealthProducts: false,
      isHealthFortune: false,
    };
  },
  methods: {
    showHealthApp() {
      this.isHealthApp = true;
      this.isHealthProducts = false;
      this.isHealthFortune = false;
    },
    showHealthProducts() {
      this.isHealthApp = false;
      this.isHealthProducts = true;
      this.isHealthFortune = false;
    },
    showHealthFortune() {
      this.isHealthApp = false;
      this.isHealthProducts = false;
      this.isHealthFortune = true;
    },
  },
};
</script>

<style scoped>
/* 기존 Hero 및 Navigation 스타일 유지 */
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

.business-nav {
  text-align: center;
  background-color: #f8f8f8;
  padding: 15px 0;
}

.business-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.business-nav ul li {
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.business-nav ul li.active {
  border-bottom: 2px solid #00a0e9;
}

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

.image-container img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1.2rem;
  }

  .feature-block {
    padding: 25px;
  }

  .health-products {
    max-width: 1200px;
    margin: 0 auto;
  }

  .health-products .main-visual {
    margin-bottom: 60px;
  }

  .health-products .feature-blocks {
    display: grid;
    gap: 30px;
  }

  .health-products .feature-block {
    background: transparent;
    padding: 0;
    transform: none;
  }

  .health-products .feature-block:hover {
    transform: none;
  }

  .health-products .feature-block p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 0;
  }

  .health-products .main-text h3 {
    font-size: 1.8rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .health-products .category {
    margin-bottom: 1.5rem;
    color: #666;
  }

  .health-products .highlight {
    color: #00a0e9;
    font-weight: bold;
  }

  .health-fortune {
    max-width: 1200px;
    margin: 0 auto;
  }

  .health-fortune .main-visual {
    margin-bottom: 60px;
  }

  .health-fortune .image-container img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  .health-fortune .main-text h3 {
    font-size: 1.8rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .health-fortune .category {
    display: block;
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .health-fortune .highlight {
    color: #00a0e9;
    font-weight: bold;
  }

  .health-fortune .feature-blocks {
    display: grid;
    gap: 30px;
  }

  .health-fortune .feature-block {
    background: transparent;
    padding: 0;
  }

  .health-fortune .feature-block p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 15px;
  }

  .health-fortune .feature-block p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .health-products .main-visual {
      flex-direction: column;
      text-align: center;
    }

    .health-products .feature-block {
      padding: 20px 0;
    }
  }
}
</style>
