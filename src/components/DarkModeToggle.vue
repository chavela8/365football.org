<template>
  <button @click="toggleDarkMode" class="dark-mode-toggle">
    {{ isDark ? 'Светлая тема' : 'Темная тема' }}
  </button>
</template>

<script>
export default {
  name: "DarkModeToggle",
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    // Проверка сохранённых настроек или системных установок
    this.isDark = localStorage.getItem("theme") === "dark";
    this.updateTheme();
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
      this.updateTheme();
    },
    updateTheme() {
      if (this.isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style scoped>
.dark-mode-toggle {
  padding: 5px 10px;
  cursor: pointer;
  background: var(--button-bg, #007bff);
  border: none;
  color: white;
  border-radius: 5px;
}
</style> 