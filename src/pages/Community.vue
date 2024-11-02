<template>
  <div class="community-page">
    <HeroSection title="헬스캐처 커뮤니티" subtitle="HEALTH CATCHER COMMUNITY">
      <!-- 공통 네비게이션 컴포넌트 -->
      <NavBar
        activePage="community"
        :selectedMainMenu="'커뮤니티'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-community="showCommunity"
        @show-communication-space="showCommunicationSpace"
      />
    </HeroSection>
    <!-- 하위 섹션 컴포넌트 -->
    <CommunityNews v-if="currentSubMenuTitle === '건강 소식'" />
    <CommunicationSpace v-if="currentSubMenuTitle === '소통 공간'" />
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
      isCommunity: true,
      isCommunicationSpace: false,
      currentSubMenuTitle: "건강 소식",
      subMenuItems: [
        { label: "건강 소식", event: "show-community" },
        { label: "소통 공간", event: "show-communication-space" },
      ],
    };
  },
  methods: {
    showCommunity() {
      this.isCommunity = true;
      this.isCommunicationSpace = false;
      this.currentSubMenuTitle = "건강 소식";
    },
    showCommunicationSpace() {
      this.isCommunity = false;
      this.isCommunicationSpace = true;
      this.currentSubMenuTitle = "소통 공간";
    },
  },
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
