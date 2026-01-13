<script setup>
    import ScrollReveal from '@/components/ScrollReveal.vue'
    import DividerBadge from '@/components/DividerBadge.vue'
    import { ref, computed , onMounted } from 'vue'
    import { products } from '@/components/Data.js'
    import ProductModal from '@/components/ProductModal.vue'

    const carouselContainer = ref(null)

    const activeCategory = ref('')

    const isModalOpen = ref(false)
    const selectedProduct = ref(null)

    const openModal = (product) => {
        selectedProduct.value = product
        isModalOpen.value = true
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        isModalOpen.value = false
        setTimeout(() => {
            selectedProduct.value = null
        }, 300)
        document.body.style.overflow = 'auto'
    }

    const selectCategory = ( categoryName ) => {
        if (activeCategory.value === categoryName) {
            activeCategory.value = ''
        } else {
            activeCategory.value = categoryName
        }
    };

    const filteredProducts = computed(() => {
        if (!activeCategory.value) {
            return products
        }
        return products.filter(product => product.category === activeCategory.value)
    })

   

    const scroll = (direction) => {
        const container = carouselContainer.value;
        
        if (container) {
            const scrollAmount = container.clientWidth / 1.5; 

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    }
    onMounted(()=>{
        document.title = "Our Product | Paket penawaran kelas Akademi Arsitek";
    })
   

</script>

<template>

    <div class="bg-black text-white relative overflow-x-hidden">

        <section class="relative w-full min-h-screen flex flex-col">

            <div class="absolute bottom-0 left-0 w-full h-[50%] md:h-[50%] bg-white/95 rounded-t-md md:rounded-t-xl z-0"></div>

        <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-[25vh] md:pt-[35vh]">
            
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               
                <div class="w-full group p-4 bg-white rounded-3xl">
                        <div class="w-full object-cover rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 relative">
                            <img 
                                src="@/components/img/Studio.webp" 
                                alt="Studio Class"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            >
                        </div>
                        <ScrollReveal direction="bottom" duration="2000" delay="0">
                            <h1 class="font-Montserrat font-regular text-center text-lg md:text-xl mt-4 text-black">Studio Class</h1>
                            <p class="font-Montserrat font-light text-center text-sm md:text-md mt-2 text-black mx-2"><b>Kelas berkelompok (3-4 orang)</b> yang dirancang untuk belajar bersama secara interaktif dan kolaboratif. Cocok untuk Anda yang ingin berkembang sambil berdiskusi dengan peserta lain</p>
                        </ScrollReveal>
                </div>

                <div class="w-full group p-4 bg-white rounded-3xl">

                        <div class="w-full object-cover rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 relative">
                        <img 
                            src="@/components/img/Private.webp" 
                            alt="Private Studio"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        >
                        </div>
                        <ScrollReveal direction="bottom" duration="2000" delay="0">
                            <h1 class="font-Montserrat font-regular text-center text-lg md:text-xl mt-4 text-black">Private Studio</h1>
                            <p class="font-Montserrat font-light text-center text-sm md:text-md mt-2 text-black mx-2"><b>Sesi belajar personal dan intensif 1-on-1</b> dengan mentor. Anda bebas memilih topik pembelajaran sesuai kebutuhan untuk menyelesaikan tugas atau proyek spesifik.</p>
                        </ScrollReveal>
                </div>

                <div class="w-full group p-4 bg-white rounded-3xl">
                        <div class="w-full object-cover rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 relative">
                            <img 
                                src="@/components/img/Mentorship.webp" 
                                alt="Mentorship"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            >
                        </div>
                        <ScrollReveal direction="bottom" duration="2000" delay="0">
                            <h1 class="font-Montserrat font-regular text-center text-lg md:text-xl mt-4 text-black">Mentorship</h1>
                            <p class="font-Montserrat font-light text-center text-sm md:text-md mt-2 text-black mx-2"><b>Program mentorship</b> yang dirancang untuk belajar bersama secara interaktif dan kolaboratif. Cocok untuk Anda yang ingin berkembang sambil berdiskusi dengan mentor.</p>
                        </ScrollReveal>
                </div>
            </div>
            <DividerBadge position="left" :flip-line="true">
                <img src="@/components/icon/Profile.svg" alt="" class="w-3 h-3">
                <span class="text-white font-Montserrat text-xs">Search</span>
            </DividerBadge>
        </div>
        </section>
        <section class="w-full min-h-screen flex flex-col bg-black text-white">
    
            <div class="max-w-4xl mx-auto text-center my-12 md:my-24 px-6">
                <ScrollReveal direction="top" duration="2000" delay="0">
                    <h1 class="font-Montserrat font-regular text-xl md:text-2xl">Find Our Class</h1>
                </ScrollReveal>
            </div>
    
            <div class="w-full max-w-xl mx-auto px-6 mb-8 md:mb-12">
                <ScrollReveal direction="top" duration="2000" delay="0">
            
                    <div class="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-0">

                        <button 
                            @click="selectCategory('Studio Class')"
                            class="group flex items-center justify-center gap-2 py-4 md:py-5 px-6 rounded-full md:rounded-r-none md:rounded-l-full border border-white transition-all duration-300 cursor-pointer"
                            :class="activeCategory === 'Studio Class' 
                                ? 'bg-white text-black' 
                                : 'bg-black text-white hover:bg-white hover:text-black'"
                        >
                            <span class="font-Montserrat font-medium">Studio Class</span>
                        </button>

                        <button 
                            @click="selectCategory('Private Studio')"
                            class="group flex items-center justify-center gap-2 py-4 md:py-5 px-6 rounded-full md:rounded-none border-y md:border-y border-x md:border-x-0 border-white transition-all duration-300 cursor-pointer"
                            :class="activeCategory === 'Private Studio' 
                                ? 'bg-white text-black' 
                                : 'bg-black text-white hover:bg-white hover:text-black'"
                        >
                            <span class="font-Montserrat font-medium">Private Studio</span>
                        </button>

                        <button 
                            @click="selectCategory('Mentorship')"
                            class="group flex items-center justify-center gap-2 py-4 md:py-5 px-6 rounded-full md:rounded-l-none md:rounded-r-full border border-white transition-all duration-300 cursor-pointer"
                            :class="activeCategory === 'Mentorship' 
                                ? 'bg-white text-black' 
                                : 'bg-black text-white hover:bg-white hover:text-black'"
                        >
                            <span class="font-Montserrat font-medium">Mentorship</span>
                        </button>

                    </div>
                </ScrollReveal>
            </div>
    
            <div 
                ref="carouselContainer" 
                class="flex overflow-x-auto gap-4 md:gap-6 max-w-7xl mx-auto px-[7.5vw] md:px-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            >
                <div 
                    v-for="product in filteredProducts" 
                    :key="product.id" 
                    class="flex-none snap-center w-[85vw] md:w-96 md:max-w-none group py-4"
                >
                    <div class="w-full h-64 md:h-72 rounded-3xl border border-white overflow-hidden bg-black relative transition-transform duration-300 hover:scale-[1.02]">

                        <div class="grid grid-rows-[25%_50%_25%] h-full w-full">

                            <div class="border-b border-white flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm z-10">
                                <p class="font-Montserrat font-medium text-white text-center text-sm md:text-base line-clamp-1">
                                    {{ product.title }}
                                </p>
                            </div>

                            <div class="relative w-full h-full bg-gray-800">
                                <img 
                                    :src="product.img" 
                                    :alt="product.title" 
                                    class="w-full h-full object-cover"
                                >
                                <div class="absolute inset-0 bg-black/10"></div>
                            </div>

                            <div 
                                class="border-t border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer bg-black/50 backdrop-blur-sm z-10"
                                @click="openModal(product)"
                            >
                                <p class="font-Montserrat font-medium text-xs md:text-sm text-center uppercase tracking-widest">
                                    View More
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

            <div class="hidden lg:flex justify-center gap-4 mt-8 pb-12">
                <button 
                    @click="scroll('left')" 
                    class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-90"
                    aria-label="Scroll Left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
    
                <button 
                    @click="scroll('right')" 
                    class="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-90"
                    aria-label="Scroll Right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>  

            <div class="lg:hidden text-center pb-12 text-gray-500 text-xs animate-pulse">
                <p>Swipe to explore</p>
            </div>

        </section>
        <ProductModal 
            :is-open="isModalOpen" 
            :product="selectedProduct || {}" 
            @close="closeModal" 
        />
    </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>