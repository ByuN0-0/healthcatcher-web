<template>
  <section class="qna-section">
    <div class="title-container">
      <h2>고객 Q&A</h2>
    </div>
    <div class="qna-content">
      <p>"헬스캐처 서비스에 대한 궁금증을 해결해드립니다. FAQ에서 모든 정보를 빠르게 확인하세요."</p>
      <div class="qna-list">
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
            <tr v-for="(qna, index) in paginatedQnA" :key="index">
              <td>{{ totalQnA - (currentPage - 1) * perPage - index }}</td>
              <td>{{ qna.title }}</td>
              <td>{{ qna.author }}</td>
              <td>{{ qna.date }}</td>
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
    </div>
  </section>
</template>

<script>
export default {
  name: "QnASection",
  data() {
    return {
      qnaList: [
        { title: "헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?", author: "헬스케어", date: "2024-01-01" },
        { title: "헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?", author: "헬스케어", date: "2024-01-01" },
        { title: "헬스케어 서비스에 대한 궁금증은 어디서 해결할 수 있나요?", author: "헬스케어", date: "2024-01-01" },
        // ... 더 많은 QnA 데이터 추가
      ],
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    totalQnA() {
      return this.qnaList.length;
    },
    totalPages() {
      return Math.ceil(this.totalQnA / this.perPage);
    },
    paginatedQnA() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.qnaList.slice(start, end);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.qna-section {
  padding: 20px;
  text-align: center;
}

.qna-content {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.qna-list table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
}

.qna-list th,
.qna-list td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination span {
  display: inline-block;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pagination span.active {
  background-color: #00a0e9;
  color: white;
  border-color: #00a0e9;
}

@media screen and (max-width: 768px) {
  .qna-section {
    padding: 10px;
  }
  
  .qna-list th,
  .qna-list td {
    font-size: 14px;
  }

  .pagination span {
    padding: 4px 8px;
    margin: 0 2px;
    font-size: 14px;
  }
}
</style>