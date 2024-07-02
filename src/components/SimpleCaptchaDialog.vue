<template>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section class="row text-h4"
        >{{ captchaFirstNum }} + {{ captchaSecondNum }} =
        <q-input v-model="receivedCaptcha" class="q-col-3 q-mx-md text-h4" />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="enviar" @click="handleSubmit()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const dialog = ref(false);
const receivedCaptcha = ref(null);

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let captchaFirstNum = ref(getRandomNumberInRange(1, 9));
let captchaSecondNum = ref(getRandomNumberInRange(1, 9));
let expectedCaptcha = ref(captchaFirstNum.value + captchaSecondNum.value);

function resetCaptchaValues() {
  captchaFirstNum.value = getRandomNumberInRange(1, 9);
  captchaSecondNum.value = getRandomNumberInRange(1, 9);
  expectedCaptcha.value = captchaFirstNum.value + captchaSecondNum.value;
  receivedCaptcha.value = null;
}

function handleSubmit() {
  if (Number(receivedCaptcha.value) !== expectedCaptcha.value) {
    alert("Tente novamente");
    dialog.value = false;
    resetCaptchaValues();
    return;
  }
  resetCaptchaValues();
  emit("submit");
  dialog.value = false;
}

function open() {
  dialog.value = true;
}

defineExpose({
  open,
});
</script>
