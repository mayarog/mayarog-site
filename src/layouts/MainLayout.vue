<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import TheHeader from "src/components/TheHeader.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    TheHeader
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
