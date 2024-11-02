<template>
  <div class="contact-page">
    <HeroSection title="헬스캐처 문의" subtitle="HEALTH CATCHER CONTACT">

    <!-- 네비게이션 바 -->
    <NavBar
      activePage="contact"
      :selectedMainMenu="'문의'"
      :subMenuTitle="currentSubMenuTitle"
      :subMenuItems="subMenuItems"
      @show-qna="showQnASection"
      @show-partner="showPartnerSection"
    />
    </HeroSection>
    <!-- Q&A 및 파트너 섹션 컴포넌트 -->
    <QnASection v-if="isQnASection" />
    <PartnerSection v-else />
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
      isQnASection: true,
      currentSubMenuTitle: "고객 Q&A",
      subMenuItems: [
        { label: "고객 Q&A", event: "show-qna" },
        { label: "파트너십 문의", event: "show-partner" },
      ],
    };
  },
  methods: {
    showQnASection() {
      this.isQnASection = true;
      this.currentSubMenuTitle = "고객 Q&A";
    },
    showPartnerSection() {
      this.isQnASection = false;
      this.currentSubMenuTitle = "파트너십 문의";
    },
  },
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 100vh;
}
</style>
