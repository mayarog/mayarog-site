<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" full-width>
    <q-card class="q-dialog-plugin">
      <q-card-section class="text-h4">
        {{ props.title }}
      </q-card-section>
      <q-card-section v-if="props.html">
        <div v-html="props.message"></div>
      </q-card-section>
      <q-card-section class="text-left" v-if="!props.html">
        {{ props.message }}
      </q-card-section>
      <q-card-actions align="right" class="q-pa-md">
        <q-btn
          rounded
          class="q-px-xl"
          color="primary"
          :label="props.confirmLabel ?? 'OK'"
          @click="onOKClick"
        />
        <q-btn
          color="primary"
          flat
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
