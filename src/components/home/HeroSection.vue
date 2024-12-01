<template>
  <section class="hero">
    <img src="../../assets/banner1.jpg" alt="메인 이미지" />
    <div class="overlay"></div>
    <div class="hero-text">
      <h1>HEALTH <br />CATCHER</h1>
      <p>좋은 꿈을 선물하는 드림캐처처럼,<br class="mobile-break"> 더 건강한 내일을 선물하는 헬스캐처</p>
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
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
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
  position: relative;
  z-index: 1;
}

.hero-text h1 {
  font-size: 6rem;
  line-height: 1.1;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.3rem;
  margin-top: 20px;
}

.mobile-break {
  display: none;
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

/* 모바일 스타일 */
@media screen and (max-width: 768px) {
  .hero {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .hero-text {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 0 20px;
  }

  .hero-text h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .hero-text p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 15px;
  }

  .mobile-break {
    display: inline;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
    margin-top: 20px;
  }
}

/* 작은 모바일 화면 */
@media screen and (max-width: 480px) {
  .hero-text h1 {
    font-size: 2.8rem;
  }

  .hero-text p {
    font-size: 1rem;
  }
}
  </style>