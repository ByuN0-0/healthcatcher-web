<template>
  <section class="services">
    <div class="service-item" v-for="(service, index) in services" :key="index">
      <img :src="service.image" :alt="service.alt" class="service-image" />
      <div class="service-overlay">
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
        <button class="more-info" @click="navigateToSection(service.route)">자세히 보기 →</button>
      </div>
    </div>
  </section>
</template>

<script>
import healthApplicationBanner from '@/assets/healthapplicationbanner.png';
import healthCareProductsBanner from '@/assets/healthcareproductsbanner.jpg';
import healthAdviceBanner from '@/assets/healthadvicebanner.jpg';

export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          image: healthApplicationBanner,
          alt: '건강 어플리케이션 이미지',
          title: '건강 어플리케이션',
          description: '언제 어디서나 헬스캐처의 맞춤형 건강 관리 플랫폼으로 당신의 건강을 스마트하게 관리하세요.',
          route: '/business/health-app',
        },
        {
          image: healthCareProductsBanner,
          alt: '건강 관리 상품 이미지',
          title: '건강 관리 상품',
          description: '엄선된 품질과 검증된 효과! 헬스캐처가 추천하는 건강 관리 상품으로 당신의 삶의 질을 높이세요.',
          route: '/business/health-products',
        },
        {
          image: healthAdviceBanner,
          alt: '건강 사주 이미지',
          title: '건강 사주',
          description: '사주로 알아보는 건강, 전통과 과학의 조화를 경험하세요.',
          route: '/business/health-fortune',
        },
      ],
    };
  },
  methods: {
    navigateToSection(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.services {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 60px 20px;
}

.service-item {
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  max-height: 600px;
}

.service-item:hover .service-image {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.service-item:hover .service-overlay {
  opacity: 1;
}

.service-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.service-description {
  font-size: 1rem;
  margin-bottom: 20px;
  max-width: 80%; /* 텍스트가 너무 넓게 퍼지지 않도록 설정 */
  white-space: normal; /* 줄바꿈을 허용하여 텍스트가 잘리지 않게 함 */
  line-height: 1.5; /* 줄 간격을 설정하여 가독성 향상 */
}

.more-info {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.more-info:hover {
  background-color: white;
  color: black;
}

/* 모바일 반응형 스타일 추가 */
@media screen and (max-width: 768px) {
  .services {
    flex-direction: column;
    padding: 30px 15px;
  }

  .service-item {
    height: 300px; /* 모바일에서의 높이 고정 */
    margin-bottom: 20px; /* 아이템 간 간격 */
  }

  .service-title {
    font-size: 1.5rem; /* 모바일에서 글자 크기 축소 */
  }

  .service-description {
    font-size: 0.9rem;
    max-width: 90%;
  }

  .more-info {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .service-image {
    max-height: 300px;
  }
}
</style>
