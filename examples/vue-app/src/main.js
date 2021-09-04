import Vue from 'vue';
import App from './App.vue';
import router from './Routes';
import store from './store/index';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
