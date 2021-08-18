import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
