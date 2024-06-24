<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection>
      <template v-slot:footerToolbar>
        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home"></q-breadcrumbs-el>
            <q-breadcrumbs-el
              label="Serviços"
              icon="widgets"
            ></q-breadcrumbs-el>
            <q-breadcrumbs-el label="Toolbar"></q-breadcrumbs-el>
          </q-breadcrumbs>
        </q-toolbar>
      </template>
    </HeaderSection>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import HeaderSection from "src/components/HeaderSection.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderSection,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
