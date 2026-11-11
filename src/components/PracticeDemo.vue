<script setup>
import { ref, computed } from 'vue'
import { points, honest, closing } from '../data/practice'
import HotspotButton from './HotspotButton.vue'

const activeN = ref(null)
const isHonest = ref(false)
const active = computed(() => points.find((p) => p.n === activeN.value))
const p = (n) => points[n - 1]

function select(n) {
  activeN.value = activeN.value === n ? null : n
}
function toggleHonest() {
  isHonest.value = !isHonest.value
  activeN.value = null
}
</script>

<template>
  <section id="pratica" class="border-t border-ink-3 py-16">
    <div class="wrap grid gap-10 md:grid-cols-[1fr_minmax(0,22rem)] md:items-start">
      <div class="grid gap-4 md:sticky md:top-24">
        <h2 class="section-title">Veja na <span class="band">prática</span></h2>
        <p class="text-paper-dim">
          {{ isHonest ? 'Agora sem truques. Compare com a versão anterior.' : 'Esta é a tela do folder. Toque nos números.' }}
        </p>

        <!-- Balão com a explicação; anunciado pelo leitor de tela -->
        <div aria-live="polite" class="min-h-28">
          <Transition name="fade-up" mode="out-in">
          <div v-if="active && !isHonest" :key="active.n" class="relative bg-paper p-4 text-ink">
            <p class="font-bold">{{ active.n }} · {{ active.title }}</p>
            <p class="text-sm text-paper-ink">{{ active.where }}</p>
            <p class="mt-2">{{ active.text }}</p>
          </div>
          <p v-else-if="isHonest" class="border-l-4 border-ok bg-ink-2 p-4 font-semibold">{{ closing }}</p>
          <p v-else class="border-l-4 border-red bg-ink-2 p-4 text-paper-dim">
            Escolha um número na tela para ver o truque.
          </p>
          </Transition>
        </div>

        <button
          type="button"
          class="btn btn-ghost w-full sm:w-auto sm:justify-self-start"
          :aria-pressed="isHonest"
          @click="toggleHonest"
        >
          {{ isHonest ? 'Ver versão com truques' : 'Ver versão honesta' }}
        </button>
      </div>

      <!-- Celular com a tela StreamPlus (recriada em HTML, marca fictícia) -->
      <div
        class="mx-auto w-full max-w-[22rem] rounded-[2.2rem] border-[10px] border-[#0b0b0b] bg-ink-2 shadow-2xl outline outline-2 outline-[#3a3a3a]"
        role="group"
        :aria-label="isHonest ? 'Tela do StreamPlus, versão honesta' : 'Tela do StreamPlus, versão com truques'"
      >
        <div class="mx-auto h-5 w-24 rounded-b-xl bg-[#0b0b0b]" aria-hidden="true"></div>
        <div class="grid gap-4 px-6 pt-4 pb-8 text-center">
          <p class="flex items-center justify-center gap-2 text-lg font-bold">
            <span aria-hidden="true" class="inline-block border-y-[9px] border-l-[15px] border-y-transparent border-l-paper"></span>
            StreamPlus
          </p>

          <Transition name="fade-up" mode="out-in">
          <div v-if="!isHonest" key="truques" class="grid gap-4">
            <div class="relative">
              <p class="font-display text-2xl leading-tight uppercase">Experimente grátis por 7 dias!</p>
              <HotspotButton :point="p(1)" :active="activeN === 1" class="-top-3 -right-8" @select="select" />
            </div>
            <ul class="grid gap-1 text-left text-sm">
              <li><span class="font-bold text-ok" aria-hidden="true">✓ </span>Acesso completo ao catálogo</li>
              <li><span class="font-bold text-ok" aria-hidden="true">✓ </span>Qualidade HD</li>
              <li class="relative">
                <span class="font-bold text-ok" aria-hidden="true">✓ </span>Cancele quando quiser*
                <HotspotButton :point="p(4)" :active="activeN === 4" class="-top-3 -right-8" @select="select" />
              </li>
            </ul>
            <span class="btn btn-primary pointer-events-none text-lg" aria-hidden="true">Começar teste grátis</span>
            <p class="relative">
              <span class="text-xs text-[#8d877d] underline">Não, obrigado</span>
              <HotspotButton :point="p(2)" :active="activeN === 2" class="-top-3 right-6" @select="select" />
            </p>
            <p class="relative text-[0.6rem] leading-snug text-[#8d877d]">
              *Após o período de teste, será cobrado R$ 39,90/mês automaticamente.
              <HotspotButton :point="p(3)" :active="activeN === 3" class="-top-1 -left-9" @select="select" />
            </p>
          </div>

          <div v-else key="honesta" class="grid gap-4">
            <p class="font-display text-xl leading-tight uppercase">{{ honest.title }}</p>
            <div class="grid grid-cols-2 gap-3" aria-hidden="true">
              <span class="btn btn-primary pointer-events-none px-2">{{ honest.accept }}</span>
              <span class="btn btn-ghost pointer-events-none px-2">{{ honest.decline }}</span>
            </div>
            <p class="rounded-md border border-ok p-3 text-sm">{{ honest.notice }}</p>
          </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
