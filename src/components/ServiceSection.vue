<template>
  <q-page-container class="bg-dark text-white text-center">
    <div class="row flex flex-center q-mb-xl">
      <div class="col-12">
        <h1
          class="text-h1 text-primary text-left font-customization q-px-lg"
          v-motion-slide-visible-once-bottom
          :duration="500"
        >
          Nossos Serviços
        </h1>
        <p
          class="text-h4 text-left q-pt-md q-pa-lg q-mb-lg"
          v-motion-slide-visible-once-bottom
          :duration="500"
        >
          Seja para desenvolver um site ou aplicativo sob medida, impulsionar
          suas vendas com uma loja virtual, fortalecer sua presença online com
          estratégias de marketing digital ou criar uma identidade visual
          cativante para sua marca, estamos aqui para ajudar.
        </p>
        <p
          class="text-h4 text-left q-px-lg q-mb-xl"
          v-motion-slide-visible-once-bottom
          :duration="500"
        >
          Explore nossos serviços e descubra como podemos ajudá-lo a alcançar
          seus objetivos digitais. Na Mayarog, o futuro da sua presença online
          começa aqui.
        </p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4"
        v-for="(card, index) in cards"
        :key="card"
        v-motion-slide-visible-once-bottom
        :delay="index * 100"
        :duration="500"
      >
        <q-btn
          class="service-card q-pa-none q-mt-xl q-mx-md"
          rounded
          fab
          unelevated
          color="dark"
          :to="card?.route ?? '/em-construcao'"
        >
          <q-card class="text-white rounded flex flex-center" flat>
            <q-card-section class="q-pt-lg">
              <q-icon :name="card.icon" color="primary" size="6rem" />
              <div class="text-h6 q-my-md">
                <strong>{{ card.title }}</strong>
              </div>
              <div class="text-h6 q-my-sm">
                {{ card.subtitle }}
              </div>
              <div
                style="display: relative"
                class="text-h6 q-ma-lg q-mx-xl q-pa-sm rounded bg-primary"
              >
                <strong>Saiba mais</strong>
              </div>
            </q-card-section>
          </q-card>
        </q-btn>
      </div>
      <q-dialog v-model="dialogVisible">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ currentItem.value.title }}</div>
          </q-card-section>
          <q-card-section>
            <p>{{ currentItem.value.subtitle }}</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Fechar" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div class="flex flex-center q-mt-xl">
      <q-btn
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1.1 }"
        :hovered="{ scale: 1.2 }"
        class="q-my-md q-px-lg"
        to="/em-construcao"
        rounded
        outline
        block
        size="20px"
        color="primary"
        label="Conheça todos os serviços"
      />
    </div>
  </q-page-container>
</template>

<script setup>
import { ref } from "vue";
const cards = ref([
  {
    icon: "mdi-application",
    title: "Desenvolvimento Web ou Desktop",
    subtitle: "Sistemas personalizados para ajudar nas metas do seu negócio.",
    route: { name: "web-or-desktop" },
  },
  {
    icon: "mdi-airplane-landing",
    title: "Landing Pages",
    subtitle: "Direcione o público direto para a sua página exclusiva.",
  },
  {
    icon: "mdi-cellphone",
    title: "Desenvolvimento de Aplicativos",
    subtitle: "Aplicativos feitos para os principais dispositivos do mercado.",
  },
  {
    icon: "mdi-lightbulb",
    title: "Consultoria em Projetos/T.I",
    subtitle: "Estamos prontos para te ajudar a tirar o seu projeto do papel!",
  },
  {
    icon: "mdi-cart-plus",
    title: "Lojas Virtuais/E-commerce",
    subtitle: "Venda seus produtos para qualquer parte do mundo!",
  },
  {
    icon: "mdi-wordpress",
    title: "Suporte Wordpress",
    subtitle: "Total suporte para o seu site ou sistema feito em wordpress.",
  },
  // {
  //   icon: "mdi-check-decagram",
  //   title: "Redes Sociais",
  //   subtitle: "Gerenciamento e configuração das principais redes sociais"
  // },
  // {
  //   icon: "mdi-palette",
  //   title: "Criação de Artes Digitais",
  //   subtitle: "Artes digitais personalizadas utilizando I.A"
  // },
  // {
  //   icon: "mdi-marker-check",
  //   title: "Marketing Digital",
  //   subtitle: "Criação e acompanhamento de campanhas digitais "
  // },
  // {
  //   icon: "mdi-compass-rose",
  //   title: "Identidade visual",
  //   subtitle: "Criação da identidade da sua marca ou empresa"
  // }
]);

const dialogVisible = ref(false);
const currentItem = ref({});

const openDialog = (index) => {
  currentItem.value = cards.value[index];
  dialogVisible.value = true;
};
</script>

<style scoped>
.service-card:hover ::before {
  display: none;
}
.service-card .q-card__section {
  transition: all ease-in-out 0.1s;
}
.service-card:hover .q-card__section {
  background-color: #32b529;
  transition: all ease-in-out 0.1s;
}
.service-card i.q-icon::before {
  transition: all ease-in-out 0.1s;
}
.service-card:hover i.q-icon::before {
  color: #101728;
  transition: all ease-in-out 0.1s;
}
</style>
