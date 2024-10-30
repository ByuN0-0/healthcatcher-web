<template>
    <section class="company-introduction">
      <div class="intro-content">
        <div class="image-container">
          <div class="intro-image-wrapper">
            <img :src="require('@/assets/introductionimage1.jpg')" alt="회사소개 이미지" class="intro-image" />
          </div>
        </div>
        <div class="text-content">
          <p class="highlight-text">
            드림캐처가 좋은 꿈을 <span class="highlight">선물</span>하듯,<br />
            헬스캐처는 당신에게 더 나은 건강과 미래를 <span class="highlight">선물</span>합니다.
          </p>
          <p>
            건강을 향한 여정에서, 헬스캐처는 <span class="highlight">모든 장애물을 함께 넘어서 당신의 목표 달성을 돕습니다.</span>
          </p>
        </div>
      </div>
      <div class="highlight-background">
        <h1>HEALTH CATCHER</h1>
        <p>건강을 향한 여정에서, 헬스캐처는 모든 장애물을 함께 넘어서 당신의 목표 달성을 돕습니다.</p>
      </div>
      <img :src="require('@/assets/introductionimage2.jpg')" alt="운동 이미지" class="athlete-image" />
    </section>
  </template>
  
  <script>
  export default {
    name: "CompanyIntroduction",
  };
  </script>
  
  <style scoped>
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
  
  .athlete-image {
    width: 100%;
    height: auto;
    margin-top: 100px;
  }
  </style>
  