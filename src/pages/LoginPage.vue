<template>
  <q-page padding v-motion-slide-visible-once-bottom :duration="500">
    <div class="q-pb-lg q-gutter-lg">
      <p class="col-12 text-h2 text-center text-primary font-customization">
        Área do cliente
      </p>
      <p class="col-12 text-h5 text-center">
        Digite o seu e-mail e senha para acessar
      </p>
    </div>
    <q-form
      @submit.prevent="handleLogin"
      class="row justify-center q-gutter-md"
    >
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-md">
        <EmailInput
          :value="form.email"
          @change="(v) => (form.email = v)"
          @update:value="form.email = $event"
        />
        <PasswordInput v-model="form.password" label="Senha" />
        <p class="text-body1 text-center">
          Não possui acesso? <br class="mobile-only" />
          <router-link :to="{ name: 'auth-register' }">
            <span class="text-primary"> Clique aqui</span>
          </router-link>
        </p>
        <div class="row">
          <div class="col-6">
            <q-btn
              rounded
              style="width: 130px"
              class="text--dark text-bold q-pa-md q-mt-sm"
              color="primary"
              text-color="dark"
              type="submit"
              label="Logar"
            />
          </div>
          <p class="col-6 q-mt-sm text-right justify-center q-gutter-xs">
            Esqueceu sua senha? <br />
            <router-link
              class="text-body1 text-primary"
              :to="{ name: 'forgot-password' }"
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
import { reactive } from "vue";
import { useRouter } from "vue-router";

import useAuthUser from "src/composables/UseAuthUser";

import EmailInput from "src/components/EmailInput.vue";
import PasswordInput from "src/components/PasswordInput.vue";

const $router = useRouter();

const { login } = useAuthUser();

const form = reactive({
  email: "",
  password: "",
});

async function handleLogin() {
  try {
    await login(form);
    $router.push({ name: "me" });
  } catch (error) {
    alert(error.message);
  }
}
</script>

<style scoped></style>
