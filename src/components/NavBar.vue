<template>
  <nav class="introduction-nav">
    <ul>
      <li>
        <router-link to="/" class="home-icon">
          <i class="fas fa-home"></i>
        </router-link>
      </li>
      <li class="dropdown">
        <button class="nav-button" @click="toggleMainDropdown">
          {{ selectedMainMenu }}
          <i class="fas fa-chevron-down"></i>
        </button>
        <ul class="dropdown-menu" v-show="isMainDropdownOpen">
          <li :class="{ active: activePage === 'about' }">
            <router-link to="/about">소개</router-link>
          </li>
          <li :class="{ active: activePage === 'business' }">
            <router-link to="/business">사업</router-link>
          </li>
          <li :class="{ active: activePage === 'community' }">
            <router-link to="/community">커뮤니티</router-link>
          </li>
          <li :class="{ active: activePage === 'contact' }">
            <router-link to="/contact">문의</router-link>
          </li>
        </ul>
      </li>

      <!-- 하위 메뉴 표시 -->
      <li class="dropdown" v-if="subMenuItems.length">
        <button class="nav-button" @click="toggleSubDropdown">
          {{ subMenuTitle }}
          <i class="fas fa-chevron-down"></i>
        </button>
        <ul class="dropdown-menu" v-show="isSubDropdownOpen">
          <li v-for="(item, index) in subMenuItems" :key="index">
            <a
              href="#"
              @click.prevent="selectSubMenuItem(item)"
              :class="{ active: selectedSubMenu === item.label }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    activePage: {
      type: String,
      required: true,
    },
    selectedMainMenu: {
      type: String,
      default: "소개",
    },
    subMenuTitle: {
      type: String,
      default: "하위 메뉴",
    },
    subMenuItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isMainDropdownOpen: false,
      isSubDropdownOpen: false,
      selectedSubMenu: null,
    };
  },
  methods: {
    toggleMainDropdown() {
      this.isMainDropdownOpen = !this.isMainDropdownOpen;
      this.isSubDropdownOpen = false;
    },
    toggleSubDropdown() {
      this.isSubDropdownOpen = !this.isSubDropdownOpen;
      this.isMainDropdownOpen = false;
    },
    selectSubMenuItem(item) {
      this.selectedSubMenu = item.label;
      this.$emit(item.event); // 이벤트를 통해 선택된 하위 메뉴 아이템을 부모에게 알림
      this.isSubDropdownOpen = false;
    },
    closeDropdowns(e) {
      if (!this.$el.contains(e.target)) {
        this.isMainDropdownOpen = false;
        this.isSubDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdowns);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdowns);
  },
};
</script>

<style scoped>
/* 네비게이션 */
.introduction-nav {
  position: absolute;
  bottom: -20px; /* 배너 하단에 고정 */
  left: 150px; /* 왼쪽 정렬 */
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.introduction-nav ul {
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.home-icon {
  display: flex;
  align-items: center;
  color: #00a0e9;
  text-decoration: none;
  font-size: 16px;
  padding: 0 20px;
  border-right: 1px solid #e5e5e5;
}

.home-icon i {
  color: #00a0e9;
}

.nav-button {
  background: none;
  border: none;
  padding: 0 40px;
  height: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  /* border-right: 1px solid #e5e5e5; */
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-button:hover {
  color: #00a0e9;
}

.nav-button i {
  font-size: 12px;
  margin-left: 5px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e5e5e5;
  border-top: none;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 5px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 8px 20px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
  color: #00a0e9;
}
</style>
