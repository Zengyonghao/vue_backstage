import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
const reqAll = requireContext => requireContext.keys().map(requireContext);

const req = require.context('./icons/svg',true,/\.svg$/);
reqAll(req);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app');
