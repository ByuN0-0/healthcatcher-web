<template>
  <div class="business-page">
    <HeroSection title="헬스캐처 사업" subtitle="HEALTH CATCHER BUSINESS">
      <NavBar
        activePage="business"
        :selectedMainMenu="'사업'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-health-app="showSection('/business/health-app', '건강 어플리케이션')"
        @show-health-products="showSection('/business/health-products', '건강 관리 상품')"
        @show-health-fortune="showSection('/business/health-fortune', '건강 사주')"
      />
    </HeroSection>
    <router-view></router-view>
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
      currentSubMenuTitle: "건강 어플리케이션",
      subMenuItems: [
        { 
          label: "건강 어플리케이션", 
          route: "/business/health-app", 
          event: "show-health-app" 
        },
        { 
          label: "건강 관리 상품", 
          route: "/business/health-products", 
          event: "show-health-products" 
        },
        { 
          label: "건강 사주", 
          route: "/business/health-fortune", 
          event: "show-health-fortune" 
        },
      ],
    };
  },
  methods: {
    showSection(route, title) {
      this.$router.push(route);
      this.currentSubMenuTitle = title;
    }
  },
  created() {
    // 초기 접근시 health-app으로 리다이렉트
    if (this.$route.path === '/business') {
      this.showSection('/business/health-app', '건강 어플리케이션');
    }
  },
  watch: {
    '$route'(to) {
      // 현재 라우트에 따라 subMenuTitle 업데이트
      const menuItem = this.subMenuItems.find(item => item.route === to.path);
      if (menuItem) {
        this.currentSubMenuTitle = menuItem.label;
      }
    }
  }
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
