import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      component: () => import("@/view/main/dashboards/ecommerce"),
    },

    // MAIN
    {
      path: "/dashboards/analytics",
      name: "dashboards-analytics",
      component: () => import("@/view/main/dashboards/analytics"),
    },
    {
      path: "/dashboards/ecommerce",
      name: "dashboards-ecommerce",
      component: () => import("@/view/main/dashboards/ecommerce"),
    },
    {
      path: '*',
      component: () => import("@/view/pages/errors/404"),
      meta: {
        layout: "full",
      },
    },
  ]
})

export default router