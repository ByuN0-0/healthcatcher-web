<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>공지사항</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <h3>{{ notice.title }}</h3>
        <div class="notice-content" v-html="notice.content"></div>
      </div>
      <div class="modal-footer">
        <label class="hide-today">
          <input type="checkbox" v-model="hideToday" />
          오늘 하루 보지 않기
        </label>
        <button class="confirm-button" @click="closeModal">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeModal",
  data() {
    return {
      isVisible: true,
      hideToday: false,
      notice: {
        title: "홈페이지 제작 안내",
        content: `
        <p>안녕하세요, 헬스캐처입니다.</p>
        <br>
        <p>현재 홈페이지 제작이 진행 중입니다.</p>
        <br>
        <p>주요 작업 내용:</p>
        <ul>
          <li>웹사이트 디자인 개선</li>
          <li>사용자 경험(UX) 최적화</li>
          <li>서비스 안정성 강화</li>
          <li>모바일 환경 최적화</li>
        </ul>
        <br>
        <p>일부 기능이나 서비스 이용에 제한이 있을 수 있는 점 양해 부탁드립니다.</p>
        <p>더욱 편리하고 안정적인 서비스로 찾아뵙겠습니다.</p>
        <br>
        <p style="color: #00a0e9; font-weight: 500;">예상 완료일: 2025년 상반기</p>
      `,
      },
    };
  },
  created() {
    // 컴포넌트가 생성될 때 로컬 스토리지 체크
    this.checkModalVisibility();
  },
  methods: {
    checkModalVisibility() {
      const lastShown = localStorage.getItem("noticeLastShown");
      const today = new Date().toDateString();

      if (lastShown === today) {
        this.isVisible = false;
      }
    },
    closeModal() {
      if (this.hideToday) {
        const today = new Date().toDateString();
        localStorage.setItem("noticeLastShown", today);
      }
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* z-index 값을 높임 */
}

.modal-content {
  background-color: white;
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* position 추가 */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0 8px;
}

.modal-body {
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;
}

.modal-body h3 {
  margin: 0 0 15px 0;
  color: #00a0e9;
  font-size: 1.3rem;
}

.notice-content {
  color: #666;
  line-height: 1.6;
}

.notice-content ul {
  padding-left: 20px;
  margin: 10px 0;
}

.notice-content li {
  margin: 5px 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid #eee;
  background-color: #f8f8f8;
}

.hide-today {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  cursor: pointer;
  user-select: none;
}

.hide-today input[type="checkbox"] {
  width: 16px;
  height: 16px;
}

.confirm-button {
  padding: 8px 20px;
  background-color: #00a0e9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.confirm-button:hover {
  background-color: #0089c7;
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 20px;
    max-height: 80vh;
  }

  .modal-body {
    max-height: 50vh;
  }

  .modal-header h2 {
    font-size: 1.3rem;
  }

  .modal-body h3 {
    font-size: 1.1rem;
  }
}
</style>
