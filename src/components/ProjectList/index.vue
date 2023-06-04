<script lang="ts" setup>
import { ref } from 'vue';
import { ProjectListPropsI } from './interfaces';

const props = defineProps<ProjectListPropsI>();
const open = ref(['root'])
</script>

<template>
  <v-list v-model:opened="open">
    <v-list-group value="root" fluid>
      <template v-slot:activator="{ props }">
        <v-list-subheader v-if="title" v-bind="props">
          <v-btn
            variant="plain"
            size="small"
            :ripple="false"
            class="pa-0"
            :prepend-icon="`mdi-chevron-${open.includes('root') ? 'up' : 'down'}`"
          >
            <span>{{ title }}</span>
          </v-btn>
        </v-list-subheader>
      </template>

      <v-list-item
        v-for="(item, index) in props.items"
        :key="`project-${index}`"
        class="mb-1"
        rounded
        :value="item.name"
        height="32"
        min-height="0"
      >
        <v-icon
          size="14"
          :icon="`mdi-${item.icon}`"
          class="mr-2"
          :color="item.color"
        />
        <span class="text-body-2">{{ item.name }}</span>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
