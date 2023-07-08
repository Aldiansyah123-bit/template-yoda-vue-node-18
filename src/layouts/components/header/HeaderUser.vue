<template>
  <div
    class="hover-dropdown-fade w-auto px-0 ml-6 position-relative hp-cursor-pointer"
  >
    <div
      class="hp-cursor-pointer border hp-border-color-dark-80"
      style="border-radius: 15px"
    >
      <div class="rounded-lg overflow-hidden m-4 d-flex">
        <b-avatar
          variant="none"
          :src="require('@/assets/img/memoji/user-avatar-4.png')"
          size="32px"
          class="rounded-0 hp-bg-info-4"
        />
      </div>
    </div>

    <div
      class="hp-header-profile-menu dropdown-fade position-absolute pt-18"
      style="top: 100%; width: 260px"
    >
      <div class="rounded hp-bg-black-0 hp-bg-dark-100 py-24 px-18">
        <b-col cols="12">
          <b-link
            class="hp-p1-body font-weight-medium hp-hover-text-color-primary-2"
            to="/"
          >
            Logout
          </b-link>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
