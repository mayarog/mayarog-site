<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <TheHeader v-motion-slide-visible-top :duration="500" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeader from "src/components/TheHeader.vue";
</script>
