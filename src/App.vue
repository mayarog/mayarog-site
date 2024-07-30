<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from "quasar";

defineOptions({
  name: "App",
});

const $q = useQuasar();
$q.dark.set(true);
</script>
