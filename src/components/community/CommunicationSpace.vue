<template>
  <div class="content-section">
    <h2 class="section-title">소통 공간</h2>
    <div class="content-description">
      <p>"함께 나누는 건강 이야기, 헬스캐처와 함께 건강 목표를 실천하세요."</p>
      <p class="sub-text">건강을 해결하는 이야기를 나누는 공간입니다.</p>
    </div>
    <div class="button-group">
      <button class="info-button">일상 자유</button>
      <button class="info-button active">정보 공유</button>
    </div>
    <PostsTable :currentTab="'소통 공간'" />
  </div>
</template>

<script>
import PostsTable from "@/components/community/PostsTable.vue";

export default {
  name: "CommunicationSpace",
  components: {
    PostsTable,
  },
};
</script>

<style scoped>
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 20px;
}
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 50px;
}
.content-description {
  margin-bottom: 40px;
}
.sub-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
}
.info-button {
  padding: 10px 30px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  min-width: 120px;
}
.info-button.active {
  background-color: #00a0e9;
  color: white;
}
@media screen and (max-width: 768px) {
  .content-section {
    margin: 30px auto;
  }
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  .content-description {
    margin-bottom: 30px;
  }
  .sub-text {
    font-size: 13px;
  }
}
</style>
