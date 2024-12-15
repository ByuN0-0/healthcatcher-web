<template>
  <section class="qna-section">
    <div class="title-container">
      <h2 class="section-title">고객 Q&A</h2>
    </div>
    <div class="qna-content">
      <p>"헬스캐처 서비스에 대한 궁금증을 해결해드립니다. FAQ에서 모든 정보를 빠르게 확인하세요."</p>
      <div class="qna-list posts-table">
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
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
  color: #333;
}

.qna-content {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

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

/* 모바일 반응형 스타일 추가 */
@media screen and (max-width: 768px) {
  .posts-table {
    padding: 0 10px;
  }

  table {
    font-size: 14px;
  }

  th,
  td {
    padding: 10px 5px;
  }

  /* 번호와 날짜 컬럼 크기 조절 */
  th:first-child,
  td:first-child,
  th:last-child,
  td:last-child {
    width: 60px;
  }

  /* 글쓴이 컬럼 크기 조절 */
  th:nth-child(3),
  td:nth-child(3) {
    width: 70px;
  }
}

/* 매우 작은 화면에서의 추가 조정 */
@media screen and (max-width: 480px) {
  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 8px 3px;
  }

  /* 번호와 날짜 컬럼 더 작게 */
  th:first-child,
  td:first-child,
  th:last-child,
  td:last-child {
    width: 50px;
  }

  /* 글쓴이 컬럼 더 작게 */
  th:nth-child(3),
  td:nth-child(3) {
    width: 60px;
  }
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