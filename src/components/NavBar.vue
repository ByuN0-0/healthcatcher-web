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
        <ul class="dropdown-menu" :class="{ 'show': isMainDropdownOpen }">
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
        <ul class="dropdown-menu" :class="{ 'show': isSubDropdownOpen }">
          <li v-for="(item, index) in subMenuItems" :key="index">
            <router-link
              :to="item.route"
              :class="{ active: $route.path === item.route }"
              @click="selectSubMenuItem(item)"
            >
              {{ item.label }}
            </router-link>
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
      if (this.isMainDropdownOpen) {
        this.isSubDropdownOpen = false;
      }
      document.body.classList.toggle('dropdown-open', this.isMainDropdownOpen);
    },
    toggleSubDropdown() {
      this.isSubDropdownOpen = !this.isSubDropdownOpen;
      if (this.isSubDropdownOpen) {
        this.isMainDropdownOpen = false;
      }
      document.body.classList.toggle('dropdown-open', this.isSubDropdownOpen);
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
        document.body.classList.remove('dropdown-open');
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdowns);
  },
  beforeDestroy() {
    document.body.classList.remove('dropdown-open');
    document.removeEventListener('click', this.closeDropdowns);
  },
};
</script>

<style scoped>
/* 기본 스타일 */
.introduction-nav {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  z-index: 100;
}

.introduction-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.home-icon {
  display: flex;
  align-items: center;
  color: #2563eb;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.home-icon:hover {
  background: #f0f7ff;
}

.nav-button {
  background: none;
  border: none;
  padding: 8px 24px;
  font-size: 15px;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  min-width: 160px;
  justify-content: center;
  height: 40px;
  position: relative;
}

.nav-button:hover {
  background: #f0f7ff;
  color: #2563eb;
}

.nav-button i {
  font-size: 12px;
  margin-left: 4px;
}

.dropdown {
  position: relative;
  z-index: 100;
  margin: 0 4px;
  display: flex;
  justify-content: center;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 8px;
  width: 160px;
  padding: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown-menu li {
  width: 100%;
  padding: 0;
  margin: 2px 0;
}

.dropdown-menu a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 8px);
  margin: 0 4px;
  padding: 10px 20px;
  color: #1f2937;
  text-decoration: none;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  height: 40px;
  position: relative;
  box-sizing: border-box;
}

.dropdown-menu a:hover,
.dropdown-menu a.active {
  background: #2563eb;
  color: white;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .introduction-nav {
    width: calc(100% - 32px);
    padding: 12px 16px;
    bottom: -20px;
  }

  .introduction-nav ul {
    gap: 12px;
  }

  .nav-button {
    padding: 8px 20px;
    font-size: 14px;
    min-width: 140px;
    height: 36px;
  }

  .dropdown-menu {
    width: 140px;
    padding: 4px;
  }

  .dropdown-menu li {
    margin: 1px 0;
  }

  .dropdown-menu a {
    padding: 8px 16px;
    font-size: 13px;
    height: 36px;
  }
}

@media screen and (max-width: 480px) {
  .introduction-nav {
    width: calc(100% - 24px);
    padding: 10px 12px;
  }

  .nav-button {
    padding: 6px 16px;
    font-size: 13px;
    min-width: 130px;
    height: 34px;
  }

  .home-icon {
    font-size: 16px;
  }

  .dropdown-menu {
    width: 130px;
  }

  .dropdown-menu a {
    padding: 6px 14px;
    font-size: 13px;
    height: 34px;
  }
}

/* 홈 아이콘 스타일 추가 */
.home-icon {
  padding: 8px 16px;
  font-size: 18px;
  color: #1f2937;
  transition: all 0.2s ease;
}

.home-icon:hover {
  color: #2563eb;
}
</style>
