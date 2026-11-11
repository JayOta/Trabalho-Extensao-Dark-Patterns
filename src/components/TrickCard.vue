<script setup>
defineProps({ trick: Object })
</script>

<template>
  <details
    class="group border bg-ink-2 transition-colors duration-300 open:bg-ink-3/60"
    :class="trick.inFolder ? 'border-red' : 'border-ink-3'"
  >
    <summary class="relative grid min-h-11 list-none gap-1 p-5 pr-16">
      <h3 class="text-lg leading-snug font-bold">{{ trick.name }}</h3>
      <span class="text-paper-dim">{{ trick.summary }}</span>
      <span v-if="trick.inFolder" class="font-mono text-xs tracking-wider uppercase">● Está no folder</span>
      <span
        aria-hidden="true"
        class="absolute top-5 right-5 grid size-8 place-items-center rounded-full border border-paper-dim text-xl leading-none transition-transform duration-300 group-open:rotate-45"
      >+</span>
    </summary>
    <dl class="grid gap-3 border-t border-dashed border-ink-3 px-5 pt-4 pb-5">
      <div>
        <dt class="font-bold">Exemplo:</dt>
        <dd class="m-0 text-paper-dim">{{ trick.example }}</dd>
      </div>
      <div>
        <dt class="font-bold">Como escapar:</dt>
        <dd class="m-0">{{ trick.escape }}</dd>
      </div>
    </dl>
  </details>
</template>
