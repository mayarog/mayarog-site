<template>
  <q-page-container id="contact" class="bg-black text-primary">
    <div class="row bg-black text-primary q-pb-lg text-center">
      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-md">
        <div class="flex flex-center">
          <div class="col-md-12 text-white">
            <h4 class="text-h4">
              Siga-nos nas Redes Sociais
              <br />
            </h4>
            <small class="text-h6">
              Acompanhe nossas redes sociais para saber mais novidades, <br />
              Assine nossa newsletter para receber lançamentos e promoções da
              Mayarog
            </small>
            <div class="col-md-4">
              <q-input
                rounded
                color="primary"
                outlined
                label="Assinar newsletter"
                placeholder="Digite seu e-mail"
              ></q-input>
            </div>
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
      <div
        class="col-xs-12 col-sm-12 col-md-6 q-pa-md text-white text-left bg-accent"
      >
        Área do Cliente | Termos de Uso | Política de Privacidade
      </div>
      <div
        class="col-xs-12 col-sm-12 col-md-6 q-pa-md text-white text-right bg-accent"
      >
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
