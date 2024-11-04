<template>
  <div class="community-page">
    <HeroSection title="헬스캐처 커뮤니티" subtitle="HEALTH CATCHER COMMUNITY">
      <NavBar
        activePage="community"
        :selectedMainMenu="'커뮤니티'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-community="showSection('/community/news', '건강 소식')"
        @show-communication-space="showSection('/community/communication', '소통 공간')"
      />
    </HeroSection>
    <router-view></router-view>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import CommunityNews from "@/components/community/CommunityNews.vue";
import CommunicationSpace from "@/components/community/CommunicationSpace.vue";

export default {
  name: "CommunityPage",
  components: {
    HeroSection,
    NavBar,
    CommunityNews,
    CommunicationSpace,
  },
  data() {
    return {
      currentSubMenuTitle: "건강 소식",
      subMenuItems: [
        { 
          label: "건강 소식", 
          route: "/community/news", 
          event: "show-community" 
        },
        { 
          label: "소통 공간", 
          route: "/community/communication", 
          event: "show-communication-space" 
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
    // 초기 접근시 news로 리다이렉트
    if (this.$route.path === '/community') {
      this.showSection('/community/news', '건강 소식');
    }
  },
  watch: {
    '$route'(to) {
      const menuItem = this.subMenuItems.find(item => item.route === to.path);
      if (menuItem) {
        this.currentSubMenuTitle = menuItem.label;
      }
    }
  }
};
</script>

<style scoped>
.community-page {
  width: 100%;
  min-height: 100vh;
}

/* Hero Section */
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
