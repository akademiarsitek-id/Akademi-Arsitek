<script setup>
import { computed } from 'vue';

const props = defineProps({
    // Opsi: 'left' | 'center' | 'right'
    position: {
        type: String,
        default: 'left'
    }
});

const positionClasses = computed(() => {
    switch (props.position) {
        case 'center':
            return 'left-1/2 -translate-x-1/2'; 
        case 'right':
            return 'right-0';
        case 'left':
        default:
            return 'left-0';
    }
});

const lineWidthClasses = computed(() => {
    switch (props.position) {
        case 'center':
            return 'w-1/2 ml-auto'; 
        case 'right':
            return 'w-full';
        case 'left':
        default:
            return 'w-full';
    }
});
</script>

<template>
    <div class="relative w-full h-8 flex items-center my-4">
        <div :class="['h-[1px] bg-oval-component transition-all duration-300', lineWidthClasses]"></div>

        <div 
            :class="[
                'absolute h-6 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300',
                'bg-oval-component text-white', 
                positionClasses
            ]"
        >
            <slot />
        </div>
    </div>
</template>