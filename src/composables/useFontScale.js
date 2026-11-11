import { ref, computed } from 'vue'

// Botões A− / A+: 4 tamanhos de letra, guardados no navegador da pessoa.
const LEVELS = [1, 1.15, 1.3, 1.5]
const KEY = 'dp-font-scale'

function load() {
  try {
    const i = Number(localStorage.getItem(KEY))
    return Number.isInteger(i) && i >= 0 && i < LEVELS.length ? i : 0
  } catch {
    return 0
  }
}

const level = ref(load())

function apply() {
  document.documentElement.style.setProperty('--font-scale', String(LEVELS[level.value]))
  try {
    localStorage.setItem(KEY, String(level.value))
  } catch {
    /* navegação privada: só não guarda */
  }
}
apply()

export function useFontScale() {
  const percent = computed(() => Math.round(LEVELS[level.value] * 100))
  const canIncrease = computed(() => level.value < LEVELS.length - 1)
  const canDecrease = computed(() => level.value > 0)
  const increase = () => { if (canIncrease.value) { level.value++; apply() } }
  const decrease = () => { if (canDecrease.value) { level.value--; apply() } }
  return { percent, canIncrease, canDecrease, increase, decrease }
}
