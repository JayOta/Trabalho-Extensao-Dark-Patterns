<script setup>
import { ref } from 'vue'

const props = defineProps({ email: String, name: String })
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch {
    // Sem permissão para copiar: seleciona o texto para a pessoa copiar à mão
    const el = document.getElementById(`email-${props.email}`)
    if (el) window.getSelection()?.selectAllChildren(el)
  }
}
</script>

<template>
  <span class="flex flex-wrap items-center gap-x-3 gap-y-1">
    <span :id="`email-${email}`" class="font-mono text-sm break-all">{{ email }}</span>
    <button
      type="button"
      class="min-h-11 rounded-md border border-paper-ink px-3 text-sm font-semibold"
      :aria-label="`Copiar e-mail de ${name}`"
      @click="copy"
    >
      {{ copied ? 'Copiado!' : 'Copiar' }}
    </button>
    <span class="sr-only" aria-live="polite">{{ copied ? 'E-mail copiado' : '' }}</span>
  </span>
</template>
