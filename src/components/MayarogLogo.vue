<template>
  <div class="flex flex-start">
    <div
      class="flex flex-center"
      :style="{ maxWidth: `${Number(props.size) * 4}px` }"
    >
      <q-img
        class="q-ml-lg"
        alt="Mayarog Web"
        src="~assets/mayarog-logo.png"
        :style="{ width: `${props.size}px`, height: `${props.size}px` }"
      />
      <span
        class="font--playfair-display text-h4"
        :style="{ fontSize: `${Number(props.size) / 2}px` }"
      >
        Mayarog
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: { type: String, default: "80" },
});
</script>
