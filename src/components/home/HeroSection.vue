<template>
  <section class="hero">
    <img src="../../assets/banner1.jpg" alt="메인 이미지" />
    <div class="hero-text">
      <h1>HEALTH <br />CATCHER</h1>
      <p>좋은 꿈을 선물하는 드림캐처처럼, 더 건강한 내일을 선물하는 헬스캐처</p>
      <button class="cta-button" @click="goToAbout">자세히 보기 →</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    goToAbout() {
      this.$router.push('/about/company');
    }
  }
}
</script>
  
  <style scoped>
  .hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
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
  max-width: 50%;
  margin-right: 5%;
  text-align: right;
  color: white;
}

.hero-text h1 {
  font-size: 6rem;
  line-height: 1.1;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.5rem;
  margin-top: 20px;
}

.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: white;
  color: black;
}
  </style>