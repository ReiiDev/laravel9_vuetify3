<script setup>
import { useCounterStore } from "../../mainStore"; // importing of mainstore
import { myOwnPinia } from "./myOwnPinia"; // importing of myOwnPinia

//initialize pinia
const aboutStore = myOwnPinia();
const mainStore = useCounterStore();
</script>

<template>
  <h1>ABOUT</h1>
  <!--------------------------------- FOR MAINSTORE------------------------ -->
  <h3>//MainStore</h3>
  <h3>{{ mainStore.name }}</h3>
  <v-btn @click="mainStore.increment()">ADD 1</v-btn>
  <h3>{{ mainStore.count }}</h3>
  <br />
  <br />

  <!------------------- FOR THIS PAGE STORE----------------------------------- -->
  <h3>//About Store</h3>
  <v-btn @click="aboutStore.showMyName()">{{
    aboutStore.wholeName == "" ? "Show" : "More"
  }}</v-btn>

  <h3>{{ aboutStore.wholeName }}</h3>
</template>



<style>
</style>