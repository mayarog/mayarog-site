<template>
  <q-page>
    
    <q-scroll-area ref="scrollAreaRef" style="height: 91vh">
      <FrontpageSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
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
        color="accent"
        @click="animateScroll(0)"
      ></q-btn>
    </q-page-sticky>
    <!-- </q-page-scroller> -->
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
    const scrollAreaRef = ref(null);
    return {
      scrollAreaRef,
      animateScroll(value) {
        scrollAreaRef.value.setScrollPosition("vertical", value, 500);
        position.value = Math.floor(Math.random() * 1001) * 20;
      }
    };
  }
});
</script>
