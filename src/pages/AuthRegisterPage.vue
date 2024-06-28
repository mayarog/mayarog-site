<template>
  <div class="content" v-motion-slide-visible-once-bottom :duration="500">
    <div>
      <q-form @submit.prevent="handleRegister">
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
                v-model="form.name"
                :rules="rules.name"
                color="primary"
                type="text"
                label="Nome"
              />
            </div>
            <div class="col-12 q-ma-sm">
              <q-input
                rounded
                outlined
                debounce="1000"
                v-model="form.email"
                @change="updateEmail"
                :rules="rules.email"
                color="primary"
                type="email"
                label="Email"
              >
                <template #hint>
                  <p v-if="isProviderCorrect"></p>
                  <p v-else-if="form.email && suggestedProvider">
                    Você quis dizer
                    <strong
                      style="cursor: pointer"
                      @click="fixProvider(suggestedProvider)"
                    >
                      {{ suggestedProvider }}
                    </strong>
                    ?
                  </p>
                </template>
              </q-input>
            </div>
            <div class="col-12 q-ma-sm">
              <q-input
                rounded
                outlined
                v-model="form.password"
                :rules="rules.password"
                color="primary"
                :type="fields.password.isPwd ? 'password' : 'text'"
                label="Senha"
              >
                <template #hint>
                  <q-linear-progress
                    v-if="form.password"
                    rounded
                    size="4px"
                    :value="passwordStrength(form.password).score"
                    :color="passwordStrength(form.password).color"
                    class="q-mt-sm"
                  />
                </template>
                <template #append>
                  <q-icon
                    class="q-mr-sm"
                    @click="fields.password.isPwd = !fields.password.isPwd"
                    :name="
                      fields.password.isPwd ? 'visibility' : 'visibility_off'
                    "
                  />
                </template>
              </q-input>
            </div>
            <div class="col-12 q-ma-sm">
              <q-input
                rounded
                outlined
                v-model="confirmPassword"
                :rules="rules.confirmPassword"
                color="primary"
                :type="fields.confirmPassword.isPwd ? 'password' : 'text'"
                label="Confirmar Senha"
              >
                <template #append>
                  <q-icon
                    class="q-mr-sm"
                    @click="
                      fields.confirmPassword.isPwd =
                        !fields.confirmPassword.isPwd
                    "
                    :name="
                      fields.confirmPassword.isPwd
                        ? 'visibility'
                        : 'visibility_off'
                    "
                  />
                </template>
              </q-input>
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
              type="submit"
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
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import useAuthUser from "src/composables/UseAuthUser";

const $router = useRouter();
const { register } = useAuthUser();

const rules = {
  name: [(value) => !!value || "O nome é obrigatório"],
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

const providers = ["gmail", "yahoo", "hotmail", "outlook", "protonmail"];

const isProviderCorrect = computed(() => {
  if (!form.email) return;
  const provider = form?.email.split("@")[1].split(".")[0];
  return providers.includes(provider);
});

const suggestedProvider = computed(() => {
  if (!form.email) return;
  const provider = form?.email.split("@")[1].split(".")[0];
  const closestProvider = providers.find((p) => p.startsWith(provider[0]));
  return closestProvider || "";
});

function updateEmail(value) {
  form.email = value;
}

function fixProvider(value) {
  if (!form.email) return;
  const provider = form?.email.split("@")[1].split(".")[0];
  form.email = form.email.replace(provider, value);
}

function passwordStrength(password) {
  const fragments = [
    { regex: /[a-z]/, weight: 0.2 },
    { regex: /[A-Z]/, weight: 0.2 },
    { regex: /\d/, weight: 0.2 },
    { regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, weight: 0.2 },
    { regex: /^.{8,}$/, weight: 0.2 },
  ];

  let score = 0;

  fragments.forEach((fragment) => {
    if (fragment.regex.test(password)) {
      score += fragment.weight;
    }
  });

  let color;
  if (score < 0.3) {
    color = "red";
  } else if (score < 0.5) {
    color = "orange";
  } else if (score < 0.8) {
    color = "blue";
  } else if (score < 1) {
    color = "green";
  }

  return { score, color };
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
