import Vue from 'vue';
import App from './App.vue';
import router from './Routes';
import store from './store/index';
import vuetify from './plugins/vuetify';
import {Userpilot} from 'userpilot';

Vue.config.productionTip = false


// Initialize Userpilot
console.groupCollapsed('[Userpilot] Initialize')
console.log("Replace {AppToken} with your AppToken");
console.groupEnd();
Userpilot.initialize('{AppToken}');


new Vue({
  vuetify,
  router,
  render: h => h(App), 
  store,
}).$mount('#app')
