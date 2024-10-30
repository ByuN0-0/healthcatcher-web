// HomePage.vue
<template>
  <div class="home">
    <HeroSection />
    <LogoSection />
    <ServicesSection />
    <NewsSection />
    <PartnershipSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import LogoSection from '@/components/home/LogoSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import PartnershipSection from '@/components/home/PartnershipSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    LogoSection,
    ServicesSection,
    NewsSection,
    PartnershipSection
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}
</style>