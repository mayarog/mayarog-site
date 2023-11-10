<template>
  <q-page-container id="services" class="bg-black text-white">
    <div class="q-pa-md flex flex-center">
      <div class="col-12">
        <h4 class="text-h5">
          Oferecemos serviços de desenvolvimento e consultoria em T.I <br />
        </h4>
        <small class="text-h6">
          Com foco em produtos e serviços voltados a web, conheça nossos
          serviços:
        </small>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-4 q-pa-md"
        v-for="card in cards"
        :key="card"
      >
        <q-card class="bg-dark text-white">
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
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ServiceSection",
  setup() {
    const cards = ref([
      {
        icon: "mdi-application",
        title: "Desenvolvimento Web ou Desktop",
        subtitle: "Sistemas personalizados para ajudar no seu negócio."
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
  }
});
</script>
