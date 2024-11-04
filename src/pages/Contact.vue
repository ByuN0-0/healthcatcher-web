<template>
  <div class="contact-page">
    <HeroSection title="헬스캐처 문의" subtitle="HEALTH CATCHER CONTACT">
      <NavBar
        activePage="contact"
        :selectedMainMenu="'문의'"
        :subMenuTitle="currentSubMenuTitle"
        :subMenuItems="subMenuItems"
        @show-qna="showSection('/contact/qna', '고객 Q&A')"
        @show-partner="showSection('/contact/partner', '파트너십 문의')"
      />
    </HeroSection>
    <router-view></router-view>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavBar from "@/components/NavBar.vue";
import QnASection from "@/components/contact/QnASection.vue";
import PartnerSection from "@/components/contact/PartnerSection.vue";

export default {
  name: "ContactPage",
  components: {
    HeroSection,
    NavBar,
    QnASection,
    PartnerSection,
  },
  data() {
    return {
      currentSubMenuTitle: "고객 Q&A",
      subMenuItems: [
        { 
          label: "고객 Q&A", 
          route: "/contact/qna", 
          event: "show-qna" 
        },
        { 
          label: "파트너십 문의", 
          route: "/contact/partner", 
          event: "show-partner" 
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
    // 초기 접근시 qna로 리다이렉트
    if (this.$route.path === '/contact') {
      this.showSection('/contact/qna', '고객 Q&A');
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
.contact-page {
  width: 100%;
  min-height: 100vh;
}
</style>
