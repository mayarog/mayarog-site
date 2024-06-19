<template>
  <router-view />
</template>

<script setup>
import { defineOptions } from "vue";
import { useQuasar } from "quasar";

defineOptions({
  name: "App",
});

const $q = useQuasar();
$q.dark.set(true);
</script>
