<template>
  <section class="hero">
    <img :src="resolvedImage" alt="소개 페이지 배너" />
    <div class="hero-text">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: {
      type: String,
      default: "헬스캐처 소개",
    },
    subtitle: {
      type: String,
      default: "HEALTH CATCHER INTRODUCTION",
    },
    image: {
      type: String,
      default: "@/assets/introductionbanner1.jpg",
    },
  },
  computed: {
    resolvedImage() {
      // 이미지 경로를 동적으로 해석
      return this.image.includes('@/') ? require(`${this.image.replace('@/', './src/')}`) : this.image;
    }
  }
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
