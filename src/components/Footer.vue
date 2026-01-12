<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import FooterButton from './FooterButton.vue';

// Import Icon
import Logo from '@/components/icon/logo.svg'; 
import IconEmail from '@/components/icon/FooterEmail.svg';
import IconIG from '@/components/icon/FooterIG.svg';
import IconTiktok from '@/components/icon/FooterTiktok.svg';
import IconWA from '@/components/icon/FooterWA.svg';

// --- LOGIC ---
const activeButton = ref('email');

const setActive = (name) => {
    activeButton.value = name;
};

const resetActive = () => {
    activeButton.value = 'email';
};
</script>

<template>
  <footer class="w-full bg-black text-white px-6 md:px-16 py-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        <div class="flex items-center gap-6">
            <img :src="Logo" alt="Akademi Arsitek Logo" class="w-20 md:w-24 shrink-0" />
            <p class="font-Montserrat text-gray-300 text-sm md:text-base leading-relaxed max-w-xs">
                Karena setiap garis memiliki arti. <br>
                Mulai perjalanan arsitekturmu di sini.
            </p>
        </div>

        <div class="flex flex-col gap-y-4 md:items-start">
            
            <div class="flex flex-wrap gap-x-4" @mouseleave="resetActive">
                
                <FooterButton 
                    href="mailto:akademiarsitek@gmail.com" 
                    label="Email" 
                    colorClass="bg-email-circle hover:bg-[#dgb544] border-transparent"
                    :active="activeButton === 'email'"
                    @mouseenter="setActive('email')"
                >
                    <img :src="IconEmail" class="w-full h-full" alt="Email" />
                </FooterButton>

                <FooterButton 
                    href="https://www.instagram.com/akademiarsitek.id/" 
                    label="Instagram" 
                    colorClass="bg-instagram-circle hover:bg-[#c1275d] border-transparent"
                    :active="activeButton === 'instagram'"
                    @mouseenter="setActive('instagram')"
                >
                    <img :src="IconIG" class="w-full h-full brightness-0 invert" alt="Instagram" />
                </FooterButton>

                <FooterButton 
                    href="https://www.tiktok.com/@akademi.arsitek" 
                    label="TikTok" 
                    colorClass="bg-tiktok-circle hover:bg-[#d61e42] border-transparent"
                    :active="activeButton === 'tiktok'"
                    @mouseenter="setActive('tiktok')"
                >
                    <img :src="IconTiktok" class="w-full h-full brightness-0 invert" alt="TikTok" />
                </FooterButton>

                <FooterButton 
                    href="https://wa.me/6285804069705" 
                    label="Whatsapp" 
                    colorClass="bg-whatsapp-circle hover:bg-[#1da851] border-transparent"
                    :active="activeButton === 'whatsapp'"
                    @mouseenter="setActive('whatsapp')"
                >
                    <img :src="IconWA" class="w-full h-full brightness-0 invert" alt="Whatsapp" />
                </FooterButton>

            </div>

            <nav class="flex gap-8 font-Montserrat text-sm font-medium text-gray-300">
                <RouterLink to="/" class="hover:text-white transition-colors">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-white transition-colors">About Us</RouterLink>
                <RouterLink to="/product" class="hover:text-white transition-colors">Our Product</RouterLink>
            </nav>
            <div class="w-full h-[1px] bg-white/20"></div>
            <div>
                <p class="font-Montserrat text-xs text-gray-500">
                    © 2026 Akademi Arsitek. All rights reserved. Dibuat dengan semangat untuk arsitektur Indonesia.
                </p>
            </div>

        </div>
    </div>
 </footer> 
</template>