// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueEnv from '@websanova/vue-env';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueEnv);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
