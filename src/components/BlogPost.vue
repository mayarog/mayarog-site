<template>
  <div class="row">
    <div class="col-5 justify-start flex-wrap">
      <div
        class="col-12"
        v-motion-slide-visible-once-left
        :duration="500"
        :delay="100"
      >
        <p class="text-h2">{{ props.title }}</p>
      </div>
      <div
        class="col-md-6"
        v-motion-slide-visible-once-left
        :duration="500"
        :delay="200"
      >
        <p v-for="(content, key) in contents" :key="key" class="text-h6">
          {{ content }}
        </p>
      </div>
    </div>
    <div
      v-motion-slide-visible-once-left
      :duration="500"
      :delay="300"
      :class="`col-md-5 justify-center flex items-center
      ${thumbAlign === 'left' ? 'order-first' : 'order-none'}`"
    >
      <q-img
        class="rounded"
        :src="thumb"
        alt="imagem"
        style="width: 400px; height: 400px"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  thumb: String,
  thumbAlign: String,
});

const contents = props.text.split("\n");
</script>
