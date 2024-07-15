<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <HeaderSection>
      <template #toolbar-customactions>
        <div v-if="!user">
          <q-btn
            flat
            color="primary"
            rounded
            label="Login"
            :to="{ name: 'auth-login' }"
          />
          <q-btn
            flat
            color="primary"
            rounded
            label="Registro"
            :to="{ name: 'auth-register' }"
          />
        </div>
        <q-btn-dropdown flat color="primary" icon="person" v-else-if="user">
          <q-list>
            <q-item clickable v-close-popup @click="handlerLogout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
      <template v-slot:footerToolbar>
        <q-toolbar inset>
          <Breadcrumbs :breadcrumbs="breadcrumbs" />
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
import Breadcrumbs from "components/Breadcrumbs.vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();

const { logout, user } = useAuthUser();

const breadcrumbs = [
  {
    label: "home",
    icon: "home",
    to: "/",
    active: true,
  },
  {
    label: "Serviços",
    icon: "widgets",
    to: "/servicos",
    active: false,
  },
  {
    label: "Web ou Desktop",
    icon: "widgets",
    to: "",
    active: false,
  },
];

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
