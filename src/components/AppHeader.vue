<script setup>
import { ref } from 'vue'
import { useFontScale } from '../composables/useFontScale'

const links = [
  { href: '#pratica', label: 'Na prática' },
  { href: '#truques', label: 'Truques' },
  { href: '#teste', label: 'Teste' },
  { href: '#proteja', label: 'Se proteja' },
]

const open = ref(false)
const { percent, canIncrease, canDecrease, increase, decrease } = useFontScale()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-ink-3 bg-ink/95 backdrop-blur">
    <div class="wrap flex min-h-14 items-center gap-3">
      <a href="#inicio" class="font-display text-sm tracking-wide text-paper no-underline uppercase">
        Dark <span class="bg-red px-1 text-ink">Patterns</span>
      </a>

      <nav aria-label="Seções do site" class="ml-auto hidden md:block">
        <ul class="flex gap-5">
          <li v-for="l in links" :key="l.href">
            <a :href="l.href" class="font-semibold text-paper-dim no-underline hover:text-paper">{{ l.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex items-center gap-1 md:ml-4" role="group" aria-label="Tamanho da letra">
        <button
          type="button"
          class="grid size-11 place-items-center rounded-md border border-paper-dim font-bold disabled:opacity-40"
          :disabled="!canDecrease"
          aria-label="Diminuir a letra"
          @click="decrease"
        >A−</button>
        <button
          type="button"
          class="grid size-11 place-items-center rounded-md border border-paper-dim text-lg font-bold disabled:opacity-40"
          :disabled="!canIncrease"
          aria-label="Aumentar a letra"
          @click="increase"
        >A+</button>
        <span class="sr-only" aria-live="polite">Tamanho da letra: {{ percent }}%</span>
      </div>

      <button
        type="button"
        class="grid size-11 place-items-center rounded-md border border-paper-dim md:hidden"
        :aria-expanded="open"
        aria-controls="menu-celular"
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        @click="open = !open"
      >
        <span aria-hidden="true" class="text-xl leading-none">{{ open ? '✕' : '☰' }}</span>
      </button>
    </div>

    <Transition name="menu">
    <nav v-show="open" id="menu-celular" aria-label="Seções do site" class="border-t border-ink-3 md:hidden">
      <ul class="wrap grid py-2">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="block py-3 font-semibold text-paper no-underline" @click="open = false">{{ l.label }}</a>
        </li>
      </ul>
    </nav>
    </Transition>
  </header>
</template>
