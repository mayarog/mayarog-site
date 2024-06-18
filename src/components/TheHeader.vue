<template>
  <q-header elevated class="bg-black">
      <slot name="headerToolbar"></slot>
      <q-toolbar>
        <q-img
          alt="Mayarog Web"
          src="~assets/mayarog-logo.png"
          style="width: 50px; height: 50px"
        />
        <q-toolbar-title v-if="!$q.screen.sm || !$q.screen.xs">
          <span class="mt-1">Mayarog</span><br />
          <small>Soluções & Consultoria Web</small>
        </q-toolbar-title>
        <div class="q-gutter-y-md">
          <q-bar style="min-width: 500px" class="text-white rounded-borders">
            <div class="cursor-pointer non-selectable">
              <q-item clickable @click="animateScroll(0)" v-ripple>
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
              <q-item clickable @click="animateScroll(0)" v-ripple>
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
              <q-item clickable v-ripple>
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
                          <q-item-section
                            >Criação de Artes Digitais</q-item-section
                          >
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Identidade Visual</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Criação de Logomarcas</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section
                            >Artes para Midias Sociais</q-item-section
                          >
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
            <q-item clickable v-ripple @click="animateScroll(1920)">
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
    </q-header>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheHeader",
});
</script>