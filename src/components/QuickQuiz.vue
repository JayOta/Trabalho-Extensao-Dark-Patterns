<script setup>
import { ref, computed } from 'vue'
import { questions, resultMessage } from '../data/quiz'
import FakeScreen from './FakeScreen.vue'

const index = ref(0)
const chosen = ref(null)
const score = ref(0)
const finished = ref(false)
const heading = ref(null)

const q = computed(() => questions[index.value])
const answered = computed(() => chosen.value !== null)
const correct = computed(() => chosen.value === q.value.answer)
const letters = ['A', 'B', 'C']

function choose(i) {
  if (answered.value) return
  chosen.value = i
  if (i === q.value.answer) score.value++
}

function next() {
  if (index.value < questions.length - 1) {
    index.value++
    chosen.value = null
  } else {
    finished.value = true
  }
}

function restart() {
  index.value = 0
  chosen.value = null
  score.value = 0
  finished.value = false
}

// Leva o foco para o novo título depois da animação (ajuda quem usa teclado ou leitor de tela)
function focusHeading() {
  heading.value?.focus()
}

function optionClass(i) {
  if (!answered.value) return 'border-ink-3 hover:border-paper'
  if (i === q.value.answer) return 'border-ok bg-ok/15'
  if (i === chosen.value) return 'border-red bg-red/15'
  return 'border-ink-3 opacity-60'
}
</script>

<template>
  <section id="teste" class="border-t border-ink-3 py-16">
    <div class="wrap grid max-w-2xl gap-6">
      <div class="grid gap-3">
        <h2 class="section-title">Teste <span class="band">rápido</span></h2>
        <p class="text-paper-dim">5 perguntas. Leva uns 2 minutos e nada é salvo.</p>
      </div>

      <Transition name="fade-up" mode="out-in" @after-enter="focusHeading">
      <div v-if="!finished" :key="`p${index}`" class="grid gap-4">
        <div class="flex justify-between font-mono text-sm text-paper-dim">
          <span>Pergunta {{ index + 1 }} de {{ questions.length }}</span>
          <span>Acertos: {{ score }}</span>
        </div>
        <div class="h-2 overflow-hidden rounded bg-ink-3" aria-hidden="true">
          <div class="h-full bg-red transition-[width] duration-500 ease-out" :style="{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }"></div>
        </div>

        <h3 ref="heading" tabindex="-1" class="text-xl font-bold">Qual é o truque desta tela?</h3>
        <FakeScreen :screen="q.screen" />

        <div class="grid gap-3" role="group" aria-label="Respostas">
          <button
            v-for="(opt, i) in q.options"
            :key="opt"
            type="button"
            class="flex min-h-12 items-center gap-3 rounded-md border-2 bg-ink-2 px-4 py-3 text-left font-semibold transition-[border-color,background-color,opacity,transform] duration-300 enabled:active:scale-[0.98]"
            :class="optionClass(i)"
            :disabled="answered"
            @click="choose(i)"
          >
            <span class="font-mono text-paper-dim">{{ letters[i] }})</span>
            <span class="flex-1">{{ opt }}</span>
            <span v-if="answered && i === q.answer" aria-hidden="true">✓</span>
            <span v-else-if="answered && i === chosen" aria-hidden="true">✗</span>
          </button>
        </div>

        <div aria-live="polite">
          <Transition name="fade-up">
          <div v-if="answered" class="grid gap-3 bg-paper p-4 text-ink">
            <p class="font-bold">{{ correct ? '✓ Certo!' : `✗ Ainda não. A resposta é: ${q.options[q.answer]}.` }}</p>
            <p>{{ q.explanation }}</p>
            <button type="button" class="btn btn-dark w-full sm:w-auto" @click="next">
              {{ index < questions.length - 1 ? 'Próxima pergunta' : 'Ver resultado' }}
            </button>
          </div>
          </Transition>
        </div>
      </div>

      <div v-else class="grid gap-4 border-2 border-paper p-6" aria-live="polite">
        <h3 ref="heading" tabindex="-1" class="font-display text-3xl uppercase">
          Você acertou {{ score }} de {{ questions.length }}
        </h3>
        <p class="text-lg">{{ resultMessage(score, questions.length) }}</p>
        <div class="grid gap-3 sm:grid-cols-2">
          <button type="button" class="btn btn-primary" @click="restart">Refazer o teste</button>
          <a href="#truques" class="btn btn-ghost">Ver os truques</a>
        </div>
      </div>
      </Transition>
    </div>
  </section>
</template>
