<template>
  <section class="company-introduction">
    <!-- 회사 소개 내용 -->
    <div class="intro-content">
      <div class="image-container">
        <div class="intro-image-wrapper">
          <img src="@/assets/introductionimage1.jpg" alt="회사소개 이미지" class="intro-image" />
        </div>
      </div>
      <div class="text-content">
        <p class="highlight-text">
          드림캐처가 좋은 꿈을 <span class="highlight">선물</span>하듯,<br />
          헬스캐처는 당신에게 더 나은 건강과 미래를 <span class="highlight">선물</span>합니다.
        </p>
        <p>
          건강을 향한 여정에서, 헬스캐처는 <span class="highlight">모든 장애물을 함께 넘어서<br />
          당신의 목표 달성을 돕습니다.</span>
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

    <img src="@/assets/introductionimage2.jpg" alt="운동 이미지" class="athlete-image" />

    <!-- 추가 섹션 -->
    <!-- 여기서부터 추가 콘텐츠를 정의할 수 있습니다 -->
  </section>
</template>

<script>
export default {
  name: "CompanyIntroduction",
};
</script>

<style scoped>
/* 스타일 정의 */
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

/* 기타 스타일 */
</style>
