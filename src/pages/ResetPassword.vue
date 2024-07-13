<template>
  <q-page padding v-motion-slide-visible-once-bottom :duration="500">
    <div class="q-pb-lg q-gutter-lg">
      <p class="col-12 text-h2 text-center text-primary font-customization">
        Recuperar senha
      </p>
      <p class="col-12 text-h5 text-center">
        Preencha os campos com sua nova senha
      </p>
    </div>
    <q-form
      @submit.prevent="handlePasswordReset()"
      class="row justify-center q-gutter-md"
    >
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">
        <StrongPasswordInput v-model="form.password" />
        <q-input
          rounded
          outlined
          v-model="confirmPassword"
          :rules="[(v) => v === form.password || 'As senhas estão diferentes']"
          color="primary"
          type="password"
          label="Confirmar Senha"
        >
          <template #prepend>
            <q-icon name="password" />
          </template>
        </q-input>
        <div class="row">
          <div class="col-12 flex flex-center">
            <q-btn
              rounded
              class="text--dark text-bold q-pa-md q-mt-sm"
              color="primary"
              text-color="dark"
              type="submit"
              label="Mudar senha"
            />
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import useAuthUser from "src/composables/UseAuthUser";
import StrongPasswordInput from "src/components/StrongPasswordInput.vue";

const { resetPassword } = useAuthUser();

const $currentRoute = useRoute();
const $router = useRouter();

const form = reactive({
  password: "",
});
const confirmPassword = ref("");

const { token } = $currentRoute.query;

async function handlePasswordReset() {
  await resetPassword(token, form.password);
  $router.replace({ name: "auth-login" });
}
</script>
