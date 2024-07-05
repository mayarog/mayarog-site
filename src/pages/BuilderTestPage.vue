<template>
  <q-page padding>
    <DynamicBlogBuilder :schema="schema" />
  </q-page>
</template>

<script setup>
import DynamicBlogBuilder from "components/DynamicBlogBuilder.vue";
const schema = [
  {
    name: "p",
    content: "Hello!",
    class: "text-h4",
  },
  {
    name: "p",
    content: "gvjhvjhvjhvjhv!",
    class: "text-h4",
  },
  {
    name: "p",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    class: "text-body1",
  },
  {
    name: "p",
    content: "obrigado!",
    class: "",
  },
  {
    name: "div",
    class: "row",
    children: [
      {
        name: "img",
        src: "src/assets/mayarog-logo.png",
        class: "col-6",
        width: "100",
        height: "100",
      },
      {
        name: "img",
        src: "src/assets/mayarog-logo.png",
        class: "col-12",
        width: "100",
        height: "100",
      },
    ],
  },
];
</script>
