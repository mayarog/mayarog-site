<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p>Olá {{ user.user_metadata.name }}</p>
    </div>
  </q-page>
</template>

<script setup>
import useAuthUser from "src/composables/UseAuthUser";
defineOptions({
  name: "MePage",
});

const { user } = useAuthUser();
</script>
