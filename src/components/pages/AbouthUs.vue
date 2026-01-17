<script setup>
import { ref, watch, onMounted} from 'vue'
import DividerBadge from '@/components/DividerBadge.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import Fokus from '@/components/icon/Fokus.vue'
import Unveiling from '@/components/icon/Unveiling.vue'
import Tiktok from '@/components/icon/Tiktok.vue'
import Whatsapp from '@/components/icon/Whatsapp.vue'
import Instagram from '@/components/icon/Instagram.vue'

const ourVision = [
    "Menjadi platform edukasi arsitektur terdepan yang mencetak | arsitek siap kerja"
];



const activeVisionIndex = ref(0);
const activeLineIndex = ref(0);

const activeTab = ref('focus');
const carouselRef = ref(null);

const testimonials = [
    { quote: "diajarin render sama tentor keren gacor parah 😆" },
    { quote: "Lagi dan lagi makasih ya udh adain les ky ginian. aku gtau sih klo gda akademi mu inii" },
    { quote: "secara keseluruhan pengalmanku cukupp berkesan. Admin-nya responsif dan komunikatif , mentornya jugaa bener2 oke." },
    { quote: "Alasanku memilih kelas private karrena ingin pembelajaran yang benar - benar menyesuaikan kemampuan dan ritme belajarku sendiri dan itu memang terasa" },
    { quote: "Akademi ini worth it sihh buat yang pengen upgrade skill" },
    { quote: "Menntornya enak ngejelasinnya , bukan sekedar  wduh aku gabisa , tapi diusahaiin sampe bisa jelasin ke kita" }
];

const contentData = {
    focus: {
        title: 'Our Focus',
        points: [
            'Praktis: Langsung ke teknis, bukan hanya teori',
            'Project-Based: Belajar sambil membuat karya untuk portofolio',
            'Software Terkini: Menggunakan tools standar industri (AutoCAD, SketchUp, Revit, dll)'
        ]
    },
    unveiling: {
        title: 'Unveiling Potential', // Judul buatan saya
        points: [
            'Mentorship Eksklusif: Bimbingan langsung dari arsitek praktisi berpengalaman',
            'Sertifikasi Kompetensi: Bukti keahlian yang valid untuk melamar kerja'
        ]
    }
};


watch(activeVisionIndex, () => activeLineIndex.value = 0);

const scroll = (direction) => {
    if (carouselRef.value) {
        const scrollAmount = direction === 'left' ? -350 : 350;
        carouselRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

onMounted(() => {
    document.title = "About Us | Mengenal Akademi Arsitek";
    // Cek apakah carousel sudah ter-render
    if (carouselRef.value) {
        // Ambil elemen kartu pertama
        const firstCard = carouselRef.value.firstElementChild;
        
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 24; 
            
            carouselRef.value.scrollTo({
                left: cardWidth + gap,
                behavior: 'auto' 
            });
        }
    }
});

</script>

<template>
    <div class="bg-black w-full text-white relative overflow-x-hidden">
        
        <section class="w-full min-h-screen grid grid-rows-[auto_1fr_auto] md:grid-rows-[100px_auto_1fr] lg:grid-rows-[200px_auto_1fr] 2xl:grid-rows-[250px_auto_1fr]">
            
            <div class="hidden md:block w-full"></div>

            <div class="w-full h-full px-6 md:px-12 flex flex-col justify-center py-10 md:py-0">
                
                <div class="w-full flex justify-end mb-8">
                    <DividerBadge position="center" :flip-line="true">
                        <img src="@/components/icon/Profile.svg" alt="" class="w-3 h-3">
                        <span class="text-white font-Montserrat text-xs">Profile</span>
                    </DividerBadge>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    
                    <div>
                        <section class="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                            <img 
                                src="@/components/img/BackgroundAbouthUs.webp" 
                                alt="Building" 
                                class="absolute inset-0 w-full h-full object-cover"
                            >
                            
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>

                            <div class="relative z-10 w-full h-full flex flex-col justify-between p-8">
                               
                               <ScrollReveal direction="left" duration="2000" delay="0">
                                    <img 
                                        class="w-auto h-20 md:h-48 object-contain drop-shadow-lg" 
                                        src="@/components/img/TextAbouth.svg" 
                                        alt="about us"
                                    >
                               </ScrollReveal>

                               <ScrollReveal direction="left" duration="2000" delay="0">
                                <img
                                    class="w-auto h-10 md:h-20 object-contain drop-shadow-lg self-end"
                                    src="@/components/img/Introduction.svg"
                                    alt="introduction"
                                >
                                </ScrollReveal>
                            </div>
                        </section>
                    </div>
                        
                    <div>
                        <section class="relative w-full h-[400px] md:h-[550px] overflow-hidden">
                            <div class="flex flex-col text-white px-6 md:px-12 gap-8">
                                <ScrollReveal direction="right" duration="2000" delay="0">
                                   <div class="flex flex-col gap-2">
                                        <h2 class="font-Montserrat font-semibold text-white text-base md:text-lg">Our Vision</h2>
                                        <p v-for="(line , i) in String(ourVision[activeVisionIndex]).split('|')" 
                                        :key="i" 
                                        @mouseover="activeLineIndex = i"
                                        :class="activeLineIndex === i ? 
                                        'font-Montserrat font-normal text-white text-xs md:text-sm mx-4' 
                                        : 'font-Montserrat font-thin text-white text-xs md:text-sm mx-4'"
                                        >{{ line }} </p> 
                                   </div>
                                </ScrollReveal>
                                <ScrollReveal direction="right" duration="2000" delay="0">
                                    <div class="flex flex-col gap-2">
                                        <h2 class="font-Montserrat font-semibold text-white text-base md:text-lg">Our Mission</h2>
                                       
                                        <ul class="flex flex-col gap-2 mt-2">
                                                <li class="font-Montserrat font-thin text-white text-xs md:text-sm mx-4 hover:font-normal list-disc">
                                                    Menyediakan kurikulum berbasis studi kasus nyata
                                                </li>
                                                <li class="font-Montserrat font-thin text-white text-xs md:text-sm mx-4 hover:font-normal list-disc">
                                                    Mendekemokratisasi ilmu arsitektur agar mudah diakses siapa saja
                                                </li>
                                                <li class="font-Montserrat font-thin text-white text-xs md:text-sm mx-4 hover:font-normal list-disc">
                                                    Membentuk komunitas yang saling mendukung
                                                </li>
                                            </ul>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal direction="right" duration="2000" delay="0">
                                    <div class="hidden md:grid grid-cols-2 gap-4 w-full md:max-w-[350px]">
                                         <button 
                                            @click="activeTab = 'focus'"
                                            class="group flex items-center justify-center gap-2 py-4 px-6 border border-white text-white font-Montserrat font-semibold rounded-l-full rounded-r-2xl transition-all duration-300 hover:bg-white hover:text-black"
                                        >
                                            <Fokus class="w-6 h-6 group-hover:text-black" />
                                            Focus
                                        </button>

                                            <button 
                                                @click="activeTab = 'unveiling'"    
                                                class="group flex items-center border border-white justify-center gap-2 py-4 px-6 bg-white text-black font-Montserrat font-semibold rounded-r-full rounded-l-2xl transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
                                            >
                                            <Unveiling class="w-6 h-6 group-hover:text-white" />
                                                Unveiling
                                            </button>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal direction="right" duration="2000" delay="0">
                                    <div class="hidden md:flex flex-col gap-4">
                                        <h2 class="font-Montserrat font-semibold text-white text-md md:text-lg tracking-wide">
                                            {{ contentData[activeTab].title }}
                                        </h2>
                                        
                                        <ul class="flex flex-col gap-4 mt-2">
                                            <li 
                                                v-for="(point, index) in contentData[activeTab].points" 
                                                :key="index"
                                                class="flex items-start gap-4"
                                            >
                                                <span class="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                            
                                                <span class="font-Montserrat font-light text-white text-xs md:text-sm ">
                                                     {{ point }}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </section>
                    </div>
                
                </div>

            </div>

            <div class="hidden md:block w-full"></div>

        </section>
        <section class="w-full text-white py-12 md:py-20 relative mb-8 mt-8 md:mb-12 md:mt-12">
        
            <div class="px-6 md:px-12 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <ScrollReveal direction="top" duration="2000" delay="0">
                    <div class="flex flex-col gap-2">
                        <h2 class="font-Montserrat font-semibold text-2xl md:text-xl mb-1 text-center md:text-left">Apa Kata Mereka?</h2>
                        <p class="text-gray-400 font-Montserrat font-light text-sm md:text-sm text-center md:text-left">
                            Pengalaman nyata dari alumni Akademi Arsitek
                        </p>
                    </div>
                </ScrollReveal>

                <div class="hidden md:flex gap-4">
                    <button @click="scroll('left')" class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button @click="scroll('right')" class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div 
                ref="carouselRef"
                class="flex overflow-x-auto gap-4 md:gap-6 px-6 md:px-12 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
                <div 
                    v-for="(item, index) in testimonials" 
                    :key="index"
                    class="snap-center md:snap-start flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none md:min-w-[350px]"
                >
                    <div class="relative w-full h-full p-1 group">
                        
                        <div class="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-oval-component group-hover:border-white rounded-tl-xl transition-colors duration-300"></div>
                        <div class="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-oval-component group-hover:border-white rounded-tr-xl transition-colors duration-300"></div>
                        <div class="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-oval-component group-hover:border-white rounded-bl-xl transition-colors duration-300"></div>
                        <div class="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-oval-component group-hover:border-white rounded-br-xl transition-colors duration-300"></div>

                        <div class="px-5 py-6 md:px-6 md:py-8 flex flex-col justify-between h-full min-h-[200px] md:min-h-[220px] max-w-[320px]">
                            
                            <p class="font-Montserrat font-light text-sm md:text-base leading-relaxed text-gray-200 italic mb-4 md:mb-6">
                                "{{ item.quote }}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex md:hidden justify-center gap-4 mt-2 px-6">
                <button @click="scroll('left')" class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button @click="scroll('right')" class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

        </section>
        
    
        <section class="overflow-y-hidden">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 m-12">
        
                <ScrollReveal direction="bottom" duration="2000" delay="0">
                    <div class="flex flex-col gap-2 max-w-xs">
                        <h1 class="font-Montserrat text-2xl italic font-medium text-white leading-relaxed tracking-wider hover:font-semibold duration-100">
                            " Follow the journey "
                        </h1>
                        <p class="font-Montserrat text-sm text-white font-thin">
                            Kunjungi Sosial Media Kami dan ikuti berita terkini melalui tombol dibawah ini
                        </p>
                    </div>
            
                    <div class="flex gap-4 mt-6"> 
                        <a 
                            href="https://www.tiktok.com/@akademi.arsitek" 
                            target="_blank"
                            class="group flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            <Tiktok class="w-5 h-5" /> 
                            <span class="font-Montserrat font-medium">Tiktok</span>
                        </a>

                        <a 
                            href="https://www.instagram.com/akademiarsitek.id/" 
                            target="_blank"
                            class="group flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                        >
                            <Instagram class="w-5 h-5" />
                            <span class="font-Montserrat font-medium">Instagram</span>
                        </a>
                    </div>
                </ScrollReveal>
            
                <ScrollReveal direction="bottom" duration="2000" delay="0" class="justify-self-start md:justify-self-end">
                    <div class="flex flex-col gap-2 max-w-xs text-left md:text-right">
                        <h1 class="font-Montserrat text-2xl italic font-medium text-white leading-relaxed tracking-wider hover:font-semibold duration-100">
                            " Get In Touch "
                        </h1>
                        <p class="font-Montserrat text-sm text-white font-thin">
                            Hubungi Kami melalui tombol dibawah ini
                        </p>
                    </div>
            
                    <div class="flex gap-4 mt-6 justify-start md:justify-end"> 
                        <a 
                            href="https://wa.me/6285804069705?text=Halo%20Admin,%20saya%20tertarik%20dengan%20kelas%20di%20Akademi%20Arsitek.%20Boleh%20minta%20info%20lebih%20lanjut?" 
                            target="_blank"
                            class="group flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            <span class="font-Montserrat font-medium">Whatsapp</span>
                            <Whatsapp class="w-5 h-5" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </div>
</template>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>