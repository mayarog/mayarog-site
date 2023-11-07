<template>
  <q-page class="text-center">
    <!-- Frontpage Section -->
    <FrontpageSection />

    <!-- Our Services Section -->
    <ServiceSection />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import FrontpageSection from "src/components/FrontpageSection.vue";
import ServiceSection from "src/components/ServiceSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    FrontpageSection,
    ServiceSection
  }
});
</script>

<style>
.custom-background {
  background-image: url("src/assets/mayarog_background.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
