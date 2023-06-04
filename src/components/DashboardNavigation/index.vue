<script lang="ts" setup>
import { NavItemI } from './interfaces';

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
  value: 'projects'
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
  value: 'settings'
}, {
  icon: 'logout',
  title: 'Logout',
  value: 'logout'
}]
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
          >
            <v-icon
              :icon="`mdi-${item.icon}`"
            />
          </v-list-item>
        </template>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer width="256">
    items
  </v-navigation-drawer>
</template>
