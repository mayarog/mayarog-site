<template>
  <q-page class="justify-center wrap" style="vertical-align: center">
    <div class="flex flex-center">
      <div class="col-12 text-white">
        <h1
          class="text-h1 font-customization text-primary"
          v-motion-slide-visible-once-bottom
          :duration="500"
        >
          Newsletter
        </h1>
      </div>
    </div>
    <div class="col-12 self-center flex flex-center q-mb-md">
      <div class="q-pa-md flex flex-center">
        <p
          class="text-h4 font-customization text-white"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="50"
        >
          Desassinar a newsletter e parar de receber <br />
          lançamentos e promoções da Mayarog
        </p>
      </div>
    </div>
    <div v-motion-slide-visible-once-bottom :duration="500" :delay="100">
      <q-form
        class="row flex justify-center q-gutter-md"
        ref="newsletterForm"
        @submit.prevent="handleNewsletter()"
      >
        <EmailInput
          class="col-xs-10 col-sm-7 col-md-4"
          label="Cancelar assinatura da newsletter"
          placeholder="Digite seu e-mail"
          v-model="email"
          @change="(v) => (email = v)"
          @update:value="email = $event"
        />
        <div>
          <q-btn
            rounded
            fab
            unelevated
            label="Desassinar"
            color="primary"
            text-color="white"
            class="q-px-xl"
            size="sm"
            type="submit"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import UseNewsletter from "src/composables/UseNewsletter";
import EmailInput from "components/EmailInput.vue";

const email = ref("");
const newsletterForm = ref(null);

const { unsubscribe } = UseNewsletter();

async function sendUnsubMail() {
  await api.get(`/newsletter/unsubscribe/mailer/${email.value}`);
}

async function handleNewsletter() {
  newsletterForm.value.validate().then(async (success) => {
    if (!success) {
      alert("Preencha seu email para assinar o newsletter!");
      return;
    }
    try {
      await unsubscribe({ email: email.value })
      await sendUnsubMail(email.value);
    } catch (err) {
      console.log(err.message);
    }
  });
}
</script>
