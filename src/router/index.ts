import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/contact",
        name: "About",
        component: () => import("../views/Contact.vue")
    },
    {
        path: "/experience",
        name: "experience",
        component: () => import("../views/Experience.vue")
    },
    {
        path: "/study",
        name: "study",
        component: () => import("../views/Study.vue")
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
