<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <header class="navbar">
      <div class="logo">
        <router-link to="/" class="logo">
          <h1>헬스캐처</h1>
          <span>Health Catcher</span>
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/about">소개</router-link></li>
          <li><router-link to="/business">사업</router-link></li>
          <li><router-link to="/community">커뮤니티</router-link></li>
          <li><router-link to="/contact">문의</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- 페이지 내용 -->
    <router-view />

    <!-- 푸터 추가 -->
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
  padding: 20px 40px; /* 좌우 패딩 증가 */
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: calc(100% - 80px); /* 패딩을 고려한 너비 계산 */
  z-index: 1000;
  box-sizing: border-box; /* 패딩을 너비에 포함 */
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
</style>
