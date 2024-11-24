<template>
  <div class="content-section">
    <h2>건강 소식</h2>
    <div class="content-description">
      <p>"헬스케어의 최신 트렌드와 정보를 헬스캐처 커뮤니티에서 한눈에 확인하세요."</p>
      <p class="sub-text">건강에 대한 최신 정보와 트렌드를 한곳에서 확인하세요. 누구나 실천할 수 있는 건강 정보를 통해, 더욱 건강한 일상을 얻을 수 있어요.</p>
    </div>
    <PostsTable :currentTab="'건강 소식'" />
  </div>
</template>

<script>
import PostsTable from "@/components/community/PostsTable.vue";

export default {
  name: "CommunityNews",
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
  padding: 0 20px;
}
.content-description {
  margin-bottom: 40px;
}
.sub-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .content-section {
    margin: 30px auto;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .content-description {
    margin-bottom: 30px;
  }
  
  .sub-text {
    font-size: 13px;
  }
}
</style>
