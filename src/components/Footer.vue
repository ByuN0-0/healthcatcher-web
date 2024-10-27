<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3>헬스캐처</h3>
        <p>Health Catcher</p>
        <p>
          주소: 서울특별시 성동구 성수동1가 18-3, 16층<br />
          대표번호: 02-0000-0000<br />
          이메일: healthcatcher@healthcatcher.co.kr<br />
          사업자등록번호: 360-00-03395
        </p>
      </div>
      <div class="footer-right">
        <div class="footer-links">
          <h4>소개</h4>
          <ul>
            <li><router-link to="/about" @click="scrollToSection('company-introduction')">회사소개</router-link></li>
            <li><router-link to="/about" @click="scrollToSection('team-introduction')">운영진소개</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>사업</h4>
          <ul>
            <li><router-link to="/business#health-app">건강 어플리케이션</router-link></li>
            <li><router-link to="/business#health-products">건강 관리 상품</router-link></li>
            <li><router-link to="/business#health-fortune">건강 사주</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>커뮤니티</h4>
          <ul>
            <li><router-link to="/community#health-news">건강 소식</router-link></li>
            <li><router-link to="/community#communication-space">소통 공간</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>문의</h4>
          <ul>
            <li><router-link to="/contact#customer-qna">고객 Q&A</router-link></li>
            <li><router-link to="/contact#partnership-inquiry">파트너십 문의</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2024 헬스캐처. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 40px 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-left h3 {
  font-size: 1.8rem;
  color: #00a0e9;
}

.footer-left p {
  line-height: 1.8;
}

.footer-right {
  display: flex;
  gap: 50px;
}

.footer-links h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 8px;
}

.footer-links ul li a {
  color: white;
  text-decoration: none;
}

.footer-links ul li a:hover {
  color: #00a0e9;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #bbb;
}
</style>
