<template>
    <div class="tab-navigation">
      <div class="tab-container">
        <div
          class="tab-item"
          :class="{ active: currentTab === '건강 소식' }"
          @click="$emit('updateTab', '건강 소식')"
        >
          커뮤니티
        </div>
        <div
          class="tab-item"
          :class="{ active: currentTab === '소통 공간' }"
          @click="$emit('updateTab', '소통 공간')"
        >
          소통 공간
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['currentTab'],
  };
  </script>
  
  <style scoped>
  /* Tab Navigation Styles */
  .tab-navigation {
    text-align: center;
    background-color: #f5f5f5;
    padding: 15px 0;
  }
  .tab-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .tab-item {
    padding: 8px 16px;
    cursor: pointer;
    font-size: 1.1rem;
    color: #000;
    border-bottom: 2px solid transparent;
  }
  .tab-item.active {
    border-bottom: 2px solid #00a0e9;
  }
  /* 모바일 반응형 스타일 추가 */
  @media screen and (max-width: 768px) {
    .tab-navigation {
      padding: 10px 0;
    }
    .tab-container {
      padding: 5px 0;
    }
    .tab-item {
      padding: 6px 12px;
      font-size: 1rem;
    }
  }
  </style>
  