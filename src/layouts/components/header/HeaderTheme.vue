<template>
  <div class="d-flex text-center mr-4">
    <button
      v-if="theme == 'dark' ? ' active' : ''"
      variant="none"
      class="btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition"
      @click="themeChange('light')"
    >
      <i
        class="ri-sun-line text-white hp-text-color-dark-white-2"
        style="font-size: 25px; cursor: pointer"
      ></i>
    </button>
    <button
      v-if="theme == 'light' ? ' active' : ''"
      variant="none"
      class="btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition"
      @click="themeChange('dark')"
    >
      <i
        class="ri-moon-line text-muted"
        style="font-size: 25px; cursor: pointer"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: this.$store.state.themeConfig.theme,
      direction: this.$store.state.themeConfig.direction,
      contentWidth: this.$store.state.themeConfig.contentWidth,
      vertical:
        this.$store.state.themeConfig.layout == "vertical" ? true : false,
      verticalMini: this.$store.state.themeConfig.sidebarCollapsed,
      verticalCollapsed: this.$store.state.themeConfig.sidebarCollapseButton,
      verticalImage: "vertical",
      horizontal:
        this.$store.state.themeConfig.layout == "horizontal" ? true : false,
      horizontalFull: this.$store.state.navigationFull,
      horizontalBg: this.$store.state.navigationBg,
      horizontalImage: "horizontal",
      activeClass: false,
    };
  },
  mounted() {
    // Theme
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        this.themeDark();
      }
      if (localStorage.getItem("theme") == "light") {
        this.themeLight();
      }
    } else {
      if (this.$store.state.themeConfig.theme == "light") {
        this.themeLight(false);
      }
      if (this.$store.state.themeConfig.theme == "dark") {
        this.themeDark(false);
      }
    }
  },
  methods: {
    // Theme
    themeLight() {
      this.theme = "light";
      this.$store.state.themeConfig.theme = "light";
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
    },
    themeDark() {
      this.theme = "dark";
      this.$store.state.themeConfig.theme = "dark";
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      localStorage.setItem("theme", "dark");
    },
    themeChange(theme) {
      if (theme == "light") {
        this.themeLight();
      }

      if (theme == "dark") {
        this.themeDark();
      }
    },
  },
};
</script>
