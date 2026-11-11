<script setup>
import SkipLink from './components/SkipLink.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WhatAre from './components/WhatAre.vue'
import PracticeDemo from './components/PracticeDemo.vue'
import TricksList from './components/TricksList.vue'
import QuickQuiz from './components/QuickQuiz.vue'
import ProtectSection from './components/ProtectSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <SkipLink />
  <AppHeader />
  <main id="conteudo" tabindex="-1" class="overflow-x-clip outline-none">
    <HeroSection />
    <WhatAre />
    <PracticeDemo />
    <TricksList />
    <QuickQuiz />
    <ProtectSection />
  </main>
  <AppFooter />
</template>
