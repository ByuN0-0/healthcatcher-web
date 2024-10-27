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
/* 네비게이션 바 */
body {
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: white;
  position: absolute; /* fixed 대신 absolute를 사용하여 상단에 고정하되 스크롤하지 않게 함 */
  top: 0;
  z-index: 1000;
}

.logo {
  text-decoration: none; /* 링크일 때 밑줄 없애기 */
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
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  visibility: visible; /* 요소가 표시되게 확인 */
}

nav ul li a:hover {
  color: #00a0e9;
}

/* 푸터 스타일은 별도로 Footer.vue에서 관리 */
</style>
