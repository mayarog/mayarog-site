<template>
  <q-page-container id="contact" class="bg-warning text-primary text-center">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-md flex flex-center">
          <div class="col-md-6 text-accent">
            <h4 class="text-h5">
              Pronto para conversar sobre seu projeto? Entre em contato conosco!
              <br />
            </h4>
            <small class="text-h6">
              Estamos prontos para ouvir suas ideias, responder suas dúvidas e
              botar em prática o seu projeto digital
            </small>
            <br />
            <p class="text-subtitle q-pa-md">
              Utilize o formulário ao lado para entrar em contato conosco
              através do nosso whatsapp, ou se preferir, envie-nos um email para
              <span class="text-primary">contato@mayarog.com</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-md">
          <div class="q-pa-xs">
            <div class="col-md-4">
              <q-input
                rounded
                color="primary"
                outlined
                v-model="form.name"
                label="Nome"
              ></q-input>
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
              ></q-input>
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
              ></q-input>
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
              ></q-input>
              <q-btn
                class="q-my-md"
                @click="sendToWhatsApp()"
                rounded
                color="primary"
                label="Enviar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactSection",
  setup() {
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    function sendToWhatsApp() {
      var message = "Nova mensagem de " + form.value.name + "\n\n";
      message += "=============================" + "\n";
      message += "*Nome:* " + form.value.name + "\n";
      message += "*Email:* " + form.value.email + "\n";
      message += "*Assunto:* " + form.value.subject + "\n";
      message += "*Mensagem:* " + form.value.message + "\n\n";
      message += "=============================" + "\n";
      message += "Mensagem enviada através do site Mayarog.com" + "\n";

      var walink = "https://api.whatsapp.com/send",
        phoneNumber = "+5577991100227";

      var encodedMessage = encodeURIComponent(message);
      var whatsappUrl =
        walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
      window.open(whatsappUrl, "_blank");
    }

    return { form, sendToWhatsApp };
  }
});
</script>
