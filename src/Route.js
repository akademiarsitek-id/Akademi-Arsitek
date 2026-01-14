import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/AbouthUs.vue'
import Product from './components/pages/OurProduct.vue'
import NotFound from './components/pages/404.vue'

const router = createRouter({
    history: createWebHashHistory(),


    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router