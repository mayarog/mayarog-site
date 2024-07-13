<template>
  <q-page-container>
    <div
      class="row q-mt-xl footer-bar text-white font-customization"
      v-motion-slide-visible-once-bottom
      :duration="500"
    >
      <div
        class="col-xs-12 col-sm-12 col-md-4 q-mt-xl text-center links-section"
      >
        <p>
          <router-link :to="{ name: 'auth-login' }">
            Área do Cliente
          </router-link>
          | <a @click="useTermsDialog">Termos de Uso</a> |
          <a @click="priacyPolicyDialog">Política de Privacidade</a>
        </p>
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
  </q-page-container>
</template>

<script setup>
import { defineOptions } from "vue";
import { useTermsText, privacyPolicyText } from "src/constants/Texts";
import { useQuasar } from "quasar";

import MayarogLogo from "./MayarogLogo.vue";
import DialogCard from "./DialogCard.vue";

defineOptions({ name: "FooterSection" });

const $q = useQuasar();

function useTermsDialog() {
  $q.dialog({
    component: DialogCard,
    componentProps: {
      title: "Termos e condições de uso do site Mayarog",
      message: useTermsText,
      html: true,
      width: "1000px",
      confirmLabel: "Aceitar",
    },
  });
}
function priacyPolicyDialog() {
  $q.dialog({
    component: DialogCard,
    componentProps: {
      title: "POLÍTICA DE PRIVACIDADE DO SITE MAYAROG",
      message: privacyPolicyText,
      html: true,
      width: "1000px",
      confirmLabel: "Aceitar",
    },
  });
}
</script>

<style>
.footer-bar {
  background-color: #0f1819;
  min-height: 130px;
  height: fit-content;
  padding-bottom: -400px;
}

.mt-n10 {
  margin-top: -20px;
}

.links-section a:hover {
  cursor: pointer;
}

@media only screen and (max-width: 500px) {
  .xs-p-customize {
    padding-top: -40px;
    padding-bottom: 42px;
  }
}
</style>
