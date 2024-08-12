<template>
  <q-page padding>
    <q-scroll-area style="height: 81vh">
      <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4"
        v-for="(card, index) in cards"
        :key="card"
        v-motion-slide-visible-once-bottom
        :delay="index * 50"
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
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref,onMounted } from "vue";

const emit = defineEmits(["breadcrumbs"]);
const breadcrumb = ref([
  {
    "to": "/",
    "icon": "home",
    "label": "Home",
    "active": true
  },
  {
    "to": "/#servicos",
    "icon": "widgets",
    "label": "Serviços",
    "active": false
  },
  {
    "to": "",
    "icon": "widgets",
    "label": "Todos os Serviços",
    "active": false
  }
]);

const cards = ref([
  {
    icon: "mdi-application",
    title: "Desenvolvimento Web ou Desktop",
    subtitle: "Sistemas personalizados para ajudar nas metas do seu negócio.",
    route: { name: "web-or-desktop" },
  },
  // {
  //   icon: "mdi-airplane-landing",
  //   title: "Landing Pages",
  //   subtitle: "Direcione o público direto para a sua página exclusiva.",
  //   route: { name: "landing-pages" },
  // },
  {
    icon: "mdi-cellphone",
    title: "Desenvolvimento de Aplicativos",
    subtitle: "Aplicativos feitos para os principais dispositivos do mercado.",
    route: { name: "mobile-development" },
  },
  // {
  //   icon: "mdi-lightbulb",
  //   title: "Consultoria em Projetos/T.I",
  //   subtitle: "Estamos prontos para te ajudar a tirar o seu projeto do papel!",
  //   route: { name: "consulting-ti" },
  // },
  // {
  //   icon: "mdi-cart-plus",
  //   title: "Lojas Virtuais/E-commerce",
  //   subtitle: "Venda seus produtos para qualquer parte do mundo!",
  //   route: { name: "e-comerce" },
  // },
  {
    icon: "mdi-wordpress",
    title: "Suporte Wordpress",
    subtitle: "Total suporte para o seu site ou sistema feito em wordpress.",
    route: { name: "wordpress-support" },
  },
  {
    icon: "mdi-check-decagram",
    title: "Administração de Redes Sociais",
    subtitle: "Gerenciamento e configuração das principais redes sociais",
    route: { name: "social-media-administration" },
  },
  {
    icon: "mdi-palette",
    title: "Criação de Logo Marcas",
    subtitle: "Criação de logo marcas personalizadas para a sua empresa",
    route: { name: "logo-creation" },
  },
  {
    icon: "mdi-marker-check",
    title: "Marketing Digital",
    subtitle: "Criação e acompanhamento de campanhas digitais",
    route: { name: "digital-marketing" }
  },
  {
    icon: "mdi-palette",
    title: "Criação de Artes Digitais",
    subtitle: "Criação de artes personalizadas utilizando I.A",
    route: { name: "digital-arts" },
  },
  {
    icon: "mdi-compass-rose",
    title: "Identidade visual",
    subtitle: "Criação da identidade da sua marca ou empresa",
    route: { name: "visual-identity" }
  },
  {
    icon: "mdi-image-edit",
    title: "Edição de Imagem",
    subtitle: "Edição de fotos e imagens para redes sociais etc",
    route: { name: "image-edition" }
  },
  {
    icon: "mdi-movie-edit",
    title: "Edição de Video",
    subtitle: "Edição de videos e videos curtos para TikTok, Youtube etc",
    route: { name: "video-edition" }
  }
]);

// async function setPost() {
//   const response = await getPost($route.name);

//   blogPosts.value = [
//     {
//       title: response.title,
//       text: response.text,
//       thumb: response.thumb,
//       thumb_align: response.thumb_align,
//     },
//   ];
//   blogAction.value = { name: response.action };
//   breadcrumb.value = response.breadcrumb;
// }

onMounted(async () => {
  emit("breadcrumb", breadcrumb.value);
});
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
