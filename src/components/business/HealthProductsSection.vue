<template>
    <section class="health-products">
      <h2 class="section-title">건강 관리 상품</h2>
      <!-- 메인 비주얼 -->
      <div class="main-visual">
        <div class="image-container">
          <img src="@/assets/healthproducts.jpg" alt="건강 관리 상품 이미지" />
        </div>
        <div class="main-text">
          <span class="category">Health Care Products</span>
          <h3>
            <strong>
              엄선된 품질과 검증된 효과, 헬스캐처가 추천하는<br />
              <span class="highlight">건강 관리 상품</span>으로 당신의 삶의 질을 높이세요.
            </strong>
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
    </section>
  </template>
  
  <script>
  export default {
    name: "HealthProducts",
  };
  </script>
  
  <style scoped>
  .health-products {
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
  
    .main-text {
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
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
  
    .health-products .main-visual {
      flex-direction: column;
      text-align: center;
    }
  
    .health-products .feature-block {
      padding: 20px 0;
    }
  }
  </style>