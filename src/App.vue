<template>
  <v-app>
    <TheNavBar class="d-inline-block elevation-12" />
    <div id="viewContainer" class="fill-height">
      <router-view />
    </div>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavBar from './components/TheNavBar';
import TheFooter from './components/TheFooter';

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica Neue, sans-serif;
  background-color: #f5f6f8;
}
#viewContainer {
  margin-bottom: 50px;
}
</style>
