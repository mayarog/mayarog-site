<template>
  <q-input
    rounded
    outlined
    debounce="1000"
    v-model="localValue"
    @change="updateEmail"
    :rules="rules"
    color="primary"
    type="email"
    label="Email"
  >
    <template #hint>
      <p v-if="isProviderCorrect"></p>
      <p v-else-if="localValue && suggestedProvider">
        Você quis dizer
        <strong
          class="text-primary"
          style="cursor: pointer"
          @click="fixProvider(suggestedProvider)"
        >
          {{ suggestedProvider }}
        </strong>
        ?
      </p>
    </template>
    <template #prepend>
      <q-icon name="abc" />
    </template>
  </q-input>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const localValue = ref(props.value);

const rules = [
  (value) => !!value || "O e-mail é obrigatório",
  (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
    "Email inválido",
];

const providers = ["gmail", "yahoo", "hotmail", "outlook", "protonmail"];

const isProviderCorrect = computed(() => {
  if (!localValue.value) return;
  const provider = localValue.value.split("@")[1].split(".")[0];
  return providers.includes(provider);
});

const suggestedProvider = computed(() => {
  if (!localValue.value) return;
  const provider = localValue.value.split("@")[1].split(".")[0];
  const closestProvider = providers.find((p) => p.startsWith(provider[0]));
  return closestProvider || "";
});

function updateEmail(value) {
  localValue.value = value;
}

function fixProvider(value) {
  if (!localValue.value) return;
  const provider = localValue.value.split("@")[1].split(".")[0];
  localValue.value = localValue.value.replace(provider, value);
}
</script>
