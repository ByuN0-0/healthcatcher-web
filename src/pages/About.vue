<template>
  <div class="introduction-page">
    <HeroSection title="헬스캐처 소개" subtitle="HEALTH CATCHER INTRODUCTION">
      <NavBar
        activePage="about"
        :selectedMainMenu="'소개'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-company-introduction="showSection('/about/company', '회사 소개')"
        @show-team-introduction="showSection('/about/team', '운영진 소개')"
      />
    </HeroSection>
    <router-view></router-view>
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
      currentSubMenuTitle: "회사 소개",
      subMenuItems: [
        { label: "회사 소개", route: "/about/company", event: "show-company-introduction" },
        { label: "운영진 소개", route: "/about/team", event: "show-team-introduction" },
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
    // 초기 접근시 company로 리다이렉트
    if (this.$route.path === '/about') {
      this.showSection('/about/company', '회사 소개');
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

<style scoped></style>
