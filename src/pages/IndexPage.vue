<template>
  <q-page>
    <q-scroll-area ref="scrollAreaRef" style="height: 91vh">
      <FrontpageSection id="frontpage" />
      <AboutUsSection id="aboutus" />
      <ServiceSection id="services" />
      <ContactSection id="contact" />
      <MediasSection id="medias" />
      <FooterSection id="footer" />
    </q-scroll-area>
    <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    > -->
    <q-page-sticky
      shrink
      position="bottom-right"
      :offset="[18, 18]"
      :scroll-offset="1500"
    >
      <q-btn
        fab
        icon="mdi-arrow-up"
        color="primary"
        class="q-mb-sm"
        @click="animateScroll(0)"
      ></q-btn>
    </q-page-sticky>
    <!-- </q-page-scroller> -->
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AboutUsSection from "src/components/AboutUsSection.vue";
import FrontpageSection from "src/components/FrontpageSection.vue";
import ServiceSection from "src/components/ServiceSection.vue";
import ContactSection from "src/components/ContactSection.vue";
import MediasSection from "src/components/MediasSection.vue";
import FooterSection from "src/components/FooterSection.vue";

const scrollAreaRef = ref(null);
function animateScroll(value) {
  scrollAreaRef.value.setScrollPosition("vertical", value, 500);
  position.value = Math.floor(Math.random() * 1001) * 20;
}
</script>
