<template>
  <q-page-container
    class="text-white custom-background"
  >
    <div class="row">
      <div class="col q-pa-lg">
        <div class="flex flex-center">
          <div class="q-gutter-sm">
            <h3 class="">Mayarog</h3>
          </div>
        </div>
        <div class="flex flex-center">
          <div class="q-gutter-sm">
            <h4 class="">Soluções & Consultoria web</h4>
          </div>
        </div>
        <div class="flex flex-center">
          <h5 class="text-h5">
            {{ slogan }}
          </h5>
        </div>
        <!-- Seção de contato do WhatsApp -->
        <div class="q-pa-md flex flex-center">
          <div class="q-gutter-sm">
            <q-btn
              icon="mdi-whatsapp"
              color="primary"
              rounded
              @click="enviarMensagemWhatsApp"
              label="Contato por WhatsApp"
            />
            <q-btn
              icon="mdi-instagram"
              color="primary"
              rounded
              @click="irParaInstagram"
              label="Siga-nos no Instagram"
            />
          </div>
        </div>
        <!-- <div class="q-pa-md flex flex-center">
          <div class="q-gutter-sm">
            <q-btn icon="mdi-arrow-down" color="accent" round />
          </div>
        </div> -->
      </div>
      <div class="col">
        <div class="flex flex-center">
          <q-img
          :src="url"
          spinner-color="white"
          class="blurred-border green-shadow"
          style="height: 40vh; max-width: 40vw"
          ></q-img>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

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
    const url = ref('https://picsum.photos/500/300')

    return {
      slogan,
      url
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
<style>
.custom-background {
  background-color: #101728;
  /* background-image: url("src/assets/mayarog_background3.jfif"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.blurred-border {
    position: relative;
    z-index: 1;
    display: block;
    width: 300px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    border-radius: 10px; /* Bordas arredondadas */
}

.blurred-border::before {
    content: '';
    position: absolute;
    top: -10px; /* Ajuste conforme necessário */
    left: -10px; /* Ajuste conforme necessário */
    right: -10px; /* Ajuste conforme necessário */
    bottom: -10px; /* Ajuste conforme necessário */
    z-index: -1;
    border-radius: 10px; /* Mesma borda arredondada */
    background: inherit;
    filter: blur(300px); /* Ajuste o valor do desfoque conforme necessário */
    opacity: 0.6; /* Ajuste a opacidade conforme necessário */
}

.green-shadow {
    position: relative;
    z-index: 1;
    display: block;
    width: 500px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 0 100px 50px rgba(0, 255, 0, 0.8); /* Sombra verde desfocada */
}
</style>