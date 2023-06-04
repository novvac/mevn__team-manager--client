<script lang="ts" setup>
import DashboardNavigation from '@/components/DashboardNavigation/index.vue';
</script>

<template>
  <v-layout>
    <DashboardNavigation />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
