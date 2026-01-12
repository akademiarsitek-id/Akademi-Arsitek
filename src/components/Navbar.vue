<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import MenuIcon from './icon/Menu.vue';
import HomeIcon from './icon/HomeIcon.vue';
import AbouthIcon from './icon/AbouthIcon.vue';
import ProductIcon from './icon/ProductIcon.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
    isMenuOpen.value = false;
}


    

</script>
<template>
    <nav class="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-7xl">
        <div class="relative bg-navbar px-8 py-2 flex justify-between items-center text-navtext rounded-full">
            <div>
                <img class="w-10 h-10" src="./icon/logo.svg" alt="logo">
            </div>
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-subtitle font-Montserrat">
                <RouterLink
                to="/"
                class="hover:text-navtext-hover text-subtitle"
                active-class="text-navtext-hover"
                >Home</RouterLink>
                <RouterLink 
                to="/about"
                 class="hover:text-navtext-hover"
                active-class="text-navtext-hover"
                >About Us</RouterLink>
                <RouterLink 
                to="/product"
                 class="hover:text-navtext-hover"
                active-class="text-navtext-hover"
                >Our Product</RouterLink>
            </div>

            <div class="md:hidden cursor-pointer flex-items-center" @click="toggleMenu">
                <MenuIcon/>
            </div>

            <Transition
            enter-active-class="transition duration-200 ease-out origin-top-right"
            enter-from-class="opacity-0 scale-90"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in origin-top-right"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-90"
            >
            <div 
            v-if="isMenuOpen"
            class="absolute top-full right-5 mt-4 w-20 bg-navbar p-4 rounded-b-full flex flex-col item-center gap-6 md:hidden font-Montserrat"
            >
            <RouterLink
            to="/"
            @click="closeMenu"
            class="flex flex-col items-center gap-1 group text-navtext hover:text-navtext-hover transition"
            active-class="text-navtext-hover"
            >
            <HomeIcon/>
            <span class="text-Header4">Home</span> 
            </RouterLink>
            <RouterLink
            to="/about"
            @click="closeMenu"
            class="flex flex-col items-center gap-1 group text-navtext hover:text-navtext-hover transition"
            active-class="text-navtext-hover"
            >
            <AbouthIcon/>
            <span class="text-Header4">About Us</span> 
            </RouterLink>
            <RouterLink
            to="/product"
            @click="closeMenu"
            class="flex flex-col items-center gap-1 group text-navtext hover:text-navtext-hover transition"
            active-class="text-navtext-hover"
            >
            <ProductIcon/>
            <span class="text-Header4">Our Product</span> 
            </RouterLink>        
        </div>
        </Transition>

        </div>

    </nav>
</template>