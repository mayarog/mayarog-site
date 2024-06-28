<template>
  <q-page-container class="bg-dark text-white text-center">
    <div
      class="row flex flex-center"
      v-motion-slide-visible-once-left
      :duration="500"
    >
      <div class="col-12">
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
      <div
        class="col-12 q-mt-xl"
        v-motion-slide-visible-once-bottom
        :duration="500"
      >
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
