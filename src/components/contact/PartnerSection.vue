<template>
  <section class="partner-section">
    <div class="title-container">
      <h2 class="section-title">파트너십 문의</h2>
    </div>
    <div class="partner-content">
      <p>
        헬스캐처와 함께 혁신적인 건강 솔루션을 만들어갈
        <span class="highlight">비즈니스 파트너</span>를 찾고 있습니다.
      </p>
      <img style="height: auto;"
        src="@/assets/partnershigoal.jpg"
        alt="운동 이미지"
        class="athlete-image"
      />
      <p class="partner-details">
        헬스캐처는 가능한 성장의 기회를 제공하고자 다양한 기업과 협력을
        추구합니다. 우리의 목표는 사용자들의 건강 증진을 위한 최적화된 솔루션을
        제공하는 것입니다. <br />
        함께 더 건강하고 지속 가능한 미래를 만들어나가요.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnerSection",
};
</script>

<style scoped>
.partner-section {
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.partner-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}

.partner-details {
  margin-top: 40px;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

.athlete-image {
  max-width: 100%;
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .section-title {
    font-size: 1.8rem; 
    margin-bottom: 30px; 
  }
}
</style>

