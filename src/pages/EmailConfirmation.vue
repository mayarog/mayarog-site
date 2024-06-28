<template>
  <q-page padding class="text-center">
    <p class="text-body1">Obrigado por se registrar !</p>
    <p class="text-body1">
      Por favor confirme seu email para finalizar seu cadastro:
      <strong>{{ $route.query.email }}</strong>
    </p>
    <q-btn
      round
      outline
      color="red"
      icon="mail"
      size="lg"
      style="margin: 10px"
      href="https://mail.google.com/mail/u/0/#search/Mayarog+-+Confirmar+Cadastro"
      target="_blank"
    />
  </q-page>
</template>

<script setup></script>
