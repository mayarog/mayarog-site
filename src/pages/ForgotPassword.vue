<template>
  <q-page padding v-motion-slide-visible-once-bottom :duration="500">
    <div class="q-pb-lg q-gutter-lg">
      <p class="col-12 text-h2 text-center text-primary font-customization">
        Área do cliente
      </p>
      <p class="col-12 text-h5 text-center">
        Digite o seu e-mail da conta que deseja recuperar
      </p>
    </div>
    <q-form
      @submit.prevent="handleForgotPassword()"
      class="row justify-center q-gutter-md"
    >
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">
        <EmailInput :value="email" />
        <p class="text-body1 text-center">
          Não possui acesso? <br class="mobile-only" />
          <router-link :to="{ name: 'auth-register' }">
            <span class="text-primary"> Clique aqui</span>
          </router-link>
        </p>
        <div class="row">
          <div class="col-12 flex flex-center">
            <q-btn
              rounded
              class="text--dark text-bold q-pa-md q-mt-sm"
              color="primary"
              text-color="dark"
              type="submit"
              label="Mandar email de recuperação"
            />
          </div>
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
