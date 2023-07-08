<template>
  <b-row class="mb-32">
    <b-col cols="12" class="mb-32">
      <b-row align-v="center" align-h="between">
        <b-col cols="12" md="6">
          <h3>Welcome back, Edward 👋</h3>
          <p class="hp-p1-body mb-0">
            Your current status and analytics are here
          </p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12">
      <b-row>
        <b-col cols="12" md="6" xl="3" class="mb-32">
          <b-card>
            <b-row>
              <b-col class="hp-flex-none w-auto">
                <b-avatar
                  class="bg-primary-4 hp-bg-color-dark-primary"
                  size="48px"
                >
                  <i
                    class="iconly-Light-People text-primary hp-text-color-dark-primary-2"
                    style="font-size: 24px"
                  ></i>
                </b-avatar>
              </b-col>

              <b-col class="pl-0">
                <h3 class="mb-4 mt-8">
                  243<span class="hp-badge-text ml-8 text-primary">+3%</span>
                </h3>

                <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">
                  New Customer
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <b-card>
            <b-row>
              <b-col class="hp-flex-none w-auto">
                <b-avatar
                  class="bg-secondary-4 hp-bg-color-dark-secondary"
                  size="48px"
                >
                  <i
                    class="iconly-Light-Buy text-secondary"
                    style="font-size: 24px"
                  ></i>
                </b-avatar>
              </b-col>

              <b-col class="pl-0">
                <h3 class="mb-4 mt-8">
                  1,243<span class="hp-badge-text ml-8 text-secondary"
                    >+4%</span
                  >
                </h3>

                <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">
                  New Orders
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <b-card>
            <b-row>
              <b-col class="hp-flex-none w-auto">
                <b-avatar
                  class="bg-warning-4 hp-bg-color-dark-warning"
                  size="48px"
                >
                  <i
                    class="iconly-Light-Ticket text-warning"
                    style="font-size: 24px"
                  ></i>
                </b-avatar>
              </b-col>

              <b-col class="pl-0">
                <h3 class="mb-4 mt-8">
                  $ 323<span class="hp-badge-text ml-8 text-warning"
                    >-1.4%</span
                  >
                </h3>

                <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">
                  Average Sale
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <b-card>
            <b-row>
              <b-col class="hp-flex-none w-auto">
                <b-avatar
                  class="bg-danger-4 hp-bg-color-dark-danger"
                  size="48px"
                >
                  <i
                    class="iconly-Light-Discount text-danger"
                    style="font-size: 24px"
                  ></i>
                </b-avatar>
              </b-col>

              <b-col class="pl-0">
                <h3 class="mb-4 mt-8">
                  $ 1,32<span class="hp-badge-text ml-8 text-danger">+3%</span>
                </h3>

                <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">
                  Gross Profit
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
  data() {
    return {};
  },
};
</script>
