<template>
  <q-page-container>
    <div
      class="row bg-dark text-primary q-pb-lg text-center flex flex-center q-py-md"
    >
      <div class="col-12 q-pa-md">
        <div class="flex flex-center">
          <div class="col-12 text-white">
            <h1
              class="text-h1 font-customization text-primary"
              v-motion-slide-visible-once-bottom
              :duration="500"
            >
              Siga-nos nas Redes Sociais
            </h1>
            <p
              class="text-h4"
              v-motion-slide-visible-once-bottom
              :duration="500"
            >
              Acompanhe nossas redes sociais para saber mais novidades.
            </p>
          </div>
        </div>
        <div class="q-pa-md flex flex-center">
          <div class="col-md-12 text-accent">
            <div class="q-pa-sm">
              <q-btn
                v-motion-slide-visible-once-bottom
                :duration="500"
                :delay="100"
                size="2.5em"
                dense
                color="primary"
                round
                icon="mdi-whatsapp"
                class="q-ml-md q-my-md"
              />
              <q-btn
                v-motion-slide-visible-once-bottom
                :duration="500"
                :delay="100"
                size="2.5em"
                dense
                color="primary"
                round
                icon="mdi-facebook"
                class="q-ml-md q-my-md"
              />
              <q-btn
                v-motion-slide-visible-once-bottom
                :duration="500"
                :delay="100"
                size="2.5em"
                dense
                color="primary"
                round
                icon="mdi-instagram"
                class="q-ml-md q-my-md"
              />
              <q-btn
                v-motion-slide-visible-once-bottom
                :duration="500"
                :delay="100"
                size="2.5em"
                dense
                color="primary"
                round
                icon="mdi-email"
                class="q-ml-md q-my-md"
              />
            </div>
          </div>
        </div>
        <div class="col-12 self-center">
          <div class="q-pa-md flex flex-center">
            <p
              class="text-h4 font-customization text-white"
              v-motion-slide-visible-once-bottom
              :duration="500"
            >
              Assine nossa newsletter para receber <br />
              lançamentos e promoções da Mayarog
            </p>
          </div>
        </div>
        <div
          class="row flex justify-center q-mb-xl"
          v-motion-slide-visible-once-bottom
          :duration="500"
          style="width: 100%"
        >
          <div class="col-xs-12 col-md-8" style="max-width: 400px">
            <div class="q-pa-md">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="email"
                label="Assinar newsletter"
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
          <div class="col-xs-12 col-md-4" style="max-width: 200px">
            <div class="q-pa-md">
              <q-btn
                rounded
                fab
                unelevated
                label="Assinar"
                color="primary"
                text-color="white"
                class="q-px-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { ref } from "vue";
defineOptions({ name: "MediasSection" });

const email = ref("");
</script>
