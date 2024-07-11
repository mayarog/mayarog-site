<template>
  <q-page>
    <q-scroll-area ref="scrollAreaRef" style="height: 91vh">
      <FrontpageSection id="frontpage" />
      <AboutUsSection id="aboutus" />
      <ServiceSection id="services" />
      <ContactSection />
      <MediasSection id="medias" />
      <FooterSection id="footer" />
    </q-scroll-area>
    <q-page-sticky :offset="[18, 18]">
      <q-btn
        round
        flat
        icon="mdi-arrow-up"
        color="primary"
        @click="animateScroll(0)"
      ></q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

function checkHash() {
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView();
    }
  }
}

onMounted(() => {
  checkHash();
});
</script>
