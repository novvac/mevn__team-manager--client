<template>
  <v-layout class="d-flex justify-center align-center">
    <v-card class="text-center" elevation="0" max-width="500px">
      <v-img
        class="mx-auto mb-5"
        src="@/assets/img/logo.svg"
        alt="logo"
        width="64"
        height="64"
      />

      <h3 class="mb-1">Welcome back!</h3>
      <p class="text-body-2 mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, placeat?</p>

      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </v-layout>
</template>
