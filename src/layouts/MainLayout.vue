<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-img
          alt="Mayarog Web"
          src="~assets/mayarog-logo.png"
          style="width: 50px; height: 50px"
        />
        <q-toolbar-title>
          Mayarog <br />
          <small>Sistemas web & consultoria em T.I</small>
        </q-toolbar-title>
        <div class="q-gutter-y-md">
          <q-tabs
            v-model="tab"
            :style="$q.screen.sm || $q.screen.xs ? { maxWidth: '300px' } : {}"
            inline-label
            outside-arrows
            mobile-arrows
          >
            <q-route-tab to="/" exact label="Início" icon="home"></q-route-tab>
            <!-- <q-tab name="images" label="Desenvolvimento de Sistemas"></q-tab> -->
            <q-separator dark vertical inset></q-separator>
            <q-route-tab
              to="/desenvolvimento-sistemas"
              exact
              label="Desenvolvimento de Sistemas"
              icon="code"
            ></q-route-tab>
            <!-- <q-btn-dropdown
              stretch
              flat
              label="Desenvolvimento de Sistemas"
              icon="code"
            >
              <q-list>
                <q-item-label header>Sistemas WEB</q-item-label>
                <q-item
                  v-for="n in 3"
                  :key="`x.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="folder"
                      color="secondary"
                      text-color="white"
                    ></q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                    <q-item-label caption>February 22, 2016</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info"></q-icon>
                  </q-item-section>
                </q-item>
                <q-item-label header>Aplicativos</q-item-label>
                <q-item
                  v-for="n in 3"
                  :key="`x.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="folder"
                      color="secondary"
                      text-color="white"
                    ></q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                    <q-item-label caption>February 22, 2016</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info"></q-icon>
                  </q-item-section>
                </q-item>
                <q-separator inset spaced></q-separator>
                <q-item-label header>Sistemas Desktop</q-item-label>
                <q-item
                  v-for="n in 3"
                  :key="`y.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="assignment"
                      color="primary"
                      text-color="white"
                    ></q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Vacation</q-item-label>
                    <q-item-label caption>February 22, 2016</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info"></q-icon>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown> -->
            <q-separator dark vertical inset></q-separator>
            <q-route-tab
              to="/consultoria"
              exact
              label="Consultoria em Projetos/T.I"
              icon="mail"
            ></q-route-tab>

            <!-- <q-tab name="articles" label="Projetos de I.A"></q-tab> -->
            <!-- <q-tab name="articles" label="Contato"></q-tab> -->
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",

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
