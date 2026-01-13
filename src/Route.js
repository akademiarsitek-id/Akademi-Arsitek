import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/AbouthUs.vue'
import Product from './components/pages/OurProduct.vue'

const router = createRouter({
    history: createWebHashHistory('/Akademi-Arsitek/'),


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
        }
    ]
})

export default router