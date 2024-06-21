<template>
  <div
    class="row q-mt-xl footer-bar text-white font-customization"
    v-motion-slide-visible-once-bottom
    :duration="500"
  >
    <div class="col-xs-12 col-sm-12 col-md-4 q-mt-xl text-center">
      <p>Área do Cliente | Termos de Uso | Política de Privacidade</p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 q-mb-lg flex justify-center">
      <MayarogLogo size="60" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 q-mt-xl q-pr-md text-center">
      <p>Copyright © 2023 Mayarog - Todos os direitos reservados</p>
    </div>
  </div>
</template>

<script setup>
import MayarogLogo from "./MayarogLogo.vue";
defineOptions({ name: "FooterSection" });
</script>

<style>
.footer-bar {
  background-color: #0f1819;
  height: 130px;
}
</style>
