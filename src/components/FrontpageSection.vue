<script setup>
import { computed, ref } from "vue";

function getRandonSlogan() {
  const slogans = [
    {
      slogan: "Transformando ideias em soluções digitais para o seu negócio.",
    },
    {
      slogan:
        "Sua visão, nossa expertise, sucesso digital garantido para sua empresa.",
    },
    {
      slogan: "Construindo o futuro digital, um projeto de cada vez.",
    },
    {
      slogan: "A ponte entre sua empresa e a excelência tecnológica.",
    },
    {
      slogan: "A ponte entre sua empresa e o mundo digital.",
    },
    {
      slogan: "Da estratégia à implementação, a tecnologia é o nosso forte.",
    },
    {
      slogan: "Conectando empresas ao sucesso por meio da tecnologia.",
    },
    {
      slogan: "Soluções web personalizadas para o seu sucesso online.",
    },
    {
      slogan:
        "Ajudamos você a tornar sua ideia em um negócio digital de confiança.",
    },
    {
      slogan: "Conectando negócios ao sucesso por meio da tecnologia.",
    },
    {
      slogan: "Sistemas web de primeira classe, consultoria de alto nível.",
    },
    {
      slogan:
        "Consultoria digital especializada para alavancar os seus negócios.",
    },
    {
      slogan: "Conhecimento em tecnologia, excelência em soluções digitais.",
    },
    {
      slogan: "Soluções web que inspiram confiança e crescimento.",
    },
    {
      slogan: "Te ajudamos a trazer sua empresa para o mundo digital.",
    },
    { slogan: "Transformando desafios em oportunidades digitais." },
    { slogan: "Sua visão, nossa missão: tecnologia e sucesso." },
    {
      slogan: "Cresça exponencialmente com nossos serviços de T.I.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * slogans.length);
  return slogans[randomIndex];
}
const slogan = computed(() => getRandonSlogan().slogan);
// const url = ref("https://picsum.photos/1024/768");
// const slide = ref("first");

function toInstagram() {
  window.open("https://www.instagram.com/mayarogweb", "_blank");
}
function sendWhatsappMessage() {
  window.open("https://wa.me/5577991100227", "_blank");
}
function sendEmail() {
  window.open("mailto:marcreinan@outlook.com", "_blank");
}
</script>

<template>
  <!-- <q-carousel
      animated
      arrows
      autoplay
      infinite
      navigation
      v-model="slide"
      class="text-white"
    >
      <q-carousel-slide name="first" :img-src="url">
        <div class="absolute-bottom custom-caption q-pl-xl q-pb-xl">
          <div class="text-h2">Soluções Web</div>
          <div class="text-subtitle1">Te ajudamos a trazer sua empresa para o mundo digital.</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" :img-src="url">
        <div class="absolute-bottom custom-caption q-pl-xl q-pb-xl">
          <div class="text-h2">Consultoria em T.I</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" :img-src="url">
        <div class="absolute-bottom custom-caption q-pl-xl q-pb-xl">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel> -->
  <div class="row bg-dark q-pt-xl">
    <div class="col-lg-6 col-sm-12">
      <div class="col q-pa-lg">
        <div class="flex flex-start q-ml-sm">
          <div
            class="q-gutter-xs"
            v-motion-slide-visible-once-left
            :duration="700"
          >
            <h1 class="text-h1 text-white">
              Soluções Web &<br class="mobile-hide" />
              Consultoria em T.I
            </h1>
          </div>
        </div>
        <div
          class="flex flex-start q-ml-md"
          v-motion-fade
          :delay="200"
          :duration="700"
        >
          <h4 class="text-h4 text-white">
            {{ slogan }}
          </h4>
        </div>
        <div class="flex flex-center" :duration="700">
          <q-btn
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1.1 }"
            :hovered="{ scale: 1.2 }"
            size="22px"
            class="q-px-lg q-py-sm q-ml-lg q-mx-md"
            rounded
            color="primary"
            text-color="dark"
            label="Contato"
          />
          <!-- <div class="q-gutter-sm">
                <q-btn
                  icon="mdi-whatsapp"
                  color="primary"
                  rounded
                  @click="sendWhatsappMessage"
                  label="Contato por WhatsApp"
                />
                <q-btn
                  icon="mdi-instagram"
                  color="primary"
                  rounded
                  @click="toInstagram"
                  label="Siga-nos no Instagram"
                />
              </div> -->
        </div>
      </div>
    </div>
    <div class="mobile-hide col-md-6 col-xs-12 flex flex-center">
      <q-img
        v-motion-slide-visible-once-right
        :delay="200"
        :duration="700"
        class="rounded"
        rounded
        src="https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg"
        width="24vw"
        height="24vw"
        style="z-index: 1; min-width: 420px; min-height: 420px"
      />
      <div class="back-highlight rounded" v-motion-fade :delay="700"></div>
    </div>
  </div>
</template>

<style>
.custom-background {
  /*background-color: #101728;*/
  background-image: url("src/assets/mayarog_background3.jfif");
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
  content: "";
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

.back-highlight {
  position: absolute;
  width: 24vw;
  height: 24vw;
  min-width: 420px;
  min-height: 420px;
  background-color: #01bf63;
  filter: blur(36px);
}
</style>
