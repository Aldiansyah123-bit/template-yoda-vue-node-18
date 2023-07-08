<template>
  <b-row
    align-v="center"
    align-h="between"
    class="hp-sidebar-footer mx-0 hp-bg-color-dark-90"
  >
    <div
      v-if="!collapsed"
      class="divider hp-border-black-40 hp-border-color-dark-70 mt-0 px-0"
    ></div>
  </b-row>
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  props: ["collapsed"],
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
