<template>
  <footer class="footer">
    <!-- 로고 및 회사 정보 영역 -->
    <div class="footer-left">
      <img src="../assets/healthcatcherCIlog.png" alt="헬스캐처 로고" class="cilogo" />
      <div class="company-info">
        <p class="company-title">헬스캐처 주식회사</p>
        <div class="info-details">
          <p>
            <span class="label">대표전화</span>
            <span class="value">010-4337-4799</span>
            <span class="label ml-20">메일</span>
            <span class="value">jhlee@healthcatcher.net</span>
            <span class="label ml-20">사업자등록번호</span>
            <span class="value">360-86-03316</span>
          </p>
          <p class="address">
            <span class="label">본사</span>
            <span class="value">성북구 서경로 124, 16층 1618호 (정릉동, 유담관)</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 네비게이션 메뉴 영역 -->
    <nav class="footer-nav">
      <div class="nav-group">
        <h2>소개</h2>
        <ul>
          <li><router-link to="/about">회사소개</router-link></li>
          <li><router-link to="/about">운영진소개</router-link></li>
        </ul>
      </div>
      <div class="nav-group">
        <h2>사업</h2>
        <ul>
          <li><router-link to="/business#health-app">건강어플리케이션</router-link></li>
          <li><router-link to="/business#health-products">건강관리상품</router-link></li>
          <li><router-link to="/business#health-fortune">건강사주</router-link></li>
        </ul>
      </div>
      <div class="nav-group">
        <h2>커뮤니티</h2>
        <ul>
          <li><router-link to="/community#health-news">건강소식</router-link></li>
          <li><router-link to="/community#communication-space">소통공간</router-link></li>
        </ul>
      </div>
      <div class="nav-group">
        <h2>문의</h2>
        <ul>
          <li><router-link to="/contact#customer-qna">고객 QnA</router-link></li>
          <li><router-link to="/contact#partnership-inquiry">파트너십 문의</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- 카피라이트 -->
    <div class="copyright">
      <p>Copyright© 2024 헬스캐처. All Rights Reserved.</p>
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
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 40px 40px 20px;
  position: relative;
}

/* 로고 영역 */
.logo {
  color: #00ffff;
  font-size: 20px;
  font-weight: normal;
  margin: 0;
}

.cilogo {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
  object-fit: contain; /* 이미지가 컨테이너에 맞춰지도록 설정 */
  max-width: 100%; /* 반응형을 위한 설정 */
  display: block; /* 이미지 정렬을 위한 설정 */
}

.logo-sub {
  color: #00ffff;
  font-size: 12px;
  margin: 4px 0 20px;
}

/* 회사 정보 영역 */
.company-title {
  font-size: 16px;
  margin-bottom: 12px;
}

.info-details {
  color: #999;
  font-size: 13px;
  line-height: 1.8;
}

.label {
  color: #fff;
  margin-right: 8px;
}

.value {
  color: #999;
}

.ml-20 {
  margin-left: 20px;
}

/* 네비게이션 메뉴 */
.footer-nav {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  gap: 60px;
}

.nav-group h2 {
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: #fff;
}

.nav-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-group ul li {
  margin-bottom: 8px;
}

.nav-group ul li a {
  color: #999;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s;
}

.nav-group ul li a:hover {
  color: #00ffff;
}

/* 카피라이트 */
.copyright {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;
}

.copyright p {
  color: #999;
  font-size: 12px;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .footer-nav {
    position: static;
    margin-top: 40px;
    gap: 30px;
  }

  .footer {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .footer-nav {
    flex-wrap: wrap;
  }

  .nav-group {
    flex-basis: calc(50% - 15px);
  }

  .info-details p span {
    display: block;
    margin-left: 0;
  }

  .ml-20 {
    margin-left: 0;
  }
}
</style>