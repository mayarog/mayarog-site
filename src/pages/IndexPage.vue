<template>
  <q-page>
    <q-page-container>
      <div class="q-pa-md flex flex-center">
        <h1 class="q-mb-md text-h1">Mayarog WEB</h1>
      </div>

      <div class="q-pa-md flex flex-center">
        <q-img
          alt="Mayarog Web"
          src="~assets/mayarog-logo.png"
          class="fixed-center"
          style="width: 200px; height: 200px"
        />
      </div>

      <div class="q-pa-md flex flex-center fixed-bottom">
        <h4 class="text-h4">Sistemas web e Consultoria em T.I.</h4>
      </div>
      <div class="q-pa-md flex flex-center fixed-bottom">
        <!-- Seção de contato do WhatsApp -->
        <div class="q-pa-md flex flex-center">
          <q-btn
            icon="mdi-whatsapp"
            color="green"
            @click="enviarMensagemWhatsApp"
            label="Contato por WhatsApp"
          />
        </div>
        <!-- Seção de contato do Instagram -->
        <div class="q-pa-md flex flex-center">
          <q-btn
            icon="mdi-instagram"
            color="primary"
            @click="irParaInstagram"
            label="Siga-nos no Instagram"
          />
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  methods: {
    irParaInstagram() {
      window.open("https://www.instagram.com/mayarogweb", "_blank");
    },
    enviarMensagemWhatsApp() {
      window.open("https://wa.me/5577991100227", "_blank");
    },
    enviarEmail() {
      window.open("mailto:marcreinan@outlook.com", "_blank");
    }
  }
});
</script>
