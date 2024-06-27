<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    class="rounded"
    :full-width="fullWidth ?? false"
    :style="{ width: props.width ?? 'auto' }"
  >
    <q-card
      class="q-dialog-plugin rounded"
      :style="{ width: props.width ?? 'auto' }"
    >
      <q-card-section class="text-h4">
        {{ props.title }}
      </q-card-section>
      <q-card-section v-if="props.html">
        <div v-html="props.message"></div>
      </q-card-section>
      <q-card-section class="text-left" v-if="!props.html">
        {{ props.message }}
      </q-card-section>
      <q-card-actions align="left" class="q-pa-md">
        <q-btn
          rounded
          color="primary"
          :label="props.confirmLabel ?? 'OK'"
          @click="onOKClick"
        />
        <q-btn
          rounded
          color="warning"
          text-color="dark"
          :label="props.cancelLabel ?? 'Cancel'"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from "quasar";

const props = defineProps({
  title: String,
  message: String,
  html: Boolean,
  confirmLabel: String,
  cancelLabel: String,
  fullWidth: Boolean,
  width: String,
});

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();

function onOKClick() {
  onDialogOK();
}

function onCancelClick() {
  onDialogCancel();
}
</script>

<style>
.q-dialog__inner--minimized > div {
  max-width: 1000px;
}
.q-dialog__inner--minimized > div {
  max-height: calc(100vh - 142px);
}
</style>
