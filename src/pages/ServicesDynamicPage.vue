<template>
  <div class="q-my-lg">
    <q-scroll-area style="height: 80dvh">
      <BlogPost
        v-for="(post, key) in blogPosts"
        :key="key"
        :title="post?.title"
        :text="post?.text"
        :thumb="post?.thumb"
        :thumbAlign="post?.thumb_align"
      />
      <div
        style="display: flex; justify-content: center; vertical-align: middle"
      >
        <q-btn
          v-motion-slide-visible-once-bottom
          :duration="500"
          label="contratar"
          class="text-h6 flex flex-center q-mt-xl"
          rounded
          color="primary"
          @click="handleContact()"
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import BlogPost from "components/BlogPost.vue";
import useServicesPost from "src/composables/UseServicesPost";

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

async function setPost() {
  const response = await getPost();
  blogPosts.value = [
    {
      title: response.title,
      text: response.text,
      thumb: response.thumb,
      thumb_align: response.thumb_align,
    },
  ];
  blogAction.value = { name: response.action };
}

onMounted(async () => {
  setPost();
});
</script>
