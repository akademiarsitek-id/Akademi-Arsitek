<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: 'right', // 'right', 'left', 'bottom', 'top'
    validator: (value) => ['right', 'left', 'bottom', 'top'].includes(value)
  },
  duration: {
    type: [Number, String], // Bisa angka (1000) atau string ("1000")
    default: 1000 
  },
  delay: {
    type: [Number, String],
    default: 0
  }
});

const target = ref(null);
const isVisible = ref(false);
let observer = null;

// Logic Arah Masuk
const initialClass = computed(() => {
  switch (props.direction) {
    case 'left': return '-translate-x-20'; 
    case 'right': return 'translate-x-20'; 
    case 'bottom': return 'translate-y-20'; 
    case 'top': return '-translate-y-20'; 
    default: return 'translate-x-20';
  }
});

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      // observer.unobserve(target.value); // Uncomment jika ingin animasi sekali saja
    } else {
      isVisible.value = false; 
    }
  }, { threshold: 0.15 });

  if (target.value) observer.observe(target.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div
    ref="target"
    class="transition-all ease-out transform will-change-transform"
    :style="{ 
      transitionDuration: `${props.duration}ms`, 
      transitionDelay: `${props.delay}ms` 
    }"
    :class="[
      isVisible 
        ? 'opacity-100 translate-x-0 translate-y-0' 
        : `opacity-0 ${initialClass}`
    ]"
  >
    <slot />
  </div>
</template>