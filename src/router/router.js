import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";

const routes = [
    {
        path: '/',
        component:Main
    },
    {
        path: '/posts',
        component:PostPage
    },
    {
        path: '/posts/:id',
        component:PostIdPage
    },
    {
        path: '/about',
        component:About
    },
]

const router= createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;