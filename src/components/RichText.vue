<script setup>
// Texto com trechos em negrito, vindo dos dados: [{ t: '...' }, { t: '...', strong: true }]
defineProps({ parts: Array })
</script>

<template>
  <template v-for="(part, i) in parts" :key="i"><strong v-if="part.strong">{{ part.t }}</strong><template v-else>{{ part.t }}</template></template>
</template>
