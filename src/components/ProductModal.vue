<script setup>
import { computed } from 'vue'; // Import computed

const props = defineProps({
    isOpen: Boolean,
    product: Object
});

const emit = defineEmits(['close']);

const whatsappLink = computed(() => {

    const phoneNumber = '6285804069705'; 
    const message = `Halo Admin, saya tertarik untuk mendaftar kelas *${props.product.title}*. Mohon informasi lebih lanjut.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-[999] flex items-center justify-center px-4">
            
            <div 
                class="absolute inset-0 bg-black/90 backdrop-blur-sm" 
                @click="$emit('close')"
            ></div>

            <div class="relative bg-black border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
                
                <button 
                    @click="$emit('close')" 
                    class="absolute top-4 right-4 z-10 p-2 bg-black border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="w-full md:w-2/5 h-64 md:h-auto bg-neutral-900 relative border-b md:border-b-0 md:border-r border-white/10">
                    <img 
                        :src="product.img" 
                        :alt="product.title" 
                        class="w-full h-full object-cover opacity-90"
                    >
                    <div class="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                        {{ product.category }}
                    </div>
                </div>

                <div class="w-full md:w-3/5 p-6 md:p-10 flex flex-col text-white bg-black">
                    
                    <h2 class="text-3xl font-bold mb-2 font-Montserrat tracking-tight">{{ product.title }}</h2>
                    
                    <div class="flex items-center gap-3 mb-6">
                        <div class="flex items-center gap-2 px-3 py-1 border border-white/30 rounded-full">
                            <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            <span class="text-xs font-medium tracking-wide uppercase">Tool: {{ product.tool }}</span>
                        </div>
                    </div>

                    <p class="text-gray-400 text-sm leading-relaxed mb-8 font-light border-l-2 border-white/20 pl-4">
                        {{ product.description }}
                    </p>

                    <div class="mt-auto">
                        <h3 class="text-xs font-bold text-white mb-4 uppercase tracking-[0.2em] border-b border-white/20 pb-2">Pricelist Options</h3>
                        
                        <div class="space-y-3">
                            <div class="flex justify-between items-center p-4 border border-white/20 rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                                <div>
                                    <p class="text-sm font-bold text-white group-hover:underline decoration-1 underline-offset-4">Basic</p>
                                    <p class="text-xs text-gray-500">{{ product.time1 }} Duration</p>
                                </div>
                                <p class="text-lg font-bold text-white">{{ product.price1 }}</p>
                            </div>

                            <div class="flex justify-between items-center p-4 border border-white/20 rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                                <div>
                                    <p class="text-sm font-bold text-white group-hover:underline decoration-1 underline-offset-4">Standard</p>
                                    <p class="text-xs text-gray-500">{{ product.time2 }} Duration</p>
                                </div>
                                <p class="text-lg font-bold text-white">{{ product.price2 }}</p>
                            </div>

                            <div class="flex justify-between items-center p-4 border border-white/20 rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                                <div>
                                    <p class="text-sm font-bold text-white group-hover:underline decoration-1 underline-offset-4">Premium</p>
                                    <p class="text-xs text-gray-500">{{ product.time3 }} Duration</p>
                                </div>
                                <p class="text-lg font-bold text-white">{{ product.price3 }}</p>
                            </div>
                        </div>
                    </div>

                    <a 
                        :href="whatsappLink"
                        target="_blank"
                        class="mt-8 w-full block text-center py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                    >
                        Book This Class
                    </a>

                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>