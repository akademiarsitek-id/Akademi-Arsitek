<script setup>
    defineProps({
       href: {
        type: String,
        default: '#'
       },
       variant: {
        type: String,
        default: 'primary'
       }
    })
</script>

<template>
    <a :href="href" 
    class="inline-flex items-center gap-2 px-6 py-3 rounded-[1.25rem] font-Montserrat font-medium transition-all duration-300 cursor-pointer"
    :class="{
    // Style untuk tombol Putih (Instagram)
      'bg-white text-black hover:bg-gray-200 border border-transparent': variant === 'primary',
      
    // Style untuk tombol Transparan (Whatsapp)
      'bg-transparent text-white border border-white hover:bg-white/10': variant === 'outline'
    }"
    >
        <slot/>
    </a>
</template>

<style scoped>
</style>