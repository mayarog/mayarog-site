<template>
  <q-page class="text-center">
    <q-scroll-area ref="scrollAreaRef" style="height: 91vh">
      <!-- Frontpage Section -->
      <FrontpageSection />

      <!-- Our Services Section -->
      <ServiceSection />

      <ContactSection />

      <FooterSection />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import FrontpageSection from "src/components/FrontpageSection.vue";
import ServiceSection from "src/components/ServiceSection.vue";
import ContactSection from "src/components/ContactSection.vue";
import FooterSection from "src/components/FooterSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    FrontpageSection,
    ServiceSection,
    ContactSection,
    FooterSection
  },
  setup() {
    const position = ref(300);
    const scrollAreaRef = ref(null);
    return {
      animateScroll() {
        scrollAreaRef.value.setScrollPosition("vertical", position.value, 300);
        position.value = Math.floor(Math.random() * 1001) * 20;
      }
    };
  }
});
</script>

<style>
.custom-background {
  background-image: url("src/assets/mayarog_background3.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
