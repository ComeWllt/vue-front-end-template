<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
      <span @click="onRouteClick('')">Vue-App</span>
      &nbsp;
      <span class="caption">{{ version }}</span>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn flat @click="onRouteClick('example')">Example</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { version } from '../../package.json';

export default {
  name: 'TheNavBar',
  computed: {
    version: () => version,
  },
  methods: {
    onRouteClick,
  },
};

function onRouteClick(route) {
  this.$router.push(`/${route}`);
}
</script>

<style scoped>
</style>
