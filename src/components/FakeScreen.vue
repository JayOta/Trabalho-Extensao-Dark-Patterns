<script setup>
// Tela falsa de cada pergunta do quiz (marcas fictícias).
defineProps({ screen: Object })
</script>

<template>
  <div class="grid gap-2 rounded-xl border border-[#333] bg-[#232323] p-4 text-sm" role="img" :aria-label="`Tela de exemplo: ${screen.title}. ${screen.lines.map((l) => [l.text, l.value].filter(Boolean).join(' ')).join('. ')}`">
    <p class="font-bold">{{ screen.title }}</p>
    <template v-for="(l, i) in screen.lines" :key="i">
      <p v-if="l.kind === 'text'" class="flex justify-between gap-3"><span>{{ l.text }}</span><span v-if="l.value">{{ l.value }}</span></p>
      <p v-else-if="l.kind === 'check'" class="flex justify-between gap-3">
        <span><span class="font-bold text-ok">☑</span> {{ l.text }}</span><span>{{ l.value }}</span>
      </p>
      <p v-else-if="l.kind === 'total'" class="flex justify-between gap-3 border-t border-ink-3 pt-2 font-bold">
        <span>{{ l.text }}</span><span>{{ l.value }}</span>
      </p>
      <p v-else-if="l.kind === 'alert'" class="font-bold text-[#ff8a8f]">{{ l.text }}</p>
      <p v-else-if="l.kind === 'timer'" class="font-semibold text-[#e5a24a]">⏱ {{ l.text }}</p>
      <span v-else-if="l.kind === 'primary'" class="btn btn-primary">{{ l.text }}</span>
      <p v-else-if="l.kind === 'link'" class="text-center text-xs text-[#8d877d] underline">{{ l.text }}</p>
    </template>
  </div>
</template>
