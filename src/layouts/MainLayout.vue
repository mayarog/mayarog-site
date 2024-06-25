<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection
      class="desktop-only"
      v-motion-slide-visible-top
      :duration="500"
    />
    <HeaderSectionMobile
      class="mobile-only"
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
