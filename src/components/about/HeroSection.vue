<template>
  <section class="hero">
    <img src="@/assets/introductionbanner1.jpg" alt="소개 페이지 배너" />
    <div class="hero-text">
      <h1>헬스캐처 소개</h1>
      <p>HEALTH CATCHER INTRODUCTION</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
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
</style>
