<script setup>
import uniparLogo from '../assets/logos/unipar-carmim.png'
import esLogo from '../assets/logos/engenharia-software.jpg'
</script>

<template>
  <footer class="bg-paper px-4 pb-10 text-ink">
    <div class="mx-auto flex max-w-2xl flex-col items-center gap-4 border-t border-paper-ink/30 pt-8 text-center">
      <div class="flex items-center gap-5">
        <img :src="uniparLogo" alt="Logo da Unipar" class="w-24" width="96" height="94" />
        <span class="h-16 w-px bg-paper-dim" aria-hidden="true"></span>
        <!-- multiply some o fundo branco do JPEG; clip-path corta a borda escura de baixo -->
        <img
          :src="esLogo"
          alt="Logo do curso de Engenharia de Software"
          class="w-24 mix-blend-multiply [clip-path:inset(1%_1%_5%_1%)]"
          width="96"
          height="96"
        />
      </div>
      <p class="max-w-[34ch] text-sm text-paper-ink">
        Projeto de extensão (ACEX · Extensão II) da disciplina Design Front End, Engenharia de Software, Unipar Umuarama.
      </p>
    </div>
  </footer>
</template>
