import Vue from 'vue';
import router from './router';
import store from './store/index';
import App from './App.vue';
import './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
