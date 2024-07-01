<template>
  <q-page padding v-motion-slide-visible-once-bottom :duration="500">
    <div class="row q-pb-lg q-gutter-lg justify-center">
      <p class="col-12 text-h2 text-center text-primary font-customization">
        Recuperar senha
      </p>
      <p class="col-4 text-h5 text-center">
        Digite o seu e-mail e enviaremos instruções para alteração da senha
      </p>
    </div>
    <q-form
      @submit.prevent="handleForgotPassword()"
      class="row justify-center q-gutter-md"
    >
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">
        <EmailInput
          :value="email"
          @change="(v) => (email = v)"
          @update:value="email = $event"
        />
        <div class="row">
          <div class="col-6">
            <q-btn
              rounded
              class="text--dark text-bold q-pa-md"
              color="primary"
              text-color="dark"
              type="submit"
              label="Recuperar"
            />
          </div>
          <p class="col-6 text-right text-body1 text-white">
            Já possui conta? <br />
            <router-link
              class="text-body1 text-primary"
              :to="{ name: 'auth-login' }"
            >
              Clique aqui
            </router-link>
          </p>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import EmailInput from "src/components/EmailInput.vue";

const { sendPasswordRestEmail } = useAuthUser();

const email = ref("");

async function handleForgotPassword() {
  await sendPasswordRestEmail(email.value);
  alert(`Email de recuperação de senha enviado para ${email.value}`);
}
</script>

<style scoped></style>
