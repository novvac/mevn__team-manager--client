<script lang="ts" setup>
import { computed, watch, shallowRef } from 'vue';
import { NavItemI } from './interfaces';

// Navigation
import ProjectsTemplate from './templates/ProjectsTemplate.vue';
import SettingsTemplate from './templates/SettingsTemplate.vue';

const navItems: NavItemI[] = [{
  icon: 'view-dashboard-outline',
  title: 'Dashboard',
  value: 'dashboard'
}, {
  icon: 'message-outline',
  title: 'Messages',
  value: 'messages'
}, {
  icon: 'folder-outline',
  title: 'Projects',
  value: 'projects',
  component: ProjectsTemplate
}, {
  icon: 'bell-outline',
  title: 'Notifications',
  value: 'notifications'
}, {
  icon: 'account-multiple-outline',
  title: 'Friends',
  value: 'friends'
}, {
  icon: 'cog-outline',
  title: 'Settings',
  value: 'settings',
  component: SettingsTemplate
}]

const prevSelectedItem = shallowRef<NavItemI| null>(null);
const selectedItem = shallowRef<NavItemI>(navItems[0]);
const selectedItemHasDrawer = computed<boolean>((): boolean => !!selectedItem.value.component);
const onSelectItem = (item: NavItemI): void => {
  prevSelectedItem.value = selectedItem.value;
  selectedItem.value = item;
}
</script>

<template>
  <v-navigation-drawer
    rail
    rail-width="64"
  >
    <v-avatar
      size="42"
      color="grey-lighten-2"
      class="d-flex mx-auto my-5"
    >
      <v-img alt="logo" src="@/assets/img/logo.svg" />
    </v-avatar>

    <v-list nav>
      <v-tooltip
        v-for="(item, index) in navItems"
        :key="`nav-item-${index}`"
        :text="item.title"
      >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :value="item.value"
            class="text-center"
            :active="selectedItem.value === item.value"
            color="primary"
            @click="onSelectItem(item)"
          >
            <v-icon
              :icon="`mdi-${item.icon}`"
            />
          </v-list-item>
        </template>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer
    width="256"
    class="pa-5"
    v-model="selectedItemHasDrawer"
  >
    <component :is="selectedItem.component ?? prevSelectedItem?.component" />
  </v-navigation-drawer>
</template>
