<script setup>
defineProps({
  href: { type: String, default: '#' },
  label: { type: String, default: '' },
  colorClass: { type: String, default: 'bg-black' },
  active: { type: Boolean, default: false } // Logic sepenuhnya di sini
})
</script>

<template>
    <a 
      :href="href" 
      class="flex items-center justify-center p-1 rounded-full border-2 border-white text-white transition-all duration-500 ease-out cursor-pointer overflow-hidden shadow-lg"
      :class="[
        colorClass,
        active ? 'pr-4' : '' /* Padding hanya nambah jika disuruh active */
      ]"
    >
        <div class="flex-shrink-0 flex items-center justify-center w-6 h-6">
           <slot />
        </div>

        <span 
            class="overflow-hidden whitespace-nowrap transition-all duration-500 ease-out font-Montserrat font-medium"
            :class="[
                active 
                    ? 'max-w-[200px] opacity-100 ml-3' /* Buka jika Active */
                    : 'max-w-0 opacity-0'              /* Tutup jika Tidak Active */
            ]"
        >
            {{ label }}
        </span>
    </a>    
</template>