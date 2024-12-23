import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Business from '@/pages/Business.vue'
import Community from '@/pages/Community.vue'
import Contact from '@/pages/Contact.vue'
import CompanyIntroduction from '@/components/about/CompanyIntroduction.vue'
import TeamIntroduction from '@/components/about/TeamIntroduction.vue'
import HealthApp from '@/components/business/HealthAppSection.vue'
import HealthProducts from '@/components/business/HealthProductsSection.vue'
import HealthFortune from '@/components/business/HealthFortuneSection.vue'
import CommunityNews from '@/components/community/CommunityNews.vue'
import CommunicationSpace from '@/components/community/CommunicationSpace.vue'
import QnASection from '@/components/contact/QnASection.vue'
import PartnerSection from '@/components/contact/PartnerSection.vue'
import privacyPolicy from "@/components/policy/Privacy-Policy.vue";
import Policy from '@/pages/Policy.vue'
import PrivacyPolicy from '@/components/policy/Privacy-Policy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '',
          redirect: '/about/company'
        },
        {
          path: 'company',
          name: 'companyIntro',
          component: CompanyIntroduction
        },
        {
          path: 'team',
          name: 'teamIntro',
          component: TeamIntroduction
        }
      ]
    },
    {
      path: '/business',
      name: 'business',
      component: Business,
      children: [
        {
          path: '',
          redirect: '/business/health-app'
        },
        {
          path: 'health-app',
          name: 'healthApp',
          component: HealthApp
        },
        {
          path: 'health-products',
          name: 'healthProducts',
          component: HealthProducts
        },
        {
          path: 'health-fortune',
          name: 'healthFortune',
          component: HealthFortune
        }
      ]
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      children: [
        {
          path: '',
          redirect: '/community/news'
        },
        {
          path: 'news',
          name: 'communityNews',
          component: CommunityNews
        },
        {
          path: 'communication',
          name: 'communicationSpace',
          component: CommunicationSpace
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      children: [
        {
          path: '',
          redirect: '/contact/qna'
        },
        {
          path: 'qna',
          name: 'contactQna',
          component: QnASection
        },
        {
          path: 'partner',
          name: 'contactPartner',
          component: PartnerSection
        }
      ]
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: privacyPolicy,
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy,
      children: [
        {
          path: 'privacy',
          name: 'PrivacyPolicy',
          component: PrivacyPolicy
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router