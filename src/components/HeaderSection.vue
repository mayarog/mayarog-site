<template>
  <q-header reveal class="bg-dark">
    <div class="row">
      <slot name="headerToolbar"></slot>
      <q-toolbar class="q-my-md">
        <q-toolbar-title>
          <MayarogLogo />
        </q-toolbar-title>
        <!-- Remove hidden to make buttons appear -->
        <div
          v-if="!props.hideButtons"
          class="flex justify-end q-gutter-y-md desktop-only"
        >
          <q-bar
            style="min-width: 500px"
            class="text-white rounded-borders bg-dark"
          >
            <div class="cursor-pointer non-selectable">
              <q-item
                class="rounded"
                clickable
                @click="animateScroll(0)"
                href="/#frontpage"
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar
                    color="primary"
                    text-color="white"
                    icon="home"
                  ></q-avatar>
                </q-item-section>
                <q-item-section>Inicio</q-item-section>
              </q-item>
            </div>
            <div class="cursor-pointer non-selectable">
              <q-item
                class="rounded"
                clickable
                @click="animateScroll(0)"
                href="/#aboutus"
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar
                    color="primary"
                    text-color="white"
                    icon="mdi-account-group"
                  ></q-avatar>
                </q-item-section>
                <q-item-section>Quem Somos</q-item-section>
              </q-item>
            </div>
            <div class="cursor-pointer non-selectable">
              <q-item class="rounded" clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar
                    color="primary"
                    text-color="white"
                    icon="mdi-application"
                  ></q-avatar>
                </q-item-section>
                <q-item-section>Serviços</q-item-section>
              </q-item>
              <q-menu>
                <q-list style="min-width: 100px" class="bg-black text-white">
                  <q-item clickable>
                    <q-item-section>Desenvolvimento de Sistemas</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right"></q-icon>
                    </q-item-section>

                    <q-menu anchor="top end" self="top start">
                      <q-list class="bg-black text-white">
                        <q-item clickable>
                          <q-item-section>Sistemas Web</q-item-section>
                          <q-item-section side>
                            <q-icon name="keyboard_arrow_right"></q-icon>
                          </q-item-section>
                          <q-menu anchor="top end" self="top start">
                            <q-list class="bg-black text-white">
                              <q-item clickable>
                                <q-item-section>Sites</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>Landing Pages</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>Sistemas ERP</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Lojas Virtuais</q-item-section>
                          <q-item-section side>
                            <q-icon name="keyboard_arrow_right"></q-icon>
                          </q-item-section>
                          <q-menu anchor="top end" self="top start">
                            <q-list class="bg-black text-white">
                              <q-item clickable>
                                <q-item-section
                                  >Sistemas E-commerce</q-item-section
                                >
                              </q-item>
                              <q-item clickable>
                                <q-item-section>Lojas Wordpress</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section
                                  >Facebook Marketplace</q-item-section
                                >
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Aplicativos Mobile</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Sistemas Desktop</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Microsserviços</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Consultoria Web/T.I</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right"></q-icon>
                    </q-item-section>

                    <q-menu anchor="top end" self="top start">
                      <q-list class="bg-black text-white">
                        <q-item clickable>
                          <q-item-section>Suporte Wordpress</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Adm. de Redes Sociais</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Marketing Digital</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Email Marketing</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Registro de Domínios</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Produção de Conteúdo</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>SEO</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                  <!-- <q-separator></q-separator> -->
                  <q-item clickable>
                    <q-item-section>Artes Digitais/Web Design</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right"></q-icon>
                    </q-item-section>
                    <q-menu anchor="top end" self="top start">
                      <q-list class="bg-black text-white">
                        <q-item clickable>
                          <q-item-section>
                            Criação de Artes Digitais
                          </q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section> Identidade Visual </q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Criação de Logomarcas</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>
                            Artes para Midias Sociais
                          </q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Edição de Imagens</q-item-section>
                        </q-item>

                        <q-item clickable>
                          <q-item-section>Edição de Vídeos</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <q-item
              class="rounded"
              clickable
              v-ripple
              @click="animateScroll(1920)"
              href="/#contact"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  icon="mdi-cellphone"
                ></q-avatar>
              </q-item-section>
              <q-item-section>Contato</q-item-section>
            </q-item>
          </q-bar>
        </div>
      </q-toolbar>
      <slot name="footerToolbar"></slot>
    </div>
  </q-header>
</template>

<script setup>
import MayarogLogo from "components/MayarogLogo.vue";
const props = defineProps({
  hideButtons: Boolean,
});
</script>
