<template>
  <q-page-container id="services" class="bg-black text-white text-center">
    <div class="flex flex-center">
      <div class="col-12">
        <h4 class="text-h5">
          Oferecemos soluções e consultoria em projetos web <br />
        </h4>
        <small class="text-h6"> Conheça nossos principais serviços: </small>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-4 q-pa-md"
        v-for="(card, index) in cards"
        :key="card"
      >
        <q-card class="bg-dark text-white">
          <q-card-section>
            <q-icon :name="card.icon" color="secondary" size="6rem"></q-icon>
            <div class="text-h6 q-my-md">{{ card.title }}</div>
            <div class="text-subtitle2 q-my-sm">
              {{ card.subtitle }}
            </div>
            <q-btn
              class="q-my-md"
              rounded
              color="primary"
              label="Saiba mais"
              @click="openDialog(index)"
            />
          </q-card-section>
        </q-card>
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
    <div class="flex flex-center">
      <q-btn
        class="q-my-md"
        to="/em-construcao"
        rounded
        block
        color="secondary"
        label="Conheça todos os serviços"
      />
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
        subtitle:
          "Sistemas personalizados para ajudar nas metas do seu negócio."
      },
      {
        icon: "mdi-airplane-landing",
        title: "Landing Pages",
        subtitle: "Direcione o público direto para a sua página exclusiva."
      },
      {
        icon: "mdi-cellphone",
        title: "Desenvolvimento de Aplicativos",
        subtitle: "Aplicativos feitos para os principais dispositivos do mercado."
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
        icon: "mdi-wordpress",
        title: "Suporte Wordpress",
        subtitle: "Total suporte para o seu site ou sistema feito em wordpress."
      }
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

    return {
      cards,
      dialogVisible,
      currentItem,
      openDialog,
    };
  },
});
</script>
