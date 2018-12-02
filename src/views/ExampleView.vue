<template>
  <v-container fluid grid-list-lg text-md-center>
    <HelloWorld/>
  </v-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'ExampleView',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
</style>
