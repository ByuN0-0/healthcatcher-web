<template>
  <nav class="introduction-nav">
    <ul>
      <li :class="{ active: activeTab === 'company' }" @click="showCompany">
        회사소개
      </li>
      <li :class="{ active: activeTab === 'team' }" @click="showTeam">
        운영진 소개
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "IntroductionNav",
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  methods: {
    showCompany() {
      this.$emit("changeTab", "company");
    },
    showTeam() {
      this.$emit("changeTab", "team");
    },
  },
};
</script>

<style scoped>
.introduction-nav {
  text-align: center;
  background-color: #f8f8f8;
  padding: 15px 0;
}

.introduction-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.introduction-nav ul li {
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.introduction-nav ul li.active {
  border-bottom: 2px solid #00a0e9;
}
</style>
