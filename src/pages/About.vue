<template>
  <div class="introduction-page">
    <!-- HeroSection 컴포넌트 -->
    <HeroSection title="헬스캐처 소개" subtitle="HEALTH CATCHER INTRODUCTION">
      <!-- 공통 네비게이션 컴포넌트 -->
      <NavBar
        activePage="about"
        :selectedMainMenu="'소개'"
        subMenuTitle="회사 소개"
        :subMenuItems="[
          { label: '회사 소개', event: 'show-company-introduction' },
          { label: '운영진 소개', event: 'show-team-introduction' },
        ]"
        @show-company-introduction="showCompanyIntroduction"
        @show-team-introduction="showTeamIntroduction"
      />
    </HeroSection>

    <!-- 회사소개와 운영진 소개를 컴포넌트로 분리하여 조건부 렌더링 -->
    <div v-if="isCompanyIntroduction">
      <CompanyIntroduction />
    </div>
    <div v-else>
      <TeamIntroduction />
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import CompanyIntroduction from "@/components/about/CompanyIntroduction.vue";
import TeamIntroduction from "@/components/about/TeamIntroduction.vue";

export default {
  name: "About",
  components: {
    HeroSection,
    NavBar,
    CompanyIntroduction,
    TeamIntroduction,
  },
  data() {
    return {
      isCompanyIntroduction: true, // 기본값을 회사소개로 설정
    };
  },
  methods: {
    showCompanyIntroduction() {
      this.isCompanyIntroduction = true;
    },
    showTeamIntroduction() {
      this.isCompanyIntroduction = false;
    },
  },
};
</script>

<style scoped></style>
