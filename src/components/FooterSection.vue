<template>
  <q-page-container id="contact" class="bg-black text-primary">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-md flex flex-center">
          <div class="col-md-12 text-white">
            <h4 class="text-h4">
              Siga-nos nas Redes Sociais
              <br />
            </h4>
            <small class="text-h6">
              Acompanhe nossas redes sociais para saber mais novidades,
              lançamentos e promoções da Mayarog
            </small>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 self-center">
        <div class="q-pa-md flex flex-center">
          <div class="col-md-12 text-accent">
            <div class="q-pa-sm">
              <q-btn
                size="2em"
                dense
                color="primary"
                round
                icon="mdi-whatsapp"
                class="q-ml-md"
              />
              <q-btn
                size="2em"
                dense
                color="primary"
                round
                icon="mdi-facebook"
                class="q-ml-md"
              />
              <q-btn
                size="2em"
                dense
                color="primary"
                round
                icon="mdi-instagram"
                class="q-ml-md"
              />
              <q-btn
                size="2em"
                dense
                color="primary"
                round
                icon="mdi-email"
                class="q-ml-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 q-pa-md text-white">
        Copyright © 2023 Mayarog - Todos os direitos reservados
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection"
});
</script>
