<template>
  <q-page-container id="contact" class="bg-dark-2 text-primary text-center">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-xl flex flex-center text-center">
          <div class="col-md-6 text-white">
            <h4 class="text-h5" v-motion-slide-visible-once-left :delay="200">
              Pronto para conversar sobre seu projeto? <br /><br />
              Entre em contato conosco!
              <br />
            </h4>
            <small
              class="text-h6"
              v-motion-slide-visible-once-left
              :delay="300"
            >
              Estamos prontos para ouvir suas ideias, responder suas dúvidas e
              botar em prática o seu projeto digital.
              <br />
            </small>
            <p
              class="text-h6 q-py-md"
              v-motion-slide-visible-once-left
              :delay="400"
            >
              Utilize o formulário ao lado para entrar em contato conosco
              através do nosso whatsapp, ou se preferir, envie-nos um email para
              <a
                href="mailto:marcreinan@outlook.com"
                target="_blank"
                class="text-primary"
                style="text-decoration: none"
                >contato@mayarog.com.</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-mx-xl">
          <div class="q-pa-xs">
            <div class="col-md-4">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="form.name"
                label="Nome"
              />
            </div>
          </div>
          <div class="q-pa-xs">
            <div class="col-md-4">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="form.email"
                label="Email"
              />
            </div>
          </div>
          <div class="q-pa-xs">
            <div class="col-md-4">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="form.subject"
                label="Assunto"
              />
            </div>
          </div>
          <div class="q-pa-xs">
            <div class="col-md-12">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="form.message"
                label="Mensagem"
                type="textarea"
              />
              <q-btn
                class="q-my-md q-px-xl"
                @click="sendToWhatsApp()"
                rounded
                color="primary"
                text-color="dark"
                size="16px"
                label="Enviar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function sendToWhatsApp() {
  let message = "Nova mensagem de " + form.name + "\n\n";
  message += "=============================" + "\n";
  message += "*Nome:* " + form.name + "\n";
  message += "*Email:* " + form.email + "\n";
  message += "*Assunto:* " + form.subject + "\n";
  message += "*Mensagem:* " + form.message + "\n\n";
  message += "=============================" + "\n";
  message += "Mensagem enviada através do site Mayarog.com" + "\n";

  const walink = "https://api.whatsapp.com/send";
  const phoneNumber = "+5577991100227";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl =
    walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
  window.open(whatsappUrl, "_blank");
}
</script>
