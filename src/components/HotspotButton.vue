<script setup>
// Ponto numerado da tela StreamPlus. Botão de 44px com nome falado.
defineProps({ point: Object, active: Boolean })
defineEmits(['select'])
</script>

<template>
  <button
    type="button"
    class="hotspot absolute z-10 grid size-11 place-items-center rounded-full bg-red font-body text-base leading-none font-bold text-white shadow-lg"
    :class="{ 'is-active': active }"
    :aria-label="`Ponto ${point.n}: ${point.title}`"
    :aria-pressed="active"
    @click="$emit('select', point.n)"
  >
    {{ point.n }}
  </button>
</template>

<style scoped>
.hotspot {
  box-shadow: 0 0 0 4px rgb(215 38 46 / 0.35);
  animation: pulse 1.8s ease-in-out infinite;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}
.hotspot:hover { transform: scale(1.08); }
.hotspot:active { transform: scale(0.95); }
.hotspot.is-active {
  background: var(--color-paper);
  color: var(--color-ink);
  animation: none;
  box-shadow: 0 0 0 4px var(--color-red);
}
@keyframes pulse {
  50% { box-shadow: 0 0 0 10px rgb(215 38 46 / 0.08); }
}
</style>
