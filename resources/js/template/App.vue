<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const routes = router.options.routes;
let drawer = ref(false);
</script>


<template>
  <v-layout>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list v-for="(item, index) in routes" :key="index" class="pa-0">
        <v-list-item :to="item.path">
          <v-icon class="px-3">{{ item.icon }} </v-icon>
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style>
</style>