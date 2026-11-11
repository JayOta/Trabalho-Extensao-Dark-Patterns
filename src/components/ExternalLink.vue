<script setup>
defineProps({ href: String, english: Boolean })
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="font-bold text-ink underline decoration-red decoration-2"><slot /><span class="sr-only"> (abre em nova aba{{ english ? ', em inglês' : '' }})</span> <span aria-hidden="true">↗</span></a>
</template>
