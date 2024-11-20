<template>
  <q-page-container padding class="bg-dark">
    <div class="row">
      <!-- Left Column -->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <h1
          class="text-h1 text-primary text-left font-customization q-px-lg"
          v-motion-slide-visible-once-left
          :duration="500"
        >
          Contato
        </h1>
        <template v-for="(text, index) in contactTexts" :key="index">
          <p
            class="text-h4 text-left q-px-lg"
            :class="text.class"
            v-motion-slide-visible-once-left
            :duration="500"
          >
            <span v-html="text.content"></span>
          </p>
        </template>
      </div>

      <!-- Right Column - Contact Form -->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 flex column justify-center">
        <q-form class="row justify-center" ref="contactForm" @submit.prevent="handleSubmit">
          <div class="col-xs-10 col-sm-6 col-md-6 col-lg-6 q-gutter-y-sm">
            <q-input
              rounded
              color="primary"
              outlined
              clearable
              v-model="form.name"
              :rules="rules.name"
              label="Nome *"
            >
              <template #prepend>
                <q-icon name="abc" />
              </template>
            </q-input>

            <EmailInput
              v-model="form.email"
              clearable
              :rules="rules.email"
              label="Email *"
            />

            <q-input
              rounded
              color="primary"
              outlined
              clearable
              v-model="form.subject"
              :rules="rules.subject"
              @update:model-value="form.subject = $event"
              label="Assunto *"
            >
              <template #prepend>
                <q-icon name="abc" />
              </template>
            </q-input>

            <q-select
              rounded
              outlined
              v-model="form.type"
              :options="typeOptions"
              label="Tipo *"
              option-label="text"
              option-value="value"
            >
              <template #prepend>
                <q-icon name="abc" />
              </template>
            </q-select>

            <q-input
              rounded
              color="primary"
              outlined
              v-model="form.message"
              label="Mensagem *"
              type="textarea"
            >
              <template #prepend>
                <q-icon name="abc" />
              </template>
            </q-input>

            <q-btn
              rounded
              color="primary"
              label="Enviar"
              type="submit"
            />

            <SimpleCaptchaDialog
              ref="simpleCaptchaDialog"
              @submit="sentToSupabse"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { ref, reactive } from 'vue';
import EmailInput from './EmailInput.vue';
import SimpleCaptchaDialog from './SimpleCaptchaDialog.vue';
import UseContactsRegister from "src/composables/UseContactsRegister";
const { create } = UseContactsRegister();


const contactForm = ref(null);
const simpleCaptchaDialog = ref(null);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  type: null,
  message: '',
});

const contactTexts = [
  {
    content: 'Pronto para conversar sobre seu projeto? Entre em contato conosco!',
    class: 'q-pt-md q-mb-lg',
  },
  {
    content: 'Estamos prontos para ouvir suas ideias, responder suas dúvidas e colocar em prática o seu projeto digital!',
    class: 'q-mb-xl',
  },
  {
    content: 'Utilize o formulário ao lado para entrar em contato conosco através diretamente em nosso whatsapp, ou se preferir, envie-nos um e-mail para <span class="text-primary">contato@mayarog.com</span>',
    class: 'q-mb-xl',
  },
  {
    content: 'Um de nossos consultores irá te responder o mais breve possível.',
    class: 'q-mb-xl',
  },
];

const typeOptions = [
  { text: 'Novo projeto', value: 'new_project' },
  { text: 'Pedido de suporte', value: 'support_request' },
  { text: 'Pedido de consultoria', value: 'consultancy_request' },
];

const rules = {
  name: [(v) => !!v || 'O nome é obrigatório'],
  email: [(v) => !!v || 'O email é obrigatório'],
  subject: [(v) => !!v || 'O assunto é obrigatório'],
  type: [(v) => !!v || 'O tipo é obrigatório'],
  message: [(v) => !!v || 'A mensagem é obrigatória'],
};

const handleSubmit = async () => {
  try {
    const success = await contactForm.value?.validate();
    if (success) {
      simpleCaptchaDialog.value?.open();
    }
  } catch (error) {
    console.error('Form validation error:', error);
  }
};

const sentToSupabse = async () => {
  const payload = {
    ...form,
    type: form.type.value,
  };
  await create(payload).then(() => {
    // sendToWhatsApp();
    alert('Mensagem enviada com sucesso!');
    contactForm.value?.reset();
  }).catch((error) => {
    console.error('Error sending message:', error);
    alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
  });
};

const sendToWhatsApp = () => {
  if (!form.type) return;

  const message = [
    `Nova mensagem de ${form.name}`,
    '=============================',
    `*Nome:* ${form.name}`,
    `*Email:* ${form.email}`,
    `*Assunto:* ${form.subject}`,
    `*Tipo:* ${form.type.text}`,
    `*Mensagem:* ${form.message}`,
    '=============================',
    'Mensagem enviada através do site Mayarog.com'
  ].join('\n');

  const phoneNumber = '+5577991100227';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
};
</script>
