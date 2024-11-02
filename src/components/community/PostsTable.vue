<template>
  <div class="posts-table">
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in paginatedPosts" :key="index">
          <td>{{ totalPosts - (currentPage - 1) * perPage - index }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.date }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <span
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentTab'],
  data() {
    return {
      posts: [],
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    totalPosts() {
      return this.posts.length;
    },
    totalPages() {
      return Math.ceil(this.totalPosts / this.perPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.posts.slice(start, end);
    },
  },
  watch: {
    currentTab() {
      this.currentPage = 1;
      this.fetchPosts();
    },
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      // 실제 API 호출 로직으로 대체해야 합니다.
      this.posts = Array.from({ length: 100 }, (_, i) => ({
        title: this.currentTab === '건강 소식' ? '건강 소식 게시판입니다.' : '소통 공간 정보 자유 게시판입니다.',
        author: '헬스캐처',
        date: '2024-10-01',
      }));
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.posts-table {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination span {
  display: inline-block;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.pagination span.active {
  background-color: #00a0e9;
  color: white;
  border-color: #00a0e9;
}
</style>