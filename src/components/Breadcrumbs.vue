<template>
  <q-breadcrumbs style="z-index: 1; font-size: 16px">
    <q-breadcrumbs-el
      v-for="(el, key) in breadcrumbs"
      :key="key"
      :label="el.label"
      :icon="el.icon"
      :to="el.to"
      :disable="!el.active"
      :class="el.active ? 'cursor-pointer' : 'cursor-arrow'"
    />
  </q-breadcrumbs>
</template>

<script setup>
defineOptions({
  name: "DynamicBreadcrumbs",
});
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.cursor-none {
  cursor: default;
}
</style>
