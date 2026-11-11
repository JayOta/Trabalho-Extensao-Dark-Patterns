<script setup>
import uniparLogo from './assets/logos/unipar-carmim.png'
</script>

<template>
  <div class="flex min-h-dvh flex-col overflow-x-clip">
    <main class="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-4 py-16">
      <h1 class="font-display text-[clamp(2.4rem,12vw,6rem)] leading-[0.9] uppercase">
        Dark<br />
        <span class="band">Patterns</span>
      </h1>
      <div class="h-1 w-16 bg-paper" aria-hidden="true"></div>
      <p class="text-2xl font-semibold leading-tight">
        Quando os sites manipulam suas decisões.
      </p>
      <p class="max-w-prose text-paper-dim">
        Este site vai ensinar, de um jeito simples, a reconhecer os truques que fazem você
        clicar, assinar ou comprar sem querer.
      </p>
      <p class="inline-flex w-fit items-center gap-2 rounded-md border-2 border-paper px-4 py-3 font-semibold">
        <span aria-hidden="true">🚧</span> Site em construção. Volte em breve!
      </p>
    </main>

    <footer class="paper-torn px-4 pt-12 pb-8">
      <div class="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <img :src="uniparLogo" alt="Logo da Unipar" class="w-24" width="96" height="94" />
        <p class="max-w-[32ch] text-sm text-[#3d3934]">
          Projeto de extensão (ACEX · Extensão II) da disciplina Design Front End,
          Engenharia de Software, Unipar Umuarama.
        </p>
      </div>
    </footer>
  </div>
</template>
