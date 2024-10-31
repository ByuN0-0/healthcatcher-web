<template>
  <div class="business-page">
    <HeroSection title="헬스캐처 사업" subtitle="HEALTH CATCHER BUSINESS">
      <!-- 공통 네비게이션 컴포넌트 -->
      <NavBar
        activePage="business"
        :selectedMainMenu="'사업'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-health-app="showHealthApp"
        @show-health-products="showHealthProducts"
        @show-health-fortune="showHealthFortune"
      />
    </HeroSection>
    <!-- 하위 섹션 컴포넌트 -->
    <HealthApp v-if="isHealthApp" />
    <HealthProducts v-if="isHealthProducts" />
    <HealthFortune v-if="isHealthFortune" />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import HealthApp from "@/components/business/HealthAppSection.vue";
import HealthProducts from "@/components/business/HealthProductsSection.vue";
import HealthFortune from "@/components/business/HealthFortuneSection.vue";

export default {
  name: "BusinessPage",
  components: {
    HeroSection,
    NavBar,
    HealthApp,
    HealthProducts,
    HealthFortune,
  },
  data() {
    return {
      isHealthApp: true,
      isHealthProducts: false,
      isHealthFortune: false,
      currentSubMenuTitle: "건강 어플리케이션",
      subMenuItems: [
        { label: "건강 어플리케이션", event: "show-health-app" },
        { label: "건강 관리 상품", event: "show-health-products" },
        { label: "건강 사주", event: "show-health-fortune" },
      ],
    };
  },
  methods: {
    showHealthApp() {
      this.isHealthApp = true;
      this.isHealthProducts = false;
      this.isHealthFortune = false;
      this.currentSubMenuTitle = "건강 어플리케이션";
    },
    showHealthProducts() {
      this.isHealthApp = false;
      this.isHealthProducts = true;
      this.isHealthFortune = false;
      this.currentSubMenuTitle = "건강 관리 상품";
    },
    showHealthFortune() {
      this.isHealthApp = false;
      this.isHealthProducts = false;
      this.isHealthFortune = true;
      this.currentSubMenuTitle = "건강 사주";
    },
  },
};
</script>

<style>
/* 기존 Hero 및 Navigation 스타일 유지 */
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

.business-nav {
  text-align: center;
  background-color: #f8f8f8;
  padding: 15px 0;
}

.business-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.business-nav ul li {
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.business-nav ul li.active {
  border-bottom: 2px solid #00a0e9;
}

/* 반응형 스타일 */
@media (max-width: 968px) {
  .main-visual {
    flex-direction: column;
    gap: 40px;
  }

  .section-title {
    font-size: 2rem;
  }

  .main-text {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1.2rem;
  }

  .feature-block {
    padding: 25px;
  }

  @media (max-width: 768px) {
    .health-products .main-visual {
      flex-direction: column;
      text-align: center;
    }

    .health-products .feature-block {
      padding: 20px 0;
    }
  }
}
</style>
