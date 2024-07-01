<template>
  <q-input
    rounded
    outlined
    v-model="localValue"
    :rules="rules"
    color="primary"
    :type="isPwd ? 'password' : 'text'"
    label="Senha"
  >
    <template #hint>
      <q-linear-progress
        v-if="localValue"
        rounded
        size="4px"
        :value="passwordStrength(localValue).score"
        :color="passwordStrength(localValue).color"
        class="q-mt-sm"
      />
    </template>
    <template #append>
      <q-icon
        class="q-mr-sm"
        @click="isPwd = !isPwd"
        :name="isPwd ? 'visibility' : 'visibility_off'"
      />
    </template>
    <template #prepend>
      <q-icon name="password" />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  rules: {
    type: Array,
    required: false,
    default: () => [(value) => !!value || "Senha é obrigatória"],
  },
});

const localValue = ref(props.value);
const isPwd = ref(true);

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
</script>
