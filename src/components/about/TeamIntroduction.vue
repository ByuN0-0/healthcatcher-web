<template>
  <!-- 운영진 소개 내용 -->
  <section class="team-introduction">
    <div class="title-container">
      <h2>운영진 소개</h2>
    </div>
    <div class="team-image">
      <img src="@/assets/member.jpg" alt="운영진 이미지" />
    </div>
    <div class="team-content">
      <p style="margin-bottom: 30px">
        "헬스캐처는
        <span class="highlight">열정과 도전을 바탕으로 한 청년 창업팀</span>이
        이끌고 있습니다."
      </p>
      <p>
        <strong
          >헬스캐처의 운영진은 건강과 행복을 추구하는 이들의 곁에서 늘
          함께합니다.<br />
          각 분야의 경험을 바탕으로 건강한 삶을 위한 다양한 활동을 기획하고
          운영하고 있습니다.</strong
        >
      </p>
      <p>
        운영진은 각 분야의 전문성을 바탕으로 고객의 건강 목표를 달성할 수 있도록
        최선을 다하고 있습니다.<br />
        우리의 팀은 헬스케어의 미래를 선도하며, 건강 관리 혁신을 이루기 위한
        도전에 함께합니다.
      </p>
      <p>
        고객의 건강을 위한
        <span class="highlight">헌신이 곧 우리의 열정</span>입니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamIntroduction",
};
</script>

<style scoped>
/* 타이틀 컨테이너 */
.title-container {
  text-align: center;
  margin-top: 60px; /* 타이틀 위치 통일을 위한 여백 */
  margin-bottom: 40px;
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
