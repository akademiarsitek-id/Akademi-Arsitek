<script setup>
import logoSrc from '@/Image/logo1.png';
import Hamburger from '@/Icon/Hamburger.vue';
import {RouterLink} from "vue-router";
import { ref } from 'vue';

const isMenuMobileOpen = ref(false);
function toggleMenuMobile() {
    isMenuMobileOpen.value = !isMenuMobileOpen.value;
}
</script>

<template>
    <div class="bg-stone-950 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 font-alan-sans font-bold text-lg relative z-10">

        <nav class="flex justify-between items-center py-4">
            <div>
                <RouterLink to="/" class="flex items-center gap-2">
                    <img :src="logoSrc" alt="logo" class="w-20">
                </RouterLink>
            </div>

            <div class="hidden md:flex items-center gap-10 font-red-hat-mono font-normal tracking-wider">
                <RouterLink
                    to = "/"
                    class="transition-transform text-white hover:text-amber-300 hover:scale-110"
                    >
                    Home
                </RouterLink>
                <RouterLink
                    to="/about"
                    class="transition-transform text-white hover:text-amber-300 hover:scale-110"
                    >
                    About Us
                    </RouterLink>
                <RouterLink
                    to="/product"
                    class="transition-transform text-white hover:text-amber-300 hover:scale-110"
                    >
                    Product
                </RouterLink>

            </div>
            <div>
                <button @click="toggleMenuMobile" class="md:hidden text-stone-300 hover:text-white">
                    <Hamburger/>
                </button>
            </div>

        </nav>

        <div :class="{ 'hidden': !isMenuMobileOpen }"
             class="md:hidden pb-4 absolute w-full left-0 bg-stone-950 z-10">
            <RouterLink to="/" class="block py-2 px-4 text-stone-300 hover:bg-stone-800 rounded">Home</RouterLink>
            <RouterLink to="/about" class="block py-2 px-4 text-stone-300 hover:bg-stone-800 rounded">Tentang Kami</RouterLink>
            <RouterLink to="/product" class="block py-2 px-4 text-stone-300 hover:bg-stone-800 rounded">Paket Kelas</RouterLink>
        </div>

    </div>
</template>

<style scoped>

</style>
