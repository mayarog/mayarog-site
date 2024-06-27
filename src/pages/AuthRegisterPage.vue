<template>
  <div class="content" v-motion-slide-visible-once-bottom :duration="500">
    <div>
      <div>
        <div class="row q-pa-md text-center">
          <div class="col-12">
            <h1 class="text-h1 text-primary font-customization">
              Área do cliente
            </h1>
          </div>
          <div class="col-12">
            <h4 class="text-h4">Preencha os campos para se cadastrar</h4>
          </div>
        </div>
        <div class="row inputs-container">
          <div class="col-12 q-ma-sm">
            <q-input
              rounded
              outlined
              v-model="form.email"
              color="primary"
              type="email"
              label="Email"
            />
          </div>
          <div class="col-12 q-ma-sm">
            <q-input
              rounded
              outlined
              v-model="form.password"
              color="primary"
              type="password"
              label="Senha"
            />
          </div>
          <div class="col-12 q-ma-sm">
            <q-input
              rounded
              outlined
              v-model="confirmPassword"
              color="primary"
              type="password"
              label="Confirmar Senha"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6 q-pa-md q-gutter-lg">
          <q-btn
            rounded
            style="width: fit-content"
            class="text--dark q-py-sm q-px-xl"
            color="primary"
            text-color="dark"
          >
            <strong class="text-h6">Cadastrar-se</strong>
          </q-btn>
        </div>
        <div class="col-6 q-mt-sm text-right">
          <strong class="text-h6 text-white">Já possui conta?</strong><br />
          <router-link
            style="text-decoration: none"
            :to="{ name: 'auth-login' }"
          >
            <strong class="text-h6 text-primary">Clique aqui</strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();

const form = reactive({
  email: "",
  password: "",
});
const confirmPassword = ref("");
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
