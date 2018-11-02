<template>
  <p>{{ message }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: mapState({
    message: state => state.exampleModule.exampleText,
  }),
};
</script>

<style scoped>
</style>
