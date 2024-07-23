<template>
  <q-page padding>
    <q-scroll-area style="height: 81vh">
      <BlogPost
        v-for="(post, key) in blogPosts"
        :key="key"
        :title="post?.title"
        :text="post?.text"
        :thumb="post?.thumb"
        :thumbAlign="post?.thumb_align"
      />
      <div class="flex justify-center">
        <q-btn
          v-motion-slide-visible-once-bottom
          :duration="500"
          label="contratar"
          class="text-h6 q-px-lg"
          rounded
          color="primary"
          text-color="dark"
          @click="handleContact()"
        />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMeta } from "quasar";

import BlogPost from "components/BlogPost.vue";
import useServicesPost from "src/composables/UseServicesPost";

const emit = defineEmits(["breadcrumbs"]);
const $route = useRoute();
const $router = useRouter();
const { getPost } = useServicesPost();

function handleContact() {
  if (blogAction.value.name !== "") {
    $router.push(blogAction.value);
    return;
  }
  window.location.href = "/#contact";
}

const blogPosts = ref([]);
const blogAction = ref({});
const breadcrumb = ref({});

async function setPost() {
  const response = await getPost($route.name);
  const metaData = {
    title: response.meta_tags.title.content,
    meta: response.meta_tags,
  };

  blogPosts.value = [
    {
      title: response.title,
      text: response.text,
      thumb: response.thumb,
      thumb_align: response.thumb_align,
    },
  ];
  blogAction.value = { name: response.action };
  breadcrumb.value = response.breadcrumb;

  useMeta(metaData);
  emit("breadcrumb", breadcrumb.value);
}

onMounted(async () => {
  setPost();
});
</script>
