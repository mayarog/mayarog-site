<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection>
      <template #toolbar-customactions>
        <q-btn-dropdown flat color="primary" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handlerLogout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
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
<script setup>
import HeaderSection from "src/components/HeaderSection.vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();

const { logout } = useAuthUser();

async function handlerLogout() {
  $q.dialog({
    title: "Logout",
    message: "Deseja realmente sair?",
    cancel: true,
    persistent: true,
  })
    .onOk(async () => {
      await logout();
      $router.replace({ name: "auth-login" });
    })
    .onCancel(() => {
      return;
    });
}
</script>
