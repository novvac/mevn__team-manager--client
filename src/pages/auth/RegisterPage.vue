<template>
  <v-text-field
    variant="solo"
    clearable
    prepend-icon="mdi-account"
    flat
    bg-color="grey-lighten-3"
    label="Your login"
    color="primary"
  ></v-text-field>

  <v-text-field
    variant="solo"
    clearable
    prepend-icon="mdi-key"
    flat
    bg-color="grey-lighten-3"
    label="Your password"
    type="password"
    color="primary"
  ></v-text-field>

  <v-text-field
    variant="solo"
    clearable
    prepend-icon="mdi-key"
    flat
    bg-color="grey-lighten-3"
    label="Repeat your password"
    type="password"
    color="primary"
  ></v-text-field>

  <v-btn
    color="primary"
    class="text-none d-block w-100"
    height="48"
    flat
  >
    Sign up
  </v-btn>

  <v-divider class="my-5" />

  <div class="mt-5">
    <p class="d-inline-block text-body-2">
      Masz już konto?
    </p>
    <v-btn
      variant="text"
      class="text-body-2 text-none font-weight-regular ml-2 px-2"
      density="compact"
      color="primary"
    >
      Zaloguj się!
    </v-btn>
  </div>
</template>
