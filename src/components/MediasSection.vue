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
        <q-form
          class="row flex justify-center q-gutter-md"
          v-motion-slide-visible-once-bottom
          :duration="500"
          ref="newsletterForm"
          @submit.prevent="handleNewsletter()"
        >
          <div class="col-xs-10 col-sm-7 col-md-4">
            <EmailInput
              label="Assinar newsletter"
              placeholder="Digite seu e-mail"
              v-model="email"
              :rules="[]"
              @change="(v) => (email = v)"
              @update:value="email = $event"
            />
            <p class="text-body1 text-bold text-white q-pt-sm">
              Já é assinante e deseja se cancelar a assinatura,
              <router-link
                class="text-primary"
                :to="{ name: 'newsletter-unsubscribe' }"
              >
                clique aqui
              </router-link>
            </p>
          </div>
          <div>
            <q-btn
              rounded
              fab
              unelevated
              label="Assinar"
              color="primary"
              text-color="white"
              class="q-px-xl"
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { ref } from "vue";
import UseNewsletter from "src/composables/UseNewsletter";
import EmailInput from "./EmailInput.vue";

defineOptions({ name: "MediasSection" });

const email = ref("");
const newsletterForm = ref(null);

const { subscribe } = UseNewsletter();

const emailRule = [
  (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
    "Email inválido",
];

async function handleNewsletter() {
  newsletterForm.value.validate().then(async (success) => {
    if (!success) {
      alert("Preencha seu email para assinar o newsletter!");
      return;
    }
      await subscribe({ email: email.value }).then(() => {
        alert("Assinatura realizada com sucesso!");
        email.value = "";
      }).catch((error) => {
        if (error.code === "23505") {
          alert("Você já está cadastrado!");
          email.value = "";
        } else {
          alert(error.message);
        }
      });
  });
}
</script>
