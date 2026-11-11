<script setup>
import { tips, rights, complain, deeper } from '../data/protect'
import { team } from '../data/team'
import { references } from '../data/references'
import RichText from './RichText.vue'
import CopyEmail from './CopyEmail.vue'
import ExternalLink from './ExternalLink.vue'
</script>

<template>
  <section id="proteja" class="paper-torn mt-8 pt-20 pb-16">
    <div class="wrap grid gap-12">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="grid content-start gap-4">
          <h2 class="section-title"><span class="bg-red px-2 text-white">Se proteja</span></h2>
          <ul class="grid gap-3">
            <li v-for="(tip, i) in tips" :key="i" class="flex gap-3">
              <span aria-hidden="true" class="font-bold text-[#1f7a2c]">✓</span>
              <span><RichText :parts="tip" /></span>
            </li>
          </ul>
        </div>

        <div class="grid content-start gap-4">
          <h3 class="font-display text-xl uppercase">Seus direitos</h3>
          <ul class="grid gap-4">
            <li v-for="(r, i) in rights" :key="i" class="border-l-4 border-red pl-3">
              <RichText :parts="r.parts" />
              <span class="block text-sm text-paper-ink">{{ r.law }}</span>
            </li>
          </ul>
          <h3 class="mt-4 font-display text-xl uppercase">Onde reclamar</h3>
          <ul class="grid gap-2">
            <li v-for="c in complain" :key="c.name">
              <ExternalLink :href="c.url">{{ c.name }}</ExternalLink>: {{ c.text }}
            </li>
          </ul>
        </div>
      </div>

      <div class="grid gap-4">
        <h3 class="font-display text-xl uppercase">Quer ir mais fundo?</h3>
        <ul class="grid gap-3 md:grid-cols-2">
          <li v-for="d in deeper" :key="d.url" class="border border-paper-ink/30 bg-white/40 p-4">
            <ExternalLink :href="d.url" :english="d.english">{{ d.name }}</ExternalLink>
            <span class="block text-sm text-paper-ink">{{ d.text }}<em v-if="d.english"> Em inglês.</em></span>
          </li>
        </ul>
      </div>

      <div class="grid gap-3">
        <details class="group border-t border-paper-ink/30 pt-3">
          <summary class="flex min-h-11 items-center justify-between font-display text-xl uppercase">
            Quem somos <span aria-hidden="true" class="transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <div class="grid gap-4 pt-3">
            <p>Somos alunos de Engenharia de Software da Unipar Umuarama.</p>
            <p>Este site faz parte de um projeto de extensão (ACEX · Extensão II) da disciplina Design Front End.</p>
            <p>
              Fizemos este site para todas as pessoas: tem letra ajustável (A− / A+), funciona com leitor de tela e
              tem tradução em Libras pelo VLibras.
            </p>
            <ul class="grid gap-4 md:grid-cols-2">
              <li v-for="m in team" :key="m.email" class="grid gap-1">
                <span class="font-bold">{{ m.name }}</span>
                <CopyEmail :email="m.email" :name="m.name" />
              </li>
            </ul>
          </div>
        </details>

        <details class="group border-t border-paper-ink/30 pt-3">
          <summary class="flex min-h-11 items-center justify-between font-display text-xl uppercase">
            Referências <span aria-hidden="true" class="transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <ul class="grid gap-3 pt-3 text-sm">
            <li v-for="r in references" :key="r.url">
              {{ r.before }}<strong>{{ r.title }}</strong>{{ r.after }} Disponível em:
              <a :href="r.url" target="_blank" rel="noopener" class="break-all text-ink">{{ r.url }}</a>. {{ r.access }}
            </li>
          </ul>
        </details>
      </div>
    </div>
  </section>
</template>
