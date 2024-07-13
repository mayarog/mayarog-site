<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection v-motion-slide-visible-top :duration="500" hideButtons />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderSection from "src/components/HeaderSection.vue";
import HeaderSectionMobile from "src/components/HeaderSectionMobile.vue";
</script>
