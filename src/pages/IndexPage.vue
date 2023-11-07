<template>
  <q-page class="text-center">
    <!-- Frontpage Section -->
    <q-page-container class="text-black custom-background">
      <div class="flex flex-center">
        <h1 class="text-h1">Mayarog</h1>
      </div>
      <div class="flex flex-center">
        <h2 class="text-h2">Sistemas web & consultoria em T.I</h2>
      </div>
      <div class="flex flex-center">
        <h4 class="text-h4">
          {{ getRandonSlogan().slogan }}
        </h4>
      </div>
      <!-- Seção de contato do WhatsApp -->
      <div class="q-pa-md flex flex-center">
        <div class="q-gutter-sm">
          <q-btn
            icon="mdi-whatsapp"
            color="primary"
            @click="enviarMensagemWhatsApp"
            label="Contato por WhatsApp"
          />
          <q-btn
            icon="mdi-instagram"
            color="primary"
            @click="irParaInstagram"
            label="Siga-nos no Instagram"
          />
        </div>
      </div>
    </q-page-container>

    <!-- Our Services Section -->
    <q-page-container class="bg-black text-white">
      <div class="q-pa-md flex flex-center">
        <q-col class="col-12">
          <h4 class="text-h5">
            Oferecemos serviços de desenvolvimento e consultoria em T.I <br />
          </h4>
          <small class="text-h6">
            Com foco em produtos e serviços voltados a web, conheça nossos
            serviços:
          </small>
        </q-col>
      </div>
      <div class="row">
        <q-col
          class="col-xs-12 col-sm-12 col-md-4"
          v-for="card in cards"
          :key="card"
        >
          <q-card class="bg-black text-white q-pa-md">
            <q-card-section>
              <q-icon :name="card.icon" color="primary" size="6rem"></q-icon>
              <div class="text-h6 q-my-md">{{ card.title }}</div>
              <div class="text-subtitle2 q-my-sm">
                {{ card.subtitle }}
              </div>
              <q-btn
                class="q-my-md"
                to="/em-construcao"
                rounded
                color="secondary"
                label="Saiba mais"
              />
            </q-card-section>
          </q-card>
        </q-col>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const cards = ref([
      {
        icon: "mdi-application",
        title: "Desenvolvimento Web ou Desktop",
        subtitle:
          "Sistemas personalizados sob medida para ajudar nas metas do seu negócio."
      },
      {
        icon: "mdi-cellphone",
        title: "Desenvolvimento de Aplicativos",
        subtitle:
          "Aplicativos feitos para os principais dispositivos do mercado."
      },
      {
        icon: "mdi-lightbulb",
        title: "Consultoria em Projetos/T.I",
        subtitle:
          "Estamos prontos para te ajudar a tirar o seu projeto do papel!"
      },
      {
        icon: "mdi-cart-plus",
        title: "Lojas Virtuais/E-commerce",
        subtitle: "Venda seus produtos para qualquer parte do mundo!"
      },
      {
        icon: "mdi-check-decagram",
        title: "Redes Sociais",
        subtitle: "Gerenciamento e configuração das principais redes sociais"
      },
      {
        icon: "mdi-wordpress",
        title: "Suporte Wordpress",
        subtitle: "Total suporte para o seu site ou sistema feito em wordpress."
      }
    ]);

    return {
      cards
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
    },
    getRandonSlogan() {
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
  }
});
</script>

<style>
.custom-background {
  background-image: url("src/assets/mayarog_background.jfif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
