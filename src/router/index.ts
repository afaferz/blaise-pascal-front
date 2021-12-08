import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
// import Obras from "@/views/Obras.vue";
// import Frases from "@/views/Frases.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/vida",
        name: "Vida",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "obras" */ "@/views/vida.vue")
    },
    {
        path: "/obras",
        name: "Obras",
        // route level code-splitting
        // this generates a separate chunk (about.[h@/views/frases.vueroute
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "obras" */ "@/views/obras/index.vue")
    },
    {
        path: "/frases",
        name: "Frases",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/frases.vue")
    },
    {
        path: "/experimente",
        name: "Experimente",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/experimente.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
