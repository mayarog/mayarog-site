<template>
  <q-page-container id="contact" class="bg-dark">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <h1
          class="text-h1 text-primary text-left font-customization q-px-lg"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Contato
        </h1>
        <p
          class="text-h4 text-left q-pt-md q-pa-lg q-mb-lg"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Pronto para conversar sobre seu projeto? Entre em contato conosco!
        </p>
        <p
          class="text-h4 text-left q-px-lg q-mb-xl"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Estamos prontos para ouvir suas ideias, responder suas dúvidas e
          colocar em prática o seu projeto digital!
        </p>
        <p
          class="text-h4 text-left q-px-lg q-mb-xl"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Utilize o formulário ao lado para entrar em contato conosco através
          diretamente em nosso whatsapp, ou se preferir, envie-nos um e-mail
          para
          <span style="text-decoration: none" class="text-primary">
            contato@mayarog.com</span
          >
        </p>
        <p
          class="text-h4 text-left q-px-lg q-mb-xl"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Um de nossos consultores irá te responder o mais breve possível.
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 q-mt-xl q-pt-xl">
        <q-form class="q-mx-xl">
          <div class="col">
            <q-input
              rounded
              class="q-pa-md"
              color="primary"
              outlined
              v-model="form.name"
              label="Nome"
            />
          </div>
          <div class="col">
            <q-input
              rounded
              class="q-pa-md"
              color="primary"
              outlined
              v-model="form.email"
              label="Email"
            />
          </div>
          <div class="col">
            <q-input
              rounded
              class="q-pa-md"
              color="primary"
              outlined
              v-model="form.subject"
              label="Assunto"
            />
          </div>
          <div class="col">
            <q-select
              rounded
              outlined
              class="q-pa-md"
              v-model="form.type"
              :options="typeOptions"
              label="Tipo"
              option-label="text"
              option-value="value"
            />
          </div>
          <div class="col">
            <q-input
              rounded
              class="q-pa-md"
              color="primary"
              outlined
              v-model="form.message"
              label="Mensagem"
              type="textarea"
            />
          </div>
          <div class="col flex flex-center">
            <q-btn
              class="q-py-md q-px-xl"
              @click="sendToWhatsApp()"
              rounded
              color="primary"
              size="16px"
              label="Enviar"
            />
          </div>
        </q-form>
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
  type: "",
  message: "",
});

const typeOptions = [
  { text: "Novo projeto", value: "new_project" },
  { text: "Pedido de suporte", value: "suport_request" },
  { text: "Pedido de suporte", value: "suport_request" },
  { text: "Pedido de consultoria", value: "consultancy_request" },
];

function sendToWhatsApp() {
  let message = "Nova mensagem de " + form.name + "\n\n";
  message += "=============================" + "\n";
  message += "*Nome:* " + form.name + "\n";
  message += "*Email:* " + form.email + "\n";
  message += "*Assunto:* " + form.subject + "\n";
  message += "*Tipo:* " + form.type.text + "\n";
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
