<template>
  <div class="content" v-motion-slide-visible-once-bottom :duration="500">
    <div>
      <q-form @submit.prevent="handleLogin">
        <div>
          <div class="row q-pa-md text-center">
            <div class="col-12">
              <h1 class="text-h1 text-primary font-customization">
                Área do cliente
              </h1>
            </div>
            <div class="col-12">
              <h4 class="text-h4">Digite o seu e-mail e senha para acessar</h4>
            </div>
          </div>

          <div class="row inputs-container q-gutter-y-md">
            <div class="col-12">
              <q-input
                rounded
                outlined
                v-model="form.email"
                color="primary"
                type="email"
                label="Email"
              />
            </div>
            <div class="col-12">
              <q-input
                rounded
                outlined
                v-model="form.password"
                color="primary"
                type="password"
                label="Senha"
              />
            </div>
            <div class="col-12 text-center">
              <p class="text-h6">
                <strong> Não possui acesso?</strong>
                <router-link :to="{ name: 'auth-register' }">
                  <strong class="text-primary"> Clique aqui</strong>
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6 q-pa-md q-gutter-lg">
            <q-btn
              rounded
              style="width: 130px"
              class="text--dark q-py-sm q-px-xl"
              color="primary"
              text-color="dark"
              type="submit"
            >
              <strong class="text-h6">Logar</strong>
            </q-btn>
          </div>
          <div class="col-6 q-mt-sm text-right">
            <strong class="text-h6 text-white">Esqueceu sua senha?</strong
            ><br />
            <router-link :to="{ name: 'esqueceu-senha' }">
              <strong class="text-h6 text-primary">Clique aqui</strong>
            </router-link>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import useAuthUser from "src/composables/UseAuthUser";

const $router = useRouter();

const { login } = useAuthUser();

const form = reactive({
  email: "",
  password: "",
});

async function handleLogin() {
  try {
    await login(form);
    router.push({ name: "home" });
  } catch (error) {
    alert(error.message);
  }
}
</script>

<style scoped>
.inputs-container {
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
}
.inputs-container div {
  max-width: 600px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content > div {
  width: 650px;
}
</style>
