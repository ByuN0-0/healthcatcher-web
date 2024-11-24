<template>
  <div id="app">
    <header class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="logo">
        <router-link to="/" class="logo">
          <h1>헬스캐처</h1>
          <span>Health Catcher</span>
        </router-link>
      </div>
      
      <button class="menu-btn" @click="toggleMenu">
        <span class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav :class="{ 'active': isMenuOpen }">
        <ul>
          <li><router-link to="/about" @click="closeMenu">소개</router-link></li>
          <li><router-link to="/business" @click="closeMenu">사업</router-link></li>
          <li><router-link to="/community" @click="closeMenu">커뮤니티</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">문의</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style scoped>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#app {
   font-family: 'GmarketSansMedium', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  background-color: transparent;
}

.logo {
  text-decoration: none;
  color: white;
}

.logo h1 {
  font-size: 2rem;
  margin: 0;
}

.logo span {
  font-size: 1rem;
  color: #ccc;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  visibility: visible;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
}

nav ul li a:hover {
  color: #00a0e9;
}

/* 푸터 스타일은 별도로 Footer.vue에서 관리 */

/* 모바일 기기 (768px 이하) */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
  
  /* 폰트 크기 조정 */
  h1 { font-size: 24px; }
  p { font-size: 16px; }
  
  /* 네비게이션 메뉴 조정 */
  .nav-menu {
    flex-direction: column;
  }

  .navbar {
    padding: 15px 20px;
    width: 100%;
    background-color: transparent;
    position: absolute;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    transition: 0.3s;
    padding-top: 60px;
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  nav ul li a {
    font-size: 1.1rem;
  }

  .logo h1 {
    font-size: 1.5rem;
  }

  .logo span {
    font-size: 0.8rem;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

button, 
.nav-link {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-left: auto; /* 오른쪽 정렬을 위해 추가 */
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: white;
  transition: 0.3s;
}

/* 모바일 스타일 */
@media screen and (max-width: 768px) {
  .navbar {
    padding: 15px 20px;
    width: 100%;
    background-color: transparent;
  }

  .navbar.scrolled {
    background-color: rgba(0, 0, 0, 0.85); /* 스크롤 시에만 배경색 적용 */
  }

  .menu-btn {
    display: block;
    z-index: 1001;
    position: relative; /* 위치 조정을 위해 추가 */
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    transition: 0.3s;
    padding-top: 60px;
    backdrop-filter: blur(10px);
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  nav ul li a {
    font-size: 1.1rem;
  }

  .logo h1 {
    font-size: 1.5rem;
  }

  .logo span {
    font-size: 0.8rem;
  }
}
</style>
