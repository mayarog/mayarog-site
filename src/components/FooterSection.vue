<template>
  <div
    class="row q-mt-xl footer-bar text-white font-customization"
    v-motion-slide-visible-once-bottom
    :duration="500"
  >
    <div class="col-xs-12 col-sm-12 col-md-4 q-mt-xl text-center">
      <p>Área do Cliente | Termos de Uso | Política de Privacidade</p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 mt-n10 flex justify-center">
      <MayarogLogo size="60" />
    </div>
    <div
      class="col-xs-12 col-sm-12 col-md-4 q-mt-xl q-pr-md text-center xs-p-customize"
    >
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
  min-height: 130px;
  height: fit-content;
}

.mt-n10 {
  margin-top: -20px;
}

@media only screen and (max-width: 500px) {
  .xs-p-customize {
    padding-top: -40px;
    padding-bottom: 22px;
  }
}
</style>
