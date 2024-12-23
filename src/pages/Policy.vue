<template>
  <div class="policy-page">
    <HeroSection title="헬스캐처 약관" subtitle="HEALTH CATCHER POLICY">
      <NavBar
        activePage="policy"
        :selectedMainMenu="'약관'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-privacy="showSection('/policy/privacy', '개인정보처리방침')"
      />
    </HeroSection>
    <router-view></router-view>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import PrivacyPolicy from "@/components/policy/Privacy-Policy.vue";

export default {
  name: "PolicyPage",
  components: {
    HeroSection,
    NavBar,
    PrivacyPolicy,
  },
  data() {
    return {
      currentSubMenuTitle: "개인정보처리방침",
      subMenuItems: [
        { 
          label: "개인정보처리방침", 
          route: "/policy/privacy", 
          event: "show-privacy" 
        }
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
    if (this.$route.path === '/policy') {
      this.showSection('/policy/privacy', '개인정보처리방침');
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
.policy-page {
  width: 100%;
  min-height: 100vh;
}
</style>