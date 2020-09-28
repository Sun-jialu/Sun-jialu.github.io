import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer);

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
