import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Business from '@/pages/Business.vue'
import Community from '@/pages/Community.vue'
import Contact from '@/pages/Contact.vue'
import HealthApp from '@/components/business/HealthAppSection.vue'
import HealthProducts from '@/components/business/HealthProductsSection.vue'
import HealthFortune from '@/components/business/HealthFortuneSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/business',
      name: 'business',
      component: Business,
      children: [
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
      component: Community
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router