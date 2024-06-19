<template>
  <q-page-container id="services" class="bg-dark text-white text-center">
    <div class="row flex flex-center" v-motion-slide-visible-once-left>
      <div class="col-12 q-px-lg">
        <h2 class="text-h2 font-customization">
          Somos a <span class="text-primary">Mayarog Web</span>, onde a
          <br class="desktop-only" />
          inovação e a tecnologia se <br class="desktop-only" />
          encontram para transformar a<br class="desktop-only" />
          maneira como as pessoas se <br class="desktop-only" />
          conectam e os negócios <br class="desktop-only" />
          prosperam.
        </h2>
      </div>
      <div class="col-md-6 col-xs-12 col-sm-12 q-px-xl">
        <h1
          class="text-primary text-left q-ma-lg font-customization"
          v-motion-slide-visible-once-left
          :delay="200"
          :duration="700"
        >
          Quem somos
        </h1>
        <p
          class="text-h4 text-left q-ma-lg q-pt-md"
          v-motion-slide-visible-once-left
          :delay="300"
          :duration="700"
        >
          Somos uma startup apaixonada por desenvolvimento e consultoria em
          Soluções WEB, dedicada a impulsionar o sucesso dos nossos clientes por
          meio de soluções digitais personalizadas e eficazes.
        </p>
        <p
          class="text-h4 text-left q-ma-lg"
          v-motion-slide-visible-once-left
          :delay="400"
          :duration="700"
        >
          Na Mayarog, entendemos que cada projeto é único e merece uma abordagem
          personalizada. É por isso que oferecemos uma ampla gama de serviços
          para atender às suas necessidades específicas.
        </p>
      </div>
      <div class="col-6 mobile-hide">
        <q-img
          v-motion-slide-visible-once-right
          :delay="200"
          :duration="700"
          class="rounded"
          rounded
          src="https://media-public.canva.com/l7-i4/MAEFJQl7-i4/1/s2.jpg"
          width="28vw"
          height="28vw"
          style="z-index: 1; min-width: 420px; min-height: 420px"
        />
      </div>
      <div class="col-12">
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
          label="Saiba mais"
        />
      </div>
    </div>
  </q-page-container>
</template>

<style>
.font-customization {
  letter-spacing: 2px;
  font-weight: bold;
}
</style>
