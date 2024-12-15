<template>
  <div class="content-section">
    <h2 class="section-title">건강 소식</h2>
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
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
}

.content-description {
  margin-bottom: 40px;
}

.sub-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .content-section {
    margin: 30px auto;
    padding: 40px 16px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .content-description {
    margin-bottom: 30px;
  }

  .sub-text {
    font-size: 1rem;
  }
}
</style>
