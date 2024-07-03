<template>
  <q-input
    rounded
    outlined
    v-model="localValue"
    :rules="rules"
    color="primary"
    :type="isPwd ? 'password' : 'text'"
    :label="props.label"
  >
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
  label: {
    type: String,
    default: "Senha",
  },
  rules: {
    type: Array,
    required: false,
    default: () => [(value) => !!value || "Senha é obrigatória"],
  },
});

const localValue = ref(props.value);
const isPwd = ref(true);
</script>
