<template>
  <div class="q-pa-md">
    <div class="col-12">
      <p class="text-h2">{{ props.title }}</p>
    </div>
    <div class="column flex justify-center">
      <div class="row flex wrap q-gutter-md">
        <div class=""></div>
        <div>
          <p
            v-for="(content, key) in contents"
            v-motion-slide-visible-once-left
            :duration="500"
            :delay="key * 50"
            :key="key"
            :class="[key >= 0 && key < 3 ? 'col-6' : 'col-12', 'text-h6']"
          >
            <q-img
              v-if="key === 0"
              :src="thumb"
              alt="imagem"
              :style="{
                width: '28vw',
                height: '28vw',
                minWidth: '280px',
                minHeight: '280px',
                maxWidth: '420px',
                maxHeight: '420px',
                float: props.thumbAlign,
              }"
              class="rounded col-6 q-mx-lg q-mb-md"
            />
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  text: String,
  thumb: String,
  thumbAlign: {
    type: String,
    default: "left",
  },
});

const contents = computed(() => props.text.split("\n"));
</script>
