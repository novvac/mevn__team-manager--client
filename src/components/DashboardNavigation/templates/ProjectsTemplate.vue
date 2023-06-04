<script lang="ts" setup>
import { computed } from 'vue';
import ProjectList from '@/components/ProjectList/index.vue';
import { ProjectI } from '@/components/ProjectList/interfaces';

const projects: ProjectI[] = [{
  name: 'Lorem ipsum',
  icon: 'circle-outline',
  color: 'primary',
  flags: {
    favorite: true
  }
}, {
  name: 'Doler sit amet',
  icon: 'square-rounded-outline',
  color: 'success'
}, {
  name: 'Deprecated project',
  icon: `square-rounded-outline`,
  color: 'error',
  flags: {
    archive: true
  }
}];

const allProjects = computed<ProjectI[]>(() => projects.filter((el: ProjectI) => {
  return !el.flags?.archive;
}))
const favoritesProjects = computed<ProjectI[]>(() => projects.filter((el: ProjectI) => {
  return el.flags?.favorite;
}))
const archiveProjects = computed<ProjectI[]>(() => projects.filter((el: ProjectI) => {
  return el.flags?.archive;
}))
</script>

<template>
  <v-row
    no-gutters
    style="max-height: 100%; min-height: 100%;"
    class="flex-column flex-nowrap"
    justify="space-between"
  >
    <v-col
      cols="12"
      class="flex-1-1 overflow-auto mb-7 px-2"
    >
      <ProjectList
        title="Favorites"
        :items="favoritesProjects"
        v-if="favoritesProjects?.length"
      />
      <ProjectList
        title="All projects"
        :items="allProjects"
        v-if="allProjects?.length"
      />
      <ProjectList
        title="Archive"
        :items="archiveProjects"
        v-if="archiveProjects?.length"
      />
    </v-col>

    <v-col cols="12" class="px-2">
      <v-btn
        variant="tonal"
        prepend-icon="mdi-plus"
        class="text-none text-body-2 mx-auto d-flex w-100"
      >
        New Project
      </v-btn>
    </v-col>
  </v-row>
</template>
