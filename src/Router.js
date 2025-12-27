import { createWebHistory, createRouter} from "vue-router";
import Home from "@/Home.vue";
import About from "@/Abouth.vue";
import Product from "@/Product.vue";
import Daftar from "@/Daftar.vue";
import Notfound from"./404.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/product", component: Product },
    { path: "/daftar", component: Daftar },
    { path: "/:pathMatch(.*)*", name: "notfound", component: Notfound }

];
export const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        else {
            return { top: 0, behavior: 'smooth' }
        }
    }
});
export default router;