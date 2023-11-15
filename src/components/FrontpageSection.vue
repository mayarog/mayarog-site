<template>
  <q-page-container
    class="text-black custom-background"
    style="background: radial-gradient(circle, #35ff50 0%, #018813 100%)"
  >
    <div class="flex flex-center">
      <h1 class="text-h1">Mayarog</h1>
    </div>
    <div class="flex flex-center">
      <h2 class="text-h2">Sistemas web & consultoria em T.I</h2>
    </div>
    <div class="flex flex-center">
      <h4 class="text-h4">
        {{ slogan }}
      </h4>
    </div>
    <!-- Seção de contato do WhatsApp -->
    <div class="q-pa-md flex flex-center">
      <div class="q-gutter-sm">
        <q-btn
          icon="mdi-whatsapp"
          color="secondary"
          rounded
          @click="enviarMensagemWhatsApp"
          label="Contato por WhatsApp"
        />
        <q-btn
          icon="mdi-instagram"
          color="secondary"
          rounded
          @click="irParaInstagram"
          label="Siga-nos no Instagram"
        />
      </div>
    </div>
    <div class="q-pa-md flex flex-center">
      <div class="q-gutter-sm">
        <q-btn icon="mdi-arrow-down" color="secondary" round />
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "FrontpageSection",
  setup() {
    function getRandonSlogan() {
      const slogans = [
        {
          slogan:
            "Transformando ideias em soluções digitais para o seu negócio."
        },
        {
          slogan:
            "Sua visão, nossa expertise, sucesso digital garantido para sua empresa."
        },
        {
          slogan: "Construindo o futuro digital, um projeto de cada vez."
        },
        {
          slogan: "A ponte entre sua empresa e a excelência tecnológica."
        },
        {
          slogan: "A ponte entre sua empresa e o mundo digital."
        },
        {
          slogan: "Da estratégia à implementação, a tecnologia é o nosso forte."
        },
        {
          slogan: "Conectando empresas ao sucesso por meio da tecnologia."
        },
        {
          slogan: "Soluções web personalizadas para o seu sucesso online."
        },
        {
          slogan:
            "Ajudamos você a tornar sua ideia em um negócio digital de confiança."
        },
        {
          slogan: "Conectando negócios ao sucesso por meio da tecnologia."
        },
        {
          slogan: "Sistemas web de primeira classe, consultoria de alto nível."
        },
        {
          slogan:
            "Consultoria digital especializada para alavancar os seus negócios."
        },
        {
          slogan: "Conhecimento em tecnologia, excelência em soluções digitais."
        },
        {
          slogan: "Soluções web que inspiram confiança e crescimento."
        },
        {
          slogan: "Te ajudamos a trazer sua empresa para o mundo digital."
        },
        { slogan: "Transformando desafios em oportunidades digitais." },
        { slogan: "Sua visão, nossa missão: tecnologia e sucesso." },
        {
          slogan: "Cresça exponencialmente com nossos serviços de T.I."
        }
      ];

      const randomIndex = Math.floor(Math.random() * slogans.length);
      return slogans[randomIndex];
    }
    const slogan = computed(() => getRandonSlogan().slogan);

    return {
      slogan
    };
  },
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
