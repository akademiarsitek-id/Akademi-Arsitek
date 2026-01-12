<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import Button from '@/components/Button.vue';
import ScrollReveal from '@/components/ScrollReveal.vue';
import DividerBadge from '@/components/DividerBadge.vue';


// --- LOGIC HERO CAROUSEL ---
const activeHeroIndex = ref(0);
const heroItems = [
    { title: 'Keunggulan Kami', desc: 'Mentor Pembelajaran Yang profesional' },
    { title: 'Kurikulum Terkini', desc: 'Materi sesuai standar industri terbaru' },
    { title: 'Komunitas Luas', desc: 'Jejaring arsitek dari seluruh Indonesia' },
    { title: 'Sertifikasi Resmi', desc: 'Dapatkan sertifikat kompetensi yang diakui' }
];

let heroInterval = null;

const nextHeroSlide = () => {
    activeHeroIndex.value = (activeHeroIndex.value + 1) % heroItems.length;
}

const startHeroAutoplay = () => {
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(nextHeroSlide, 3000);
}

const stopHeroAutoplay = () => {
    if (heroInterval) clearInterval(heroInterval);
}

onMounted(() => {
    startHeroAutoplay();
});

onUnmounted(() => {
    stopHeroAutoplay();
});

const setHeroSlide = (index) => activeHeroIndex.value = index;

const whyItems = [
    "Mentor Berpengalaman Pembelajaran didampingi oleh | Studio Mentor berpengalaman yang siap membimbing | Anda secara aplikatif dan relevan dengan dunia profesional.",
    
    "Materi Praktis Materi disusun agar langsung bisa dipraktekkan | di dunia kerja tanpa teori yang bertele-tele.",
    
    "Networking Luas Bergabung dengan ribuan alumni dan | arsitek profesional dari seluruh Indonesia.",
    
    "Sertifikasi Resmi Mendapatkan sertifikat resmi | yang diakui industri setelah lulus ujian."
];

const whatCourse = [
    "Kursus yang tersedia mulai dari kelas Revit, BIM, AutoCAD, dan | mulai dari kelas bersama, Kelas Bimbingan dan Kelas Privat."
];

const activeWhyIndex = ref(0);
const activeLineIndex = ref(0);
let whyInterval = null;

const nextWhySlide = () => {
    activeWhyIndex.value = (activeWhyIndex.value + 1) % whyItems.length;
};

const startWhyAutoplay = () => {
    if (whyInterval) clearInterval(whyInterval);
    whyInterval = setInterval(nextWhySlide, 3000); 
};

const stopWhyAutoplay = () => {
    if (whyInterval) clearInterval(whyInterval);
};

const setWhySlide = (index) => {
    activeWhyIndex.value = index;
    stopWhyAutoplay();   
    startWhyAutoplay();
};

onMounted(() => {
    startWhyAutoplay();
});

onUnmounted(() => {
    stopWhyAutoplay();
});

const activeLineIndex2 = ref(0);
const activeWhyIndex2 = ref(0);

watch(activeWhyIndex, () => activeLineIndex.value = 0);

</script>

<template>
    <div class="w-full bg-black text-white relative overflow-x-hidden">
        
        <section class="relative w-full h-screen overflow-hidden">
            <img src="@/components/img/BackgroundHome.webp" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/20"></div>

            <div class="relative z-10 grid grid-rows-2 md:grid-rows-4 h-full">
                <div class="block row-span-1 md:row-span-2"></div>
                
                <ScrollReveal direction="left" duration="2000" delay="0">
                    <div class="md:row-start-3 grid grid-cols-1 md:grid-cols-2 w-full items-center px-6 md:px-12 transition-all duration-1000 ease-out transform">
                        <div class="justify-self-center md:justify-self-start text-left">
                            <div class="font-Montserrat font-medium text-white text-5xl 2xl:text-7xl leading-tight">
                                <p><span class="text-amber-500 font-bold">A</span>KADEMI</p>
                                <p>ARSITEK</p>
                            </div>
                        </div>
    
                        <div class="justify-self-center md:justify-self-end self-center text-center md:text-left max-w-sm">
                            <p class="font-Montserrat text-gray-200 text-sm leading-relaxed">
                                Akademi Arsitek adalah platform praktis bagi pemula untuk menguasai desain dan teknis bangunan.
                            </p>
                            <div class="flex gap-4 justify-center md:justify-start mt-6">
                                <Button variant="outline" href="https://wa.me/6285804069705">Whatsapp <img src="@/components/icon/whatsapp.svg" alt="" class="w-5 h-5 ml-2"/></Button>
                                <Button variant="primary" href="https://www.instagram.com/akademiarsitek.id/">Instagram <img src="@/components/icon/instagram.svg" alt="" class="w-5 h-5 ml-2"/></Button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                
                <div class="row-start-4 w-full px-6 md:px-12 flex flex-col justify-end pb-10">
                    <div class="w-full h-[1px] bg-white/30"></div>
                    <div class="flex items-center justify-between py-6">
    
                    <Transition name="fade-slide" mode="out-in">
        
                    <div :key="activeHeroIndex" class="flex flex-col text-left">
                        <h3 class="font-Montserrat font-bold text-white text-lg">
                            {{ heroItems[activeHeroIndex].title }}
                        </h3>
                        <p class="font-Montserrat text-gray-300 text-sm mt-1">
                            {{ heroItems[activeHeroIndex].desc }}
                        </p>
                    </div>

                    </Transition>

                    <div class="flex items-center gap-3">
                        <button v-for="(item, index) in heroItems" :key="index" @click="setHeroSlide(index)" class="h-1.5 rounded-full transition-all duration-300" :class="activeHeroIndex === index ? 'w-8 bg-white' : 'w-4 bg-white/30'">
                        </button>
                    </div>
                </div>
                    <div class="w-full h-[1px] bg-white/30"></div>
                </div>
            </div>
        </section>

        <section class="w-full px-6 md:px-12 pb-20 pt-10">
            
            <div class="grid grid-cols-1 gap-y-8 gap-x-12 border-b border-oval-component py-16">
                
                <div class="flex flex-col items-start">
                    <DividerBadge position="left">
                         <img src="@/components/icon/Q&A.svg" alt="" class="w-3 h-3">
                            <span class="text-white font-Montserrat text-xs">Q&A</span>
                    </DividerBadge>
                    <ScrollReveal direction="left" duration="2000" delay="0">
                        <h2 class="font-Montserrat font-medium text-lg md:text-3xl leading-snug mb-8 mt-8">
                            Mengapa Akademi Arsitek ?
                        </h2>
                    </ScrollReveal>
                    

                    <div class="w-full h-[1px] bg-oval-component my-8"></div> 
                </div>

                <div class="flex flex-col min-h-[250px]"> 
                    <ScrollReveal direction="left" duration="2000" delay="0">
                        <div class="flex self-start gap-2 mb-6"
                            @mouseover="stopWhyAutoplay()"
                            @mouseout="startWhyAutoplay()"
                        >
                         <button 
                            v-for="(item, index) in whyItems" 
                            :key="index"
                            @click="setWhySlide(index)"
                            class="h-1 rounded-full transition-all duration-500 ease-out"
                            :class="activeWhyIndex === index 
                                ? 'w-10 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                                : 'w-3 bg-white/20 hover:bg-white/50'"
                        ></button>
                    </div>
                    </ScrollReveal>
                    

                    <div class="flex flex-col items-end gap-1" @mouseleave="activeLineIndex = 0">
                        <ScrollReveal direction="right" duration="2000" delay="0">
                            <div class="max-w-lg w-full"> 
        
                            <Transition name="fade-slide" mode="out-in">
            
                            <div :key="activeWhyIndex"
                                @mouseover="stopWhyAutoplay()"
                                @mouseout="startWhyAutoplay()"
                            >
                                <p 
                                    v-for="(line, i) in String(whyItems[activeWhyIndex]).split('|')" 
                                    :key="i"
                                    @mouseover="activeLineIndex = i"
                                    class="cursor-default block mb-2 text-xs md:text-lg text-right transition-all duration-100 ease-in-out" 
                                    :class="[
                                        activeLineIndex === i 
                                            ? 'text-white font-normal translate-x-0'
                                            : 'text-gray-500 font-light'
                                    ]"
                                >
                                    {{ line.trim() }}
                                    </p>
                                </div>

                            </Transition>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-y-8 gap-x-12 border-b border-oval-component py-16">
                <ScrollReveal direction="left" duration="2000" delay="0">
                    <div class="flex items-start">
                        <h3 class="font-Montserrat font-medium text-md md:text-2xl leading-snug">
                            Kursus yang Tersedia Ada Apa Saja ?
                        </h3>
                    </div>
                </ScrollReveal>
                <div class="w-full h-[1px] bg-oval-component my-8"></div> 
                <ScrollReveal direction="right" duration="2000" delay="0">
                    <div class="flex flex-col items-end gap-1">
                    <div class="max-w-lg w-full">
                        <p 
                            v-for="(line , i) in String(whatCourse[activeWhyIndex2]).split('|')"
                            :key="i"
                        @mouseover="activeLineIndex2 = i"
                        class="cursor-default block mb-2 text-xs md:text-lg text-right transition-all duration-100 ease-in-out" 
                        :class="[
                            activeLineIndex2 === i 
                                ? 'text-white font-normal translate-x-0'   
                                : 'text-gray-500 font-light'   
                        ]"
                    >
                        {{ line.trim() }}
                    </p>
                    <a href="#" class="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm group ml-8">
                        <span class="group-hover:translate-x-1 transition-transform">↳</span> 
                        Telusuri Paket kelas kami sekarang juga
                    </a>
                    </div>
                </div>
                </ScrollReveal>
        </div>

        </section>

    </div>
</template>

<style scoped>
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px); 
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); 
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-out;
}
</style>