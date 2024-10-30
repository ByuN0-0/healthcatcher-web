<template>
    <section class="team-introduction">
      <div class="title-container">
        <h2>운영진 소개</h2>
      </div>
      <div class="team-image">
        <img :src="require('@/assets/member.jpg')" alt="운영진 이미지" />
      </div>
      <div class="team-content">
        <p>
          "헬스캐처는 <span class="highlight">열정과 도전을 바탕으로 한 청년 창업팀</span>이 이끌고 있습니다."
        </p>
        <p>
          헬스캐처의 운영진은 건강과 행복을 추구하는 이들의 곁에서 늘 함께합니다. 각 분야의 경험을 바탕으로
          건강한 삶을 위한 다양한 활동을 기획하고 운영하고 있습니다.
        </p>
        <p>
          운영진은 각 분야의 전문성을 바탕으로 고객의 건강 목표를 달성할 수 있도록 최선을 다하고 있습니다.
          우리의 팀은 헬스케어의 미래를 선도하며, 건강 관리 혁신을 이루기 위한 도전에 함께합니다.
        </p>
        <p>
          고객의 건강을 위한 <span class="highlight">헌신이 곧 우리의 열정</span>입니다.
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
  .title-container {
    text-align: center;
    margin-top: 40px;
  }
  
  .title-container h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .team-content {
    text-align: center;
    margin-top: 20px;
  }
  
  .team-image img {
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
  }
  
  .team-content p {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }
  
  .highlight {
    color: #00a0e9;
    font-weight: bold;
  }
  </style>
  