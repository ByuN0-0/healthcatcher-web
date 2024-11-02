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
    padding: 15px 0;
  }
  .tab-item {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #000;
    border-bottom: 2px solid transparent;
  }
  .tab-item.active {
    border-bottom: 2px solid #00a0e9;
  }
  </style>
  