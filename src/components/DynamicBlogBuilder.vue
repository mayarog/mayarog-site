<template>
  <div
    v-for="(component, componentKey) in props.schema"
    :key="componentKey"
    v-motion-slide-visible-once-bottom
    :duration="500"
    :delay="componentKey * 100"
  >
    <component
      :is="component?.name"
      :class="component?.class"
      :src="component?.src"
      :alt="component?.alt"
      :width="component?.width"
      :height="component?.height"
    >
      <div v-if="component?.content">{{ component?.content }}</div>
      <DynamicBlogBuilder
        v-if="component.children"
        :schema="component.children"
      />
    </component>
  </div>
</template>

<script setup>
import DynamicBlogBuilder from "./DynamicBlogBuilder.vue";

const props = defineProps({
  schema: {
    type: Object || Array,
    required: true,
  },
});
</script>
