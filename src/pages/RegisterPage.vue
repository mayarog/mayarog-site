<template>
  <q-page padding v-motion-slide-visible-once-bottom :duration="500">
    <div>
      <p class="col-12 text-h2 text-center text-primary font-customization">
        <strong>Área do cliente</strong>
      </p>
      <p class="col-12 text-h5 text-center">
        Preencha os campos para se cadastrar
      </p>
    </div>
    <q-form @submit.prevent="handleRegister" class="row justify-center">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-sm">
        <q-input
          rounded
          outlined
          v-model="form.name"
          :rules="rules.name"
          color="primary"
          type="text"
          label="Nome"
        >
          <template #prepend>
            <q-icon name="abc" />
          </template>
        </q-input>
        <q-input
          rounded
          outlined
          v-model="form.phone"
          :rules="rules.phone"
          color="primary"
          mask="## # ####-####"
          type="text"
          label="Telefone"
        >
          <template #prepend>
            <q-icon name="phone" />
          </template>
        </q-input>
        <EmailInput
          :value="form.email"
          @change="(v) => (form.email = v)"
          @update:value="form.email = $event"
        />
        <StrongPasswordInput v-model="form.password" />
        <q-input
          rounded
          outlined
          v-model="confirmPassword"
          :rules="rules.confirmPassword"
          color="primary"
          :type="fields.confirmPassword.isPwd ? 'password' : 'text'"
          label="Confirmar Senha"
          @change="
            () => {
              console.log('pass', form.password, 'con', confirmPassword);
            }
          "
        >
          <template #append>
            <q-icon
              class="q-mr-sm"
              @click="
                fields.confirmPassword.isPwd = !fields.confirmPassword.isPwd
              "
              :name="
                fields.confirmPassword.isPwd ? 'visibility' : 'visibility_off'
              "
            />
          </template>
          <template #prepend>
            <q-icon name="password" />
          </template>
        </q-input>
        <div class="row">
          <div class="col-6">
            <q-btn
              rounded
              style="width: fit-content"
              class="text--dark q-pa-md text-bold"
              color="primary"
              text-color="dark"
              type="submit"
              label="Cadastre-se"
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import EmailInput from "components/EmailInput.vue";
import StrongPasswordInput from "components/StrongPasswordInput.vue";
import useAuthUser from "src/composables/UseAuthUser";

const $router = useRouter();
const { register } = useAuthUser();

const rules = {
  name: [(value) => !!value || "O nome é obrigatório"],
  phone: [(value) => !!value || "O telefone é obrigatório"],
  email: [
    (value) => !!value || "O e-mail é obrigatório",
    (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
      "Email inválido",
  ],
  password: [(value) => !!value || "Senha é obrigatória"],
  confirmPassword: [
    (value) => value === form.password || "As senhas estão diferentes",
  ],
};

const form = reactive({
  name: "",
  phone: "",
  email: "",
  password: "",
});
const confirmPassword = ref("");

async function handleRegister() {
  try {
    await register(form);
    $router.push({ name: "email-confirmation", query: { email: form.email } });
  } catch (error) {
    alert(error.message);
  }
}

const fields = reactive({
  password: {
    isPwd: true,
  },
  confirmPassword: {
    isPwd: true,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
