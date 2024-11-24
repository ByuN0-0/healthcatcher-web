<template>
  <section class="partnership">
    <div class="partnership-content">
      <h2 class="partnership-title">PARTNERSHIP</h2>
      <h3 class="partnership-heading">파트너십 문의</h3>
      <p class="partnership-description">
        헬스캐처는 지속 가능한 성장을 위해 다양한 기업과 협력 기회를 열어두고 있습니다.<br />
        광고, 협력, 후원 및 투자와 관련된 모든 문의를 환영하며, 함께 헬스케어의 미래를 혁신할 파트너를 기다리고 있습니다.
      </p>
      <router-link to="/contact/partner" class="partnership-button">
        문의하기 →
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnershipSection',
  methods: {
    goToContact() {
      this.$router.push('/contact/partner');
    }
  }
}
</script>
  
  <style scoped>
  .partnership {
    position: relative;
    height: 60vh;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/partnershipInquirybanner.jpg");
    background-size: cover;
    background-position: center;
  }
  
  .partnership::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .partnership-content {
    text-align: center;
    color: white;
    z-index: 1;
    padding: 40px;
    border-radius: 10px;
  }
  
  .partnership-title {
    font-size: 1.5rem;
    color: #00a0e9;
    margin-bottom: 10px;
  }
  
  .partnership-heading {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .partnership-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 30px;
    word-break: keep-all;
    white-space: pre-line;
  }
  
  .partnership-button {
    padding: 12px 24px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s, color 0.3s;
    text-decoration: none;
  }
  
  .partnership-button:hover {
    background-color: white;
    color: black;
  }
  
  @media screen and (max-width: 768px) {
    .partnership {
      height: auto;
      padding: 60px 20px;
    }

    .partnership-content {
      padding: 20px;
    }

    .partnership-title {
      font-size: 1.2rem;
    }

    .partnership-heading {
      font-size: 2rem;
    }

    .partnership-description {
      font-size: 1rem;
      padding: 0 20px;
      word-break: keep-all;
      line-height: 1.8;
    }

    .partnership-button {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
  </style>