<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection
      v-if="$q.screen.gt.md"
      v-motion-slide-visible-top
      :duration="500"
    />
    <HeaderSectionMobile
      v-else-if="$q.screen.lt.sm"
      v-motion-slide-visible-top
      :duration="500"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderSection from "src/components/HeaderSection.vue";
import HeaderSectionMobile from "src/components/HeaderSectionMobile.vue";
</script>
