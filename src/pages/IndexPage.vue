<template>
  <q-page>
    <q-scroll-area ref="scrollAreaRef" style="height: 91vh">
      <FrontpageSection id="front-page-section" />
      <AboutUsSection id="about-us-section" class="q-pa-lg" />
      <ServiceSection id="service-section" />
      <ContactSection id="contact-section" />
      <FooterSection id="footer-section" />
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
import FooterSection from "src/components/FooterSection.vue";

const scrollAreaRef = ref(null);
function animateScroll(value) {
  scrollAreaRef.value.setScrollPosition("vertical", value, 500);
  position.value = Math.floor(Math.random() * 1001) * 20;
}
</script>
