<template>
  <div class="content-section">
    <h2>소통 공간</h2>
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
  margin: 60px auto;
  text-align: center;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}
.info-button {
  padding: 10px 30px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
}
.info-button.active {
  background-color: #00a0e9;
  color: white;
}
</style>
