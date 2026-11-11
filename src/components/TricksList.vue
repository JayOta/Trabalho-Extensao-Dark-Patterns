<script setup>
import { tricks } from '../data/tricks'
import TrickCard from './TrickCard.vue'
</script>

<template>
  <section id="truques" class="border-t border-ink-3 py-16">
    <div class="wrap grid gap-6">
      <div class="grid gap-3">
        <h2 class="section-title">Truques mais <span class="band">comuns</span></h2>
        <p class="text-paper-dim">Toque em um truque para ver um exemplo e como escapar.</p>
      </div>
      <div class="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-3">
        <TrickCard v-for="t in tricks" :key="t.id" :trick="t" />
      </div>
    </div>
  </section>
</template>
