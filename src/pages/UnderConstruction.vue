<template>
  <div
    class="fullscreen bg-black text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 20vh">Ops...</div>

      <div class="text-h3" style="opacity: 0.4">
        Essa página está em construção... <br />
        Em breve teremos novidades por aqui ;)
      </div>

      <q-btn
        class="q-mt-xl"
        color="primary"
        text-color="white"
        unelevated
        to="/"
        label="Voltar"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound"
});
</script>
